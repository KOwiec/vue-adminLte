<template>
    <!-- menu item -->
  <div class="nav-link-item"
       @click="handleClick">

      <i :class="[active ? isActiveIcon :`${icon} nav-icon `]"
         :style="{ 'color': iconColor,
                   'font-size': menuIconsSize ? iconSize : ''
                 }">
      </i>
      <p :style="textStyle">
          {{ title }}

          <i v-if="hasTreeview" class="right fas fa-angle-left"></i>

          <span v-if="badge && badge.data"
                class="badge"
                :class="[ badge.type==='String' ? 'badge-danger' : 'badge-info',
                          hasTreeview ? 'center': 'right'
                        ]">
                {{badge.data}}
          </span>
      </p>
  </div>
</template>

<script>
    import Menu from '@/components/Menu/src/menu-mixin';
    import Emitter from '@/mixins/emitter-mixin';
    import {  mapGetters } from 'vuex'

    export default {
        name: "Item",
        mixins: [ Menu, Emitter ],
        props: {
            index: {
                default: null,
                validator: val => typeof val === 'string' || val === null
            },
            icon: { type: String, default: '' },

            iconActive: { String },

            title: { type: String, default: '' },

            badge: { type: Object },

            hasTreeview: { type: Boolean, default: false },

            isOneChild: { type: Boolean, default: false }
        },
        computed: {
            ...mapGetters([ 'menuIconsSize', 'colors' ]),

            activeTextColor() {
                return this.rootMenu.activeTextColor || '';
            },
            textColor() {
                return this.rootMenu.textColor || '';
            },
            textStyle() {
               if ( !this.hasTreeview && this.rootMenu.isDarkCustom && !this.isOneChild ) {
                    return { color: this.active
                                  ? this.activeTextColor
                                  : this.textColor
                    };
               }
            },
            active() {
                return this.index === this.rootMenu.activeIndex;
            },
            isActiveIcon () {
                return this.iconActive ? `${this.iconActive} nav-icon ` : `${this.icon} nav-icon `
            },
            iconColor() {
                if (this.colors.menuIconColor !== '' && this.hasTreeview) {
                   return this.colors.menuIconColor
                }
                return ''
            },
            iconSize() {
                return this.$store.state.theme.menuIconSize
            }
        },
        methods: {
            handleClick() {
                if(this.hasTreeview) this.dispatch('Submenu', 'nav-link-item-click');
            },
        }
    }
</script>

<style lang="scss" scoped>
    .nav-link-item > p > .right {
        position: absolute;
        right: 1rem;
        top: .7rem;
    }
</style>