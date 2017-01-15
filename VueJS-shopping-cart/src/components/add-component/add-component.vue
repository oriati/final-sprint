<template lang="html">
    <section class="add-component">
        <h4>Add Component</h4>
        <div class="form-group">
            <label for="sel1">Component to add:</label>
            <select class="form-control" v-model="selected">
                <option v-for="temp in templates.compsTemplatesInterfaces" name="">
                    {{temp.name}}
                </option>
            </select>
            {{selected}}
            <button type="" @click="addComponent(selected)">Add!</button>
        </div>
    </section>
</template>
<script lang="js">
    // import authService from '../../services/auth.service';
    import { mapActions } from 'vuex'
    import templates from '../../interface/comp.templates';

    export default {
        name: 'add-component',
        props: ['index'],
        // beforeRouteEnter ( to, from, next ) {
        //   authService.protectRoute(next);
        // },    
        mounted() {

        },
        data() {
            return {
                selected: 'Choose a component',
                templates: templates,

            }
        },
        methods: {
            addComponent() {
            this.$store.dispatch('addComponent', this.selected)
            console.log('this.selected', this.selected);
            
        }
    },
    computed: {

    }
    }
</script>

<style scoped lang="scss">
  .add-component {
      border: 4px dashed lightseagreen;
      padding: 20px;
      margin: 0 auto;
      text-align: center;
  }

  select {
      width: 30%;
      margin: 0 auto;
  }

</style>