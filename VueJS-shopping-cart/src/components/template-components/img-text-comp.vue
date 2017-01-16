<template>
    <section id="one" class="main style1">
        <div class="container">
            <slot></slot>
            <div class="row 150%">
                <div class="6u 12u$(medium)">
                    <header class="major">
                        <h2>{{heading}}</h2>
                    </header>
                    <p>{{subHeading}}</p>
                </div>
                <div class="6u$ 12u$(medium) important(medium)">
                    <span class="image fit"><img :src="imgSrc" alt="" /></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'img-text-comp',
    props: [],
    data() {
      return {
          heading: 'This is a heading',
          subHeading: 'This is a sub-heading. Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.',
          imgSrc: 'http://placehold.it/450x280'
      }
    }
}
</script>

<style>

</style>

