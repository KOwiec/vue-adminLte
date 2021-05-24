<template>
    <div>
        <slot/>
    </div>
</template>

<script>
    // JQVMap
    import 'admin-lte/plugins/jqvmap/jquery.vmap.js'
    //  JQVMap - maps
    import 'admin-lte/plugins/jqvmap/maps/jquery.vmap.usa.js'
    //import 'admin-lte/plugins/jqvmap/maps/jquery.vmap.world.js'

    export default {
        mounted () {
            'use strict';

            /*** Handle jQuery plugin naming conflict between jQuery UI and Bootstrap ***/
            $.widget.bridge('uibutton', $.ui.button);
            $.widget.bridge('uitooltip', $.ui.tooltip);

            // Make the dashboard widgets sortable Using jquery UI
            //------------------------------------- sortable widget ---------------------------------------------------
            $('.connectedSortable').sortable({
                placeholder         : 'sort-highlight',
                connectWith         : '.connectedSortable',
                handle              : '.card-header, .nav-tabs',
                forcePlaceholderSize: true,
                zIndex              : 999999
            });
            $('.connectedSortable .card-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move')

            // jQuery UI sortable for the ----------------todo-list--------------------------------------------------
            $('.todo-list').sortable({
                placeholder         : 'sort-highlight',
                handle              : '.handle',
                forcePlaceholderSize: true,
                zIndex              : 999999
            });

            //-----------------------------------------daterangepicker------------------------------------------------
            $('.daterange').daterangepicker({
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
            }, function (start, end) {
                window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
            });

            //------------------------------------/* jQueryKnob */--------------------------------------------------
            $('.knob').knob();

           /* Chart.js Charts i vue Card-Tabs component */

            // -------------------------------------------Sales chart-----------------------------------------------
            var salesChartCanvas = document.getElementById('revenue-chart-canvas').getContext('2d');
            //$('#revenue-chart').get(0).getContext('2d');

            var salesChartData = {
                labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label               : 'Digital Goods',
                        backgroundColor     : 'rgba(60,141,188,0.9)',
                        borderColor         : 'rgba(60,141,188,0.8)',
                        pointRadius          : false,
                        pointColor          : '#3b8bba',
                        pointStrokeColor    : 'rgba(60,141,188,1)',
                        pointHighlightFill  : '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data                : [28, 48, 40, 19, 86, 27, 90]
                    },
                    {
                        label               : 'Electronics',
                        backgroundColor     : 'rgba(210, 214, 222, 1)',
                        borderColor         : 'rgba(210, 214, 222, 1)',
                        pointRadius         : false,
                        pointColor          : 'rgba(210, 214, 222, 1)',
                        pointStrokeColor    : '#c1c7d1',
                        pointHighlightFill  : '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data                : [65, 59, 80, 81, 56, 55, 40]
                    },
                ]
            }

            var salesChartOptions = {
                maintainAspectRatio : false,
                responsive : true,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines : {
                            display : false,
                        }
                    }],
                    yAxes: [{
                        gridLines : {
                            display : false,
                        }
                    }]
                }
            }

            // This will get the first returned node in the jQuery collection.
            var salesChart = new Chart(salesChartCanvas, {
                    type: 'line',
                    data: salesChartData,
                    options: salesChartOptions
                }
            )

            // ---------------------------------Donut Chart---------------------------------------------
            var pieChartCanvas = $('#sales-chart-canvas').get(0).getContext('2d')
            var pieData        = {
                labels: [
                    'Instore Sales',
                    'Download Sales',
                    'Mail-Order Sales',
                ],
                datasets: [
                    {
                        data: [30,12,20],
                        backgroundColor : ['#f56954', '#00a65a', '#f39c12'],
                    }
                ]
            };
            var pieOptions = {
                legend: {
                    display: false
                },
                maintainAspectRatio : false,
                responsive : true,
            };

            //Create pie or douhnut chart
            // You can switch between pie and douhnut using the method below.
            var pieChart = new Chart(pieChartCanvas, {
                type: 'doughnut',
                data: pieData,
                options: pieOptions
            });

            //  --------------------------- Sales graph chart ----------------------------------------------------------
            var salesGraphChartCanvas = $('#line-chart').get(0).getContext('2d');
            //$('#revenue-chart').get(0).getContext('2d');

            var salesGraphChartData = {
                labels  : ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4', '2013 Q1', '2013 Q2'],
                datasets: [
                    {
                        label               : 'Digital Goods',
                        fill                : false,
                        borderWidth         : 2,
                        lineTension         : 0,
                        spanGaps : true,
                        borderColor         : '#efefef',
                        pointRadius         : 3,
                        pointHoverRadius    : 7,
                        pointColor          : '#efefef',
                        pointBackgroundColor: '#efefef',
                        data                : [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10687, 8432]
                    }
                ]
            }

            var salesGraphChartOptions = {
                maintainAspectRatio : false,
                responsive : true,
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                        ticks : {
                            fontColor: '#efefef',
                        },
                        gridLines : {
                            display : false,
                            color: '#efefef',
                            drawBorder: false,
                        }
                    }],
                    yAxes: [{
                        ticks : {
                            stepSize: 5000,
                            fontColor: '#efefef',
                        },
                        gridLines : {
                            display : true,
                            color: '#efefef',
                            drawBorder: false,
                        }
                    }]
                }
            }
            //
            // This will get the first returned node in the jQuery collection.
            var salesGraphChart = new Chart(salesGraphChartCanvas, {
                    type: 'line',
                    data: salesGraphChartData,
                    options: salesGraphChartOptions
                }
            )

            /* Morris.js Charts */
            // -----------------------------------Morris Sales chart--------------------------------------------------

            var area = new Morris.Area({
                element   : 'revenue-morris-chart',
                resize    : true,
                data      : [
                    { y: '2011 Q1', item1: 2666, item2: 2666 },
                    { y: '2011 Q2', item1: 2778, item2: 2294 },
                    { y: '2011 Q3', item1: 4912, item2: 1969 },
                    { y: '2011 Q4', item1: 3767, item2: 3597 },
                    { y: '2012 Q1', item1: 6810, item2: 1914 },
                    { y: '2012 Q2', item1: 5670, item2: 4293 },
                    { y: '2012 Q3', item1: 4820, item2: 3795 },
                    { y: '2012 Q4', item1: 15073, item2: 5967 },
                    { y: '2013 Q1', item1: 10687, item2: 4460 },
                    { y: '2013 Q2', item1: 8432, item2: 5713 }
                ],
                xkey      : 'y',
                ykeys     : ['item1', 'item2'],
                labels    : ['Item 1', 'Item 2'],
                lineColors: ['#495057', '#007cff'],
                hideHover : 'auto'
            })
            var line = new Morris.Line({
                element          : 'line-morris-chart',
                resize           : true,
                data             : [
                    { y: '2011 Q1', item1: 2666 },
                    { y: '2011 Q2', item1: 2778 },
                    { y: '2011 Q3', item1: 4912 },
                    { y: '2011 Q4', item1: 3767 },
                    { y: '2012 Q1', item1: 6810 },
                    { y: '2012 Q2', item1: 5670 },
                    { y: '2012 Q3', item1: 4820 },
                    { y: '2012 Q4', item1: 15073 },
                    { y: '2013 Q1', item1: 10687 },
                    { y: '2013 Q2', item1: 8432 }
                ],
                xkey             : 'y',
                ykeys            : ['item1'],
                labels           : ['Item 1'],
                lineColors       : ['#efefef'],
                lineWidth        : 2,
                hideHover        : 'auto',
                gridTextColor    : '#fff',
                gridStrokeWidth  : 0.4,
                pointSize        : 4,
                pointStrokeColors: ['#efefef'],
                gridLineColor    : '#efefef',
                gridTextFamily   : 'Open Sans',
                gridTextSize     : 10
            })

            // -----------------------------------------Morris Donut Chart----------------------------------------------
            var donut = new Morris.Donut({
                element  : 'sales-morris-chart',
                resize   : true,
                colors   : ['#007bff', '#dc3545', '#28a745'],
                data     : [
                    { label: 'Download Sales', value: 12 },
                    { label: 'In-Store Sales', value: 30 },
                    { label: 'Mail-Order Sales', value: 20 }
                ],
                hideHover: 'auto'
            })

            //-------------------------------------------fix for charts under tabs-------------------------------------
            $('.box ul.nav a').on('shown.bs.tab', function () {
                area.redraw()
                donut.redraw()
                line.redraw()
            })

            // -----------------------------------------Sparkline charts-----------------------------------------------
            var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
            $('#sparkline-1').sparkline(myvalues, {
                type     : 'line',
                lineColor: '#92c1dc',
                fillColor: '#ebf4f9',
                height   : '50',
                width    : '80'
            })
            myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
            $('#sparkline-2').sparkline(myvalues, {
                type     : 'line',
                lineColor: '#92c1dc',
                fillColor: '#ebf4f9',
                height   : '50',
                width    : '80'
            })
            myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
            $('#sparkline-3').sparkline(myvalues, {
                type     : 'line',
                lineColor: '#92c1dc',
                fillColor: '#ebf4f9',
                height   : '50',
                width    : '80'
            })

            //------------------------------------------- World map by JQVmap ------------------------------------------

            // jvectormap data
            var visitorsData = {
                'US': 398, //USA
                'SA': 400, //Saudi Arabia
                'CA': 1000, //Canada
                'DE': 500, //Germany
                'FR': 760, //France
                'CN': 300, //China
                'AU': 700, //Australia
                'BR': 600, //Brazil
                'IN': 800, //India
                'GB': 320, //Great Britain
                'RU': 3000 //Russia
            }

            var mapObject = {
                map              : 'usa_en',
                backgroundColor  : 'transparent',
                regionStyle      : {
                    initial: {
                        fill: 'rgba(255, 255, 255, 0.7)',
                        'fill-opacity': 1,
                        stroke: 'rgba(0,0,0,.2)',
                        'stroke-width': 1,
                        'stroke-opacity': 1
                    }
                },
                series           : {
                    regions: [{
                        values           : visitorsData,
                        scale            : ['#ffffff', '#0154ad'],
                        normalizeFunction: 'polynomial'
                    }]
                },
                onRegionLabelShow: function (e, el, code) {
                    if (typeof visitorsData[code] !== 'undefined')
                        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors')
                }
            };

            $('#world-map').vectorMap( mapObject )
        },

        beforeDestroy () {
            //var mapObj = $('#world-map').vectorMap( 'get', 'mapObject' );
            $('#world-map').remove();
        }
    }
</script>

<style scoped>
    @import "~admin-lte/plugins/jqvmap/jqvmap.min.css";
</style>