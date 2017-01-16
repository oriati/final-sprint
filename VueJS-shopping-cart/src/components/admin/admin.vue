<template lang="html">

  <section class="admin container below-nav">
    <h1>admin Component</h1>
  </section>

</template>

<script lang="js">
  import authService from '../../services/auth.service';

  export default  {
    name: 'admin',
    props: [],
    data () {
      return {
        contacts:[]
      }
    },
    beforeRouteEnter ( to, from, next ) {
      authService.protectRoute(next);
    },    
    mounted() {
      
    },
    methods: {

    },
    computed: {

    },
    components :{ 
      // footerComp,galleryComp,headerComp,iconsTextComp,imgTextComp,
      // signUpComp 
    }
    
}
</script>

<style scoped lang="scss">
  .admin {

  }
</style>
