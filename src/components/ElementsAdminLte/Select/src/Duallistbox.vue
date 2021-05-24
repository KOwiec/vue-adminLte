<template>
    <div>
       <select class="duallistbox"
            :id="id"
            :name="name"
            :disabled="isDisabled"
            :style="styled"
            :multiple="isMultiple">
           <option v-for="(item,index) in options" :data="item" :key="index">
               {{ item.text }}
           </option>
       </select>
    </div>
</template>

<script>
    // Bootstrap4 Duallistbox - https://github.com/istvan-ujjmeszaros/bootstrap-duallistbox#readme
    import 'admin-lte/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js'

    export default {
        name: "VaDuallistbox",
        data() {
            return {
                duallistbox: null
            };
        },

        props: {
            id: { type: String, default: '' },

            name: { type: String, default: '' },

            isMultiple: { type: Boolean, default: true },

            isDisabled: { type: Boolean, default: false },

            styled: { type: String, default: '' },

            settings: { type: Object,  default: () => {} },

            options: { type: Array,  default: () => [] },

        },

        mounted: function () {
            this.duallistbox = $(this.$el)
            this.duallistbox.bootstrapDualListbox({
                ...this.settings,
            })
        },
        beforeDestroy() {
            this.duallistbox.bootstrapDualListbox('destroy')
        }
    }
</script>

<style>
    @import "~admin-lte/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css";
</style>