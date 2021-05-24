<template>
    <input type="text" class="form-control"/>
</template>

<script>
    //bootstrap time picker
    import '@/libs/default/plugins/timepicker/bootstrap-timepicker.min.js'
    export default {
        name: "TimePicker",
        props: {
            showInputs: {
                type: Boolean,
                default: false
            }
        },
        mounted () {
            var self = this;
            $(this.$el).timepicker({
                showInputs: this.showInputs,
                onSelect: function(time) {
                    self.$emit('input', time);
                }
            });
        },
        destroyed () {
            $(this.$el).timepicker('destroy');
        }
    }
</script>
