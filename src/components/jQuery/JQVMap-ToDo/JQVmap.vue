<template>
    <div v-if="loading" class="map"></div>

    <div v-else class="loading">
        <img class="loader-img" src="/static/plugins/preloaders/35-1.gif">
    </div>
</template>

<script>
    //  TODO
    // JQVMap
    import 'admin-lte/plugins/jqvmap/jquery.vmap.js'
    //  JQVMap - maps
   //import 'admin-lte/plugins/jqvmap/maps/jquery.vmap.usa.js'
    import 'admin-lte/plugins/jqvmap/maps/jquery.vmap.world.js'

    export default {
        name: "JQVmap",
        props: {
            mapName: {
                type: String,
                default: ''
            },
            setStyle: {
                type: Object,
            },
            info: {
                type: String,
                default: 'Alternative content for the map'
            }
        },
        data () {
            return {
                loading: false,
                sampleData: require('./examples/jquery.vmap.sampledata.js'),
                mapObject: require('./examples/default.js')
            }
        },

        methods: {
           async renderMap () {
                await this.$nextTick(function() {
                    this.loading = true;
                    console.log('render start')

                    var map = $(".map");
                    map.vectorMap({
                        map: this.mapName,
                        backgroundColor  : 'transparent',
                        hoverOpacity: 0.7,
                        selectedColor: '#666666',
                        enableZoom: false,
                        showTooltip: true,
                        values: this.sampleData,
                        scaleColors: ['#C8EEFF', '#006491'],
                        normalizeFunction: 'polynomial'
                    });
                    this.$nextTick(() => {
                        console.log('render end')
                    })
                });
            }
        },

        getMapObject() {
            this.mapObject.push({
                map: this.mapName,
                values: this.sampleData
            });
            return this.mapObject;
        },

        mounted () {
            setTimeout(() => {
                this.renderMap();
                this.loading = false;
            }, 500)
        },
        beforeDestroy () {
            var map = $(".map");
            map.remove();
        }
    }
</script>

<style scoped>
    @import "~admin-lte/plugins/jqvmap/jqvmap.min.css";
    .loading {
        position: absolute;
        background-color: transparent;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .loader-img {
        position: absolute;
        background-color: transparent;
        top: 50%;
        left: 50%;
        margin: -50px 0px 0px -50px;
        width: 6%;
    }
</style>