<template>
    <section id="header">
        <div class="inner">
            <slot></slot>
            <span class="icon major fa-cloud"></span>
            <h1>{{propsData.heading}}</h1>
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
      }
    },
    computed: {
        
  }
}

</script>

<style scoped lang="scss">

</style>