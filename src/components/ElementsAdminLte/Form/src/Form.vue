<template>
    <form :class="[ computedClass, position]">
        <slot></slot>
    </form>
</template>

<script>
    // todo
    export default {
        name: "VaForm",
        componentName: 'VaForm',

        provide() {
            return {
                rootForm: this
            };
        },
        props: {
            isHorizontal: { type: Boolean, default: false },
            inline: { type: Boolean, default: false },
            position: { type: String, default: 'ml-3' },
            disabled: Boolean,
        },
        computed: {
            computedClass() {
                return {
                    'form-inline' : this.inline,
                    'form-horizontal' : this.isHorizontal,
                }
            }
        }
    }
</script>
