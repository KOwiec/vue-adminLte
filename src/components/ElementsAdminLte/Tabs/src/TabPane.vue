<template>
    <div v-show='isActive && !isDisabled'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "VaTabPane",
        props: {
            title: { type: String, default: '' },

            name: { type: String, default: '' },

            icon: { type: String, default: '' },

            id: { type: String, default: '' },

            isDisabled: { type: Boolean, default: false }
        },
        data () {
            return {
                isActive: true
            }
        }
    }
</script>
