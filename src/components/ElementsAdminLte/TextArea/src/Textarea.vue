<template>
     <div class="textarea-container">
       <label :for="id">
           {{title}}
           <slot></slot>
       </label>
       <textarea
            :class="areaClass"
            :id="id"
            ref="textarea"
            v-bind="$attrs"
            v-model="currentValue"
            :style="textareaStyle"
            :disabled="isDisabled"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
            @change="handleChange">
       </textarea>
    </div>
</template>

<script>
    // base on ElementUI input component
    import Emitter from '@/mixins/emitter-mixin';
    import calcTextareaHeight from './calcTextareaHeight';
    import merge from '@/utils/merge';

    const DEFAULT_OPTIONS = {
        //scrollbars: { autoHide: 'scroll' },
        sizeAutoCapable: false,
        textarea : {
            dynWidth  : false,
            dynHeight : false,
            inheritedAttrs : ["style", "class"]
        },
    };

    export default {
        name: "VaTextarea",
        componentName: 'VaTextarea',

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
            areaClass:  { type: String, default: 'form-control' },

            value: [String, Number],

            id: { type: String, default: null },

            title: { type: String, default: 'Textarea' },

            disabled: { type: Boolean, default: false },

            autosize: {  type: [Boolean, Object], default: false },

            readonly: { type: Boolean, default: false },

            resize: String,

            // scrollbar
            scroll: { type: Boolean, default: false },
            options: {type:  Object, default: null},
            extensions: {type:  Object, default: null},

        },
        data() {
            return {
                currentValue: null,
                formGroup: null,
                focused: false,
                textareaCalcStyle: {},
                scrollbar: null,
            }
        },
        mounted() {
            this.copyValue(this.value);
            this.resizeTextarea();
            this.mountScrollbar();
        },
        watch: {
            value(value) {
                // This watch works from the code side of the 2-way-binding:
                this.copyValue(value);
                this.$nextTick(this.resizeTextarea);
            }
        },
        computed: {
            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'VaFormGroup') {
                        parent = parent.$parent;
                    } else {
                        this.formGroup = parent;
                        return true;
                    }
                }
                return false;
            },
            isDisabled() {
                return this.isGroup
                    ? this.formGroup.disabled || this.disabled || (this.rootForm || {}).disabled
                    : this.disabled || (this.rootForm || {}).disabled;
            },
            textareaStyle() {
                return merge({}, this.textareaCalcStyle, { resize: this.resize });
            }
        },
        methods: {
            nativeInputValue(val) {
                return val === null || val === undefined ? '' : String(val);
            },
            copyValue(value) {
                this.currentValue = this.nativeInputValue(value)
            },
            mountScrollbar() {
                if (this.scroll) {
                    this.scrollbar = OverlayScrollbars(document.getElementById(this.id), this.options || DEFAULT_OPTIONS, this.extensions || {});
                }
            },
            handleFocus() {
                this.focused = true
                this.$emit('focus', event)
            },
            handleBlur() {
                this.focused = false
                this.$emit('blur', event)
            },
            handleInput(event) {
                const value = event.target.value;
                this.$emit('input', value);
                this.isGroup && this.dispatch('VaFormGroup', 'form-group-change', value);
            },
            handleChange(event) {
                this.$emit('change', event.target.value);
            },
            resizeTextarea() {
                if (this.$isServer) return;
                const { autosize } = this;
                if (!autosize) {
                    this.textareaCalcStyle = {
                        minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
                    };
                    return;
                }
                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;

                this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            },
        },
        beforeDestroy () {
            if (OverlayScrollbars.valid(this.scrollbar)) {
                this.scrollbar.destroy();
            }
        }
    }
</script>

<style scoped>

</style>


