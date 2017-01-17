<template lang="html">
  <div class="editor container">
    <!--<h1>editor Component</h1>-->
    <!--<header-comp :propsData="getComps[0].props"></header-comp>-->

    <add-component :index=0></add-component>

    <div v-for="(comp, index) in getComps">
      <component class="comp" :is="comp.type" :propsData="getComps[index].props">
        <button @click="deleteComp(index)">Delete</button>
        <button @click="editComp(index, getComps[index].props)">Edit</button>
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
      }
    },

    methods: {
      deleteComp(index) {
        var that = this;
        swal({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel please!",
          closeOnConfirm: false,
          closeOnCancel: false
        },
        function(isConfirm){
          if (isConfirm) {
            swal("Deleted!", "Your component has been deleted.", "success");
            that.$store.dispatch('deleteComp', index)     
            // that.$store.dispatch({
            //   type: 'deleteComp',
            //   index: index
            // })
          } else {
            swal("Cancelled", "Your component is safe :)", "error");
          }
        });   
      },
      editComp(index, elements) {
        console.log('elements', elements);
        this.$store.dispatch({
          type: 'editComp',
          index: index,
          elements: elements,
        })
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
    box-shadow:inset 0px 0px 0px 5px orange;
  }
</style>