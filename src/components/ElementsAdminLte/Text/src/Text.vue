<template>
    <p :class="colorType">
        <slot></slot>
    </p>
</template>

<script>
    export default {
        name: "VaText",
        props: {
            type: {
                type: String,
                default: ''
            }
        },
        computed: {
            colorType () {
                switch (this.type) {
                    case 'success':
                    case 'info':
                    case 'primary':
                    case 'danger':
                    case 'warning':
                    case 'muted':
                        break;
                    default:
                        return 'lead'
                }
                return 'text-' + this.type
            }
        }
    }
</script>

<style scoped>

</style>