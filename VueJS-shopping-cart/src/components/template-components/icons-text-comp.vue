<template>
    <section id="two" class="main style2">
        <div class="container">
            <slot></slot>
            <div class="row 150%">
                <div class="6u 12u(medium)">
                    <ul class="major-icons">
                        <li><span class="icon style1 major" v-bind:class="propsData.icon1"></span></li>
                        <li><span class="icon style2 major" v-bind:class="propsData.icon2"></span></li>
                        <li><span class="icon style3 major" v-bind:class="propsData.icon3"></span></li>
                        <li><span class="icon style4 major" v-bind:class="propsData.icon4"></span></li>
                        <li><span class="icon style5 major" v-bind:class="propsData.icon5"></span></li>
                        <li><span class="icon style6 major" v-bind:class="propsData.icon6"></span></li>
                    </ul>
                </div>
                <div class="6u 12u(medium)">
                    <header class="major">
                        <div v-if="getEditMode" class="elem" data-medium="heading">
                            <medium-editor :text='propsData.heading' custom-tag='h2' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <h2 v-else v-html='propsData.heading'></h2>
                    </header>
                        <div v-if="getEditMode" class="elem" data-medium="text1">
                            <medium-editor :text='propsData.text1' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <p v-else v-html='propsData.text1'></p>
                        <div v-if="getEditMode" class="elem" data-medium="text2">
                            <medium-editor :text='propsData.text2' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <p v-else v-html='propsData.text2'></p>
                        <div v-if="getEditMode" class="elem" data-medium="text3">
                            <medium-editor :text='propsData.text3' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <p v-else v-html='propsData.text3'></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';

export default  {
    name: 'icons-text-comp',
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