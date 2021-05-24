<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper" :style="mainBgColor">
      <!-- Main content -->
         <transition name="page" mode="out-in">
             <!--<start-page></start-page> -->
             <router-view :key="key" />
         </transition>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
    import { mapGetters } from 'vuex'

export default {
    name: 'AppMain',
    computed: {
        ...mapGetters([ 'colors' ]),
        key() {
            return this.$route.path
        },
        mainBgColor() {
            if (this.colors.mainBgColor !== '') {
                return `background-color: ${this.colors.mainBgColor} !important`
            }
            return ''
        },
    },
}
</script>





