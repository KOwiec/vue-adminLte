<template>
    <div class="checkbox-group" role="group" aria-label="checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
    import Emitter from '@/mixins/emitter-mixin';

    export default {
        name: "VaCheckBoxGroup",
        componentName: 'VaCheckBoxGroup',
        mixins: [Emitter],
        inject: {
            rootFormGroup: {
                default: ''
            }
        },
        props: {
            value: {},
            disabled: Boolean,
            inline: Boolean,
            min: Number, //minimum number of checkbox checked
            max: Number, //maximum number of checkbox checked
            size: String, // size of checkbox - to implementation
        },
        computed: {

        },
        watch: {
            value(value) {
                this.dispatch('VaFormGroup', 'form-group-change', [value]);
            }
        }
    }
</script>
