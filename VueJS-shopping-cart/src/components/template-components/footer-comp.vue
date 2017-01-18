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
            <li class="elem" data-medium="copyright">
                <medium-editor :text='propsData.copyright' custom-tag='h1' v-on:edit='applyTextEdit'></medium-editor>
            </li>
        </ul>
    </section>
</template>

<script>
export default  {
    name: 'footer-comp',
    props: ['propsData', 'index'],
    data() {
      return {
    }
},
methods : {
      applyTextEdit: function (text) {
                  this.text = text
                  let mediumElem = document.querySelector("[data-medium-focused]");
                  let element = mediumElem.parentNode.getAttribute("data-medium");   
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