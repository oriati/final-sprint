<template lang="html">
  <section class="below-nav">
    <h1>toolbar Component</h1>
    <div class="site-headers">
      <input type="text" name="title" placeholder="your site title" :value="getSite.name" @input="changeHeaders($event)" >
      <input type="text" name="url" placeholder="your site url" :value="getSite.url" @input="changeHeaders($event)">
          {{getSite.name}}
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
  // import authService from '../../services/auth.service';

  export default  {
    name: 'toolbar',
    props: [],
    // beforeRouteEnter ( to, from, next ) {
    //   authService.protectRoute(next);
    // },    
    data() {
      return {
        siteName : '',
        siteUrl : '',
        isActive: false
      }
    },
    methods: {
      changeHeaders(event){
        this.$store.dispatch('changeHeaders', event)      
      }

    },
    // mounted () {
    //   this.siteName = getSite.name
    // },
    computed: {
      // heading () {
      //   return this.$store.getters.heading;
      // }
      ...mapGetters([
        'getSite',
        'getCompEdit'
      ])
    }
}
</script>

<style scoped lang="scss">

  .site-headers {
    position: fixed;
    left : 2em;
    top : 5em;
    max-width: 300px;
  }

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
