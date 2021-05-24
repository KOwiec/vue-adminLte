<template>
    <!-- SEARCH FORM -->
    <transition name="fade" mode="out-in">
      <va-form :inline="true">
        <div class="input-group "
             :class="inputClass"
             :data-widget="widget">
            <div class="form-control" :class="`form-control-${type}`" :style="colorBg">
                <el-select class="sidebar-search-select"
                       v-model="search"
                       :remote-method="searchQuery"
                       filterable
                       default-first-option
                       remote
                       size="small"
                       @change="change"
                       placeholder="Search">
                    <el-option v-for="item in options" :key="item.path" :value="item" :label="item.title.join(' > ')" />
                </el-select>
            </div>
            <div class="input-group-append">
                <button class="btn" :class="`btn-${type}`" type="button" :style="colorBg">
                    <i :class="getIcon"></i>
                </button>
            </div>
        </div>
      </va-form>
    </transition>
</template>

<script>
    import Search from '@/mixins/search-mixin';
    import path from 'path'
    import { isExternalLink, isLabel, isHeader } from '@/utils/validate'

    export default {
        name: "SearchForm",
        mixins: [ Search ],
        data() {
            return {
                search: '',
                options: [],
                searchPool: [],
                optionsName: 'sidebarSearch'
            }
        },
        props: {
            type: { type: String, default: 'navbar' },     // sidebar

            searchColor: { type: String, default: '' },
        },
        computed: {
            inputClass() {
                return this.type === 'navbar' ? 'input-group-sm': ''
            },
            widget() {
                return this.type === 'sidebar' ? 'sidebar-search' : ''
            },
            getIcon() {
                return this.type === 'sidebar' ? 'fas fa-search fa-fw' : 'fas fa-search'
            },
            routes() {
                return this.$store.getters.permission_routes
            },
            colorBg() {
                return {'background-color':  this.searchColor };
            },
        },
        watch: {
            routes() {
                this.searchPool = this.generateRoutes(this.routes)
            },
            searchPool(list) {
                this.initFuse(list, this.optionsName)
            },
        },
        mounted() {
            // searchPool table of routes without external links, headers & labels & hidden
            const appRoutes = this.routes.filter(route => {
                if (route.hidden || isLabel(route.path) || isHeader(route.path) || isExternalLink(route.path))  return;
                return route
            });
            this.searchPool = this.generateRoutes(appRoutes)
        },
        methods: {
            change(val) {
                this.$router.push(val.path)
                this.search = ''
                this.options = []
            },

            // Filter out the routes that can be displayed in the sidebar
            // And generate the internationalized title
            generateRoutes(routes, basePath = '/', prefixTitle = []) {
                let res = []

                for (const router of routes) {
                    // skip hidden router
                    if (router.hidden) { continue }

                    const data = {
                        path: path.resolve(basePath, router.path),
                        title: [...prefixTitle]
                    }

                    if (router.meta && router.meta.title) {
                        data.title = [...data.title, router.meta.title]

                        if (router.redirect !== 'noRedirect') {
                            // only push the routes with title
                            // special case: need to exclude parent router without redirect
                            res.push(data)
                        }
                    }

                    // recursive child routes
                    if (router.children) {
                        const tempRoutes = this.generateRoutes(router.children, data.path, data.title)
                        if (tempRoutes.length >= 1) {
                            res = [...res, ...tempRoutes]
                        }
                    }
                }
                return res
            },
            searchQuery(query) {
                this.options = this.querySearch(query)
            }
        }
    }
</script>

<style scoped>
   .form-control {
       position: relative;
   }
  .sidebar-search-select {
      margin: 0;
      position: absolute;
      top: 2px;
      left: 2px;
  }
</style>