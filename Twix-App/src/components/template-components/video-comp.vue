<template lang="html">

  <section class="video-comp">
    <h1>video-comp Component</h1>
    <div v-if="getEditMode">
      <v-text-input class="input black--text" placeholder="Please provide Youtube Video Adress" v-model="videoUrl"></v-text-input>
      <v-btn success @click.native="saveVideo">Save</v-btn>
    </div>
    <div class="video-container">
      <iframe class="youtube" frameborder="0" allowfullscreen></iframe>
    </div>
  </section>

</template>

<script lang="js">
  import { mapGetters } from 'vuex';

  export default {
    name: 'video-comp',
    props: ['propsData', 'index'],
    mounted() {
      this.reloadVideo();
    },
    data() {
      return {
        videoUrl: ''
      }
    },
    methods: {
      reloadVideo() {
        this.videoUrl = this.propsData.youtubeUrl;
        let videoId = this.videoUrl.substring(this.videoUrl.indexOf('=') + 1)
        let embedUrl = `https://www.youtube.com/embed/${videoId}`
        let video = document.querySelector('.youtube');
        video.src = embedUrl;
      },

      saveVideo() {
        let props = {
          compIndex: this.index,
          element: 'youtubeUrl',
          text: this.videoUrl
        }
        this.$store.dispatch('editText', props);
        this.reloadVideo();
      }
    },
    computed: {
       ...mapGetters([
        'getEditMode',
        'getComps'
      ])
    }
  }
</script>

<style scoped lang="scss">

.video-container {
	position:relative;
	padding-bottom:56.25%;
	padding-top:30px;
	height:0;
	overflow:hidden;
}

.video-container iframe, .video-container object, .video-container embed {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
}
</style>