<template>
    <section id="three" class="main special">
        <div class="container">
            <slot></slot>
            <header class="major">
                <div class="elem" data-medium="heading">
                    <medium-editor :text='propsData.heading' custom-tag='h1' v-on:edit='applyTextEdit'></medium-editor>
                </div>
            </header>
            <div class="elem" data-medium="subHeading">
                    <medium-editor :text='propsData.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                </div>
            <div class="row 150%">
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="propsData.gallery1imgSrc" alt="" /></span>
                    <div class="elem" data-medium="gallery1.heading">
                        <medium-editor :text='propsData.gallery1heading' custom-tag='h3' v-on:edit='applyTextEdit'></medium-editor>
                    </div>
                    <div class="elem" data-medium="gallery1subHeading">
                        <medium-editor :text='propsData.gallery1subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                    </div>
                    <ul class="actions">
                        <li>
                            <div class="elem button" data-medium="gallery1buttonText">
                                <medium-editor :text='propsData.gallery1buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="propsData.gallery2imgSrc" alt="" /></span>
                        <div class="elem" data-medium="gallery2heading">
                            <medium-editor :text='propsData.gallery2heading' custom-tag='h3' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <div class="elem" data-medium="gallery2subHeading">
                            <medium-editor :text='propsData.gallery2subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                    <ul class="actions">
                        <li>
                            <div class="elem button" data-medium="gallery2buttonText">
                                <medium-editor :text='propsData.gallery2buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="propsData.gallery3imgSrc" alt="" /></span>
                        <div class="elem" data-medium="gallery3heading">
                            <medium-editor :text='propsData.gallery3heading' custom-tag='h3' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <div class="elem" data-medium="gallery3subHeading">
                            <medium-editor :text='propsData.gallery3subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                    <ul class="actions">
                        <li>
                            <div class="elem button" data-medium="gallery3buttonText">
                                <medium-editor :text='propsData.gallery3buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'gallery-comp',
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