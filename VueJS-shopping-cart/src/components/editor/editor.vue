<template lang="html">
  <div class="editor container below-nav">
    <!--<h1>editor Component</h1>-->

    <!--<header-comp :propsData="getComps[0].props"></header-comp>-->

    <div v-for="(comp, index) in getComps">

      <component class="comp" :is="comp.type" :propsData="getComps[index].props">
        <button @click="deleteComp(index)">Delete</button>
        <button @click="editComp(getComps[index].props)">Edit</button>

      </component>
      <add-component :index="index"></add-component>
    </div>

   

    <!--<gallery-comp></gallery-comp>
    <icons-text-comp></icons-text-comp>
    <img-text-comp></img-text-comp>
    <signup-comp></signup-comp>
    <footer-comp></footer-comp>-->
  </div>
</template>

<script lang="js">
  import { mapGetters } from 'vuex';

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
        currEdit: '',
      }
    },
    methods: {
      deleteComp(index) {
        // swal({
        //   title: "Are you sure?",
        //   text: "You will not be able to recover this imaginary file!",
        //   type: "warning",
        //   showCancelButton: true,
        //   confirmButtonColor: "#DD6B55",
        //   confirmButtonText: "Yes, delete it!",
        //   cancelButtonText: "No, cancel plx!",
        //   closeOnConfirm: false,
        //   closeOnCancel: false
        // },
        // function(isConfirm){
        //   if (isConfirm) {
        //     swal("Deleted!", "Your imaginary file has been deleted.", "success");
        //   } else {
        //     swal("Cancelled", "Your imaginary file is safe :)", "error");
        //   }
        // });
        // this.$store.dispatch('deleteComp', index)     
        this.$store.dispatch({
          type: 'deleteComp',
          index: index
        })
      },
      editComp(elements) {
        this.currEdit = elements;
        console.log('currEdit', this.currEdit);
        }
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

  .comp:hover {
    border: 3px solid darkorange;
  }
</style>