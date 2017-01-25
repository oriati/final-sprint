<template lang="html">

  <section class="published">
    <toolbar></toolbar>
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
  import videoComp from '../template-components/video-comp';
  import mapComp from '../template-components/map-comp';
  import toolbar from '../toolbar/toolbar';
  
  import { mapGetters } from 'vuex';
  import { CHANGE_MODE } from '../../modules/site/site.module';

  export default  {
    name: 'published',
    props: [],
    created() {
      this.$store.commit(CHANGE_MODE, false);
      if(!this.siteId) {
      let siteId = this.$route.params.id;
      this.$store.dispatch('getSite', siteId);
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
      videoComp,
      mapComp,
      toolbar
    }
}
</script>

<style scoped lang="scss">
  /*.published {
    max-width: 1200px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;    
  }*/
</style>
