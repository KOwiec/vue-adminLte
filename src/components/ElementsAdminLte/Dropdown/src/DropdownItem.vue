<template>
    <va-dropdown-menu-item v-if="!item.children" :item="item">

       <va-link v-if="item.link || item.show || item.router && item.router.name"
             class="dropdown-item"
             :class="[ active ? 'active' : '' ,
                       item.theme ? `bg-${item.theme}`: '',
                       item.isDisabled ? 'disabled' : '',
                       item.isFooter ? 'dropdown-footer' : ''
                     ]"
             :to="getLink(item)"
             :item="item"
             >

            <link-item :item="item"/>

            <message-item v-if="item.isMessage" :item="item"/>

       </va-link>

    </va-dropdown-menu-item>

    <va-dropdown-submenu v-else :index="item.text">
           <span slot="dropdownHover">{{item.text}}</span>

           <va-dropdown-item v-for="(child, index) in item.children"
                          :key="index"
                          :item="child"
                          @click.native="handleClick(child)"
           />
    </va-dropdown-submenu>

</template>

<script>
    import linkItem from '../components/linkItem.vue'
    import MessageItem from '../components/MessageItem.vue'
    import Emitter from '@/mixins/emitter-mixin';

    export default {
        name: "VaDropdownItem",
        mixins: [ Emitter ],
        components: { linkItem, MessageItem },
        props: {
            // item menu object
            item: { type: Object },
            active: { type: Boolean, default: false },
            parent: { String }
        },

        methods: {
            getLink(item) {
                if (item.link) {
                    return item.link
                }
                if (item.router && item.router.name) {
                    return item.router
                }
            },
            handleClick(val) {
                this.dispatch(this.parent, 'submenu-item-click', val);
            },
        }
    }
</script>

