<template>
    <div>
       <select :class="[getForm, getType, getTheme]"
            :data-dropdown-css-class="theme ? getTheme : ''"
            :id="id"
            :name="name"
            :disabled="isDisabled"
            :required="required"
            :style="styled"
            :data-placeholder="placeholder">
           <slot></slot>
       </select>
    </div>
</template>

<script>
    //see details - https://github.com/godbasin/vue-select2/blob/npm-publish-code/src/Select2.vue
    import 'admin-lte/plugins/select2/js/select2.full.min.js'

    export default {
        name: "VaSelect2",
        data() {
            return {
                select2: null
            };
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            id: { type: String, default: '' },

            name: { type: String, default: '' },

            isBootstrap: { type: Boolean, default: false },

            theme: { type: String, default: '' },

            isMultiple: { type: Boolean, default: false },

            isDisabled: { type: Boolean, default: false },

            required: { type: Boolean, default: false },

            placeholder: { type: String, default: '' },

            styled: { type: String, default: '' },

            //https://select2.org/configuration/options-api
            settings: { type: Object,  default: () => {} },

            options: { type: Array,  default: () => [] },

            value: null
        },
        watch: {
            options(val) {
                this.setOption(val);
            },
            value(val) {
                this.setValue(val);
            }
        },
        computed: {
           getForm() {
               return this.isMultiple ? 'form-control' : ''
           },
           getTheme() {
               return this.theme ? 'select2-' +this.theme : ''
           },
           getType() {
               return this.isBootstrap ? 'select2bs4' : 'select2'
           }
        },
        methods: {
            setOption(val = []) {
                this.select2.empty();
                this.select2.select2({
                    placeholder: this.placeholder,
                    ...this.settings,
                    data: val
                });
                this.setValue(this.value);
            },
            setValue(val) {
                if (val instanceof Array) {
                    this.select2.val([...val]);
                } else {
                    this.select2.val([val]);
                }
                this.select2.trigger('change');
            }
        },
        mounted: function () {
            this.select2 = $(this.$el)
                .find('select')
                // init select2
                .select2({
                    placeholder: this.placeholder,
                    ...this.settings,
                    data: this.options
                })
                // emit event on change & select
                .on('select2:select select2:unselect', ev => {
                    this.$emit('change', this.select2.val());
                    this.$emit('select', ev['params']['data']);
                });
            this.setValue(this.value);
        },
        beforeDestroy() {
            this.select2.select2('destroy')
        }
    }
</script>

<style>
    @import "~admin-lte/plugins/select2/css/select2.min.css";
    @import "~admin-lte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css";
</style>