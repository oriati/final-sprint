<template>
    <section id="header">
        <div class="inner">
            <span class="icon major fa-cloud"></span>
            <h1>{{ propsData.heading }}</h1>
            <p>{{propsData.subHeading}}</p>
            <ul class="actions">
                <li><a href="#one" class="button scrolly">{{propsData.buttonText}}</a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'header-comp',
    props: ['propsData'],
    data() {
      return {
        //   heading: 'Hi, I\'m Photon, another fine little freebie from Accumsan',
        //   subHeading: 'feugiat mi commodo erat lorem ipsum, sed magna lobortis feugiat sapien sed etiam volutpat accumsan.',
        //   buttonText: 'Make this button whatever you want!'
      }
    },
    computed: {
        
  }
}

</script>

<style>
    
</style>