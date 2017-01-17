<template>
    <section id="one" class="main style1">
        <div class="container">
            <slot></slot>
            <div class="row 150%">
                <div class="6u 12u$(medium)">
                    <header class="major">
                        <div class="elem">
                            <medium-editor :text='propsData.heading' custom-tag='h2' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                    </header>
                        <div class="elem">
                            <medium-editor :text='propsData.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                </div>
                <div class="6u$ 12u$(medium) important(medium)">
                    <span class="image fit"><img :src="propsData.imgSrc" alt="" /></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'img-text-comp',
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

<style scoped>
    .elem:hover {
        box-shadow:inset 0px 0px 0px 2px orange;
    }

</style>

