<template lang="html">
  <div class="editor container">
    <div v-for="(comp, index) in getComps">
      <add-component :index="index"></add-component>
      <button class="btn-del section" @click="deleteComp(index)">Delete</button>
      <component class="comp section" :is="comp.type" :propsData="getComps[index].props" :index="index">
      </component>
    </div>
    <add-component class="comp section" :index="last"></add-component>
    <vue-toastr ref="toastr"></vue-toastr>
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
  import { CHANGE_MODE } from '../../modules/site/site.module';
  import footerComp from '../template-components/footer-comp';
  import galleryComp from '../template-components/gallery-comp';
  import headerComp from '../template-components/header-comp';
  import iconsTextComp from '../template-components/icons-text-comp';
  import imgTextComp from '../template-components/img-text-comp';
  import signupComp from '../template-components/signup-comp';
  import videoComp from '../template-components/video-comp';

  import addComponent from '../add-component/add-component';

  export default {
    name: 'editor',
    props: [],
    beforeRouteEnter(to, from, next) {
      authService.protectRoute(next);
    },
    created() {
      this.$store.commit(CHANGE_MODE, true);
    },
    computed: {
      // heading () {
      //   return this.$store.getters.heading;
      // }
      ...mapGetters([
        'getComps',
      'getEditMode'      
      ])
    },
    mounted() {

    },
    data() {
      return {
        last: 'last'
      }
    },

    methods: {
    // checkTstr(){
    //   console.log('chk');
      
    //   this.$refs.toastr.s("SUCCESS MESSAGE");
    // },
      deleteComp(index) {
        var that = this;
        swal({
          title: "Are you sure?",
          text: "You will not be able to recover this section!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel please!",
        },
        function(isConfirm){
          if (isConfirm) {
            that.$refs.toastr.Add({
                title: "Section Deleted",
                msg: "",
                clickClose: true,
                timeout: 2000,
                position: "toast-bottom-left",
                type: "warning"
            });
            that.$store.dispatch('deleteComp', index)     
          } else {
              that.$refs.toastr.Add({
                  title: "Delete Canceled",
                  msg: "", 
                  clickClose: true,
                  timeout: 2000,
                  position: "toast-bottom-left",
                  type: "success"
              });
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
        swal(
          {
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel please!",
            closeOnConfirm: true,
            closeOnCancel: true
          },
          function (isConfirm) {
            if (isConfirm) {
              // swal("Deleted!", "Your component has been deleted.", "success");
              that.$store.dispatch('deleteComp', index)
            } else {
              // swal("Cancelled", "Your component is safe :)", "error");
            }
          });
      }
    },
    components: {
      headerComp,
      footerComp,
      iconsTextComp,
      signupComp,
      imgTextComp,
      galleryComp,
      videoComp,
      addComponent
    }
  }
</script>

<style scoped lang="scss">
  .main.container{
    padding : 2em;
  }
  .editor {
    padding: 0;
  }
    /*display: flex;
    flex-direction: column;
    align-items: center;
  }
  .editor>*{
    width : 100%;
  }*/

  /****/
  .comp {
    transition: 0.2s;
    position: relative;
  }
  .btn-del{
    background: #d61717;
    color: white;
    position: absolute;
    right: 0;
    z-index: 100;
    margin-right: 4.7em;
  }
  .btn-del:hover{
    background: #ea1919;
  }
  .btn-del:active{
    background: #ad1313;
  }
  .main.style2 button:hover{
    background: rgba(150, 0, 0, 0.6);
  }
  #footer button:hover {
    background: rgba(150, 0, 0, 0.6);
  }

  .comp:hover {
    box-shadow:inset 0px 0px 0px 5px orange;
  }
</style>