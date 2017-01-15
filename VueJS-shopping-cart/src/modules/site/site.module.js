export const ADD_COMPONENT = 'store/ADD_COMPONENT';

const state = {
  _id: null,
  name: '',
  url: '',
  isPublished: false,
  comps: [{
    _id: '',
    name: '',
    type: 'header-comp',
    props: {
          heading: 'Hi, I\'m Photon, another fine little freebie from Accumsan',
          subHeading: 'feugiat mi commodo erat lorem ipsum, sed magna lobortis feugiat sapien sed etiam volutpat accumsan.',
          buttonText: 'Make this button whatever you want!'
        }
  }]
}

const actions = {
    addComponent({commit}, compType){
            commit('ADD_COMPONENT', compType)
            console.log('action:', compType);
            
        }
  }

const mutations = {
  ADD_COMPONENT( state, compType ){
        console.log('mutation:', compType);
            state.comps.push({
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
        getComps: state => state.comps
    }

export default {
  state,
  getters,
  actions,
  mutations
}