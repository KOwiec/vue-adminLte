<template>
    <div class="form-group"
         :class="isHorizontal ? 'row' : ''"
         role="group"
    >
        <div v-if="isHorizontal"
             :class="[offset, getInputCol]">
            <slot name="horizontal"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    import Emitter from 'element-ui/src/mixins/emitter';

    export default {
        name: "VaFormGroup",
        componentName: "VaFormGroup",
        mixins: [Emitter],
        //inject: ['rootForm'],

        provide() {
            return {
                rootFormGroup: this
            };
        },

        props: {
            value: {},
            isHorizontal: { type: Boolean, default: false },
            inputColSize: { type: String, default: 'sm-10' },
            offset: { type: String, default: '' },     //col-sm-offset-2

        },
        watch: {
            value(value) {
                this.dispatch('VaForm', 'form-change', [value]);
            }
        },
        computed: {
            getInputCol() {
                return `col-${this.inputColSize}`
            }
        },
        created() {
            this.$on('form-group-change', value => {
                 this.$emit('change', value);
            });
            this.$on('form-group-blur', this.handledBlur);
        },
        methods: {
            handledBlur() {}
        }
    }
</script>
