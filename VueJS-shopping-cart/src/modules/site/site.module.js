export const DELETE_COMP = 'store/DELETE_COMP';
export const ADD_COMPONENT = 'store/ADD_COMPONENT';
export const EDIT_COMP = 'store/EDIT_COMP';
export const GET_SITE = 'store/GET_SITE';

import Vue from 'vue';
import templates from '../../interface/comp.templates';

const state = {

  site: {
   _id: null,
   name: '',
   url: '',
   isPublished: false,
   comps: [{
     name: '',
     type: 'header-comp',
     props: {
           heading: 'Hi, I\'m Photon, another fine little freebie from Accumsan',
           subHeading: 'feugiat mi commodo erat lorem ipsum, sed magna lobortis feugiat sapien sed etiam volutpat accumsan.',
           buttonText: 'Make this button whatever you want!'
         }
   }]
  },
  currEdit: {}
}

const actions = {
  // need to figure out what to do with the store. seems like user in needed in both modules and this currUser variable is only a bandade
  getSite ({ commit }) {
    let currUser = JSON.parse(localStorage.getItem('user'));
    Vue.http.post('http://localhost:3003/site', {owner: currUser.username})
      .then(res => res.json())
      .then(site => {
        console.log('site module', site);
        commit(GET_SITE, site);
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
  }
}

const mutations = {
  [GET_SITE](state, site) {
    // when we switch to multiple sites per user we need to adress this [0]
    state.site = site[0];
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
        }
}
const getters = {
        // heading: state => state.comps.props.heading
        getComps: state => state.site.comps,
        getCompEdit: state => state.currEdit
    }

export default {
  state,
  getters,
  actions,
  mutations
}