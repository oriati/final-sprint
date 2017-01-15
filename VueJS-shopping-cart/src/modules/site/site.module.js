import Vue from 'vue';
export const GET_SITE = 'store/GET_SITE';

const state = {
  site: {}
}

const actions = {
  // need to figure out what to do with the store. seems like user in needed in both modules and this currUser variable is only a bandade
  getSite ({ commit }) {
    let currUser = JSON.parse(localStorage.getItem('user'));
    Vue.http.post('http://localhost:3003/site', {owner: currUser.username})
      .then(res => res.json())
      .then(site => {
        console.log('site', site);
        commit(GET_SITE, site);
      })
      }
}

const mutations = {
  [GET_SITE](state, site) {
    console.log('goob',site);
    state.site = site;
  }
}

const getters = {
        // heading: state => state.comps.props.heading
        getComps: state => state.site.comps
    }

export default {
  state,
  getters,
  actions,
  mutations
}