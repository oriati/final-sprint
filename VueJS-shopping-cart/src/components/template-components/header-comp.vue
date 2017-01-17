<template>
    <section id="header">
        <div class="medium inner">
            <slot></slot>
            <div class="elem">
                <medium-editor :text='propsData.heading' custom-tag='h1' v-on:edit='applyTextEdit'></medium-editor>
            </div>
            <div class="elem">
                <medium-editor :text='propsData.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
            </div>
            <!--<h1 class="elem">{{propsData.heading}}</h1>
            <p class="elem">{{propsData.subHeading}}</p>-->
                <div class="elem button">
                    <medium-editor class="elem" :text='propsData.buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                    <!--<a href="#one" class="button scrolly">{{propsData.buttonText}}</a>-->
                </div>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'header-comp',
    props: ['propsData'],
    data() {
      return {
        //   el: '.medium',
        // myText: 'A MediumEditor component for Vue 2 ',
      }
    },
    computed: {
        
  },
  methods : {
      applyTextEdit: function (text) {
                  this.text = text
              }
  },
  components : {
     'medium-editor': VueMediumEditor
  }
}

</script>

<style scoped>
    .elem:hover {
    box-shadow:inset 0px 0px 0px 2px orange;
  }
</style>