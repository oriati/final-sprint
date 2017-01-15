export const DELETE_COMP = 'store/DELETE_COMP';


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
  },
  {_id: '',
    name: '',
    type: 'header-comp',
    props: {
          heading: 'lorem lorem',
          subHeading: 'ipsum ipsum',
          buttonText: 'Make this button whatever you want!'
        }
  }]
}
const actions = {
  deleteComp ({commit},index){
    commit(DELETE_COMP, {index})
    console.log('commiting delete- comp ',{index});

    
  }
}
const mutations = {
  [DELETE_COMP](state, {index} ) {
    console.log('deleting component ', index);
    

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