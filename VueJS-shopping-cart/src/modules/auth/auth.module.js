export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

import Vue from 'vue'

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user'))
};

const mutations = {
  [SIGN_IN]( state, user ) {
    console.log('signed in!!!!!');
    state.isLoggedIn = true;
    state.user = user;
  },
  [SIGN_OUT]( state ) {
    state.isLoggedIn = false;
    state.user = null;
  }
}

const actions = {
  signin({commit}, {username, password} ) {
    // return is here just so that the signin component will get a promise for a .then and .catch asynchronously
    return Vue.http.post('http://localhost:3003/login', {username: username, password: password} )
      .then(res => res.json())
      .then(res => {
        commit(SIGN_IN, res.user);
        console.log('store', state.user, res);
        return (res);
      })
  },
  signup({commit}, user) {
    return Vue.http.post('http://localhost:3003/data/user', user )    
      .then(res => res.json())
      .then(res => {
        commit(SIGN_IN, res.user);
        console.log('store', state.user, res);
        return (res);
      // })
      })
  }
}
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
