<template>
    <!-- Brand Logo -->
    <transition name="fade-component" mode="out-in">
          <a  :class="[
                   brand,
                   textSmBrand ? 'text-sm': '',
                   colors.logoColor || isTopNav ? colors.logoColor  : 'navbar-dark',
                   isRounded || isTopNav ? 'rounded' : '',
                  ]"
                   href="javascript:void(0);"
                   @click="logoClick">
             <img v-if="logo" :src="logo" :alt="alt" class="brand-image img-circle elevation-3"
                  style="opacity: .8">
             <span class="brand-text font-weight-light">{{ title }}&nbsp;</span>
          </a>
    </transition>
</template>

<script>
    import {  mapGetters } from 'vuex'

    export default {
        name: "SidebarLogo",
        props: {
            brand: { type: String, default: 'brand-link' },

            isTopNav: { type: Boolean, default: false },

            isRounded: { type: Boolean, default: false },
        },
        data() {
            return {
                title: 'Vue-AdminLTE  ',
                logo: 'static/img/icons/vue2-adminlte-logo-64x64.png',
                alt: '',
            }
        },
        computed: {
            ...mapGetters(['textSmBrand',  'colors']),
        },
        methods: {
            logoClick() {
                this.$emit('logo-click')
            }
        }
    }
</script>

<style scoped>

</style>