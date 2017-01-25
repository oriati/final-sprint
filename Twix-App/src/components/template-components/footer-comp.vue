<template>
   <section id="footer">
       <slot></slot>
        <ul class="icons">
            <li><a href="#" class="icon alt" :class="propsData.icon1.class"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon alt" :class="propsData.icon2.class"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon alt" :class="propsData.icon3.class"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon alt" :class="propsData.icon4.class"><span class="label">GitHub</span></a></li>
            <li><a href="#" class="icon alt" :class="propsData.icon5.class"><span class="label">Email</span></a></li>
        </ul>
        <ul class="copyright">
            <li v-if='getEditMode' class="elem" data-medium="copyright">
                <medium-editor :text='propsData.copyright' custom-tag='h1' v-on:edit='applyTextEdit'></medium-editor>
            </li>
            <h1 v-else v-html='propsData.copyright'></h1>
        </ul>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';

export default  {
    name: 'footer-comp',
    props: ['propsData', 'index'],
    data() {
      return {
    }
},
    computed: {
        ...mapGetters([
        'getEditMode',
        
      ])
  },
methods : {
      applyTextEdit: function (text) {
                  this.text = text
                  let mediumElem = document.querySelector("[data-medium-focused]");
                  let element = mediumElem.parentElement.getAttribute("data-medium");   
                  let editedText = {
                      text: this.text,
                      compIndex: this.index,
                      element: element, 
                  };
                  console.log(editedText);
                  this.$store.dispatch('editText', editedText)
      }
  },
  components : {
     'medium-editor': VueMediumEditor
  }
}
</script>

<style scoped lang="scss">
    .elem:hover {
    box-shadow:inset 0px 0px 0px 2px orange;
  }
</style>