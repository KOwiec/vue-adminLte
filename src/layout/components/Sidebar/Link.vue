<template>
    <!-- eslint-disable vue/require-component-is -->
    <component class="nav-link"
               :class="{ 'active': item.component ? active : '' }"
               v-bind="linkProps(to)" >
             <slot/>
    </component>
</template>

<script>
    import { isExternal, isLabel } from '@/utils/validate'
    import Menu from '@/components/Menu/src/menu-mixin';

    export default {
        name: 'Link',
        mixins: [ Menu ],
        props:  {
            to: { type: null, required: true },

            index: { default: null, validator: val => typeof val === 'string' || val === null  },

            // route object -> make external links or labels no-active
            item: { type: Object },

            hasTreeview: { type: Boolean, default: false },

            // received from submenu
            isActive: { type: Boolean, default: false }
        },
        computed: {
            active() {
                if ( this.hasTreeview ) {
                   return this.isActive
                } else {
                   return this.index === this.rootMenu.activeIndex;
                }

            },

        },
        methods: {
            linkProps(url) {
                if (isExternal(url)) {
                    return {
                        is: 'a',
                        href: url,
                        target: '_blank'
                    }
                }
                if (isLabel(url)) {
                    return {
                        is: 'a',
                        href: 'javascript:void(0);'
                    }
                }
                return {
                    is: 'router-link',
                    to: this.item.redirect ==='noRedirect' ?  '' : url
                }
            },

        }
    }
</script>
