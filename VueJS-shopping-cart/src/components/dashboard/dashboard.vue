<template lang="html">

  <section class="dashboard">
    <main-nav></main-nav>
    <div class="display-1 text-xs-center mt-3">My Sites</div>
    <div class="sites">
      <v-card v-for="(site, index) in getSites" class="site white--text light-blue darken-4">
        <v-card-row height="200px">
          <v-card-title>
            {{site.name}} <br>
          </v-card-title>
        </v-card-row>
        <v-card-row actions>
          <v-btn flat block class="white--text" @click.native="selectSite(index, 'edit')">Edit</v-btn>
          <v-btn flat block class="green--text" @click.native="selectSite(index, 'view')">View</v-btn>
          <v-btn flat block class="red--text" @click.native="deleteSite(index)">Delete</v-btn>
          <v-spacer></v-spacer>
        </v-card-row>
      </v-card>


      <!--<v-card v-for="(site, index) in getSites" class="site">-->
        <!--<v-card-row class="blue darken-1">
          <v-card-title>
            <span class="whitetext">{{site.name}}</span>-->
            <!--<v-spacer></v-spacer>
            <v-btn floating error @click.native="deleteSite(index)">
              <v-icon>clear</v-icon>
              X
            </v-btn>
          </v-card-title>
        </v-card-row>
        <v-card-row actions>
          <v-btn flat block @click.native="selectSite(index, 'edit')" class="blue--text darken-1">edit</v-btn>
          <v-btn flat block @click.native="selectSite(index, 'view')" class="blue--text darken-1">view</v-btn>
        </v-card-row>
      </v-card>
    </div>-->
    <v-card class="site white lighten-4 white--text">
        <v-card-row height="200px">
          <v-card-title>
      <v-btn v-modal:modal flat block class="green--text" @click.native="createClicked = true">Create New Site</v-btn>
      <v-modal id="modal" v-if="createClicked">
        <v-card>
          <v-card-row class="cyan darken-2">
            <v-card-title>
              <span class="white--text">Create New Site</span>
              <v-spacer></v-spacer>
            </v-card-title>
          </v-card-row>
          <v-card-text>
                <div class="title black--text">Site Name</div>
            <v-card-row>
              <v-text-input class="input black--text" placeholder="Enter site name" v-model="newSite.name"></v-text-input>
            </v-card-row>
                <div class="title black--text">Site URL</div>            
            <v-card-row>
              <v-text-input class="input black--text" placeholder="Enter site URL" v-model="newSite.url"></v-text-input>
            </v-card-row>
          </v-card-text>
          <v-card-row actions>
            <v-btn class="black--text" flat @click.native="resetCreate">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn success flat @click.native="createSite">Create</v-btn>
          </v-card-row>
        </v-card>
      </v-modal>
          </v-card-title>
        </v-card-row>
      </v-card>
    <div>
    </div>
  </section>

</template>

<script lang="js">
  import { mapGetters } from 'vuex';
  import { SELECT_SITE } from '../../modules/site/site.module';

  import mainNav from '../main-nav';

  export default {
    name: 'dashboard',
    props: [],
    created() {
      this.reloadSites();
    },
    mounted() {

    },
    data() {
      return {
        createClicked: false,
        newSite: {
          name: '',
          url: '',
        }
      }
    },
    methods: {
      reloadSites() {
        this.$store.dispatch('getSites')
      },

      selectSite(index, choice) {
        // console.log(isEdit);
        this.$store.commit(SELECT_SITE, index)
        console.log('choice', choice);
        if(choice === 'edit') {
          this.$router.push({path: `main/${this.siteId}`});
        }
        else {this.$router.push({path: `published/${this.siteId}`});
        }
      },
      resetCreate() {
        this.createClicked = false;
        this.newSite.name = '';
        this.newSite.url = '';
      },
      createSite() {
        this.$store.dispatch('createSite', this.newSite)
        this.resetCreate();
      },

      deleteSite(index) {
        var that = this;
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this site!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No!!!! I still want it",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){
          if (isConfirm) {
            swal("Deleted!", "Your site has been deleted.", "success");
            that.$store.dispatch('deleteSite', index)     
            // that.$store.dispatch({
            //   type: 'deleteComp',
            //   index: index
            // })
          } else {
            swal("Cancelled", "Phew! That was close! Your site is safe :)", "error");
          }
        });   
      }
    },
    computed: {
      ...mapGetters([
      'getSites',
      'siteId'
    ])
    },
    components: {
      mainNav
    }
  }
</script>

<style scoped lang="scss">
  
  .site {
    width: 250px;
    margin: 20px;
  }

  .sites {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .input-group > input {
    border: none;
    background-color: #fff;
  }

</style>