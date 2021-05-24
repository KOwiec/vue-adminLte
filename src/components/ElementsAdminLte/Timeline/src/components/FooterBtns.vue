<template>
    <div class="btn-wrapper">
        <a class="btn"
           :class="getTheme"
           @click="handleClick(button.name)">

            <i :class="button.icon"></i>
            {{button.text}}
        </a>
    </div>
</template>

<script>
    export default {
        name: "FooterBtns",
        props: {
            button: { type: Object }
        },
        computed: {
            getTheme() {
                if (this.button.theme) {
                    return  `btn-${this.button.theme} btn-sm`
                }
                else if(this.button.color) {
                    return`bg-${this.button.color} btn-sm`
                }
            },
        },
        methods: {
            handleClick(evt) {
                 this.$emit('footer-btn-click', evt);
            }
        }
    }
</script>

<style scoped>
    .btn-wrapper {
        display:inline-block;
        padding-right: 5px;
    }
</style>