<template>
  <section class="content">
      <content-header title="Dashboard v3"/>

      <!-- Main content -->
      <div class="content">
         <div class="container-fluid">
            <dashboard-3>
              <div class="row">
                  <div class="col-lg-6">

                      <!-- .card------------------------------------------------- -->
                      <va-card
                              title="Online Store Visitors"
                              :isBorder="false"
                              :isCardTool="false">
                          <a slot="contentHeader" href="javascript:void(0);">View Report</a>
                          <div slot="content">
                              <div class="d-flex">
                                  <p class="d-flex flex-column">
                                      <span class="text-bold text-lg">820</span>
                                      <span>Visitors Over Time</span>
                                  </p>
                                  <p class="ml-auto d-flex flex-column text-right">
                                  <span class="text-success">
                                       <i class="fa fa-arrow-up"></i> 12.5%
                                  </span>
                                       <span class="text-muted">Since last week</span>
                                  </p>
                              </div>
                              <!-- /.d-flex -->

                              <div class="position-relative mb-4">
                                  <canvas id="visitors-chart" height="200"></canvas>
                              </div>

                              <div class="d-flex flex-row justify-content-end">
                                 <span class="mr-2">
                                    <i class="fa fa-square text-primary"></i> This Week
                                 </span>

                                 <span>
                                     <i class="fa fa-square text-gray"></i> Last Week
                                 </span>
                              </div>
                          </div>
                      </va-card>

                      <!-- .card------------------------------------------------- -->
                      <va-card
                              title="Products"
                              :isBorder="false"
                              content="p-0">
                          <div slot="beforeWidget">
                              <a href="#" class="btn btn-tool btn-sm">
                                  <i class="fa fa-download"></i>
                              </a>
                              <a href="#" class="btn btn-tool btn-sm">
                                  <i class="fa fa-bars"></i>
                              </a>
                          </div>
                          <div slot="content">
                              <table class="table table-striped table-valign-middle">
                                  <thead>
                                  <tr>
                                      <th>Product</th>
                                      <th>Price</th>
                                      <th>Sales</th>
                                      <th>More</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                      <td>
                                          <img src="../../../static/img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2">
                                          Some Product
                                      </td>
                                      <td>$13 USD</td>
                                      <td>
                                          <small class="text-success mr-1">
                                              <i class="fa fa-arrow-up"></i>
                                              12%
                                          </small>
                                          12,000 Sold
                                      </td>
                                      <td>
                                          <a href="#" class="text-muted">
                                              <i class="fa fa-search"></i>
                                          </a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <img src="../../../static/img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2">
                                          Another Product
                                      </td>
                                      <td>$29 USD</td>
                                      <td>
                                          <small class="text-warning mr-1">
                                              <i class="fa fa-arrow-down"></i>
                                              0.5%
                                          </small>
                                          123,234 Sold
                                      </td>
                                      <td>
                                          <a href="#" class="text-muted">
                                              <i class="fa fa-search"></i>
                                          </a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <img src="../../../static/img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2">
                                          Amazing Product
                                      </td>
                                      <td>$1,230 USD</td>
                                      <td>
                                          <small class="text-danger mr-1">
                                              <i class="fa fa-arrow-down"></i>
                                              3%
                                          </small>
                                          198 Sold
                                      </td>
                                      <td>
                                          <a href="#" class="text-muted">
                                              <i class="fa fa-search"></i>
                                          </a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <img src="../../../static/img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2">
                                          Perfect Item
                                          <span class="badge bg-danger">NEW</span>
                                      </td>
                                      <td>$199 USD</td>
                                      <td>
                                          <small class="text-success mr-1">
                                              <i class="fa fa-arrow-up"></i>
                                              63%
                                          </small>
                                          87 Sold
                                      </td>
                                      <td>
                                          <a href="#" class="text-muted">
                                              <i class="fa fa-search"></i>
                                          </a>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>
                      </va-card>

                  </div>
                  <!-- /.col-md-6 -->
                  <div class="col-lg-6">

                      <!-- .card------------------------------------------------- -->
                      <va-card
                              title="Sales"
                              :isBorder="false"
                              :isCardTool="false">
                          <a slot="contentHeader" href="javascript:void(0);">View Report</a>
                          <div slot="content">
                              <div class="d-flex">
                                  <p class="d-flex flex-column">
                                      <span class="text-bold text-lg">$18,230.00</span>
                                      <span>Sales Over Time</span>
                                  </p>
                                  <p class="ml-auto d-flex flex-column text-right">
                                    <span class="text-success">
                                       <i class="fa fa-arrow-up"></i> 33.1%
                                    </span>
                                    <span class="text-muted">Since last month</span>
                                  </p>
                              </div>
                              <!-- /.d-flex -->

                              <div class="position-relative mb-4">
                                  <canvas id="sales-chart" height="200"></canvas>
                              </div>

                              <div class="d-flex flex-row justify-content-end">
                                   <span class="mr-2">
                                        <i class="fa fa-square text-primary"></i> This year
                                   </span>

                                   <span>
                                       <i class="fa fa-square text-gray"></i> Last year
                                   </span>
                              </div>
                          </div>
                      </va-card>

                      <!-- .card------------------------------------------------- -->
                      <va-card
                              title="Online Store Overview"
                              :isBorder="false">
                          <div slot="beforeWidget">
                              <a href="#" class="btn btn-tool btn-sm">
                                  <i class="fa fa-download"></i>
                              </a>
                              <a href="#" class="btn btn-tool btn-sm">
                                  <i class="fa fa-bars"></i>
                              </a>
                          </div>
                          <div slot="content">
                              <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                  <p class="text-success text-xl">
                                      <i class="ion ion-ios-refresh-empty"></i>
                                  </p>
                                  <p class="d-flex flex-column text-right">
                                      <span class="font-weight-bold">
                                         <i class="ion ion-android-arrow-up text-success"></i> 12%
                                      </span>
                                      <span class="text-muted">CONVERSION RATE</span>
                                  </p>
                              </div>
                              <!-- /.d-flex -->
                              <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                  <p class="text-warning text-xl">
                                      <i class="ion ion-ios-cart-outline"></i>
                                  </p>
                                  <p class="d-flex flex-column text-right">
                                      <span class="font-weight-bold">
                                          <i class="ion ion-android-arrow-up text-warning"></i> 0.8%
                                      </span>
                                      <span class="text-muted">SALES RATE</span>
                                  </p>
                              </div>
                              <!-- /.d-flex -->
                              <div class="d-flex justify-content-between align-items-center mb-0">
                                  <p class="text-danger text-xl">
                                      <i class="ion ion-ios-people-outline"></i>
                                  </p>
                                  <p class="d-flex flex-column text-right">
                                      <span class="font-weight-bold">
                                         <i class="ion ion-android-arrow-down text-danger"></i> 1%
                                      </span>
                                      <span class="text-muted">REGISTRATION RATE</span>
                                  </p>
                              </div>
                              <!-- /.d-flex -->
                          </div>
                      </va-card>

                      <!-- MAP PANE----------------------TODO ----------------------------
                      <va-card title="US-Visitors Report" WidgetSet="default">
                          <div slot="content">
                              <div class="d-md-flex">
                                  <div class="p-1 flex-fill" style="overflow: hidden">-->
                                      <!-- Map will be created here
                                      <div class="mapContainer" style="height: 325px; overflow: hidden">
                                          <div class="map"></div>
                                          <span>...Alternative content map (not Show)</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </va-card>-->

                  </div>
                  <!-- /.col-md-6 -->
              </div>
              <!-- /.row -->
           </dashboard-3>
         </div>
          <!-- /.container-fluid -->
      </div>
      <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import Dashboard3 from '@/components/jQuery/pages/dashboard3.vue'

    export default {
        name: "DashboardV3",
        components: { ContentHeader, Dashboard3 }
    }
</script>
