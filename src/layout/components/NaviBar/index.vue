<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand "
       :class="[
                 fixedHeader ? 'border-bottom-0': '',
                 textSmHeader ? 'text-sm': '',
                 colors.navBarColor ? colors.navBarColor : 'navbar-white navbar-light'
               ]">

    <!-- TOP NAVIGATION -->
    <div v-if="isTopNav" class="container">
       <logo v-show="showLogo" brand="navbar-brand"
            transition="fade-component"
            mode="out-in"
            :is-top-nav="isTopNav"
            @logo-click="handleClick"
       />

       <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse order-3" id="navbarCollapse">
           <left-navbar :is-top-nav="isTopNav"/>

           <!-- SEARCH FORM -->
           <search-header v-if="showSearchForm"/>
       </div>
       <right-navbar :is-top-nav="isTopNav"/>
    </div>

    <!-- DEFAULT NAVIGATION -->
    <template v-else>
       <left-navbar/>

       <!-- SEARCH FORM -->
       <search-header v-if="showSearchForm"/>

       <!-- breadcrumb -->
       <breadcrumb class="breadcrumb-container" v-if="showBreadcrumb"/>

       <right-navbar/>
    </template>
  </nav>
  <!-- /.navbar -->
</template>

<script>
    import Logo from '../Sidebar/components/Logo'
    import LeftNavbar from './LeftNavbar'
    import RightNavbar from './RightNavbar'
    import SearchHeader from '@/components/Search/SearchHeader.vue'
    import Breadcrumb from '@/components/Breadcrumb/index.vue'
    import {  mapGetters } from 'vuex'

  export default {
      name: 'NaviBar',
      components: { Logo, LeftNavbar, SearchHeader,  RightNavbar, Breadcrumb },
      data() {
          return {
              showLogo: true,
          }
      },
      computed: {
          ...mapGetters([ 'fixedHeader', 'textSmHeader', 'showSearchForm', 'showBreadcrumb', 'colors' ]),
          isTopNav() {
              return this.$store.state.layouts.status.TopNav
          }
      },
      methods: {
          handleClick() {
              // go to prev page
              //this.$router.go(-1)
          }
      }
}
</script>

<style lang="scss" scoped>
  // fix error for main-header if 'text-sm' & 'layout-navbar-fixed' - stick control-sidebar to navbar & bg color for main content
  .main-header  {
    height: 56px;
  }
  .breadcrumb-container {
    float: left;
  }
</style>