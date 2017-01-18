<template lang="html">
  <section class="below-nav">
    <h1>toolbar Component</h1>
    <div>
      <!--<v-btn success @click.native="changeMode(true)">Edit</v-btn>-->
      <v-btn info @click.native="viewPublished">View</v-btn>
    </div>
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
  import { CHANGE_MODE } from '../../modules/site/site.module';

  export default  {
    name: 'toolbar',
    props: [],
    // beforeRouteEnter ( to, from, next ) {
    //   authService.protectRoute(next);
    // },    
    created() {
      this.$store.commit(CHANGE_MODE, true);
    },
    mounted() {

    },
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      viewPublished() {
        this.$store.commit(CHANGE_MODE, false)
        this.$router.push({path: `/published/${this.siteId}`})
      }
    },
    computed: {
      // heading () {
      //   return this.$store.getters.heading;
      // }
      ...mapGetters([
        'getCompEdit',
        'getEditMode',
        'siteId'
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
