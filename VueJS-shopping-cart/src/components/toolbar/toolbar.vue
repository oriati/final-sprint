<template lang="html">
  <section class="">
    <!--<v-sidebar right fixed class="sidebar">
      <v-navbar class="black">
        <p>Editor</p>
        </v-navbar>

      <div class="content">
      <p>Toolbar</p>
      <ul v-for="element in getCompEdit">
        <li>{{element}}</li>
    </ul>
        {{getCompEdit}}
      </div>
    </v-sidebar>-->
</v-app>

  </section>
</template>

<script lang="js">
  import { mapGetters } from 'vuex';
  // import authService from '../../services/auth.service';

  export default  {
    name: 'toolbar',
    props: [],
    // beforeRouteEnter ( to, from, next ) {
    //   authService.protectRoute(next);
    // },    
    mounted() {

    },
    data() {
      return {
        isActive: false
      }
    },
    methods: {

    },
    computed: {
      // heading () {
      //   return this.$store.getters.heading;
      // }
      ...mapGetters([
        'getCompEdit',
      ])
    }
}
</script>

<style scoped lang="scss">
  .sidebar {
    margin-top: 100px;
    display: none;
  }

  .content {
    color: #fff;
  }
  .content p {
    margin: 10px;
    text-align: center;
  }
</style>
