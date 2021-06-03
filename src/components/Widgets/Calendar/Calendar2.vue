<template>
    <!-- Calendar -->
    <va-card
            theme="success"
            :isGradient="true"
            :isBorder="false"
            icon="far fa-calendar-alt"
            widgetSet="default"
            title="Calendar">
        <!-- button with a dropdown -->
        <div slot="beforeWidget" class="btn-group">
            <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                <i class="fas fa-bars"></i></button>
            <div class="dropdown-menu float-right" role="menu">
                <a href="#" class="dropdown-item">Add new event</a>
                <a href="#" class="dropdown-item">Clear events</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">View calendar</a>
            </div>
        </div>
        <div slot="content">
            <!--The calendar -->
            <div id="calendar"></div>
        </div>
    </va-card>

</template>

<script>

    export default {
        name: "Calendar",
        mounted () {
            // The Calender tempusdominus-bootstrap-4
            $('#calendar').datetimepicker({
                inline: true,
                format: 'L',
                sideBySide: true
            })
        }
    }
</script>


