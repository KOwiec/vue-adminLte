<template>
    <div>
        <slot/>
    </div>
</template>

<script>
    // jQuery Mapael
    import 'admin-lte/plugins/jquery-mousewheel/jquery.mousewheel.js'
    import  'admin-lte/plugins/jquery-mapael/jquery.mapael.js'
    // maps
    import 'admin-lte/plugins/jquery-mapael/maps/usa_states.min.js'
    //import 'admin-lte/plugins/jquery-mapael/maps/france_departments.min.js'
    //import 'admin-lte/plugins/jquery-mapael/maps/world_countries.min.js'

    export default {
        mounted: function() {
            'use strict';

            var ticksStyle = {
                fontColor: '#495057',
                fontStyle: 'bold'
            }

            var mode      = 'index';
            var intersect = true;

            var $salesChart = $('#sales-chart');
            var salesChart  = new Chart($salesChart, {
                type   : 'bar',
                data   : {
                    labels  : ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                    datasets: [
                        {
                            backgroundColor: '#007bff',
                            borderColor    : '#007bff',
                            data           : [1000, 2000, 3000, 2500, 2700, 2500, 3000]
                        },
                        {
                            backgroundColor: '#ced4da',
                            borderColor    : '#ced4da',
                            data           : [700, 1700, 2700, 2000, 1800, 1500, 2000]
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips           : {
                        mode     : mode,
                        intersect: intersect
                    },
                    hover              : {
                        mode     : mode,
                        intersect: intersect
                    },
                    legend             : {
                        display: false
                    },
                    scales             : {
                        yAxes: [{
                            // display: false,
                            gridLines: {
                                display      : true,
                                lineWidth    : '4px',
                                color        : 'rgba(0, 0, 0, .2)',
                                zeroLineColor: 'transparent'
                            },
                            ticks    : $.extend({
                                beginAtZero: true,

                                // Include a dollar sign in the ticks
                                callback: function (value, index, values) {
                                    if (value >= 1000) {
                                        value /= 1000;
                                        value += 'k'
                                    }
                                    return '$' + value
                                }
                            }, ticksStyle)
                        }],
                        xAxes: [{
                            display  : true,
                            gridLines: {
                                display: false
                            },
                            ticks    : ticksStyle
                        }]
                    }
                }
            });

            var $visitorsChart = $('#visitors-chart');
            var visitorsChart  = new Chart($visitorsChart, {
                data   : {
                    labels  : ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
                    datasets: [{
                        type                : 'line',
                        data                : [100, 120, 170, 167, 180, 177, 160],
                        backgroundColor     : 'transparent',
                        borderColor         : '#007bff',
                        pointBorderColor    : '#007bff',
                        pointBackgroundColor: '#007bff',
                        fill                : false
                        // pointHoverBackgroundColor: '#007bff',
                        // pointHoverBorderColor    : '#007bff'
                    },
                        {
                            type                : 'line',
                            data                : [60, 80, 70, 67, 80, 77, 100],
                            backgroundColor     : 'tansparent',
                            borderColor         : '#ced4da',
                            pointBorderColor    : '#ced4da',
                            pointBackgroundColor: '#ced4da',
                            fill                : false
                            // pointHoverBackgroundColor: '#ced4da',
                            // pointHoverBorderColor    : '#ced4da'
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips           : {
                        mode     : mode,
                        intersect: intersect
                    },
                    hover              : {
                        mode     : mode,
                        intersect: intersect
                    },
                    legend             : {
                        display: false
                    },
                    scales             : {
                        yAxes: [{
                            // display: false,
                            gridLines: {
                                display      : true,
                                lineWidth    : '4px',
                                color        : 'rgba(0, 0, 0, .2)',
                                zeroLineColor: 'transparent'
                            },
                            ticks    : $.extend({
                                beginAtZero : true,
                                suggestedMax: 200
                            }, ticksStyle)
                        }],
                        xAxes: [{
                            display  : true,
                            gridLines: {
                                display: false
                            },
                            ticks    : ticksStyle
                        }]
                    }
                }
            })

            /* jVector Maps
             * -----------------------------------------------TODO -----------------------------------
             * Create a world map with markers
            */

            $('.mapContainer').mapael({
                    map: {
                        // Set the name of the map to display
                        name : "usa_states",
                        zoom: {
                            enabled: true,
                            maxLevel: 10
                        },
                    },
                }
            );

        },
        beforeDestroy () {
           // $('.mapContainer').data("mapael").destroy();
        }
    }
</script>

