<template lang="html">

  <section class="editor container below-nav">
    <h1>editor Component</h1>
  </section>

</template>

<script lang="js">
  // import authService from '../../services/auth.service';

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

    }
}
</script>

<style scoped lang="scss">
  .editor {

  }
</style>
