<template lang="html">

  <section class="main container below-nav">
    <!--<h1>main Component</h1>-->
    <toolbar></toolbar>
    <editor></editor>
  </section>

</template>

<script lang="js">
  // import authService from '../../../services/auth.service';
  import toolbar from '../toolbar/toolbar';
  import editor from '../editor/editor';

  export default  {
    name: 'main',
    props: [],
    // beforeRouteEnter ( to, from, next ) {
    //   authService.protectRoute(next);
    // },    
    created() {
        // gets the users sites from server
        this.$store.dispatch('getSite');
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
      toolbar, editor
    }
}
</script>

<style scoped lang="scss">
  .main {

  }
</style>
