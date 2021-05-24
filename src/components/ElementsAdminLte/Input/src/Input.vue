<template>
       <input
           :type="getType"
           :class="[formControl, getSize, getState]"
           v-bind="$attrs"
           v-validate="rules"
           v-inputmask="mask"
           :disabled="isDisabled"
           ref="input"
           @focus="handleFocus"
           @blur="handleBlur"
           @input="handleInput"
           @change="handleChange"
       >
</template>

<script>
    // base on ElementUI input component
    import Emitter from '@/mixins/emitter-mixin';
    import inputmask from '@/directives/inputmask'

    export default {
        name: "VaInput",
        componentName: 'VaInput',

        directives: { inputmask },

        mixins: [ Emitter ],

        inheritAttrs: false,

        inject: {
            rootForm: {
                default: ''
            },
            rootFormGroup: {
                default: ''
            }
        },
        props: {
            value: [String, Number],

            type: { type: String, default: 'text' },

            mask:  { type: [Object, String] },

            rules:  { type: [Object, String] },

            size: { type: String },

            isFormControl: { type: Boolean, default: true },

            disabled: { type: Boolean, default: false },

            title: { type: String },

            state: { type: String, default: '' },

            readonly: { type: Boolean, default: false },

            validateEvent: { type: Boolean, default: false },

            showPassword: { type: Boolean, default: false },

            showState: { type: Boolean, default: true },
        },
        data() {
            return {
                currentState: this.state,
                focused: false,
                inputGroup: null,
                errorMessage: null,
                show: this.showState
            }
        },
       mounted() {
           this.setNativeInputValue();
        },
        watch: {
            value(value) {
                if (this.validateEvent) {
                    this.dispatch('VaFormGroup', 'form-group-change', [value]);
                }
            },
            nativeInputValue() {
                this.setNativeInputValue();
            },
            showState(val) {
                this.show = val
                if (this.validateEvent) {
                    this.handleValidation()
                }
            },
        },
        computed: {
            getType() {
                if(this.type === 'password') {
                    return this.showPassword ? 'text': 'password'
                }
                return this.type
            },
            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'VaInputGroup') {
                        parent = parent.$parent;
                    } else {
                        this.inputGroup = parent;
                        return true;
                    }
                }
                return false;
            },
            nativeInputValue() {
                return this.value === null || this.value === undefined ? '' : String(this.value);
            },
            getSize () {
                if (!this.size) return '';
                  return 'form-control-' + this.size
            },
            formControl () {
                if (this.isFormControl && this.name) {
                    return 'form-control ' + this.name
                }
                return this.isFormControl ? 'form-control ' : ''
            },
            getState () {
                switch (this.currentState) {
                    case 'valid':
                    case 'invalid':
                    case 'warning':
                        break;
                    default:
                        return ''
                }
                return 'is-' + this.currentState
            },
            isDisabled() {
                return this.isGroup
                    ? this.inputGroup.disabled || this.disabled || (this.rootForm || {}).disabled
                    : this.disabled || (this.rootForm || {}).disabled;
            },
        },
        methods: {
            setNativeInputValue() {
                const input = this.getInput();
                if (!input) return;
                if (input.value === this.nativeInputValue) return;
                input.value = this.nativeInputValue;
            },
            getInput() {
                return this.$refs.input;
            },
            focus() {
                this.getInput().focus();
            },
            blur() {
                this.getInput().blur();
            },
            handleFocus() {
                this.focused = true
                this.$emit('focus', event)
            },
            handleBlur() {
                this.focused = false
                this.$emit('blur', event)
                if (this.validateEvent) {
                    this.dispatch('VaFormGroup', 'form-group-blur', [this.value]);
                }
            },
            handleChange(event) {
                this.$emit('change', event.target.value);
            },
            handleInput(event) {
                // hack for https://github.com/ElemeFE/element/issues/8548
                // should remove the following line when we don't support IE
                if (event.target.value === this.nativeInputValue) return;

                this.$emit('input', event.target.value);

                // ensure native input value is controlled
                // see: https://github.com/ElemeFE/element/issues/12850
                this.$nextTick(this.setNativeInputValue);

                if (this.validateEvent) {
                   // this.$nextTick(this.showStateFromGroup)
                    this.handleValidation()
                }
            },
            handleValidation() {
                    this.$validator.validate().then(valid => {
                        if (valid) {
                            this.currentState = this.show ? 'valid' : ''
                            this.errorMessage = ''
                        }
                        else {
                            const input = this.getInput();
                            if (!input) return;
                            const name = input.name
                            this.currentState = this.show ? 'invalid' : ''
                            this.errorMessage = this.$validator.errors.has(name)
                                ? this.$validator.errors.first(name)
                                : 'ERROR !!!';
                        }
                        this.sendResult()
                    });
            },
            sendResult() {
                this.isGroup && this.dispatch('VaInputGroup', 'input-group-change', this);
                this.$nextTick(() => {
                    this.focus()
                })
            }
        },
        created() {
           // console.log(this.$attrs)
        }
    }
</script>


