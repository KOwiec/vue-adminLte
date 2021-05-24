<template>
    <div :class="[ getClass,
            { 'd-inline': isInline }
         ]"
         :style="styled"
    >
        <input v-if="trueData || falseData"
                type="checkbox"
                :class="[getInputClass, getColor, getOutline]"
                :id="id"
                :name="name"
                :disabled="isDisabled"
                :checked="isChecked"
                :true-value="trueData"
                :false-value="falseData"
                v-model="model"
                @focus="focus = true"
                @blur="focus = false"
                @change="handleChange"
        >
        <input v-else
               type="checkbox"
               :class="[getInputClass, getColor, getOutline]"
               :id="id"
               :name="name"
               :disabled="isDisabled"
               :checked="isChecked"
               :value="data"
               v-model="model"
               @focus="focus = true"
               @blur="focus = false"
               @change="handleChange"
        >
        <label :class="getLabelClass" :for="id">{{text}}
            <slot></slot>
            <template v-if="!$slots.default || !text">{{data}}</template>
        </label>
    </div>
</template>

<script>
    import Emitter from '@/mixins/emitter-mixin';

    export default {
        name: "VaCheckBox",
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
                selfModel: false,
                focus: false,
                checkBoxGroup: null,
                isLimitExceeded: false
            };
        },
        props: {
            checkClass:  { type: String, default: 'form-check' },

            inline: { type: Boolean },

            styled: { type: String, default: ''},

            text: { type: String, default: '' },

            id: { type: String },

            name: { type: String },

            value: {},   //binding value

            data: {},    //value of the Checkbox

            trueData: [String, Number],   //value of the checkbox if it's checked

            falseData: [String, Number],  //value of the checkbox if it's not checked

            checked: Boolean,  //if the checkbox is checked

            disabled: { type: Boolean, default: false },

            isOutline:  Boolean,  // custom-control outline

            color: String,     // custom-control color

            //size: String,   // to implementation
        },
        computed: {
            getClass() {
               if(this.checkClass === 'form-check') {
                   return 'form-check'
               } else if(this.checkClass === 'custom-control') {
                  return 'custom-control custom-checkbox'
               } else if(this.checkClass.indexOf('icheck-') !== -1) {
                   return this.checkClass
               } else {
                   return ''
               }
            },
            getInputClass() {
                return {
                    'form-check-input' : this.checkClass === 'form-check',
                    'custom-control-input' : this.checkClass === 'custom-control',
                    '': this.checkClass.indexOf('icheck-') !== -1
                }
            },
            getLabelClass() {
                return {
                    'form-check-label' : this.checkClass === 'form-check',
                    'custom-control-label' : this.checkClass === 'custom-control',
                    '': this.checkClass.indexOf('icheck-') !== -1
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
                    if (parent.$options.componentName !== 'VaCheckBoxGroup') {
                        parent = parent.$parent;
                    } else {
                        this.checkBoxGroup = parent;
                        return true;
                    }
                }
                return false;
            },
            store() {
               return this.checkBoxGroup ? this.checkBoxGroup.value : this.value;
            },
            model: {
                get() {
                    return this.isGroup ? this.store
                                        : this.value !== undefined ? this.value
                                                                   : this.selfModel;
                },
                set(val) {
                    if (this.isGroup) {
                        this.isLimitExceeded = false;
                        if (this.checkBoxGroup.min !== undefined && val.length < this.checkBoxGroup.min) {
                            this.isLimitExceeded = true
                        }
                        if (this.checkBoxGroup.max !== undefined && val.length > this.checkBoxGroup.max) {
                            this.isLimitExceeded = true
                        }
                        if (this.isLimitExceeded === false ) {
                            this.dispatch('VaCheckBoxGroup', 'input', [val]);
                        }
                    } else {
                        this.$emit('input', val);
                        this.selfModel = val;
                    }
                }
            },
            isInline() {
                return this.isGroup
                    ? this.checkBoxGroup.inline || this.inline || (this.rootForm || {}).inline
                    : this.inline || (this.rootForm || {}).inline;
            },
            /* used to make the isDisabled judgment under max/min props */
            isLimitDisabled() {
                const { max, min } = this.checkBoxGroup;
                return !!(max || min) &&
                    (this.model.length >= max && !this.isChecked) ||
                    (this.model.length <= min && this.isChecked);
            },
            isDisabled() {
                return this.isGroup
                    ? this.checkBoxGroup.disabled || this.disabled || (this.rootForm || {}).disabled || this.isLimitDisabled
                    : this.disabled || (this.rootForm || {}).disabled;
            },
            isChecked() {
                if ({}.toString.call(this.model) === '[object Boolean]') {
                    return this.model;
                } else if (Array.isArray(this.model)) {
                    return this.model.indexOf(this.data) > -1;
                } else if (this.model !== null && this.model !== undefined) {
                    return this.model === this.trueData;
                }
            },
        },
        watch: {
            value(value) {
                this.dispatch('VaFormGroup', 'form-group-change', value);
            }
        },
        methods: {
            addToStore() {
                if ( Array.isArray(this.model) && this.model.indexOf(this.data) === -1 ) {
                    this.model.push(this.data);
                } else {
                    this.model = this.trueData || true;
                }
            },
            handleChange(ev) {
                if (this.isLimitExceeded) return;
                let value;
                if (ev.target.checked) {
                    value = this.trueData === undefined ? true : this.trueData;
                } else {
                    value = this.falseData === undefined ? false : this.falseData;
                }
                this.$emit('change', value, ev);
                this.$nextTick(() => {
                    if (this.isGroup) {
                        this.dispatch('VaCheckBoxGroup', 'change', [this.checkBoxGroup.value]);
                    }
                });
            }
        },
        created() {
            this.checked && this.addToStore();
        }
    }
</script>

