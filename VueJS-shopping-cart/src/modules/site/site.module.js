export const DELETE_COMP = 'store/DELETE_COMP';
export const ADD_COMPONENT = 'store/ADD_COMPONENT';
export const EDIT_COMP = 'store/EDIT_COMP';
export const GET_SITES = 'store/GET_SITE';
export const SELECT_SITE = 'store/SELECT_SITE';
export const ADD_SITE = 'store/ADD_SITE';

import Vue from 'vue';
import templates from '../../interface/comp.templates';

const state = {
  currEdit: {},
  sites: [],
  site: {},
}

const actions = {
  // need to figure out what to do with the store. seems like user in needed in both modules and this currUser variable is only a bandade
  getSites ({ commit }) {
    let currUser = JSON.parse(localStorage.getItem('user'));
    Vue.http.post('http://localhost:3003/site', {owner: currUser.username})
      .then(res => res.json())
      .then(sites => {
        // console.log('site module', sites);
        commit(GET_SITES, sites);
      })
  },
  deleteComp({commit}, index) {
    commit(DELETE_COMP, { index })
    console.log('commiting delete- comp ', { index });
  },
  addComponent({commit}, addedComponent) {
          console.log('component in actions:', addedComponent)
  commit(ADD_COMPONENT, addedComponent);
  },
  editComp({commit}, index, elements) {
          console.log('editComp in actions:', index, elements)
    commit(EDIT_COMP, index, elements);
  },
  createSite({commit}, newSite) {
    let currUser = JSON.parse(localStorage.getItem('user'));
    Vue.http.post('http://localhost:3003/data/site', {name: newSite.name, url: newSite.url, owner: currUser.username,isPublished: false, comps: []})
      .then(res => res.json())
      .then(site => {
        commit(ADD_SITE, site)
      })
      }
}


const mutations = {
  [GET_SITES](state, sites) {
    // when we switch to multiple sites per user we need to adress this [0]
    state.sites = sites;
  },
  [DELETE_COMP](state, {index}) {
    console.log('deleting component ', index);
    state.site.comps.splice(index, 1 );
  },
  [EDIT_COMP](state, {index, elements}) {
    console.log('component to edit:', index, elements);
    state.currEdit = elements;
    console.log('state.currEdit', state.currEdit);
  },

  [ADD_COMPONENT]( state, addedComponent ){
        // console.log('mutation:', newComp);
        console.log('addedComponent:', addedComponent);
        // console.log('compsTemplatesInterfaces[newComp]', templates.compsTemplatesInterfaces[newComp]);
            state.site.comps.splice(addedComponent.index+1,0,{
                name: '',
                type: addedComponent.compType, 
                props: addedComponent.newComp
            })
        },
  
  [SELECT_SITE](state, index) {
    state.site = state.sites[index];
    // not sure if this part is needed but it stores the index of the site in the the sites array in the site object
    state.site.index = index;
    console.log('selected site', state.site);
  },

  [ADD_SITE](state, site) {
    state.sites.push(site);
    console.log('sites after push', state.sites);
  }

}
const getters = {
        // heading: state => state.comps.props.heading
        getComps: state => state.site.comps,
        getCompEdit: state => state.currEdit,
        getSites: state => state.sites,
    }

export default {
  state,
  getters,
  actions,
  mutations
}