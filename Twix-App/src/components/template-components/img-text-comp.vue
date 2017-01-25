<template>
    <section id="one" class="main style1">
        <div class="container">
            <slot></slot>
            <div class="row 150%">
                <div class="6u 12u$(medium)">
                    <header class="major">
                        <div v-if="getEditMode" class="elem" data-medium="heading">
                            <medium-editor :text='propsData.heading' custom-tag='h2' v-on:edit='applyTextEdit'></medium-editor>
                        </div>
                        <h2 v-else v-html='propsData.heading'></h2>
                    </header>
                    <div v-if="getEditMode" class="elem" data-medium="subHeading">
                        <medium-editor :text='propsData.subHeading' custom-tag='p' v-on:edit='applyTextEdit'></medium-editor>
                    </div>
                    <p v-else v-html='propsData.subHeading'></p>
                </div>
                <div class="6u$ 12u$(medium) important(medium)">
                    <div class="img-input" v-if="getEditMode">
                        <v-text-input class="part input black--text" placeholder="Please provide Image URL" v-model="imgSrc"></v-text-input>
                        <v-btn class="part save" success large @click.native="saveImg">Save</v-btn>
                    </div>
                    <span class="image fit"><img :src="propsData.imgSrc" alt="" /></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'img-text-comp',
        props: ['propsData', 'index'],
        created() {
            this.imgSrc = this.propsData.imgSrc;
        },
        data() {
            return {
                imgSrc: ''
            }
        },
        computed: {
        ...mapGetters([
        'getEditMode',
            'getcomps'
      ])
        },
        methods: {
            applyTextEdit(text) {
                this.text = text
                let mediumElem = document.querySelector("[data-medium-focused]");
                let element = mediumElem.parentElement.getAttribute("data-medium");
                let editedText = {
                    text: this.text,
                    compIndex: this.index,
                    element: element,
                };
                this.$store.dispatch('editText', editedText)
            },
            saveImg() {
                let props = {
                    compIndex: this.index,
                    element: 'imgSrc',
                    text: this.imgSrc
                }
                this.$store.dispatch('editText', props);
                this.reloadVideo();
            }
        },
        components: {
            'medium-editor': VueMediumEditor
        }
    }
</script>

<style scoped>
    
    .image {
        width: 350px;
        margin: auto;
    }
    
    .img-input {
        display: flex;
    }

    .part {
        margin: 5px;
    }
    
    .elem:hover {
        box-shadow:inset 0px 0px 0px 2px orange;
    }

</style>