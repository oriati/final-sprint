<template lang="html">

  <section v-if="isLoggedIn">
    <v-collapsible class="toolbar">
    <v-collapsible-header>Settings</v-collapsible-header>
    <v-collapsible-body> 
      <v-card>
          <div class="content">
            <div class="display-5">Site Name</div>
            <input type="text" name="title" placeholder="your site title" :value="getSite.name" @input="changeHeaders($event)" >
            <div class="display-5">Site URL</div>      
            <input type="text" name="url" placeholder="your site url" :value="getSite.url" @input="changeHeaders($event)">
          <v-card-row actions>
            <v-btn v-if="getEditMode" class="view-btn white--text cyan darken-2" @click.native="viewPublished">Go to View Mode</v-btn>
            <v-btn v-else class="view-btn white--text cyan darken-2" @click.native="viewEditor">Go to Edit Mode</v-btn>
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
        this.$router.push({path: `/published/${this.siteId}`})
      },
      viewEditor() {
        this.$router.push({path: `/main/${this.siteId}`})
      }

    },
    
    computed: {
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
    width: 22em;
    position: fixed;
    z-index: 1000;
    right: 0;
    margin-right: -300px; 
    margin-bottom: 200px;
  }

  .view-btn:hover {
    color: black;
  }

  .toolbar:hover {
    margin-right: 0px;
    transition: 0.4s;
  }

  .content {
    padding: 20px;
  }
</style>



