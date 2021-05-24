<template>
    <section class="content">
        <sticky v-if="isSticky" :z-index="10" class-name="sub-navbar" :sticky-top="getPosition">
           <content-header class="content-header"
                   :title="getHeaderTitle"
                   :subTitle="getSubTitle"
                   theme="info"
                   :isBgColor="true"
                   :isCustomHeader="isCustomHeader">
               <div slot="headerLeft" class="header-left">
                   <p>{{cookie_txt}}</p>
               </div>
               <div slot="headerRight" class="header-right">
                   <i class="fas fa-cookie-bite"></i>
                   <strong><a href="javascript:void(0);" style="padding-right: 20px;">cookies policy</a></strong>
                   <va-button
                       name="Accept & Close"
                       theme="warning"
                       @btn-click="handleClick" >
                   </va-button>
               </div>
           </content-header>
        </sticky>
        <content-header v-else title="Sticky Out"/>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <!-- Default box -->
                <va-row>
                    <div class="col-md-12">
                        <va-card
                                theme="primary"
                                WidgetSet="default"
                                :title="getTitle">
                            <div slot="content" v-for="(item, index) in 25" :key="index">
                                Start creating your amazing application!<br>
                                <br>
                            </div>
                            <div slot="footer">Footer</div>
                        </va-card>
                    </div>
                </va-row>
            </div>
        </div>
        <!-- /.content -->
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import Sticky from '@/components/Sticky'
    import {  mapGetters } from 'vuex'

    export default {
        name: "StickyDemo",
        components: { ContentHeader, Sticky },
        data() {
            return {
                isCustomHeader: false,
                windowHeight: null,
                isSticky: true,
                cookie_txt: 'We use cookies, as explained in our cookies policy. If you agree to our use of cookies, please close this message and continue to use this site. ',
            }
        },
        computed: {
            ...mapGetters([ 'colors', 'textSmHeader', 'layout' ]),
            getTitle() {
                return this.layout.NavFixed
                    ? 'Sticky header and option of layout (layout-navbar-fixed) - When the page is scrolled to the preset position will be sticky to navbar.'
                    : this.isCustomHeader ? 'Sticky cookies -  When the page is scrolled custom header will be sticky to the bottom position '
                                          : 'Sticky header - When the page is scrolled to the preset position will be sticky on the top.'
            },
            getPosition() {
                if (this.isCustomHeader) {
                    return this.windowHeight - 120
                }
               return this.layout.NavFixed ? 56 : 0
            },
            getHeaderTitle() {
                return this.isCustomHeader ? '' : 'Sticky Header'
            },
            getSubTitle() {
                return this.isCustomHeader ? 'Cookie Consent' : ''
            }
        },
        watch: {
            $route() {
                this.getPath()
            },
            windowHeight(newHeight, oldHeight) {
                //this.txt = ` changed height to ${newHeight} from ${oldHeight}`;
            }
        },
        mounted() {
             window.addEventListener('resize', this.Resize);
        },
        created () {
            this.getPath()
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.Resize);
        },
        methods: {
            getPath() {
                if (this.$route.path === '/components/sticky-screen') {
                    this.isCustomHeader = true;
                    this.windowHeight = window.innerHeight
                }
            },
            Resize() {
                this.windowHeight = window.innerHeight
            },
            handleClick() {
                this.$nextTick(() => {
                  this.isCustomHeader = false;
                  this.isSticky = false
                })
            },
        }
    }
</script>

<style scoped>
   .fa-cookie-bite {
       padding-right: 10px;
       transform: scale(1.5);
   }
   .header-left {
       float: left;
    }
</style>