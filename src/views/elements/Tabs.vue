<template>
    <section class="content">
        <content-header title="Tabs"/>
        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <va-row>
                    <div class="col-12">
                        <h4>Tabs inside Card Header</h4>
                    </div>
                </va-row>
                <!-- ./row -->
                <va-row>

                    <div class="col-12 col-sm-6 col-lg-4">
                       <va-card  headerType="p-0 pt-1" >
                            <va-nav-tabs slot="cardTitle"/>

                            <va-tab-pane slot="content" id="tab_1" title="Home">
                                <div >
                                    {{data1}}
                                </div>
                            </va-tab-pane>

                            <va-tab-pane slot="content" id="tab_2" title="Profile">
                                <div >
                                    {{data2}}
                                </div>
                            </va-tab-pane>
                            <va-tab-pane slot="content" id="tab_3" title="Message">
                                <div>
                                    {{data3}}
                                </div>
                            </va-tab-pane>

                       </va-card>
                    </div>

                    <div class="col-12 col-sm-6 col-lg-4">
                        <va-card  theme="primary" :isCardTool="false">
                            <va-nav-tabs slot="contentHeader"/>

                            <va-tab-pane slot="content" id="tab_4" title="Home">
                                <div>
                                    {{data1}}
                                </div>
                            </va-tab-pane>

                            <va-tab-pane slot="content" id="tab_5" title="Profile">
                                <div>
                                    {{data2}}
                                </div>
                            </va-tab-pane>
                            <va-tab-pane slot="content" id="tab_6" title="Message">
                                <div>
                                    {{data3}}
                                </div>
                            </va-tab-pane>

                        </va-card>
                    </div>

                    <div class="col-12 col-sm-6 col-lg-4">
                        <va-card theme="primary" :isOutline="true" headerType="p-0 pt-1" >
                            <va-nav-tabs slot="cardTitle"/>

                            <va-tab-pane slot="content" id="tab_7" title="Home" icon="fa fa-home">
                                <div>
                                    {{data1}}
                                </div>
                            </va-tab-pane>

                            <va-tab-pane slot="content" id="tab_8" title="Profile" icon="fa fa-user">
                                <div>
                                    {{data2}}
                                </div>
                            </va-tab-pane>
                            <va-tab-pane slot="content" id="tab_9" title="Message" icon="fa fa-envelope">
                                <div>
                                    {{data3}}
                                </div>
                            </va-tab-pane>
                        </va-card>
                    </div>

                </va-row>
                <va-row>

                    <div class="col-12 col-sm-6 col-lg-4">
                        <va-card  headerType="p-0 pt-1" >
                            <va-nav-tabs slot="cardTitle" navClass="pills" navData="ml-auto p-2"/>

                            <va-tab-pane slot="content" id="tab_1" title="Home">
                                <div id="tabs-one-home">
                                    {{data1}}
                                </div>
                            </va-tab-pane>

                            <va-tab-pane slot="content" id="tab_2" title="Profile">
                                <div id="tabs-two-profile">
                                    {{data2}}
                                </div>
                            </va-tab-pane>
                            <va-tab-pane slot="content" id="tab_3" title="Message">
                                <div>
                                    {{data3}}
                                </div>
                            </va-tab-pane>

                        </va-card>
                    </div>

                    <div class="col-12 col-sm-6 col-lg-4">
                        <va-card  theme="warning" headerType="p-0 pt-1" :isCardTool="false" titleType="p-3">
                            <va-nav-tabs slot="contentHeader" navClass="pills" navData="ml-auto p-2"/>

                            <va-tab-pane slot="content" id="tab_4" title="Home">
                                <div>
                                    {{data1}}
                                </div>
                            </va-tab-pane>

                            <va-tab-pane slot="content" id="tab_5" title="Profile">
                                <div>
                                    {{data2}}
                                </div>
                            </va-tab-pane>
                            <va-tab-pane slot="content" id="tab_6" title="Message">
                                <div>
                                    {{data3}}
                                </div>
                            </va-tab-pane>

                        </va-card>
                    </div>

                    <div class="col-12 col-sm-6 col-lg-4">
                        <va-card theme="primary" :isOutline="true" headerType="p-0 pt-1" >
                            <va-nav-tabs slot="cardTitle" navClass="pills" navData="ml-auto p-2"/>

                            <va-tab-pane slot="content" id="tab_7" title="Home" icon="fa fa-home">
                                <div>
                                    {{data1}}
                                </div>
                            </va-tab-pane>

                            <va-tab-pane slot="content" id="tab_8" title="Profile" icon="fa fa-user">
                                <div>
                                    {{data2}}
                                </div>
                            </va-tab-pane>
                            <va-tab-pane slot="content" id="tab_9" title="Message" icon="fa fa-envelope">
                                <div>
                                    {{data3}}
                                </div>
                            </va-tab-pane>
                        </va-card>
                    </div>

                </va-row>

                <va-card theme="primary" :isOutline="true" title="Tabs Custom Content Examples 1" icon="fas fa-edit">
                   <div slot="content">
                       <h4>Custom Content Below</h4>

                       <va-nav-tabs :cardHeaderTabs="false">
                           <va-tab-pane slot="tabContent" id="tab_11" title="Home" icon="fa fa-home">
                               <div>
                                   {{data1}}
                               </div>
                           </va-tab-pane>

                           <va-tab-pane slot="tabContent" id="tab_12" title="Profile" icon="fa fa-user">
                               <div>
                                   {{data2}}
                               </div>
                           </va-tab-pane>
                           <va-tab-pane slot="tabContent" id="tab_13" title="Message" icon="fa fa-envelope">
                               <div>
                                   {{data3}}
                               </div>
                           </va-tab-pane>
                           <va-tab-pane slot="tabContent" id="tab_14" title="Settings" icon="fa fa-gears">
                               <div>
                                   {{data4}}
                               </div>
                           </va-tab-pane>
                       </va-nav-tabs>
                       <!-- CUSTOM CONTENT -->
                       <div class="tab-custom-content">
                           <p class="lead mb-0">Custom Content goes here</p>
                       </div>

                   </div>
                </va-card>

                <va-card theme="primary" :isOutline="true" title="Tabs Custom Content Examples 2" icon="fas fa-edit">
                    <div slot="content">
                      <h4>Custom Content Above</h4>

                      <va-nav-tabs :cardHeaderTabs="false">
                        <!-- CUSTOM CONTENT -->
                        <div class="tab-custom-content">
                            <p class="lead mb-0">Custom Content goes here</p>
                        </div>
                        <!-- END -->
                        <va-tab-pane slot="tabContent" id="tab_15" title="Home" >
                            <div>
                                {{data1}}
                            </div>
                        </va-tab-pane>

                        <va-tab-pane slot="tabContent" id="tab_16" title="Profile">
                            <div>
                                {{data2}}
                            </div>
                        </va-tab-pane>
                        <va-tab-pane slot="tabContent" id="tab_17" title="Message">
                            <div>
                                {{data3}}
                            </div>
                        </va-tab-pane>
                        <va-tab-pane slot="tabContent" id="tab_18" title="Settings">
                            <div>
                                {{data4}}
                            </div>
                        </va-tab-pane>

                      </va-nav-tabs>
                    </div>
                </va-card>

                <va-card theme="primary" :isOutline="true" title="Vertical Tabs Examples 1" icon="fas fa-edit">
                    <div slot="content">
                        <h4>Left Sided</h4>
                        <va-row>
                            <div class="col-5 col-sm-3">
                                 <va-nav-tabs  :vertical="true" navData=" h-100"/>
                            </div>
                            <div class="col-7 col-sm-9">
                                 <va-tab-pane id="tab_19" title="Home">
                                    <div>
                                        {{data1}}
                                    </div>
                                 </va-tab-pane>

                                 <va-tab-pane id="tab_20" title="Profile">
                                    <div>
                                        {{data2}}
                                    </div>
                                 </va-tab-pane>
                                 <va-tab-pane id="tab_21" title="Message" icon="fa fa-envelope">
                                    <div>
                                        {{data3}}
                                    </div>
                                 </va-tab-pane>
                                 <va-tab-pane id="tab_22" title="Settings" icon="fa fa-gears">
                                    <div>
                                        {{data4}}
                                    </div>
                                 </va-tab-pane>
                            </div>
                        </va-row>
                    </div>
                </va-card>

                <va-card theme="primary" :isOutline="true" title="Vertical Tabs Examples 2" icon="fas fa-edit">
                    <div slot="content">
                        <h4>Right Sided</h4>
                        <va-row>

                            <div class="col-7 col-sm-10">
                                <va-tab-pane id="tab_23" title="Home" icon="fa fa-home">
                                    <div>
                                        {{data1}}
                                    </div>
                                </va-tab-pane>

                                <va-tab-pane id="tab_24" title="Profile" icon="fa fa-user">
                                    <div>
                                        {{data2}}
                                    </div>
                                </va-tab-pane>
                                <va-tab-pane id="tab_25" title="Message">
                                    <div>
                                        {{data3}}
                                    </div>
                                </va-tab-pane>
                                <va-tab-pane id="tab_26" title="Settings">
                                    <div>
                                        {{data4}}
                                    </div>
                                </va-tab-pane>
                            </div>
                            <div class="col-5 col-sm-2">
                                <va-nav-tabs  navClass="pills" :vertical="true" side="right" navData="nav-tabs-right h-100"/>
                            </div>
                        </va-row>
                    </div>
                </va-card>
                <br/>
            </div>
        </div>

    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'

    export default {
        name: "Tabs",
        components: { ContentHeader },
        data () {
            return {
                activeTab: 'home',
                data1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.',
                data2: 'Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.',
                data3: 'Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.',
                data4: 'Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.',
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

