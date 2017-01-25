<template>
    <section id="three" class="main special">
        <div class="container">
            <slot></slot>
            <header class="major">
                <div v-if="getEditMode" class="elem" data-medium="heading">
                    <medium-editor :text='propsData.heading' custom-tag='h1' v-on:edit='applyTextEdit'></medium-editor>
                </div>
                <h1 v-else v-html='propsData.heading'></h1>
            </header>
            <div v-if="getEditMode" class="elem" data-medium="subHeading">
                    <medium-editor :text='propsData.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                </div>
                <p v-else v-html='propsData.subHeading'></p>
            <div class="row 150%">
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="propsData.gallery1imgSrc" alt="" /></span>
                    <div v-if="getEditMode" class="elem" data-medium="gallery1.heading">
                        <medium-editor :text='propsData.gallery1heading' custom-tag='h3' v-on:edit='applyTextEdit'></medium-editor>
                    </div>
                    <h3 v-else v-html='propsData.gallery1heading'></h3>
                    <div v-if="getEditMode" class="elem" data-medium="gallery1subHeading">
                        <medium-editor :text='propsData.gallery1subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                    </div>
                    <p v-else v-html='propsData.gallery1subHeading'></p>
                    <ul class="actions">
                        <li>
                            <div v-if="getEditMode" class="elem button" data-medium="gallery1buttonText">
                                <medium-editor :text='propsData.gallery1buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                            </div>
                            <div v-else class="button">
                                <a v-html='propsData.gallery1buttonText'></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="propsData.gallery2imgSrc" alt="" /></span>
                        <div v-if="getEditMode" class="elem" data-medium="gallery2heading">
                            <medium-editor :text='propsData.gallery2heading' custom-tag='h3' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <h3 v-else v-html='propsData.gallery2heading'></h3>
                        <div v-if="getEditMode" class="elem" data-medium="gallery2subHeading">
                            <medium-editor :text='propsData.gallery2subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <p v-else v-html='propsData.gallery2subHeading'></p>
                    <ul class="actions">
                        <li>
                            <div v-if="getEditMode" class="elem button" data-medium="gallery2buttonText">
                                <medium-editor :text='propsData.gallery2buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                            </div>
                            <div v-else class="button">
                                <a v-html='propsData.gallery2buttonText'></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="propsData.gallery3imgSrc" alt="" /></span>
                        <div v-if="getEditMode" class="elem" data-medium="gallery3heading">
                            <medium-editor :text='propsData.gallery3heading' custom-tag='h3' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <p v-else v-html='propsData.gallery1heading'></p>
                        <div v-if="getEditMode" class="elem" data-medium="gallery3subHeading">
                            <medium-editor :text='propsData.gallery3subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <p v-else v-html='propsData.gallery3subHeading'></p>
                    <ul class="actions">
                        <li>
                            <div v-if="getEditMode" class="elem button" data-medium="gallery3buttonText">
                                <medium-editor :text='propsData.gallery3buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                            </div>
                            <div v-else class="button">
                                <p v-html='propsData.gallery3buttonText'></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';


export default  {
    name: 'gallery-comp',
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
    
    .backgroundred {
        background-color: orangered;
    }
    .border {
        border: 4px cadetblue solid;
    }
    .elem:hover {
    box-shadow:inset 0px 0px 0px 2px orange;
  }
</style>