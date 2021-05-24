<template>
    <div class="radio-group" role="group">
        <slot></slot>
    </div>
</template>

<script>
    import Emitter from '@/mixins/emitter-mixin';

    export default {
        name: "VaRadioGroup",
        componentName: 'VaRadioGroup',
        mixins: [Emitter],
        inject: {
            rootFormGroup: {
                default: ''
            }
        },
        props: {
            value: {},
            inline: Boolean,
            disabled: Boolean,
            size: String,  // size of checkbox - to implementation
        },
        computed: {

        },
        created() {
            this.$on('handleChange', value => {
                this.$emit('change', value);
            });
        },
        watch: {
            value(value) {
                this.dispatch('VaFormGroup', 'form-group-change', [value]);
            }
        }
    }
</script>
