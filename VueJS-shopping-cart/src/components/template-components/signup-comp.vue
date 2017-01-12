<template>
    <section id="four" class="main style2 special">
        <div class="container">
            <header class="major">
                <h2>{{cta}}</h2>
            </header>
            <p>{{subHeading}}</p>
            <ul class="actions uniform">
                <li><a href="#" class="button special">{{button1Text}}</a></li>
                <li><a href="#" class="button">{{button2Text}}</a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'signup-comp',
    props: [],
    data() {
      return {
          cta: 'This is a Call to Action!!!',
          subHeading: 'This is a sub-heading. Adipiscing a commodo ante nunc',
          button1Text: 'Sign Up',
          button2Text: 'Learn More'
      }
    }
}
</script>

<style>
    
</style>