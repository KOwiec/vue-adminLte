<template>
    <!-- Content Header (Page header)  -->
    <transition name="fade" mode="out-in">
      <div v-if="showPageHeader" class="content-header" :style="bgColor">
        <div :class="isTopNav ? 'container' : 'container-fluid'">
            <div class="row sm-2">
                <div class="col-sm-6">
                    <h1 class="m-0 " :class="textTheme">{{title}} <small :class="textTheme">{{subTitle}}</small></h1>
                    <slot v-if="isCustomHeader" name="headerLeft"/>
                </div><!-- /.col -->
                <div class="col-sm-6" >
                    <!-- breadcrumb-->
                    <breadcrumb v-if="!showBreadcrumb && !isCustomHeader" class="breadcrumb-container"
                                separator="" separatorClass="el-icon-caret-right" :isHeader="true"/>
                    <slot v-if="isCustomHeader" name="headerRight"/>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div>
        <!-- /.container-fluid-->
      </div>
    </transition>
</template>

<script>
    import {  mapGetters } from 'vuex'
    import Breadcrumb from '@/components/Breadcrumb/index.vue'

    export default {
        name: "ContentHeader",
        components: { Breadcrumb },
        props: {
            title: { type: String, default:'' },

            theme: { type: String, default:'dark'},

            subTitle: { type: String, default:'' },

            isBgColor: { type: Boolean, default: false },

            isCustomHeader: { type: Boolean, default: false }
        },
        computed: {
            ...mapGetters(['showBreadcrumb', 'showPageHeader', 'layout', 'headerBg' ]),
            isTopNav() {
                return this.layout.TopNav
            },
            bgColor() {
                if ( this.isBgColor ) {
                    return   `background-color: ${this.headerBg} !important`
                } else {
                    return ''
                }
            },
            textTheme() {
                return `text-${this.theme}`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .breadcrumb-container {
        float: right;
    }
</style>