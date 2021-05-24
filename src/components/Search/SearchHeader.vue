<template>
    <transition name="fade" mode="out-in">
       <div :class="{'show':show}" class="header-search">
           <va-form :inline="true">
              <div class="input-group input-group-sm" >
                <el-select class="header-search-select"
                        ref="headerSearchSelect"
                        v-model="search"
                        :remote-method="searchQuery"
                        filterable
                        default-first-option
                        remote
                        :placeholder="placeholder"
                        @change="change"
                >
                    <el-option v-for="item in options" :key="item.path" :value="item" :label="item.title.join(' > ')" />
                </el-select>

                <div class="input-group-append">
                    <button class="btn navbar elevation-2" type="button" @click.stop="click">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
              </div>
          </va-form>
       </div>
    </transition>
</template>

<script>
    import Search from '@/mixins/search-mixin';
    import path from 'path'
    import { isExternalLink, isLabel, isHeader } from '@/utils/validate'

    export default {
        name: "SearchForm",
        mixins: [Search],
        data() {
            return {
                search: '',
                options: [],
                searchPool: [],
                show: false,
                optionsName: 'headerSearch'
            }
        },
        props: {
            placeholder: { type: String, default: '  Search...' },
        },
        computed: {
            routes() {
                return this.$store.getters.permission_routes
            }
        },
        watch: {
            routes() {
                this.searchPool = this.generateRoutes(this.routes)
            },
            searchPool(list) {
                this.initFuse(list, this.optionsName)
            },
            show(value) {
                if (value) {
                    document.body.addEventListener('click-search', this.close)
                } else {
                    document.body.removeEventListener('click-search', this.close)
                }
            }
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
            click() {
                this.show = !this.show
                if (this.show) {
                    this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus()
                }
            },
            close() {
                this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur()
                this.options = []
                this.show = false
            },
            change(val) {
                this.$router.push(val.path)
                this.search = ''
                this.options = []
                this.$nextTick(() => {
                    this.show = false
                })
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

<style lang="scss" scoped>
    .header-search {
        font-size: 0 !important;

        .search-icon {
            cursor: pointer;
            font-size: 18px;
            vertical-align: middle;
        }

        .header-search-select {
            font-size: 18px;
            transition: width 0.2s;
            width: 0;
            overflow: hidden;
            background: transparent;
            border-radius: 0;
            display: inline-block;
            vertical-align: middle;

            /deep/ .el-input__inner {
                border-radius: 2px;
                border: 0;
                padding-left: 0;
                padding-right: 0;
                box-shadow: none !important;
                border-bottom: 1px solid #d9d9d9;
                vertical-align: middle;
            }
        }

        &.show {
            .header-search-select {
                width: 210px;
                margin-left: 10px;
            }
        }
    }
</style>

