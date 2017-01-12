<template lang="html">
    <section class="add-component">
        <h4>Add Component</h4>
        <div class="form-group">
            <label for="sel1">Component to add:</label>
            <select class="form-control">
                <option value="" name="">Component 1</option>
            </select>
            <button type="" @click="addComponent">Add!</button>
        </div>
    </section>
</template>
<script lang="js">
  // import authService from '../../services/auth.service';

  export default  {
    name: 'add-component',
    props: ['index'],
    // beforeRouteEnter ( to, from, next ) {
    //   authService.protectRoute(next);
    // },    
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
        addComponent(){
            
        }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .add-component {
      border: 4px dashed lightcoral;
      padding: 20px;
      margin: 0 auto;
      text-align: center;
  }

  select {
      width: 30%;
      margin: 0 auto;
  }

</style>
