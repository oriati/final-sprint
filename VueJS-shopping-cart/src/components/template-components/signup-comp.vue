<template>
    <section id="four" class="main style2 special">
        <div class="container">
            <slot></slot>
            <header class="major">
                <div class="elem" data-medium="cta">
                    <medium-editor :text='propsData.cta' custom-tag='h2' v-on:edit='applyTextEdit'></medium-editor>
                </div>
                <!--<h2>{{cta}}</h2>-->
            </header>
            <div class="elem" data-medium="subHeading">
                <medium-editor :text='propsData.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
            </div>
            <!--<p>{{subHeading}}</p>-->
            <ul class="actions uniform">
                <li>
                    <div class="elem button" data-medium="button1Text">
                        <medium-editor :text='propsData.button1Text' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                    </div>
                    <!--<a href="#" class="button special">{{button1Text}}</a>-->
                </li>
                <li>
                    <div class="elem button" data-medium="button2Text">
                        <medium-editor :text='propsData.button2Text' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                    </div>
                    <!--<a href="#" class="button">{{button2Text}}</a>-->
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'signup-comp',
    props: ['propsData', 'index'],
    data() {
      return {
        //   cta: 'This is a Call to Action!!!',
        //   subHeading: 'This is a sub-heading. Adipiscing a commodo ante nunc',
        //   button1Text: 'Sign Up',
        //   button2Text: 'Learn More'
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