<template>
    <ul class="nav nav-pills nav-sidebar flex-column"
        :class="{ 'text-sm': textSmSidebar,
                  'nav-flat': flatSidebar,
                  'nav-legacy': legacySidebar,
                  'nav-compact':compactSidebar,
                  'nav-child-indent': childIndentSidebar,
                  'nav-collapse-hide-child': collapseHideChild,
                }"
        :style="menuBackground"
        data-widget="treeview"
        data-accordion="false"
        role="menu"
    >
        <slot></slot>
    </ul>
</template>

<script>
    import Emitter from '@/mixins/emitter-mixin';
    import {  mapGetters } from 'vuex'
    import { mixColor } from '@/utils/colors'

    export default {
        name: "Menu",
        componentName: 'Menu',
        provide() {
            return {
                rootMenu: this,
            }
        },
        mixins: [ Emitter ],
        props:  {
            mode: { type: String, default: 'vertical' },

            defaultActive: { type: String,  default: '' },

            colorsMode: { type: String,  default: 'dark' },

            menuColor:{ type: String, default: '' },

            menuItemColor:{ type: String, default: '' },

            textColor: { type: String, default: '' },

            activeTextColor: { type: String, default: '' },

            isHoverEffect: { type: Boolean, default: false },    // see: menuItem - methods for @mouseenter & @mouseleave

            onlyHover: { type: Boolean, default: false },

            collapse:  { type: Boolean, default: false },

            showTooltip: { type: Boolean, default: true },

            router: Boolean,
        },
        data() {
            return {
                activeIndex: this.defaultActive,
                openedMenus: [],
                items: {},
                submenus: {},
                triggerOutside: null
            };
        },
        computed: {
            ...mapGetters([
                'textSmSidebar',
                'flatSidebar',
                'legacySidebar',
                'compactSidebar',
                'childIndentSidebar',
                'collapseHideChild',
                'colors',
                // if we bind this property to adminlte 'data-accordion', it will be always work - 'true' - todo
                // therefore we use it in method - 'openMenu'
                'accordionStyle'
            ]),
            hoverBackground() {
                //see: utils/colors.js
                let percent = this.colors.sidebarMode === 'dark' ? 0.1 : 0.1;
                let hoverColor = mixColor(this.menuItemColor, percent);
                //console.log('hover color: ' + hoverColor)
                return this.menuItemColor !== '' ? hoverColor : '';
            },
            isSidebarColor() {
                return this.colors.sidebarBg !== '';
            },
            isDarkCustom() {
                return this.colors.sidebarMode === 'dark' &&  this.isSidebarColor;
            },
            isLightCustom() {
                return this.colors.sidebarMode === 'light' &&  this.isSidebarColor
            },
            menuBackground() {
                if (this.isSidebarColor) return {'background-color':  this.menuColor };
                return '';
            },
        },
        watch: {
            defaultActive: 'updateActiveIndex',
        },
        methods: {
            updateActiveIndex(val) {
                const item = this.items[val] || this.items[this.defaultActive];
                if (item) {
                    this.activeIndex = item.index;
                   this.initOpenedMenu();
                } else {
                    this.activeIndex = null;
                }
            },
            initOpenedMenu() {
                const index = this.activeIndex;

                const activeItem = this.items[index];
                if (!activeItem || this.collapse) return;

                let indexPath = activeItem.indexPath;

                indexPath.forEach(index => {
                    let submenu = this.submenus[index];
                    submenu && this.openMenu(index, indexPath);
                });
            },
            openMenu(index, indexPath) {
               let openedMenus = this.openedMenus;
               if (this.openedMenus.indexOf(index) !== -1) return;
               // collapse all menu that are not under current menu item
                if (this.accordionStyle) {
                    this.openedMenus = openedMenus.filter(index => {
                        return indexPath.indexOf(index) !== -1;
                    });
                }
                this.openedMenus.push(index);
            },
            closeMenu(index) {
                const i = this.openedMenus.indexOf(index);
                if (i !== -1) {
                    this.openedMenus.splice(i, 1);
                }
            },
            handleSubmenuClick(submenu) {
                    const { index, indexPath } = submenu;
                    let isOpened = this.openedMenus.indexOf(index) !== -1 ;

                    if (isOpened) {
                        this.closeMenu(index);
                        this.$emit('close', index, indexPath);
                    } else {
                        this.openMenu(index, indexPath);
                        this.$emit('open', index, indexPath);
                    }
            },
            handleItemClick(item) {
                const { index, indexPath } = item;
                const oldActiveIndex = this.activeIndex;

                const hasIndex = item.index !== null;

                if (hasIndex) {
                    this.activeIndex = item.index;
                }

                this.$emit('select', index, indexPath, item);

                if (this.router && hasIndex) {
                    this.routeToItem(item, (error) => {
                        this.activeIndex = oldActiveIndex;
                        if (error) console.error(error);
                    });
                }
            },
            routeToItem(item, onError) {
                let route = item.route || item.index;
                try {
                    this.$router.push(route, () => {}, onError);
                } catch (e) {
                    console.error(e);
                }
            },
            addItem(item) {
                this.$set(this.items, item.index, item);
            },
            removeItem(item) {
                delete this.items[item.index];
            },
            addSubmenu(item) {
                this.$set(this.submenus, item.index, item);
            },
            removeSubmenu(item) {
                delete this.submenus[item.index];
            },

        },
        mounted() {
           this.initOpenedMenu();
           this.$on('item-click', this.handleItemClick);
           this.$on('submenu-click', this.handleSubmenuClick);
           this.$watch('items', this.updateActiveIndex);
        }
    }
</script>
