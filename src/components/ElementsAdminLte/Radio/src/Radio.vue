<template>
    <div :class="[ getClass,
            { 'd-inline': isInline },
         ]"
         :style="styled"
    >
        <input
              type="radio"
              :class="[getInputClass, getColor, getOutline]"
              :id="id"
              :name="name"
              :value="data"
              v-model="model"
              :disabled="isDisabled"
              @focus="focus = true"
              @blur="focus = false"
              @change="handleChange"
        >
        <label :class="getLabelClass" :for="id">{{text}}
            <slot></slot>
            <template v-if="!$slots.default">{{data}}</template>
        </label>
    </div>

</template>

<script>
    import Emitter from '@/mixins/emitter-mixin';

    export default {
        name: "VaRadio",
        mixins: [ Emitter ],
        inject: {
            rootForm: {
                default: ''
            },
            rootFormGroup: {
                default: ''
            }
        },
        data() {
            return {
                focus: false,
                radioGroup: null
            };
        },
        props: {
            radioClass:  { type: String, default: 'form-check' },

            styled: { type: String, default: ''},

            text: { type: String, default: '' },

            inline: Boolean,

            id: { type: String },

            name: { type: String },

            value: {},  //binding value

            data: {},    //the value of Radio

            disabled: { type: Boolean, default: false },

            //size: String  // size of radio - to implementation
        },
        computed: {
            getClass() {
                if(this.radioClass === 'form-check') {
                    return 'form-check'
                } else if(this.radioClass === 'custom-control') {
                    return 'custom-control custom-radio'
                } else if(this.radioClass.indexOf('icheck-') !== -1) {
                    return this.radioClass
                } else {
                    return ''
                }
            },
            getInputClass() {
                return {
                    'form-check-input' : this.radioClass === 'form-check',
                    'custom-control-input' : this.radioClass === 'custom-control',
                    '': this.radioClass.indexOf('icheck-') !== -1
                }
            },
            getLabelClass() {
                return {
                    'form-check-label' : this.radioClass === 'form-check',
                    'custom-control-label' : this.radioClass === 'custom-control',
                    '': this.radioClass.indexOf('icheck-') !== -1
                }
            },
            // adminLte 3.1.0-rc
            getColor() {
                if (!this.color) {
                    return ''
                }
                return 'custom-control-input-' + this.colors
            },
            // adminLte 3.1.0-rc
            getOutline() {
                if (!this.isOutline && !this.color) {
                    return ''
                }
                return 'custom-control-input-outline'
            },
            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'VaRadioGroup') {
                        parent = parent.$parent;
                    } else {
                        this.radioGroup = parent;
                        return true;
                    }
                }
                return false;
            },
            model: {
                get() {
                    return this.isGroup ? this.radioGroup.value : this.value;
                },
                set(val) {
                    if (this.isGroup) {
                        this.dispatch('VaRadioGroup', 'input', [val]);
                    } else {
                        this.$emit('input', val);
                    }
                }
            },
            isInline() {
                return this.isGroup
                    ? this.radioGroup.inline || this.inline || (this.rootForm || {}).inline
                    : this.inline || (this.rootForm || {}).inline;
            },
            isDisabled() {
                return this.isGroup
                    ? this.radioGroup.disabled || this.disabled || (this.rootForm || {}).disabled
                    : this.disabled || (this.rootForm || {}).disabled;
            }
        },
        methods: {
            handleChange() {
                this.$nextTick(() => {
                    this.$emit('change', this.model);
                    this.isGroup && this.dispatch('VaRadioGroup', 'handleChange', this.model);
                });
            }
        }
    }
</script>
