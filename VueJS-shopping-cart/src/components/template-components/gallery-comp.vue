<template>
    <section id="three" class="main special">
        <div class="container">
            <header class="major">
                <h2>{{heading}}</h2>
            </header>
            <p>{{subHeading}}</p>
            <div class="row 150%">
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="gallery1.imgSrc" alt="" /></span>
                    <h3>{{gallery1.heading}}</h3>
                    <p>{{gallery1.subHeading}}</p>
                    <ul class="actions">
                        <li><a href="#" class="button">{{gallery1.buttonText}}</a></li>
                    </ul>
                </div>
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="gallery2.imgSrc" alt="" /></span>
                    <h3>{{gallery2.heading}}</h3>
                    <p>{{gallery2.subHeading}}</p>
                    <ul class="actions">
                        <li><a href="#" class="button">{{gallery2.buttonText}}</a></li>
                    </ul>
                </div>
                <div class="4u 12u$(medium)">
                    <span class="image fit"><img :src="gallery3.imgSrc" alt="" /></span>
                    <h3>{{gallery2.heading}}</h3>
                    <p>{{gallery2.subHeading}}</p>
                    <ul class="actions">
                        <li><a href="#" class="button">{{gallery2.buttonText}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default  {
    name: 'gallery-comp',
    props: [],
    data() {
      return {
          heading: 'This is the gallery heading',
          subHeading: 'This is the gallery sub-heading',
          gallery1: {
              imgSrc: 'http://placehold.it/320x210',
              heading: 'Gallery 1',
              subHeading: 'Sub-heading for gallery 1 - Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet',
              buttonText: 'Enter Gallery 1'
          },
          gallery2: {
              imgSrc: 'http://placehold.it/320x210',
              heading: 'Gallery 2',
              subHeading: 'Sub-heading for gallery 2 -  - Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet',
              buttonText: 'Enter Gallery 2'
          },
          gallery3: {
              imgSrc: 'http://placehold.it/320x210',
              heading: 'Gallery 3',
              subHeading: 'Sub-heading for gallery 3 - - Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet',
              buttonText: 'Enter Gallery 3'
          }
      }
    }
}
</script>

<style>
    
    .backgroundred {
        background-color: orangered;
    }
    .border {
        border: 4px cadetblue solid;
    }
</style>