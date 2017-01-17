import Vue from 'vue';

/**
 *
 * @param email
 * @param password
 * @returns {Promise}
 */
function signin( {email,password} ) {
  return Vue.http.post('http://localhost:3003/login', {username: email, pass: password} )
    .then(res => res.json())
    .then(({token, user, role}) => {
      console.log('Signedin user:', user, role);
      setSession(token, user, role);
      return user;
    })
}
/**
 *
 * @param email
 * @param password
 */

function signup(user) {
  const token = 'JWT';
  return new Promise(resolve => {
    resolve({
      token
    });
    setSession(user, token);
  });
}

function setSession(user, token) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  // localStorage.setItem('role', user.role);
}

/**
 * Remove session
 */
function signout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('role');
}

/**
 *
 * @returns {boolean}
 */
function isLoggedIn() {
  return !!localStorage.getItem('token');
}

/**
 *
 * @param next
 */
function protectRoute( next ) {
  if( isLoggedIn() ) {
    next();
  } else {
    next(false);
  }
}

export default {
  signin,
  signup,
  signout,
  setSession,
  isLoggedIn,
  protectRoute,
}
// function signinDummy( { email, password } ) {
//   return new Promise(( resolve, reject ) => {
//     if( password === '123456' ) {
//       const token = 'JWT';
//       resolve({
//         token
//       });
//       setSession(token);
//     } else {
//       reject({
//         error: 'Email/Password not valid'
//       });
//     }
//   });
// }

