<template lang="html">

  <section class="admin container below-nav">
    <h1>admin Component</h1>
    <button @click="deleteTest">delete test</button>
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
      deleteTest() {
        swal("Here's a message!")
      //   swal({
      //     title: "Are you sure?",
      //     text: "You will not be able to recover this imaginary file!",
      //     type: "warning",
      //     showCancelButton: true,
      //     confirmButtonColor: "#DD6B55",
      //     confirmButtonText: "Yes, delete it!",
      //     cancelButtonText: "No, cancel plx!",
      //     closeOnConfirm: false,
      //     closeOnCancel: false
      //   },
      //   function(isConfirm){
      //     if (isConfirm) {
      //       swal("Deleted!", "Your imaginary file has been deleted.", "success");
      //     } else {
      //       swal("Cancelled", "Your imaginary file is safe :)", "error");
      //     }
      //   });
      //   this.$store.dispatch('deleteComp', index)     
      }

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
