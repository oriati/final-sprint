<template>
    <section id="three" class="main special">
        <div class="container">
            <slot></slot>
            <header class="major">
                <div class="elem">
                    <medium-editor :text='propsData.heading' custom-tag='h1' v-on:edit='applyTextEdit'></medium-editor>
                </div>
            </header>
            <div class="elem">
                    <medium-editor :text='propsData.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                </div>
            <div class="row 150%">
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="propsData.gallery1.imgSrc" alt="" /></span>
                    <div class="elem">
                        <medium-editor :text='propsData.gallery1.heading' custom-tag='h3' v-on:edit='applyTextEdit'></medium-editor>
                    </div>
                    <div class="elem">
                        <medium-editor :text='propsData.gallery1.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                    </div>
                    <ul class="actions">
                        <li>
                            <div class="elem button">
                                <medium-editor href="google.com" :text='propsData.gallery1.buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="propsData.gallery2.imgSrc" alt="" /></span>
                        <div class="elem">
                            <medium-editor :text='propsData.gallery2.heading' custom-tag='h3' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <div class="elem">
                            <medium-editor :text='propsData.gallery2.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                    <ul class="actions">
                        <li>
                            <div class="elem button">
                                <medium-editor :text='propsData.gallery2.buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="propsData.gallery3.imgSrc" alt="" /></span>
                        <div class="elem">
                            <medium-editor :text='propsData.gallery3.heading' custom-tag='h3' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <div class="elem">
                            <medium-editor :text='propsData.gallery3.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                    <ul class="actions">
                        <li>
                            <div class="elem button">
                                <medium-editor :text='propsData.gallery3.buttonText' custom-tag='a' v-on:edit='applyTextEdit'></medium-editor>
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
    props: ['propsData'],
    data() {
      return {
      }
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