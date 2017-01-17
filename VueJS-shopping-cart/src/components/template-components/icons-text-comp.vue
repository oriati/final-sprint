<template>
    <section id="two" class="main style2">
        <div class="container">
            <slot></slot>
            <div class="row 150%">
                <slot></slot>
                <div class="6u 12u$(medium)">
                    <ul class="major-icons">
                        <li><span class="icon style1 major" v-bind:class="icon1"></span></li>
                        <li><span class="icon style2 major" v-bind:class="icon2"></span></li>
                        <li><span class="icon style3 major" v-bind:class="icon3"></span></li>
                        <li><span class="icon style4 major" v-bind:class="icon4"></span></li>
                        <li><span class="icon style5 major" v-bind:class="icon5"></span></li>
                        <li><span class="icon style6 major" v-bind:class="icon6"></span></li>
                    </ul>
                </div>
                <div class="6u$ 12u$(medium)">
                    <header class="major">
                        <h2>{{heading}}</h2>
                    </header>
                    <p>{{text1}}</p>
                    <p>{{text2}}</p>
                    <p>{{text3}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'icons-text-comp',
    props: [],
    data() {
      return {
          icon1:'fa-code',
          icon2:'fa-bolt',
          icon3:'fa-camera-retro',
          icon4:'fa-bath',
          icon5:'fa-space-shuttle',
          icon6:'fa-ravelry',
          heading: 'This is the gallery heading',
          text1: 'Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.',
          text2: 'Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore',
          text3: 'Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.',
      }
    }
}
</script>

<style scoped lang="scss">

</style>