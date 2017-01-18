<template lang="html">
  <section>
    <main-nav></main-nav>

      <section class="main container below-nav">
        <!--<h1>main Component</h1>-->
        <toolbar></toolbar>
        <editor></editor>
      </section>
  </section>
</template>

<script lang="js">
  import { mapGetters } from 'vuex';
  
  import toolbar from '../toolbar/toolbar';
  import editor from '../editor/editor';
  import mainNav from '../main-nav';

  export default {
    name: 'main',
    props: [],
    // beforeRouteEnter ( to, from, next ) {
    //   authService.protectRoute(next);
    // },    
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
      'siteId'
    ])
    },
    components: {
      toolbar, 
      editor,
      mainNav
    }
  }
</script>

<style scoped lang="scss">
  .main {

  }
</style>