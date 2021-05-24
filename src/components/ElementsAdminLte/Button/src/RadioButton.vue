<template>
    <label class="btn"
           :class="[ btnTheme,
                     btnColor,
                     size ? 'btn-' +size : '',
                     { 'active' : model === data },
                   ]">
        <input
              type="radio"
              :name="name"
              :id="id"
              :value="data"
              v-model="model"
              :autocomplete="autocomplete"
              :disabled="isDisabled"
              @change="handleChange"
        >
        <span v-if="!name">{{data}}</span>
        <span v-else>{{name}}</span>
    </label>
</template>

<script>
    import Emitter from '@/mixins/emitter-mixin';

    export default {
        name: "VaRadioButton",
        mixins: [ Emitter ],
        data() {
            return {
               value: false
            };
        },
        props: {
            name: { String },

            id: { type: String },

            theme: { type: String, default: 'default' },

            color: { type: String, default: '' },

            autocomplete: { type: String, default: 'off' },

            isDisabled: { type: Boolean, default: false },

            data: {},
        },
        computed: {
            model: {
                get() {
                    return this.buttonGroup.value;
                },
                set(value) {
                    this.buttonGroup.$emit('input', value);
                }
            },
            buttonGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'VaButtonGroup') {
                        parent = parent.$parent;
                    } else {
                        return parent;
                    }
                }
                return false;
            },
            btnTheme() {
                return this.theme ? `btn-${this.theme}` : ''
            },
            btnColor() {
                return this.color ? `bg-${this.color}` : ''
            },
            size() {
                return this.buttonGroup.size
            },
        },
        methods: {
            handleChange() {
                this.$nextTick(() => {
                     this.dispatch('VaButtonGroup', 'handleChange', this.model);
                });
            }
        }
    }
</script>
