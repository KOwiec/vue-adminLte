<template>
    <!-- Calendar -->
    <div class="card bg-gradient-success">
        <div class="card-header no-border">

            <h3 class="card-title">
                <i class="far fa-calendar-alt"></i>
                Calendar
            </h3>
            <!-- tools card -->
            <div class="card-tools">
                <!-- button with a dropdown -->
                <div class="btn-group">
                    <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                        <i class="fas fa-bars"></i></button>
                    <div class="dropdown-menu float-right" role="menu">
                        <a href="#" class="dropdown-item">Add new event</a>
                        <a href="#" class="dropdown-item">Clear events</a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">View calendar</a>
                    </div>
                </div>
                <button type="button" class="btn btn-success btn-sm" data-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-success btn-sm" data-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <!-- /. tools -->
        </div>
        <!-- /.card-header -->
        <div class="card-body pt-0">
            <!--The calendar -->
            <div id="calendar" style="width: 100%"></div>
        </div>
        <!-- /.card-body -->
    </div>
    <!-- /.card -->
</template>

<script>
    //datepicker for calendar
    import "@/libs/default/plugins/fullcalendar/fullcalendar.min.css" // fullCalendar 2.2.5 (Calendar.vue)
    import '@/libs/default/plugins/datepicker/bootstrap-datepicker.js'

    export default {
        name: "Calendar",
        mounted () {
            // The Calender bootstrap-datepicker
            $('#calendar').datepicker()

            //$(this.$el).find('#calendar').datepicker()

        }
    }
</script>

<style>
  @import "../../../libs/default/plugins/datepicker/datepicker3.css";
</style>
