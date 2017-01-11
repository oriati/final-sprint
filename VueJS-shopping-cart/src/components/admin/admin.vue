<template lang="html">

  <section class="admin container below-nav">
    <h1>admin Component</h1>
    <div v-for="contact in caontacts"></div>
    <header-comp>header</header-comp>
    <gallery-comp>gallery</gallery-comp>
    <icons-text-comp>icons-text-comp</icons-text-comp>
    <!--<signup-comp>signup-comp</signup-comp>-->
    <footer-comp>footer</footer-comp>
  </section>

</template>

<script lang="js">
  import authService from '../../services/auth.service';
  import footerComp from '../template-components/footer-comp'
  import galleryComp from '../template-components/gallery-comp'
  import headerComp from '../template-components/header-comp'
  import iconsTextComp from '../template-components/icons-text-comp'
  import imgTextComp from '../template-components/img-text-comp'
  // import signUpComp from '../template-components/signup-comp'

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
    components :{ footerComp,galleryComp,headerComp,iconsTextComp,imgTextComp,
      // signUpComp 
    }
    
}
</script>

<style scoped lang="scss">
  .admin {

  }
</style>
