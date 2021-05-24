<!-- not global component (demo) -->
<template>
    <div class="card">
        <div class="card-header d-flex p-0">
            <h3 class="card-title p-3">
                <i :class="icon"></i>{{title}}
            </h3>
            <ul class="nav nav-pills" :class="tabsClass">
                <li class="nav-item" v-for="(tab, index) in tabList" :data="tab" :key="index">
                    <a class="nav-link" :class="tab.class" :href="tab.id" data-toggle="tab">
                        {{tab.title}}
                        <i :class="tab.icon"></i>
                    </a>
                </li>
                <slot name="nav"></slot>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <slot name="content" ></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VaCardTabs",
        props: {
            icon: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            tabsClass: {
                type: String,
                default: 'ml-auto p-2'
            },
        },
        data () {
            return {
                tabList: []
            }
        },

        mounted () {
            for (const i in this.$slots.content) {
                var vm = this.$slots.content[i];

                if (typeof vm !== 'object') {
                    continue
                }
                vm.elm.className += ' tab-pane';
                this.tabList.push({
                    id: '#' + vm.data.attrs.id,
                    class: vm.data.staticClass || '',
                    title: vm.data.attrs.title,
                    icon: vm.data.attrs.icon
                })
            }
        },

    }
</script>

<style scoped>

</style>