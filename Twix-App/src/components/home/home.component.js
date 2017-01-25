import ContactForm from '../contact-form/contact-form.vue';
import mainNav from '../main-nav';



export default  {
  data: () => {
    return {
          el: '.container',
      myText: 'A MediumEditor component for Vue 2 ',
      items: []
    }
  },
  methods : {
      applyTextEdit: function (text) {
                  this.text = text
              }
  },
  components : {
     ContactForm,
     'medium-editor': VueMediumEditor,
     mainNav
  }
}
