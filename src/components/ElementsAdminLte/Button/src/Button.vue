<template>
    <button :type="type"
            class="btn"
            :class="[ dropdown, block, btnTheme, disabled, flat, getSize, getAlign ]"
            :data-toggle="getDataToggle"
            :style="setStyle"
            :id="id"
            :title="title"
            @click="handleClick"
    >
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        {{name}}
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "VaButton",
        props: {
            type: { type: String, default: 'button' },

            name: { type: String, default: '' },

            theme: { type: String, default: 'default' },

            setStyle: { type: String, default: '' },

            icon: { type: String, default: '' },

            id: { type: String },

            isOutline: { type: Boolean, default: false },

            isDisabled: { type: Boolean, default: false },

            isFlat: { type: Boolean, default: false },

            isDropdown: { type: Boolean, default: false },

            isTooltip: { type: Boolean, default: false },

            size: { type: String, default: '' },

            isBlock: { type: Boolean,  default: false },

            isGradient: { type: Boolean,  default: false },

            align: { type: String,  default: '' },

            title: {  type: String, default: '' },

            loading: Boolean,
        },
        mounted () {
                'use strict';
                /*** Handle jQuery plugin naming conflict between jQuery UI and Bootstrap ***/
                $.widget.bridge('uibutton', $.ui.button);
                $.widget.bridge('uitooltip', $.ui.tooltip);

                $('[data-toggle="tooltip"]').tooltip();
        },
        computed: {
            btnTheme() {
                if (this.isOutline && this.theme !=='default') {
                    return `btn-outline-${this.theme}`
                }
                else if (this.isOutline) {
                    return 'btn-outline-primary'
                }
                else if (this.isGradient && this.theme !=='default') {
                    return `bg-gradient-${this.theme}`
                }
                else if (this.isGradient) {
                    return 'bg-gradient-primary'
                }
                return `btn-${this.theme}`
            },
            disabled() {
                return this.isDisabled || this.loading ? 'disabled' : ''
            },
            flat() {
                return this.isFlat ? 'btn-flat' : ''
            },
            block() {
               return this.isBlock ? 'btn-block':''
            },
            dropdown() {
                return this.isDropdown ? 'dropdown-toggle dropdown-icon': ''
            },
            getDataToggle() {
                if (this.isDropdown) {
                    return 'dropdown'
                } else if (this.isTooltip) {
                    return 'tooltip'
                }
            },
            getAlign() {
                switch (this.align) {
                    case 'left':
                    case 'right':
                        break;
                    default:
                        return ''
                }

                return 'pull-' + this.align
            },
            getSize() {
                return `btn-${this.size}`
            }
        },
        methods: {
            handleClick(evt) {
               this.$emit('btn-click', evt);
           }
        }
    }
</script>

