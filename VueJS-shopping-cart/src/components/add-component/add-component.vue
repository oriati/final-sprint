<template lang="html">
    <section class="add-component">
        <div class="form-group">
            <label for="sel1">Add Component</label>
            <select class="form-control" v-model="selected">
                <option v-for="temp in templates.compsTemplatesInterfaces" name="">
                    {{temp.name}}
                </option>
            </select>
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
            let addedComponent = {
                index: this.index,
                newComp: templates.compsTemplatesInterfaces[this.selected], 
                compType: this.selected,
            }
            this.$store.dispatch('addComponent', addedComponent)

        }
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