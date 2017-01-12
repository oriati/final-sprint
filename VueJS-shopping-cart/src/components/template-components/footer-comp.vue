<template>
   <section id="footer">
        <ul class="icons">
            <li><a href="#" class="icon alt" :class="icon1.class"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon alt" :class="icon2.class"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon alt" :class="icon3.class"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon alt" :class="icon4.class"><span class="label">GitHub</span></a></li>
            <li><a href="#" class="icon alt" :class="icon5.class"><span class="label">Email</span></a></li>
        </ul>
        <ul class="copyright">
            <li>{{copyright}}</li>
        </ul>
    </section>
</template>

<script>
export default  {
    name: 'footer-comp',
    props: [],
    data() {
      return {
          icon1: {
              class: 'fa-twitter',
          },
          icon2: {
              class: 'fa-facebook',
          },
          icon3: {
              class: 'fa-instagram',
          },
          icon4: {
              class: 'fa-github',
          },
          icon5: {
              class: 'fa-email',
          },
          copyright: 'UntitledDesign: HTML5 UP'
      }
    }
}
</script>

<style>
    
</style>