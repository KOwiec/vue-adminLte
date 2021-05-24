<template>
    <div :class="[ getGroupType, horizontal, size ]"
         :style="styled">

        <!-- state icon before label (not horizontal) -->
        <i v-if="validateState && showError && !isHorizontal" :class="computedIcons"></i>

        <!-- icon before label -->
        <label v-if="$slots.title" class="control-label">
            <slot name="title"></slot>
        </label>

        <!-- label before input component-->
        <label v-else-if="title" :for="id" :class="getLabelCol" >
            {{ title }}
        </label>

        <!-- btn before input comp-->
        <div v-if="$slots.slotPrefixButton" class="input-group-prepend">
            <slot name="slotPrefixButton"></slot>
            <slot name="slotPrefixDropdown"></slot>
        </div>

        <!-- addon before input comp-->
        <div v-if="prefixAddonText || $slots.slotPrefixAddonText" class="input-group-prepend">
            <span  class="input-group-text">
                 {{ prefixAddonText }}
                 <slot name="slotPrefixAddonText"></slot>
            </span>
        </div>

        <!-- input horizontal-->
        <div v-if="isHorizontal" :class="getInputCol">
            <slot name="horizontal"></slot>
            <!--  errors from validator-->
            <div v-if="validateMessage && showError && showMessage" class="invalid-feedback">
                {{ validateMessage }}
            </div>
        </div>

        <!-- input -->
        <slot></slot>

        <!-- addon after input comp-->
        <div  v-if="suffixAddonText || $slots.slotSuffixAddonText" class="input-group-append">
           <span  class="input-group-text">
                 {{ suffixAddonText }}
                <slot name="slotSuffixAddonText"></slot>
           </span>
        </div>

        <!-- btn after input component -->
        <span v-if="$slots.slotSuffixButton" class="input-group-append">
            <slot name="slotSuffixButton"></slot>
            <slot name="slotSuffixDropdown"></slot>
        </span>

        <!-- if necessary help block OR errors after input comp-->
        <p v-if="helpBlock" class="help-block">{{ helpBlock }}</p>

        <!--  errors from validator-->
        <div v-if="validateMessage && showError && !isHorizontal" class="invalid-feedback">
            {{ validateMessage }}
        </div>

    </div>
</template>

<script>
    import Emitter from '@/mixins/emitter-mixin';

    export default {
        name: "VaInputGroup",
        componentName: 'VaInputGroup',
        mixins: [Emitter],
        inject: {
            rootFormGroup: {
                default: ''
            }
        },
        props: {
            value: {},

            id: { type: String, default: null },

            groupType: { type: String, default: 'form' },

            isHorizontal: { type: Boolean, default: false },

            size: { type: String },

            disabled: Boolean,

            styled: { type: String, default: '' },

            title: { type: String },

            prefixAddonText: { type: String },

            suffixAddonText: { type: String },

            labelColSize: { type: String, default: 'sm-3' },

            inputColSize: { type: String, default: 'sm-9' },

            helpBlock: { type: String },
        },
        data() {
            return {
                validateMessage: '',
                validateState: '',
                showError: null
            }
        },
        computed: {
            computedIcons() {
                return {
                    'fa fa-check' : this.validateState === 'valid',
                    'far fa-times-circle' : this.validateState === 'invalid',
                    'far fa-bell' : this.validateState === 'warning',
                    '' : this.validateState === 'default'
                }
            },
            getGroupType () {
                return this.groupType + '-group'
            },
            getSize () {
                if (!this.size) {
                    return ''
                }
                return this.groupType + '-group-' + this.size
            },
            horizontal() {
                return this.isHorizontal ? 'row' : ''
            },
            getInputCol() {
                return `col-${this.inputColSize}`
            },
            getLabelCol() {
                return this.isHorizontal ? `col-${this.labelColSize} col-form-label`: ''
            },
        },
        methods: {
            handleChange(value) {
                const { currentState, errorMessage, show } = value;
                this.validateState = currentState
                this.validateMessage = errorMessage
                this.showError = show
            },
        },
        mounted() {
            this.$on('input-group-change', this.handleChange);
        }
    }
</script>


