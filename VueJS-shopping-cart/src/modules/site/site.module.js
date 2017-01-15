import Vue from 'vue';
export const GET_SITE = 'store/GET_SITE';

const state = {
  site: {}
}

const actions = {
  getSite ({ commit }) {
    Vue.http.get('http://localhost:3003/data/site')
      .then(res => res.json())
      .then(site => {
        // console.log('site', site);
        commit(GET_SITE, site);
      })
      }
}

const mutations = {
  [GET_SITE](state, site) {
    // console.log('goob',site);
    state.site = site[0];
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