<template>
    <section id="header">
        <div class="medium inner">
        <slot></slot>
            <div v-if="getEditMode" class="elem" data-medium="heading">
                <medium-editor :text='propsData.heading'  custom-tag='h1' v-on:edit='applyTextEdit'></medium-editor>
            </div>
                <h1 v-else v-html="propsData.heading"></h1>
            <div v-if="getEditMode" class="elem subHeading" data-medium="subHeading">
                <medium-editor :text='propsData.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
            </div>
            <p v-else v-html="propsData.subHeading"></p>
            <!--<h1 class="elem">{{propsData.heading}}</h1>
            <p class="elem">{{propsData.subHeading}}</p>-->
                <div v-if="getEditMode" class="elem button buttonText" data-medium="buttonText">
                    <medium-editor class="elem" :text='propsData.buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                    <!--<a href="#one" class="button scrolly">{{propsData.buttonText}}</a>-->
                </div>
                <div v-else class="button">
                    <a v-html="propsData.buttonText"></a>
                </div>
                <!--<button @click="saveChanges">Save</button>-->
        </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';

export default  {
    name: 'header-comp',
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
                  this.text = text;
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

<style scoped lang="css">
@import './html5up-photon/assets/css/main.css';

    .elem:hover {
    box-shadow:inset 0px 0px 0px 2px orange;
  }

  .topright {
      top:0;
  }

</style>