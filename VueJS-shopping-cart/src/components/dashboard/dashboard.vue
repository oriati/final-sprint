<template lang="html">

  <section class="dashboard">
    <h1>dashboard Component</h1>
    <div class="sites">
      <v-btn info round large v-for="(site, index) in getSites" @click.native="selectSite(index)">{{site.name}}</v-btn>
      <div>
        <v-btn v-modal:modal success large round @click.native="createClicked = true">Create Site</v-btn>
        <v-modal id="modal" v-if="createClicked">
          <v-card>
            <v-card-row class="green darken-1">
              <v-card-title>
                <span class="white--text">Create New Site</span>
                <v-spacer></v-spacer>
              </v-card-title>
            </v-card-row>
            <v-card-text>
              <v-card-row>
                <v-text-input label="Site Name" placeholder="Enter site name" v-model="newSite.name"></v-text-input>
                <v-text-input label="Site URL" placeholder="Enter site URL" v-model="newSite.url"></v-text-input>
              </v-card-row>
            </v-card-text>
            <v-card-row actions>
              <v-btn @click.native="createCancel">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn success @click.native="createSite">Create</v-btn>
            </v-card-row>
          </v-card>
        </v-modal>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import { mapGetters } from 'vuex';
  import { SELECT_SITE } from '../../modules/site/site.module';

  export default {
    name: 'dashboard',
    props: [],
    created() {
      this.$store.dispatch('getSites');
      // this.newSite.owner = this.$store.state.user.username
    },
    mounted() {

    },
    data() {
      return {
        createClicked: false,
        newSite: {
          name : '',
          url  : '',
        }
      }
    },
    methods: {
      selectSite(index) {
        console.log('clicked');
        this.$store.commit(SELECT_SITE, index)
        this.$router.push('main')
      },
      createCancel() {
        this.createClicked = false;
        this.newSite.name = '';
        this.newSite.url = '';
      },
      createSite() {
        this.$store.dispatch('createSite', this.newSite)
        this.createClicked = false;

      }
    },
    computed: {
      user: function() {
        return this.$store.state.user.username
      },
      ...mapGetters([
        'getSites'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .sites {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

 /*.site {
   background-color: #00D1B2;
   color: white;
   border-radius: 5px;
   cursor: pointer;
 }*/
</style>