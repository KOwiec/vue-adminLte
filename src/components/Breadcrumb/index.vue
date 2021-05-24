<template>
    <transition name="fade" mode="out-in">
      <el-breadcrumb :class="isHeader ? 'app-breadcrumb-header' : 'app-breadcrumb'"
                     :separator="separator"
                     :separatorClass="separatorClass">
         <transition-group :name="isHeader ? '' : 'breadcrumb'">
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
                <span v-if="item.redirect === 'noRedirect' || index === levelList.length-1"
                      class="no-redirect">
                    {{ item.meta.title }}
                </span>
                <a v-else @click.prevent="handleLink(item)">
                    {{ item.meta.title }}
                </a>
            </el-breadcrumb-item>
         </transition-group>
      </el-breadcrumb>
    </transition>
</template>

<script>
    import pathToRegexp from 'path-to-regexp'

    export default {
        name: "Breadcrumb",
        data() {
            return {
                levelList: null
            }
        },
        props: {
            separator: { type: String, default: '/' },

            separatorClass: { type: String, default: '' },

            isHeader: { type: Boolean, default: false }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created() {
            this.getBreadcrumb()
        },
        methods: {
            getBreadcrumb() {
                // only show routes with meta.title
                let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
                const first = matched[0];

                if (!this.isDashboard(first)) {
                    matched = [{ path: '/dashboards', meta: { title: 'Dashboards' }}].concat(matched)

                }

                this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)

            },
            isDashboard(route) {
                const name = route && route.name;
                if (!name) {
                    return false
                }
                return name.trim().toLocaleLowerCase() === 'Dashboards'.toLocaleLowerCase()
            },
            pathCompile(path) {
                // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
                const { params } = this.$route;
                var toPath = pathToRegexp.compile(path);
                return toPath(params)
            },
            handleLink(item) {
                const { redirect, path } = item;
                if (redirect) {
                    this.$router.push(redirect);
                    return
                }
                this.$router.push(this.pathCompile(path))
            }
        }
    }
</script>

<style lang="scss" scoped>
    .app-breadcrumb.el-breadcrumb {
        display: inline-block;
        font-size: 15px;
        line-height: 30px;
        margin-left: 30px;

        .no-redirect {
            color: #97a8be;
            cursor: text;
        }

        a:hover {
            color: blue;
            cursor: pointer;
        }
    }

    .app-breadcrumb-header.el-breadcrumb {
        display: flex;
        flex-wrap: wrap;
        padding: 0.4rem 0.5rem 0.4rem 0.5rem;
        list-style: none;
        font-size: 17px;
        background-color: #e9ecef;
        border-radius: 0.25rem;

    }
</style>