var express = require('express');

var port = process.env.PORT || 5000;


app = express();
app.use('/', express.static(__dirname));

 /**
  * your server here
  */

app.use('/*', express.static(__dirname));

app.listen(port, function () {
  console.log('server started ' + port);
});
