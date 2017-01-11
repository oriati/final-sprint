<template lang="html">
  <section class="editor container below-nav">
    <h1>editor Component</h1>
    <header-comp></header-comp>
    <gallery-comp></gallery-comp>
    <icons-text-comp></icons-text-comp>
    <img-text-comp></img-text-comp>
    <signup-comp></signup-comp>
    <footer-comp></footer-comp>
  </section>
</template>

<script lang="js">
  // import authService from '../../services/auth.service';
    import footerComp from '../../../../components/template-components/footer-comp';
    import galleryComp from '../../../../components/template-components/gallery-comp';
    import headerComp from '../../../../components/template-components/header-comp';
    import iconsTextComp from '../../../../components/template-components/icons-text-comp';
    import imgTextComp from '../../../../components/template-components/img-text-comp';
    import signupComp from '../../../../components/template-components/signup-comp';

  export default  {
    name: 'editor',
    props: [],
    beforeRouteEnter ( to, from, next ) {
      authService.protectRoute(next);
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

    },
    components: {
      headerComp, footerComp, iconsTextComp, signupComp, imgTextComp, galleryComp,
    }
}
</script>

<style scoped lang="scss">
  .editor {

  }
</style>
