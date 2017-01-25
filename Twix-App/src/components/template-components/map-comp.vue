<template lang="html">
  <section>
    <div class="map-input" v-if="getEditMode">
      <v-text-input class="part input black--text" placeholder="Please provide a full address" v-model="loc.address"></v-text-input>
      <!--<v-text-input class="part input black--text" placeholder="Please provide Longtitude" v-model="loc.lng"></v-text-input>-->
      <v-btn class="part save" success large @click.native="saveLoc">Save</v-btn>
    </div>
    <div class="map-comp">
      <div class="map-info">
        <div>
          <header class="major">
            <div v-if="getEditMode" class="elem" data-medium="heading">
              <medium-editor :text='propsData.heading' custom-tag='h2' v-on:edit='applyTextEdit'></medium-editor>
            </div>
            <h2 v-else v-html='propsData.heading'></h2>
          </header>
          <div v-if="getEditMode" class="elem" data-medium="subHeading">
            <medium-editor :text='propsData.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
          </div>
          <p v-else v-html='propsData.subHeading'></p>
        </div>
      </div>
      <div class="map-info">
        <div class="map-container">
          <div class="map" ref="map"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
  import { mapGetters } from 'vuex';
  import GoogleMapsLoader from 'google-maps';
  GoogleMapsLoader.KEY = 'AIzaSyA0sVNvuL2BJAj8Hn4yr_w-j8CHamvKboc';

  export default {
    name: 'map-comp',
    props: ['propsData', 'index'],
    created() {
      this.loc.address = this.propsData.loc.address;
  },
    mounted() {
      this.loadMap();
    },
    data() {
      return {
        map: null,
        loc: {
          lat: null,
          lng: null,
          address: ''
        }
      }
    },
    methods: {
      loadMap() {
        this.loc.lat = +this.propsData.loc.lat;
        this.loc.lng = +this.propsData.loc.lng;
        this.loc.address = this.propsData.loc.address;
        const options = {
          zoom: 15,
          center: { lat: this.loc.lat, lng: this.loc.lng }
        };
        GoogleMapsLoader.load(google => {
          this.map = new google.maps.Map(this.$refs.map, options);
          var geocoder = new google.maps.Geocoder();
          this.geocodeAddress(geocoder, this.map);
        });
      },

      geocodeAddress(geocoder, resultsMap) {
        var address = this.loc.address;
        geocoder.geocode({ 'address': address }, function (results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location,
              title: address
            });
          } else {
            console.log('Geocode was not successful for the following reason: ' + status);
          }
        });
      },
      applyTextEdit(text) {
        this.text = text
        let mediumElem = document.querySelector("[data-medium-focused]");
        let element = mediumElem.parentElement.getAttribute("data-medium");
        let editedText = {
          text: this.text,
          compIndex: this.index,
          element: element,
        };
        this.$store.dispatch('editText', editedText)
      },
      saveLoc() {
        let props = {
          compIndex: this.index,
          element: 'loc',
          text: this.loc
        }
        console.log('loc', props.text);
        this.$store.dispatch('editText', props);
        this.loadMap();
      }
    },
    computed: {
    ...mapGetters([
      'getEditMode'
    ])
    },
    components: {
      'medium-editor': VueMediumEditor
    }
  }
</script>

<style scoped lang="scss">
  .map-comp {
    /*display: flex;*/
    /*flex-wrap: wrap;*/
  }

  .part {
    margin: 5px;
  }

  .map-input {
    display: flex;
  }

  .map-info {
    width: 100%;
  }

  .map-container {
    min-width: 250px;
    height: 350px;
    overflow: hidden;
    
  }

  .map {
    width: 100%;
    height: 100%;
    /*position: absolute !important;*/
    /*margin: auto auto;*/
}

   .elem:hover {
        box-shadow:inset 0px 0px 0px 2px orange;
    }
</style>