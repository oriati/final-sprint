// Minimal Simple REST API Handler (With MongoDB and Socket.io)
// Plus support for simple login and session
// Plus support for file upload
// Author: Yaron Biton misterBIT.co.il

"use strict";
const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongodb = require('mongodb')

const clientSessions = require("client-sessions");

var port = process.env.PORT || 3003;
var mongoUrl = process.env.PORT ? 'mongodb://twixapp:misterbit@ds117889.mlab.com:17889/final-sprint' : 'mongodb://localhost:27017/final-sprint';

const app = express();
app.use('/', express.static(__dirname));

var corsOptions = {
  origin: /http:\/\/localhost:\d+/,
  credentials: true
};


app.use(express.static('uploads'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(clientSessions({
	cookieName: 'session',
	secret: 'C0d1ng 1s fun 1f y0u kn0w h0w', // set this to a long random string!
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000,
}));

const http = require('http').Server(app);


function dbConnect() {

	return new Promise((resolve, reject) => {
		// Connection URL
		var url = 'mongodb://localhost:27017/final-sprint';
		// Use connect method to connect to the Server
		mongodb.MongoClient.connect(mongoUrl, function (err, db) {
			if (err) {
				cl('Cannot connect to DB', err)
				reject(err);
			}
			else {
				//cl("Connected to DB");
				resolve(db);
			}
		});
	});
}

// GETs a list
app.get('/data/:objType', function (req, res) {
	const objType = req.params.objType;
	dbConnect().then((db) => {
		const collection = db.collection(objType);

		collection.find({}).toArray((err, objs) => {
			if (err) {
				cl('Cannot get you a list of ', err)
				res.json(404, {error: 'not found'})
			} else {
				cl("Returning list of " + objs.length + " " + objType + "s");
				res.json(objs);
			}
			db.close();
		});
	});
});

// GETs a single
app.get('/data/:objType/:id', function (req, res) {
	const objType = req.params.objType;
	const objId = req.params.id;
	cl(`Getting you an ${objType} with id: ${objId}`);
	dbConnect()
		.then((db) => {
			const collection = db.collection(objType);
			let	_id = new mongodb.ObjectID(objId);
			collection.find({_id: _id}).toArray((err, objs) => {
						if (err) {
							cl('Cannot get you that ', err)
							res.json(404, {error: 'not found'})
						} else {
							cl("Returning a single " + objType);
							res.json(objs[0]);
						}
						db.close();
					});
		});
});

// DELETE
app.delete('/data/:objType/:id', function (req, res) {
	const objType = req.params.objType;
	const objId = req.params.id;
	cl(`Requested to DELETE the ${objType} with id: ${objId}`);
	dbConnect().then((db) => {
		const collection = db.collection(objType);
		collection.deleteOne({_id: new mongodb.ObjectID(objId)}, (err, result) => {
			if (err) {
				cl('Cannot Delete', err)
				res.json(500, {error: 'Delete failed'})
			} else {
				cl("Deleted", result);
				res.json({});
			}
			db.close();
		});

	});


});

// POST - adds 
app.post('/data/:objType', function (req, res) {
	const objType = req.params.objType;
	cl("POST for " + objType);
	const obj = req.body;
	delete obj._id;
	dbConnect().then((db) => {
		const collection = db.collection(objType);
		collection.insert(obj, (err, result) => {
			if (obj.password) delete obj.password;	// deleting objects password if theres any
			if (err) {
				cl(`Couldnt insert a new ${objType}`, err)
				res.json(500, {error: 'Failed to add'})
			} else {
				cl(objType + " added");
				res.json(obj);
				db.close();
			}
		});
	});

});

// PUT - updates (deleting/adding a component)
app.put('/data/:objType/:id',  function (req, res) {
	const objType 	= req.params.objType;
	const objId 	= req.params.id;
	const newObj 	= req.body;
    if (newObj._id && typeof newObj._id === 'string') newObj._id = new mongodb.ObjectID(newObj._id);
	dbConnect().then((db) => {
		const collection = db.collection(objType);
		collection.updateOne({ _id:  new mongodb.ObjectID(objId)}, newObj,
		 (err, result) => {
			if (err) {
				cl('Cannot Update', err)
				res.json(500, { error: 'Update failed' })
			} else {
				res.json(newObj);
			}
			db.close();
		});
	});
});


app.post('/login', function (req, res) {
	dbConnect().then((db) => {
		db.collection('user').findOne({username: req.body.username, password: req.body.password}, function (err, user) {
			if (user) {
				cl('Login Succesful');
                delete user.password;
				req.session.user = user;  //refresh the session value
				res.json({token: 'Beareloginr: puk115th@b@5t', user, role : user.role});
			} else {
				cl('Login NOT Succesful');
				req.session.user = null;
				res.json(403, { error: 'Site Retrieval failed' })
			}
		});
	});
});
app.post('/site', function (req, res) {
	dbConnect().then((db) => {
		// returns an array of sites from site collection based on owner
		db.collection('site').find({owner: req.body.owner}).toArray((err, site) => {
			if (err) {
				cl('Site Retrieval NOT Succesful');
				req.session.site = null;
				res.json(403, { error: 'Site Retrieval failed' })
			} else {
				cl('Site Retrieval Succesful');
				req.session.site = site;  //refresh the session value
				res.json(site);
			}
		});
	});
});
			
app.get('/logout', function (req, res) {
	req.session.reset();
	res.end('Loggedout');
});

function requireLogin(req, res, next) {
	if (!req.session.user) {
		cl('Login Required');
		res.json(403, {error: 'Please Login'})
	} else {
		next();
	}
};
app.get('/protected', requireLogin, function (req, res) {
	res.end('User is loggedin, return some data');
});



// Some small time utility functions
function cl(...params) {
	console.log.apply(console, params);
}
app.use('/*', express.static(__dirname));

// Kickup our server 
// Note: app.listen will not work with cors and the socket
// app.listen(3003, function () {
http.listen(port, function () {
	// console.log(`misterREST server is ready at ${baseUrl}`);
	// console.log(`GET (list): \t\t ${baseUrl}/{entity}`);
	// console.log(`GET (single): \t\t ${baseUrl}/{entity}/{id}`);
	// console.log(`DELETE: \t\t ${baseUrl}/{entity}/{id}`);
	// console.log(`PUT (update): \t\t ${baseUrl}/{entity}/{id}`);
	// console.log(`POST (add): \t\t ${baseUrl}/{entity}`);
});