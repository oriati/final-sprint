<template>
    <section id="header">
        <div class="inner">
            <span class="icon major fa-cloud"></span>
            <h1 contenteditable="true" v-model="heading">{{heading}}</h1>
            <p contenteditable="true" v-model="subHeading">{{subHeading}}</p>
            <ul class="actions">
                <li><a href="#one" class="button scrolly" contenteditable="true" v-model="buttonText">{{buttonText}}</a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'header-comp',
    props: [],
    data() {
      return {
          heading: 'Hi, I\'m Photon, another fine little freebie from Accumsan',
          subHeading: 'feugiat mi commodo erat lorem ipsum, sed magna lobortis feugiat sapien sed etiam volutpat accumsan.',
          buttonText: 'Make this button whatever you want!'
      }
    }
}

</script>

<style>
    
</style>