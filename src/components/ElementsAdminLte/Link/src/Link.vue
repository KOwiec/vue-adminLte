<template>
    <!-- eslint-disable vue/require-component-is -->
    <component v-bind="linkProps(to)">
        <slot/>
    </component>
</template>

<script>
    import { isExternal } from '@/utils/validate'

export default {
    name: 'VaLink',
    props:  {
      to: { type: null, required: true },
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
            if (url === '#') {
                return {
                    is: 'a',
                    href: 'javascript:void(0);'
                }
            }
            return {
                is: 'router-link',
                to: url,
            }
        }
    }
}
</script>
