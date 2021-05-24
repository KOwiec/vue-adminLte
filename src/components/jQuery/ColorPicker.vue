<template>
    <input type="text" class="form-control" :placeholder="placeholder" style="width: 90px">
</template>

<script>
    //bootstrap color picker
    import 'admin-lte/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js'
    export default {
        name: "TimePicker",
        props: {
            placeholder: {
                type: String,
                default: 'Color'
            },
        },
        mounted () {
            var self = this;
            $(this.$el).colorpicker({
                onSelect(color) {
                    self.$emit('input', color);
                }
            });
        },
        beforeDestroy () {
            $(this.$el).colorpicker('destroy');
        }
    }
</script>

<style>
    @import "~admin-lte/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css";
</style>