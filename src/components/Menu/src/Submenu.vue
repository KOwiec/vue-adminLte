<template>
    <li class="nav-item has-treeview"
        :class="{'menu-open': opened }">

        <slot name="tree-view"
              :is-active="active"
        />

        <el-collapse-transition>
           <ul class="nav nav-treeview">
             <slot/>
           </ul>
        </el-collapse-transition>

    </li>
</template>

<script>
    import Menu from './menu-mixin';
    import Emitter from '@/mixins/emitter-mixin';
    import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';

    export default {
        name: "Submenu",
        componentName: 'Submenu',
        components: { ElCollapseTransition },
        mixins: [Menu, Emitter],

        props: {
            index: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                items: {},
                submenus: {},
            };
        },
        computed: {
            opened () {
                return this.rootMenu.openedMenus.indexOf(this.index) > -1;
            },
            active() {
                let isActive = false;
                const submenus = this.submenus;
                const items = this.items;
                // check active in menu-items
                Object.keys(items).forEach(index => {
                    if (items[index].active) {
                        isActive = true;
                    }
                });
                // check active in submenus
                Object.keys(submenus).forEach(index => {
                    if (submenus[index].active) {
                        isActive = true;
                    }
                });
                return isActive;
            },

        },
        methods: {
            handleClick() {
                this.dispatch('Menu', 'submenu-click', this);
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
            }
        },
        mounted() {
            this.$on('nav-link-item-click', this.handleClick);
            this.parentMenu.addSubmenu(this);
            this.rootMenu.addSubmenu(this);
        },

        beforeDestroy() {
            this.parentMenu.removeSubmenu(this);
            this.rootMenu.removeSubmenu(this);
        }
    }
</script>


