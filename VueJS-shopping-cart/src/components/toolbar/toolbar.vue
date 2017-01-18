<template lang="html">

  <section v-if="isLoggedIn">
    <v-collapsible class="toolbar">
    <v-collapsible-header>Toolbar</v-collapsible-header>
    <v-collapsible-body> 
      <v-card>
          <div>
            <div class="display-5">Site Name</div>
            <input type="text" name="title" placeholder="your site title" :value="getSite.name" @input="changeHeaders($event)" >
            <div class="display-5">Site URL</div>      
            <input type="text" name="url" placeholder="your site url" :value="getSite.url" @input="changeHeaders($event)">
          <v-card-row actions>
            <v-btn v-if="getEditMode" flat class="white--text cyan darken-2" info @click.native="viewPublished">Go to View Mode</v-btn>
            <v-btn v-else flat class="white--text cyan darken-2" info @click.native="viewEditor">Go to Edit Mode</v-btn>
          </v-card-row>
      </v-card>
    </v-collapsible-body>
  </li>
</v-collapsible>
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
    },
    mounted() {

    },

    data() {
      return {
        siteName : '',
        siteUrl : '',
        isActive: false,
      }
    },
    methods: {

      changeHeaders(event){
        this.$store.dispatch('changeHeaders', event)      
      },

      viewPublished() {
        // this.$store.commit(CHANGE_MODE, isEdit)
        this.$router.push({path: `/published/${this.siteId}`})
      },
      viewEditor() {
        this.$router.push({path: `/main/${this.siteId}`})
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
        'getCompEdit',
        'getEditMode',
        'siteId',
        'isLoggedIn'

      ])
    }
}
</script>

<style scoped lang="scss">
  .toolbar {
    width: 400px;
    position: fixed;
    z-index: 100;
    left: 0;
    margin-left: -300px; 
    margin-bottom: 200px;
  }

  .toolbar:hover {
    margin-left: 0px;
    transition: 0.4s;
  }
</style>



