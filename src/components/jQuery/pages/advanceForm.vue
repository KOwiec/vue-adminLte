<template>
    <div>
        <slot/>
    </div>
</template>

<script>
    // we use vue directive: v-inputmask, see: src/directives/inputmask
    //import 'admin-lte/plugins/inputmask/jquery.inputmask.min.js'

    export default {
        mounted() {
            'use strict';

            //Datemask dd/mm/yyyy
            //$('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' });
            //Datemask2 mm/dd/yyyy
           // $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' });
            //Money Euro
            //$('[data-mask]').inputmask();

            //Date range picker
            $('#reservation').daterangepicker();
            //Date range picker with time picker
            $('#reservationtime').daterangepicker({
                timePicker         : true,
                timePickerIncrement: 30,
                locale: {
                    format: 'MM/DD/YYYY hh:mm A'
                }
            });

            //Date range as a button
            $('#daterange-btn').daterangepicker(
                {
                    ranges   : {
                        'Today'       : [moment(), moment()],
                        'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'This Month'  : [moment().startOf('month'), moment().endOf('month')],
                        'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    },
                    startDate: moment().subtract(29, 'days'),
                    endDate  : moment()
                },
            );

            $('#daterange-btn').on('apply.daterangepicker', function(ev, picker) {
                $('#daterange-input').val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
            });
            $('#daterange-btn').on('cancel.daterangepicker', function(ev, picker) {
                $('#daterange-input').val('');
            });

            // Date range predefined
            $(function() {

                var start = moment().subtract(29, 'days');
                var end = moment();

                function cb(start, end) {
                    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                }

                $('#reportrange').daterangepicker({
                    startDate: start,
                    endDate: end,
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    }
                }, cb);

                cb(start, end);

            });

            //color picker with addon ( in this case we use bootstrap-colorpicker plugin from ColorPicker.vue)
            $('#my-colorpicker2').colorpicker();

            $('#my-colorpicker2').on('colorpickerChange', function(event) {
                $('#square').css('color', event.color.toString());
            });


            //Timepicker 2 - moment + local + tempusdominus-bootstrap-4
            $('#timepicker').datetimepicker({
                format: 'DD/MM/YYYY hh:mm'
            })

        },

    }
</script>

<style scoped>

</style>