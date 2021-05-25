<template>
    <input type="text" class="form-control" :placeholder="placeholder" style="width: 90px">
</template>

<script>
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
                fallbackColor: '#ffffff',
                fallbackFormat: 'hex',
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

