<template>
  <transition name="fade" mode="out-in">
    <li  class="nav-item">
      <a v-if="isSvgIcon" class="nav-link"  @click="click" role="button">
        <svg-icon  id="svgIcon" :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" :style="{'color':theme}"/>
      </a>
      <a v-else class="nav-link" :style="{'color':theme}" data-widget="fullscreen" data-slide="true" href="#" role="button">
        <i class="fas fa-expand-arrows-alt"></i>
      </a>
    </li>
  </transition>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
    props: {
        isSvgIcon: { type: Boolean, default: true },
        theme: { type: String, default: ''}
    },
    data() {
       return {
         isFullscreen: false
       }
    },
    mounted() {
       this.init()
    },
    beforeDestroy() {
       this.destroy()
    },
    methods: {
       click() {
          if (!screenfull.enabled) {
            this.$message({
            message: 'you browser can not work',
            type: 'warning'
            })
          return false
          }
          screenfull.toggle()
       },
       change() {
         this.isFullscreen = screenfull.isFullscreen
       },
       init() {
         if (screenfull.enabled) {
            screenfull.on('change', this.change)
         }
       },
       destroy() {
         if (screenfull.enabled) {
            screenfull.off('change', this.change)
         }
       }
  }
}
</script>

<style scoped>

.nav-link {
  display: inline-block;
  cursor: pointer;
}
  #svgIcon {
     width: 19px;
     height: 19px;
   }
  .fa-expand-arrows-alt,
  .fa-compress-arrows-alt  {
      transform: scale(1.5);
  }
</style>
