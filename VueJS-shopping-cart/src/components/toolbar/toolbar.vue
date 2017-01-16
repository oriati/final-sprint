<template lang="html">
  <section class="below-nav">
    <!--<h1>toolbar Component</h1>-->
    <v-sidebar right fixed class="sidebar">
      <!--<v-navbar class="black">
        <p>Editor</p>
        </v-navbar>-->

      <div class="content">
      <p>Editor</p>
      </div>
    </v-sidebar>
</v-app>

  </section>
</template>

<script lang="js">
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

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .sidebar {
    margin-top: 100px;
    opacity: 0.9;
  }

  .content {
    color: #fff;
  }
  .content p {
    margin: 10px;
    text-align: center;
  }
</style>
