<template>
    <!-- menu -->
        <va-menu-item v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)"
                      :index="resolvePath(onlyOneChild.path)"
                      :item="onlyOneChild">
                 <app-link v-if="onlyOneChild.meta"
                           :to="resolvePath(onlyOneChild.path)"
                           :index="resolvePath(onlyOneChild.path)"
                           :item="onlyOneChild">

                       <item :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
                             :iconActive="onlyOneChild.meta.iconActive"
                             :index="resolvePath(onlyOneChild.path)"
                             :title="generateTitle(onlyOneChild.meta.title)"
                             :badge="onlyOneChild.meta.badge"
                             :isOneChild="onlyOneChild.isOneChild"
                       />

                 </app-link>
        </va-menu-item>

        <va-submenu v-else :index="resolvePath(item.path)">
               <template slot="tree-view" slot-scope="submenu">
                   <app-link v-if="item.meta"
                           :to="resolvePath(item.path)"
                           :index="resolvePath(item.path)"
                           :has-treeview="true"
                           :isActive="submenu.isActive"
                           :item="item">

                      <item :icon="item.meta && item.meta.icon"
                            :iconActive="item.meta.iconActive"
                            :title="generateTitle(item.meta.title)"
                            :badge="item.meta.badge"
                            :has-treeview="true"
                       />

                   </app-link>
               </template>

               <sidebar-item v-for="child in item.children"
                            :key="child.path"
                            :is-nested="true"
                            :item="child"
                            :base-path="resolvePath(child.path)">
               </sidebar-item>

        </va-submenu>
</template>

<script>
    import path from 'path'
    import { generateTitle } from '@/utils/i18n'
    import { isExternal } from '@/utils/validate'
    import Item from './Item'
    import AppLink from './Link'

    export default {
        name: 'SidebarItem',

        components: { Item, AppLink },

        props: {
            // route object
            item: { type: Object, required: true },

            isNested: { type: Boolean, default: false },

            basePath: { type: String, default: '' }
        },

        data() {
            // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
            this.onlyOneChild = null
            return {}
        },

        methods: {
            generateTitle,
            hasOneShowingChild(children = [], parent) {
                const showingChildren = children.filter(item => {
                    if (item.hidden) {
                        return false
                    } else {
                        // Temp set(will be used if only has one showing child)
                        this.onlyOneChild = item;

                        return true
                    }
                });

                // When there is only one child router, the child router is displayed by default
                if (showingChildren.length === 1) {
                    this.onlyOneChild = { ... this.onlyOneChild, isOneChild: true };
                    return true
                }

                // Show parent if there are no child router to display
                if (showingChildren.length === 0) {
                    this.onlyOneChild = { ... parent, path: '', noShowingChildren: true };
                    return true
                }

                return false
            },

            resolvePath(routePath) {
                if (isExternal(routePath)) {
                    return routePath
                }
                if (isExternal(this.basePath)) {
                    return this.basePath
                }
                return path.resolve(this.basePath, routePath)
            }
        }
    }
</script>

