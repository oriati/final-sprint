<template lang="html">
  <div class="editor container below-nav">
    <h1>editor Component</h1>

    <!--<header-comp :propsData="getComps[0].props"></header-comp>-->

    <div v-for="(comp, index) in getComps">
      <component :is="comp.type" :propsData="getComps[index].props"></component>
      <add-component :index="index"></add-component>
    </div>

    <!--<header-comp></header-comp>
    <gallery-comp></gallery-comp>
    <icons-text-comp></icons-text-comp>
    <img-text-comp></img-text-comp>
    <signup-comp></signup-comp>
    <footer-comp></footer-comp>-->
  </div>
</template>

<script lang="js">
  import { mapGetters } from 'vuex'

  // import authService from '../../services/auth.service';
  import footerComp from '../template-components/footer-comp';
  import galleryComp from '../template-components/gallery-comp';
  import headerComp from '../template-components/header-comp';
  import iconsTextComp from '../template-components/icons-text-comp';
  import imgTextComp from '../template-components/img-text-comp';
  import signupComp from '../template-components/signup-comp';

  import addComponent from '../add-component/add-component';

  export default {
    name: 'editor',
    props: [],
    beforeRouteEnter(to, from, next) {
      authService.protectRoute(next);
    },
    created() {

    },
    computed: {
      // heading () {
      //   return this.$store.getters.heading;
      // }
      ...mapGetters([
        'getComps',
      ])
    },
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      headerComp,
      footerComp,
      iconsTextComp,
      signupComp,
      imgTextComp,
      galleryComp,
      addComponent
    }
  }
</script>

<style scoped lang="scss">
  .editor {

  }
</style>