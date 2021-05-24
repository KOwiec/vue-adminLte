<template>
  <section class="content">
    <content-header title="General UI"/>

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <!-- COLOR PALETTE -->
        <va-card title="Color Palette" icon="fa fa-tag" type="color-palette-box">
          <div slot="content">
            <div class="col-12">
              <h5>Theme Colors</h5>
            </div>
            <div class="row">
                 <color-palette-set v-for="color in colors[0]" :key="color"
                                 :color="color">
                 </color-palette-set>
            </div>
            <!-- /.row -->
            <div class="col-12">
              <h5>Black/White Nuances</h5>
            </div>
            <div class="row">
              <color-palette-set v-for="color in colors[1]" :key="color"
                                 :color="color">
              </color-palette-set>
            </div>
            <!-- /.row -->
            <div class="col-12">
              <h5>Colors</h5>
            </div>
            <div class="row">
              <color-palette-set v-for="color in colors[2]" :key="color"
                                 :color="color">
              </color-palette-set>
            </div>
          </div>
        </va-card>
        <!-- /.card -->
        <!-- START ALERTS AND CALLOUTS -->
        <h5 class="mt-4 mb-2">Alerts and Callouts</h5>

        <div class="row">
          <div class="col-md-6">
            <!-- Alert vue components -->
            <va-card title="Alerts" icon="fa fa-warning">
              <div slot="content">
                <va-alert type="danger">
                  <h5 slot="header"><i :class="alert.list[0].icon"></i> {{alert.list[0].title}} </h5>
                  <div slot="body">
                    {{alert.list[0].content}}
                  </div>
                </va-alert>

                <va-alert type="info" :dismissible="true">
                  <h5 slot="header"><i :class="alert.list[1].icon"></i> {{alert.list[1].title}} </h5>
                  <div slot="body">
                    {{alert.list[1].content}}
                  </div>
                </va-alert>

                <va-alert type="warning" :dismissible="true">
                  <h5 slot="header"><i class="icon fa fa-warning"></i> Alert! </h5>
                  <div slot="body">
                    Warning alert preview. This alert is dismissable.
                  </div>
                </va-alert>

                <va-alert type="success" :dismissible="true">
                  <h5 slot="header"><i class="icon fa fa-check"></i> Alert! </h5>
                  <div slot="body">
                    Success alert preview. This alert is dismissable.
                  </div>
                </va-alert>
              </div>
              <!-- /.card-body -->
            </va-card>
            <!-- /.card -->
          </div>
          <!-- /.col -->

          <div class="col-md-6">
            <!-- Callouts vue component -->
            <va-card title="Callouts" icon="fa fa-bullhorn">
              <div slot="content">
                <va-callout :type="callout.list[0].type"
                          :title="callout.list[0].title"
                          :text="callout.list[0].text">
                </va-callout>

                <va-callout type="info"
                          title="I am an info callout!"
                          text="Follow the steps to continue to payment.">
                </va-callout>

                <va-callout type="warning"
                          title="I am a warning callout vue!!"
                          text="This is a warning callout vue component">
                </va-callout>

                <va-callout type="success"
                          title="I am a success callout vue!!"
                          text="This is a green callout vue component">
                </va-callout>
              </div>
              <!-- /.card-body -->
            </va-card>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <!-- END ALERTS AND CALLOUTS -->
        <h5 class="mt-4 mb-2">Tabs in Cards</h5>

        <div class="row">
          <div class="col-12">
            <!-- Custom Tabs -->
            <va-card title="Tabs" headerType="p-0 pt-1" :isCardTool="false" titleType="p-3">
               <va-nav-tabs slot="contentHeader" navClass="pills" navData="ml-auto p-2">
                  <va-nav-dropdown
                         slot="tabNav"
                         id="tabDropdownMenu"
                         style="padding-left: 5px"
                         title="Dropdown"
                         :isTooltip="false"
                         :is-toggle="true">
                      <va-dropdown-menu location="left">
                           <va-dropdown-item v-for="(item, index) in tabs.dropdownList"
                                       :key="index"
                                       :item="item"
                                       @click.native="handleItemClick(item)"
                           />
                      </va-dropdown-menu>
                  </va-nav-dropdown>

               </va-nav-tabs>

               <va-tab-pane slot="content" id="tab_1" title="Tab 1">
                  <b>{{tabs.tabList[0].title}}</b>
                  <p>{{tabs.tabList[0].text}}</p>
               </va-tab-pane>

               <va-tab-pane slot="content" id="tab_2" title="Tab 2">
                  <p>{{tabs.tabList[1].text}}</p>
               </va-tab-pane>

               <va-tab-pane slot="content" id="tab_3" title="Tab 3">
                  {{dataTab}}
               </va-tab-pane>

            </va-card>

          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <!-- END CUSTOM TABS -->
        <!-- START PROGRESS BARS -->
        <h5 class="mt-4 mb-2">Progress Bars</h5>

        <div class="row">
          <div class="col-md-6">
            <va-card title="Progress Bars Different Sizes">
               <div slot="content">

                 <p><code>.progress</code></p>
                 <progress-bar
                         type="primary"
                         :value="40"
                         :max="100"
                         text="40% Complete (success)">
                 </progress-bar>

                 <p><code>.progress-sm</code></p>
                 <progress-bar
                         :isActive= "true"
                         type="success"
                         size="sm"
                         :value="20"
                         text="20% Complete">
                 </progress-bar>

                 <p><code>.progress-xs</code></p>
                 <progress-bar
                         type="warning"
                         size="xs"
                         :value="60"
                         text="60% Complete (warning)">
                 </progress-bar>

                 <p><code>.progress-xxs</code></p>
                 <progress-bar
                         type="danger"
                         size="xxs"
                         :value="60"
                         text="60% Complete (danger)">
                 </progress-bar>
               </div>
              <!-- /.div slot="content" -->
            </va-card>
          </div>
          <!-- /.col (left) -->
          <div class="col-md-6">
            <va-card title="Progress bars">
              <div slot="content">
                <progress-bar
                        margin="mb-1"
                        :isStriped="false"
                        type="success"
                        :value="40"
                        text="40% Complete (success)">
                </progress-bar>

                <progress-bar
                        margin="mb-2"
                        :isStriped="false"
                        type="info"
                        :value="20"
                        text="20% Complete">
                </progress-bar>

                <progress-bar
                        margin="mb-3"
                        :isStriped="false"
                        type="warning"
                        :value="60"
                        text="60% Complete (warning)">
                </progress-bar>

                <progress-bar
                        margin="mb-4"
                        :isStriped="false"
                        type="danger"
                        :value="80"
                        text="80% Complete">
                </progress-bar>
              </div>
              <!-- /.div slot="content" -->
            </va-card>
          </div>
          <!-- /.col (right) -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-md-6">
            <va-card title="Vertical Progress Bars Different Sizes">
              <div slot="content" class="text-center">
                <p>By adding the class <code>.vertical</code> and <code>.progress-sm</code>, <code>.progress-xs</code>
                  or
                  <code>.progress-xxs</code> we achieve:</p>
                <progress-bar
                        type="primary"
                        :isActive="true"
                        :isVertical="true"
                        :value="40"
                        :max="100"
                        text="40%">
                </progress-bar>

                <progress-bar
                        type="success"
                        :isActive="true"
                        :isVertical="true"
                        size="sm"
                        :value="20"
                        :max="100"
                        text="20%">
                </progress-bar>

                <progress-bar
                        type="warning"
                        :isActive="true"
                        :isVertical="true"
                        size="xs"
                        :value="60"
                        :max="100"
                        text="60%">
                </progress-bar>

                <progress-bar
                        type="info"
                        :isActive="true"
                        :isVertical="true"
                        size="xxs"
                        :value="80"
                        :max="100"
                        text="80%">
                </progress-bar>
              </div>
            </va-card>
          </div>
          <!-- /.col (left) -->
          <div class="col-md-6">
            <va-card title="Vertical Progress bars">
              <div slot="content" class="text-center">
                <p>By adding the class <code>.vertical</code> we achieve:</p>

                <progress-bar
                        type="success"
                        :isVertical="true"
                        :isStriped="false"
                        :value="40"
                        :max="100"
                        text="40%">
                </progress-bar>

                <progress-bar
                        type="info"
                        :isVertical="true"
                        :isStriped="false"
                        :value="20"
                        :max="100"
                        text="20%">
                </progress-bar>

                <progress-bar
                        type="warning"
                        :isVertical="true"
                        :isStriped="false"
                        :value="60"
                        :max="100"
                        text="60%">
                </progress-bar>

                <progress-bar
                        type="danger"
                        :isVertical="true"
                        :isStriped="false"
                        :value="80"
                        :max="100"
                        text="80%">
                </progress-bar>
              </div>
            </va-card>
          </div>
          <!-- /.col (right) -->
        </div>
        <!-- /.row -->
        <!-- END PROGRESS BARS -->

        <!-- START ACCORDION & CAROUSEL-->
        <h5 class="mt-4 mb-2">Bootstrap Accordion & Carousel</h5>

        <div class="row">
          <div class="col-md-6">
            <va-card title="Collapsible Accordion">
                <div slot="content" class="text-center">
                   <va-accordion
                         :list="accordion.list">
                   </va-accordion>
                </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-6">
            <va-card title="Carousel">
                <div slot="content">
                   <va-carousel
                        :name="carousel.name"
                        :list="carousel.list">
                   </va-carousel>
                </div>
            </va-card>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <!-- END ACCORDION & CAROUSEL-->

        <!-- START TYPOGRAPHY -->
        <h5 class="mt-4 mb-2">Typography</h5>

        <div class="row">
          <div class="col-md-6">
            <va-card title="Headlines" icon="fa fa-text-width">
              <div slot="content">
                <h1>h1. Bootstrap heading</h1>

                <h2>h2. Bootstrap heading</h2>

                <h3>h3. Bootstrap heading</h3>
                <h4>h4. Bootstrap heading</h4>
                <h5>h5. Bootstrap heading</h5>
                <h6>h6. Bootstrap heading</h6>
              </div>
            </va-card>
          </div>
          <!-- ./col -->
          <div class="col-md-6">
            <va-card title="Text Emphasis" icon="fa fa-text-width">
              <div slot="content">
                <va-text>Lead to emphasize importance</va-text>

                <va-text type="success">Text green to emphasize success</va-text>

                <va-text type="info">Text aqua to emphasize info</va-text>

                <va-text type="primary">Text light blue to emphasize primary</va-text>

                <va-text type="danger">Text red to emphasize danger</va-text>

                <va-text type="warning">Text yellow to emphasize warning</va-text>

                <va-text type="muted">Text muted to emphasize general</va-text>
              </div>
            </va-card>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-md-6">
            <va-card title="Block Quotes" icon="fa fa-text-width">
              <div slot="content">
                <va-blockquote :info="blockquote"/>
              </div>
            </va-card>
          </div>
          <!-- ./col -->
          <div class="col-md-6">
            <va-card title="Secondary Block Quotes" icon="fa fa-text-width">
              <div slot="content">
                <va-blockquote type="secondary" :info="blockquote"/>
              </div>
            </va-card>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-md-4">
            <va-card title="Unordered List" icon="fa fa-text-width">
              <div slot="content">
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </div>
            </va-card>
          </div>
          <!-- ./col -->
          <div class="col-md-4">
            <va-card title="Ordered Lists" icon="fa fa-text-width">
              <div slot="content">
                <ol>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Nulla volutpat aliquam velit
                    <ol>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ol>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ol>
              </div>
            </va-card>
          </div>
          <!-- ./col -->
          <div class="col-md-4">
            <va-card title="Unstyled List" icon="fa fa-text-width">
              <div slot="content">
                <ul class="list-unstyled">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </div>
            </va-card>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-md-6">
            <va-card title="Description" icon="fa fa-text-width">
              <div slot="content">
                <dl>
                  <dt>Description lists</dt>
                  <dd>A description list is perfect for defining terms.</dd>
                  <dt>Euismod</dt>
                  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                  <dt>Malesuada porta</dt>
                  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                </dl>
              </div>
              </va-card>
          </div>
          <!-- ./col -->
          <div class="col-md-6">
            <va-card title="Description Horizontal" icon="fa fa-text-width">
              <div slot="content">
                <dl class="dl-horizontal">
                  <dt>Description lists</dt>
                  <dd>A description list is perfect for defining terms.</dd>
                  <dt>Euismod</dt>
                  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                  <dt>Malesuada porta</dt>
                  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                  <dt>Felis euismod semper eget lacinia</dt>
                  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus.
                  </dd>
                </dl>
              </div>
            </va-card>

          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->
        <!-- END TYPOGRAPHY -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import ColorPaletteSet from '@/components/ElementsAdminLte/ColorPaletteSet/ColorPaletteSet.vue'
    import ProgressBar from '@/components/ElementsAdminLte/ProgressBar/ProgressBar.vue'

    export default {
        name: "GeneralUi",
        components: { ContentHeader, ColorPaletteSet, ProgressBar },

        data () {
            return {
                colors: [
                    ['Primary', 'Secondary', 'Info', 'Success', 'Warning', 'Danger' ],
                    ['Black', 'Gray Dark', 'Gray', 'Light' ],
                    ['Indigo', 'Lightblue', 'Navy', 'Purple', 'Fuchsia', 'Pink', 'Maroon', 'Orange', 'Lime', 'Teal', 'Olive' ]
                ],
                alert: {
                    list: [
                        {
                            icon:'icon fa fa-ban',
                            title: 'Alert! vue component',
                            content: 'Danger alert preview. This alert isn`t dismissable. A wonderful serenity has taken possession of my\n' +
                            '                    entire\n' +
                            '                    soul, like these sweet mornings of spring which I enjoy with my whole heart.'
                        },
                        {
                            icon:'icon fa fa-info',
                            title: 'Alert! vue component',
                            content: 'Info alert preview. This alert is dismissable.'
                        },
                    ]
                },
                callout: {
                    list: [
                        {
                           type: 'danger',
                           title: 'I am a danger callout!',
                           text: 'There is a problem that we need to fix. A wonderful serenity has taken possession of my entire\n' +
                           '                    soul,\n' +
                           '                    like these sweet mornings of spring which I enjoy with my whole heart.'
                        }
                    ]
                },
                accordion: {
                    list: [
                        {
                            id: 'collapseOne',
                            type: 'primary',
                            title: 'Collapsible Group Item #1',
                            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
                        },
                        {
                            id: 'collapseTwo',
                            type: 'danger',
                            title: 'Collapsible Group Danger',
                            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
                        },
                        {
                            id: 'collapseThree',
                            type: 'success',
                            title: 'Collapsible Group Success',
                            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
                        }
                    ]
                },
                carousel: {
                    name: 'carouselExampleIndicators',
                    list: [
                        {
                            image: '/static/img/photo1.png',
                            text: 'First Slide'
                        },
                        {
                            image: '/static/img/photo2.png',
                            text: 'Second Slide'
                        },
                        {
                            image: '/static/img/photo3.jpg',
                            text: 'Third Slide'
                        },
                        {
                            image: '/static/img/photo4.jpg',
                            text: 'Fourth Slide'
                        }
                    ]
                },
                blockquote: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                    small: 'Someone famous in ',
                    cite: 'Source Title'
                },
                tabs: {
                    dropdownList: [
                        {
                          icon: 'fas fa-info-circle',
                          link: 'javascript:void(0);',
                          text: 'Action'
                        },
                        {
                          link: 'https://adminlte.io/docs/2.4/installation',
                          text: 'Another action'
                        },
                        {
                          link: 'javascript:void(0);',
                          text: 'Something else here',

                        },
                        {
                          isDivider: true
                        },
                        {
                          icon: 'fas fa-tachometer-alt',
                          router: { name: 'DashboardV1' },
                          text: 'Dashboard v1'
                        },
                    ],
                    tabList: require('@/libs/default/pages/GeneralTabList')
                },
                dataTab: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            }
        },
        methods: {
            handleItemClick(val) {
                console.log(val.text)
            }
        }
    }
</script>

<style>
  .color-palette-box h4 {
    position: absolute;
    left: 1.25rem;
    margin-top: .75rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    display: block;
    z-index: 7;
  }
    .dl-horizontal dt {
      float: left;
      width: 160px;
      clear: left;
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dl-horizontal dd {
      margin-left: 180px;
    }

</style>