<template lang="html">
  <div class="editor container">
    <div class="comps" v-for="(comp, index) in getComps">
      <add-component :index="index"></add-component>
      <button class="btn-del comp section" @click="deleteComp(index)">Delete</button>
      <component class="comp section" :is="comp.type" :propsData="getComps[index].props" :index="index">
      </component>
    </div>
    <add-component class="comp section" :index="last"></add-component>
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
  import mapComp from '../template-components/map-comp';

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
      deleteComp(index) {
        var that = this;
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
      mapComp,
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
  .comps {
    text-align: center;
  }

  .comp {
    transition: 0.2s;
    position: relative;
  }
  .btn-del{
    background: rgba(150, 0, 0, 0.3);
    margin-top: 10px;
    margin-bottom: 10px;
    /*position: absolute;*/
    /*right : 2em;*/
    /*top : 2em;*/
  }
  .btn-del:hover{
    background: rgba(150, 0, 0, 0.6);
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