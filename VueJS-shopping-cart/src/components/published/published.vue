<template lang="html">

  <section class="published">
    <!--<h1>published Component</h1>-->
    <div v-for="(comp, index) in getComps">
      <component class="comp" :is="comp.type" :propsData="getComps[index].props"></component>
    </div>
  </section>

</template>

<script lang="js">
  import footerComp from '../template-components/footer-comp';
  import galleryComp from '../template-components/gallery-comp';
  import headerComp from '../template-components/header-comp';
  import iconsTextComp from '../template-components/icons-text-comp';
  import imgTextComp from '../template-components/img-text-comp';
  import signupComp from '../template-components/signup-comp';
  
  import { mapGetters } from 'vuex';

  export default  {
    name: 'published',
    props: [],
    created() {
      if(!this.siteId) {
      let siteId = this.$route.params.id;
      this.$store.dispatch('getSite', siteId)
      }
    },
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
      ...mapGetters([
        'getComps',
        'siteId'
      ])
    },
    components: {
      headerComp,
      footerComp,
      iconsTextComp,
      signupComp,
      imgTextComp,
      galleryComp,
    }
}
</script>

<style scoped lang="scss">
  .published {

  }
</style>
