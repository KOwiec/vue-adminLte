<template>
   <section class="content">
       <content-header title="Dashboard"/>

       <!-- Main content -->
       <div class="content">
          <div class="container-fluid">
            <dashboard>
               <!-- Small boxes (Stat box)------------------------------------------ -->
               <div class="row">
                   <div class="col-lg-3 col-6">
                       <va-small-box
                               color="info"
                               icon="ion-bag"
                               title="150"
                               description="New Orders"
                               @more-click="clickToSmallBox"
                               moreText="More info">
                       </va-small-box>
                   </div>
                   <!-- ./col -->
                   <div class="col-lg-3 col-6">
                       <va-small-box
                               color="success"
                               icon="ion-stats-bars"
                               title="53%"
                               description="Bounce Rate"
                               @more-click="clickToSmallBox"
                               moreText="More info">
                       </va-small-box>
                   </div>
                   <!-- ./col -->
                   <div class="col-lg-3 col-6">
                       <va-small-box
                               color="warning"
                               icon="ion-person-add"
                               title="44"
                               description="User Registrations"
                               @more-click="clickToSmallBox"
                               moreText="More info">
                       </va-small-box>
                   </div>
                   <!-- ./col -->
                   <div class="col-lg-3 col-6">
                       <va-small-box
                               color="danger"
                               icon="ion-pie-graph"
                               title="65"
                               description="Unique Visitors"
                               @more-click="clickToSmallBox"
                               moreText="More info">
                       </va-small-box>
                   </div>
                   <!-- ./col -->
               </div>
               <!-- /.row -->
               <!-- Main row -->
               <div class="row">
                   <!-- Left col -->
                   <section class="col-lg-7 connectedSortable">
                       <!----------- Custom tabs (Charts with card tabs component )------------------------------ -->
                       <va-card title="Charts - Vue Card-Tabs" icon="fas fa-chart-pie" headerType="p-0 pt-1" :isCardTool="false" titleType="p-3">
                           <va-nav-tabs slot="contentHeader" navClass="pills" navData="ml-auto p-2"/>

                           <va-tab-pane slot="content" id="tab_1" title="Area">
                               <div class="chart tab-pane active" id="revenue-chart" style="position: relative; height: 300px;">
                                   <canvas id="revenue-chart-canvas" height="300" style="height: 300px;"></canvas>
                               </div>
                           </va-tab-pane>

                           <va-tab-pane slot="content" id="tab_2" title="Donut">
                               <div class="chart tab-pane" id="sales-chart" style="position: relative; height: 300px;">
                                   <canvas id="sales-chart-canvas" height="300" style="height: 300px;"></canvas>
                               </div>
                           </va-tab-pane>

                       </va-card>

                       <!----------------------------- Morris Charts----------------------------------------------- -->
                       <va-card title="Morris Charts" icon="fas fa-chart-pie" headerType="p-0 pt-1" :isCardTool="false" titleType="p-3">
                           <va-nav-tabs slot="contentHeader" navClass="pills" navData="ml-auto p-2"/>

                           <va-tab-pane slot="content" id="tab_3" title="Area">
                               <!-- Morris chart - Sales -->
                               <div class="chart tab-pane active" id="revenue-morris-chart" style="position: relative; height: 300px;"></div>
                           </va-tab-pane>

                           <va-tab-pane slot="content" id="tab_4" title="Donut">
                               <div class="chart tab-pane" id="sales-morris-chart" style="position: relative; height: 300px;"></div>
                           </va-tab-pane>

                           <va-tab-pane slot="content" id="tab_5" title="Line">
                               <div class="chart tab-pane" id="line-morris-chart" style="position: relative; height: 300px;"></div>
                           </va-tab-pane>

                       </va-card>
                       <!-- -------------------------------------Direct-chat------------------------------------- -->
                      <va-direct-chat id="chat-box-d1"
                              :talkList="talkList"
                              :contacts="contacts"
                              title="Direct Chat"
                              :badgeCount="3">
                      </va-direct-chat>
                       <!--------------------------------- todo-list (:saveToStorage="true")-------------------------->
                      <todo-list />

                   </section>
                   <!-- /.Left col -->
                   <!-- right col (We are only adding the ID to make the widgets sortable)-->
                   <section class="col-lg-5 connectedSortable">

                       <!------------ Map card---------------------------------------------- -->
                       <va-card
                               theme="primary"
                               :isGradient="true"
                               :isBorder="false"
                               icon="fas fa-map-marker-alt mr-1"
                               widgetType="collapse"
                               title=" Visitors">
                           <button slot="beforeWidget"
                                   type="button"
                                   class="btn btn-primary btn-sm daterange"
                                   data-toggle="tooltip"
                                   title="Date range">
                               <i class="far fa-calendar-alt"></i>
                           </button>
                           <div slot="content">
                               <div id="world-map" style="height: 250px; width: 100%;"></div>
                           </div>
                           <div slot="footer" class="row">
                               <div class="col-4 text-center">
                                   <div id="sparkline-1"></div>
                                   <div class="text-white">Visitors</div>
                               </div>
                               <!-- ./col -->
                               <div class="col-4 text-center">
                                   <div id="sparkline-2"></div>
                                   <div class="text-white">Online</div>
                               </div>
                               <!-- ./col -->
                               <div class="col-4 text-center">
                                   <div id="sparkline-3"></div>
                                   <div class="text-white">Sales</div>
                               </div>
                               <!-- ./col -->
                           </div>
                           <!-- /.row -->
                       </va-card>

                       <!---------------------- solid sales graph-------------------------------------- -->
                       <va-card
                               theme="info"
                               :isGradient="true"
                               :isBorder="false"
                               icon="fas fa-th mr-1"
                               widgetSet="default"
                               title="Sales Graph">
                           <div slot="content">
                               <canvas class="chart" id="line-chart" style="height: 250px;"></canvas>
                           </div>
                           <div slot="footer" class="row">
                               <div  class="col-4 text-center">
                                   <input type="text" class="knob" data-readonly="true" value="20" data-width="60" data-height="60"
                                          data-fgColor="#39CCCC">

                                   <div class="text-white">Mail-Orders</div>
                               </div>
                               <!-- ./col -->
                               <div class="col-4 text-center">
                                   <input type="text" class="knob" data-readonly="true" value="50" data-width="60" data-height="60"
                                          data-fgColor="#39CCCC">

                                   <div class="text-white">Online</div>
                               </div>
                               <!-- ./col -->
                               <div class="col-4 text-center">
                                   <input type="text" class="knob" data-readonly="true" value="30" data-width="60" data-height="60"
                                          data-fgColor="#39CCCC">

                                   <div class="text-white">In-Store</div>
                               </div>
                               <!-- ./col -->
                           </div>
                           <!-- /.row -->
                       </va-card>
                       <!----------------------------- calendar ---------------------------------------------->
                       <calendar></calendar>
                   </section>
                   <!-- right col -->
               </div>
               <!-- /.row (main row) -->
            </dashboard>
          </div><!-- /.container-fluid -->
       </div>
       <!-- /.content -->
   </section>

</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import Calendar from '@/components/Widgets/Calendar/Calendar2.vue'            // Calendar.vue
    import TodoList from '@/components/Widgets/TodoList/index.vue'
    import Dashboard from '@/components/jQuery/pages/dashboard.vue'

    //morris (raphael.js is load in main.js)
    import '@/libs/default/plugins/morris/morris.min.js'

    export default {
        name: "DashboardV1",
        data () {
            return {
                talkList: require('@/libs/default/pages/DirectChatData.js'),
                contacts : require('@/libs/default/pages/Contacts.js'),
            }
        },
        components: { ContentHeader, Dashboard, Calendar, TodoList },

        methods: {
            clickToSmallBox () {
                alert('click!!!: clickToSmallBox')
            },
        }
    }
</script>



