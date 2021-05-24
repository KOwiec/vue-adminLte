<template>
      <div class="drawer-container">
         <div class="content-header">
            <span>
                 <i class="fa fa-pie-chart" :style="{'color':theme, 'font-size': 20+'px'}">
                     <a href="https://www.chartjs.org"
                          target="_blank"> Help for Charts
                     </a>
                 </i>
            </span>
         </div>
         <!-- Main content -->
         <div class="content">
            <overlay-scrollbars class="container-fluid" ref="panelChartsScroll">
                <!-- Default box -->
                <va-row style="padding-top: 20px; padding-left: 7px;">
                    <div class="col-md-12">
                        <!-- Default box-->
                        <div class="card card-primary card-tabs">
                            <div class="card-header p-0 pt-1">
                                <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="custom-tabs-one-desc-tab" data-toggle="pill" href="#custom-tabs-one-desc" role="tab" aria-controls="custom-tabs-one-desc" aria-selected="true">Description</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="custom-tabs-one-source-tab" data-toggle="pill" href="#custom-tabs-one-source" role="tab" aria-controls="custom-tabs-one-source" aria-selected="false">Sources</a>
                                    </li>

                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="custom-tabs-one-tabContent">
                                    <div class="tab-pane fade show active" id="custom-tabs-one-desc" role="tabpanel" aria-labelledby="custom-tabs-one-desc-tab">
                                        <div v-for="(item, index) in 25" :key="index">
                                            Start creating help for your Charts {{item}}!<br/>
                                        </div>
                                        <br/>
                                    </div>
                                    <div class="tab-pane fade" id="custom-tabs-one-source" role="tabpanel" aria-labelledby="custom-tabs-one-source-tab">
                                        <div class="component-item" style="height:500px;">
                                            <share-dropdown-menu :items="articleList" style="margin:0 auto;" title="Links to visit" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!-- /.card -->
                        </div>
                    </div>
                </va-row>
            </overlay-scrollbars>
         </div>
         <!-- /.content -->
      </div>
</template>

<script>
    import ShareDropdownMenu from '@/components/Share/ShareDropdownMenu'

    export default {
        name: "RightPanelCharts",
        components: { ShareDropdownMenu },
        data() {
            return {
                articleList: [
                    { title: 'Chart.js', href: 'https://www.chartjs.org/' },
                    { title: 'Flot', href: 'http://www.flotcharts.org/' },
                    { title: 'Sparkline', href: 'https://github.com/mariusGundersen/sparkline' },
                    { title: 'jQuery-Knob', href: 'https://github.com/aterrien/jQuery-Knob' },
                    { title: 'vue-chartjs ', href: 'https://vue-chartjs.org/' },
                    { title: 'echarts ', href: 'https://echarts.apache.org/examples/en/index.html' },
                    { title: '20 best charting libs', href: 'https://thenextweb.com/dd/2015/06/12/20-best-javascript-chart-libraries/' },                ]
            }
        },
        computed: {
            theme() {
                return this.$store.state.theme.customTheme
            },
        }
    }
</script>

<style scoped>
    .container-fluid {
        height: 100vh;
        overflow: auto;
    }
    .content-header {
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495E;
        color: #ffffff;
        text-align: center;
    }
    .content-header span {
        text-align: center;
        display: block;
        position: relative;
        font-size: 18px;
        line-height: 1;
        letter-spacing: .02em;
        font-weight: 400;
        box-sizing: border-box;
        padding-top: 16px;
    }
</style>