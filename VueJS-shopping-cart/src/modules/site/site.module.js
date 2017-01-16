export const DELETE_COMP = 'store/DELETE_COMP';
export const ADD_COMPONENT = 'store/ADD_COMPONENT';
export const GET_SITE = 'store/GET_SITE';

import Vue from 'vue';

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
  }
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
   deleteComp ({commit},index){
    commit(DELETE_COMP, {index})
    console.log('commiting delete- comp ',{index});
  },
    addComponent({commit}, compType){
            console.log('action:', compType)      
            commit(ADD_COMPONENT, compType);

        }
  }

const mutations = {
  [GET_SITE](state, site) {
    // when we switch to multiple sites per user we need to adress this [0]
    state.site = site[0];
  },
  [DELETE_COMP](state, {index} ) {
    console.log('deleting component ', index);
    state.site.comps.splice(index, 1 );
  },
  [ADD_COMPONENT]( state, compType ){
        console.log('mutation:', compType);
            state.site.comps.push({
                _id: '',
                name: '',
                type: compType,
                props: {
                      heading: 'Hi, I\'m Photon, another fine little freebie from Accumsan',
                      subHeading: 'feugiat mi commodo erat lorem ipsum, sed magna lobortis feugiat sapien sed etiam volutpat accumsan.',
                      buttonText: 'Make this button whatever you want!'
                    }
            })
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