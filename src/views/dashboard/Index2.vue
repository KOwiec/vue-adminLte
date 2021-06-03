<template>
  <section class="content">
      <content-header title="Dashboard v2"/>

      <!-- Main content -->
      <div class="content">
         <div class="container-fluid">
            <dashboard-2>
              <!-- Info boxes---------------------------------------------------------------- -->
              <div class="row">
                  <div class="col-12 col-sm-6 col-md-3">
                      <va-info-box
                              bgColor="bg-info elevation-1"
                              bgIcon="fas fa-cog"
                              text="CPU TRAFFIC"
                              number="10"
                              numberType="percentage">
                      </va-info-box>
                  </div>
                  <!-- /.col -->
                  <div class="col-12 col-sm-6 col-md-3">
                      <va-info-box
                              bgColor="bg-danger elevation-1"
                              bgIcon="fab fa-google-plus-g"
                              text="Likes"
                              number="41,410">
                      </va-info-box>
                  </div>
                  <!-- /.col -->

                  <!-- fix for small devices only -->
                  <div class="clearfix hidden-md-up"></div>

                  <div class="col-12 col-sm-6 col-md-3">
                      <va-info-box
                              bgColor="bg-success elevation-1"
                              bgIcon="fa fa-shopping-cart"
                              text="Sales"
                              number="760">
                      </va-info-box>
                  </div>
                  <!-- /.col -->
                  <div class="col-12 col-sm-6 col-md-3">
                      <va-info-box
                              bgColor="bg-warning elevation-1"
                              bgIcon="fa fa-users"
                              text="New Members"
                              number="2,000">
                      </va-info-box>
                  </div>
                  <!-- /.col -->
              </div>
              <!-- /.row -->

              <div class="row">
                  <div class="col-md-12">

                      <!-- card with chart---------------------------------------------------------------- -->
                      <va-card
                              widgetType="collapse"
                              title="Monthly Recap Report"
                              :isTransparent="false">
                          <!-- component from script section -->
                          <btns-group slot="afterWidget"/>
                          <div slot="content" class="row">
                                  <div class="col-md-8">
                                      <p class="text-center">
                                          <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                                      </p>

                                      <div class="chart">
                                          <!-- Sales Chart Canvas -->
                                          <canvas id="salesChart" height="180" style="height: 180px;"></canvas>
                                      </div>
                                      <!-- /.chart-responsive -->
                                  </div>
                                  <!-- /.col -->

                                  <!-- .progress-group 4---------------------------------------------------- -->
                                  <div class="col-md-4">
                                      <p class="text-center">
                                          <strong>Goal Completion</strong>
                                      </p>

                                      <div class="progress-group">
                                          Add Products to Cart
                                          <span class="float-right"><b>160</b>/200</span>
                                          <div class="progress progress-sm">
                                              <div class="progress-bar bg-primary" style="width: 80%"></div>
                                          </div>
                                      </div>
                                      <!-- /.progress-group -->

                                      <div class="progress-group">
                                          Complete Purchase
                                          <span class="float-right"><b>310</b>/400</span>
                                          <div class="progress progress-sm">
                                              <div class="progress-bar bg-danger" style="width: 75%"></div>
                                          </div>
                                      </div>

                                      <!-- /.progress-group -->
                                      <div class="progress-group">
                                          <span class="progress-text">Visit Premium Page</span>
                                          <span class="float-right"><b>480</b>/800</span>
                                          <div class="progress progress-sm">
                                              <div class="progress-bar bg-success" style="width: 60%"></div>
                                          </div>
                                      </div>

                                      <!-- /.progress-group -->
                                      <div class="progress-group">
                                          Send Inquiries
                                          <span class="float-right"><b>250</b>/500</span>
                                          <div class="progress progress-sm">
                                              <div class="progress-bar bg-warning" style="width: 50%"></div>
                                          </div>
                                      </div>
                                      <!-- /.progress-group -->
                                  </div>
                                  <!-- /.col -->
                          </div>
                          <div slot="footer" class="row">
                              <div class="col-sm-3 col-6">
                                  <div class="description-block border-right">
                                      <span class="description-percentage text-success"><i class="fa fa-caret-up"></i> 17%</span>
                                      <h5 class="description-header">$35,210.43</h5>
                                      <span class="description-text">TOTAL REVENUE</span>
                                  </div>
                                  <!-- /.description-block -->
                              </div>
                              <!-- /.col -->
                              <div class="col-sm-3 col-6">
                                  <div class="description-block border-right">
                                      <span class="description-percentage text-warning"><i class="fa fa-caret-left"></i> 0%</span>
                                      <h5 class="description-header">$10,390.90</h5>
                                      <span class="description-text">TOTAL COST</span>
                                  </div>
                                  <!-- /.description-block -->
                              </div>
                              <!-- /.col -->
                              <div class="col-sm-3 col-6">
                                  <div class="description-block border-right">
                                      <span class="description-percentage text-success"><i class="fa fa-caret-up"></i> 20%</span>
                                      <h5 class="description-header">$24,813.53</h5>
                                      <span class="description-text">TOTAL PROFIT</span>
                                  </div>
                                  <!-- /.description-block -->
                              </div>
                              <!-- /.col -->
                              <div class="col-sm-3 col-6">
                                  <div class="description-block">
                                      <span class="description-percentage text-danger"><i class="fa fa-caret-down"></i> 18%</span>
                                      <h5 class="description-header">1200</h5>
                                      <span class="description-text">GOAL COMPLETIONS</span>
                                  </div>
                                  <!-- /.description-block -->
                              </div>
                          </div>
                          <!-- /.row -->
                      </va-card>


                  </div>
                  <!-- /.col -->
              </div>
              <!-- /.row -->

              <!-- Main row -->
              <div class="row">
                  <!-- Left col -->
                  <div class="col-md-8">
                      <!-- MAP & BOX PANE-------------------------------------------------------------- -->
                      <va-card title="Word Map" widgetSet="default" content="p-0">
                          <div slot="content">
                              <div class="d-md-flex">
                                  <div class="p-1 flex-fill" style="overflow: hidden">
                                      <!-- Map will be created here -->
                                      <div id="world-map-markers" style="height: 325px; overflow: hidden;"></div>
                                  </div>
                                  <div class="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
                                      <div class="description-block mb-4">
                                          <div class="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                                          <h5 class="description-header">8390</h5>
                                          <span class="description-text">Visits</span>
                                      </div>
                                      <!-- /.description-block -->
                                      <div class="description-block mb-4">
                                          <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                                          <h5 class="description-header">30%</h5>
                                          <span class="description-text">Referrals</span>
                                      </div>
                                      <!-- /.description-block -->
                                      <div class="description-block">
                                          <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                                          <h5 class="description-header">70%</h5>
                                          <span class="description-text">Organic</span>
                                      </div>
                                      <!-- /.description-block -->
                                  </div><!-- /.card-pane-right -->
                              </div><!-- /.d-md-flex -->
                          </div>
                      </va-card>

                      <div class="row">
                          <div class="col-md-6">
                              <!-- DIRECT CHAT------------------------------------------------------------------- -->
                              <va-direct-chat id="chat-box-d2"
                                              :talkList="talkList"
                                              :contacts="contacts"
                                              title="Direct Chat"
                                              color="warning"
                                              :badgeCount="3">
                              </va-direct-chat>
                              <!--/.direct-chat -->
                          </div>
                          <!-- /.col -->

                          <div class="col-md-6">
                              <!-- USERS LIST----------------------------------------------------- -->
                              <va-card
                                      widgetSet="default"
                                      title="Latest Members"
                                      :isTransparent="false"
                                      content="p-0"
                                      flocation="center">
                                  <span slot="beforeWidget" class="badge badge-danger">8 New Members</span>
                                  <div slot="content">
                                      <ul class="users-list clearfix">
                                          <li v-for="(member, index) in members" :key="index">
                                              <img :src="`static/img/${member.membersImage}`" alt="User Image">
                                              <a class="users-list-name" href="#">{{member.name}}</a>
                                              <span class="users-list-date">{{member.latestDate}}</span>
                                          </li>
                                      </ul>
                                  </div>
                                  <div slot="footer">
                                      <a href="javascript:">View All Users</a>
                                  </div>
                              </va-card>

                          </div>
                          <!-- /.col -->
                      </div>
                      <!-- /.row -->

                      <!-- TABLE: LATEST ORDERS--------------------------------------------------- -->
                      <va-card
                         title="Latest Orders"
                         widgetSet="default"
                         :isBorder="false"
                         :isTransparent="false"
                         content="p-0">

                        <div slot="content">
                            <table class="table m-0">
                                <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Item</th>
                                    <th>Status</th>
                                    <th>Popularity</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a href="../pages/invoice">OR9842</a></td>
                                    <td>Call of Duty IV</td>
                                    <td><span class="badge badge-success">Shipped</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="../pages/invoice">OR1848</a></td>
                                    <td>Samsung Smart TV</td>
                                    <td><span class="badge badge-warning">Pending</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="../pages/invoice">OR7429</a></td>
                                    <td>iPhone 6 Plus</td>
                                    <td><span class="badge badge-danger">Delivered</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="../pages/invoice">OR7429</a></td>
                                    <td>Samsung Smart TV</td>
                                    <td><span class="badge badge-info">Processing</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="../pages/invoice">OR1848</a></td>
                                    <td>Samsung Smart TV</td>
                                    <td><span class="badge badge-warning">Pending</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="../pages/invoice">OR7429</a></td>
                                    <td>iPhone 6 Plus</td>
                                    <td><span class="badge badge-danger">Delivered</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="../pages/invoice">OR9842</a></td>
                                    <td>Call of Duty IV</td>
                                    <td><span class="badge badge-success">Shipped</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <!-- /.table-responsive -->
                        </div>

                        <div slot="footer">
                             <a href="javascript:void(0);" class="btn btn-sm btn-info float-left">Place New Order</a>
                             <a href="javascript:void(0);" class="btn btn-sm btn-secondary float-right">View All Orders</a>
                        </div>
                      </va-card>


                  </div>
                  <!-- /.col -->
                  <div class="col-md-4">
                      <!-- Info Boxes Style ------------------------------------------------------ -->
                      <va-info-box
                              wrapBgColor="warning"
                              bgIcon="fa fa-tag"
                              text="Inventory"
                              number="5,200">
                      </va-info-box>

                      <va-info-box
                              wrapBgColor="success"
                              bgIcon="far fa-heart"
                              text="Mentions"
                              number="92,050">
                      </va-info-box>

                      <va-info-box
                              wrapBgColor="danger"
                              bgIcon="fas fa-cloud-download-alt"
                              text="Downloads"
                              number="114,381">
                      </va-info-box>

                      <va-info-box
                              wrapBgColor="info"
                              bgIcon="far fa-comment"
                              text="Direct Messages"
                              number="163,921">
                      </va-info-box>

                      <!-- Pie chart-------------------------------------------------------------- -->
                      <va-card
                              title="Browser Usage"
                              widgetSet="default"
                              footerColor="bg-white"
                              fcontent="p-0">

                          <div slot="content">
                              <div class="row">
                                  <div class="col-md-8">
                                      <div class="chart-responsive">
                                          <canvas id="pieChart" height="150"></canvas>
                                      </div>
                                      <!-- ./chart-responsive -->
                                  </div>
                                  <!-- /.col -->
                                  <div class="col-md-4">
                                      <ul class="chart-legend clearfix">
                                          <li><i class="far fa-circle text-danger"></i> Chrome</li>
                                          <li><i class="far fa-circle text-success"></i> IE</li>
                                          <li><i class="far fa-circle text-warning"></i> FireFox</li>
                                          <li><i class="far fa-circle text-info"></i> Safari</li>
                                          <li><i class="far fa-circle text-primary"></i> Opera</li>
                                          <li><i class="far fa-circle text-secondary"></i> Navigat</li>
                                      </ul>
                                  </div>
                                  <!-- /.col -->
                              </div>
                          </div>

                          <div slot="footer">
                              <ul class="nav nav-pills flex-column">
                                  <li class="nav-item">
                                      <a href="#" class="nav-link">
                                          United States of America
                                          <span class="float-right text-danger">
                                             <i class="fa fa-arrow-down text-sm"></i>
                                              12%
                                          </span>
                                      </a>
                                  </li>
                                  <li class="nav-item">
                                      <a href="#" class="nav-link">
                                          India
                                          <span class="float-right text-success">
                                              <i class="fa fa-arrow-up text-sm"></i>
                                              4%
                                          </span>
                                      </a>
                                  </li>
                                  <li class="nav-item">
                                      <a href="#" class="nav-link">
                                          China
                                          <span class="float-right text-warning">
                                               <i class="fa fa-arrow-left text-sm"></i>
                                              0%
                                          </span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </va-card>

                      <!-- PRODUCT LIST---------------------------------------------------------- -->
                      <va-card
                              widgetSet="default"
                              title="Recently Added Products"
                              :isTransparent="false"
                              content="p-0"
                              flocation="center">
                          <div slot="content">
                              <ul class="products-list product-list-in-card pl-2 pr-2">
                                  <li class="item" v-for="(product, index) in products" :key="index">
                                      <div class="product-img">
                                          <img :src="`static/img/${product.img}`" alt="Product Image"
                                               :class="`img-size-${product.imgSize}`">
                                      </div>
                                      <div class="product-info">
                                          <a :href="product.link" class="product-title">{{product.title}}
                                              <span :class="`badge badge-${product.color} float-right`">{{product.prize}}</span></a>
                                          <span class="product-description">
                                              {{product.desc}}
                                          </span>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div slot="footer">
                              <a href="javascript:void(0);">View All Products</a>
                          </div>
                      </va-card>

                  </div>
                  <!-- /.col -->
              </div>
              <!-- /.row -->
            </dashboard-2>
         </div><!--/. container-fluid -->
      </div>
      <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import Dashboard2 from '@/components/jQuery/pages/dashboard2.vue'
    //  demo
    const btnsGroup = {
        template: `<div class="btn-group">
                      <button type="button" class="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                          <i class="fa fa-wrench"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-right" role="menu">
                         <a href="#" class="dropdown-item">Action</a>
                         <a href="#" class="dropdown-item">Another action</a>
                         <a href="#" class="dropdown-item">Something else here</a>
                         <a class="dropdown-divider"></a>
                         <a href="#" class="dropdown-item">Separated link</a>
                      </div>
                      <button type="button" class="btn btn-tool" data-card-widget="remove">
                         <i class="fas fa-times"></i>
                    </button>
                    </div>`

    };
    export default {
        name: "DashboardV2",
        components: { ContentHeader, Dashboard2, btnsGroup },
        data () {
            return {
                talkList: require('@/libs/default/pages/DirectChatData.js'),
                contacts : require('@/libs/default/pages/Contacts.js'),
                members: require('@/libs/default/pages/MembersList.js'),
                products: require('@/libs/default/pages/ProductsList.js')
            }
        }
    }
</script>
