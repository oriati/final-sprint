export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

import Vue from 'vue'

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user'))
};

const mutations = {
  [SIGN_IN]( state, user ) {
    state.isLoggedIn = true;
    state.user = user;
  },
  [SIGN_OUT]( state ) {
    state.isLoggedIn = false;
    state.user = null;
  }
}

const actions = {
  signin({commit}, {email, password} ) {
    // return is here just so that the signin component will get a promise for a .then and .catch asynchronously
    return Vue.http.post('http://localhost:3003/login', {username: email, pass: password} )
    // Vue.http.post('http://localhost:3003/login', {username: email, pass: password} )
      .then(res => res.json())
      .then(({token, user, role}) => {
        commit(SIGN_IN, user);
        console.log('store', state.user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        // return (token, user);
      })
  }
};
const getters = {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
};

export default {
  state,
  getters,
  actions,
  mutations
}
