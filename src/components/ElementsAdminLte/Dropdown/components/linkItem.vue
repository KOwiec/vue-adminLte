<template>
    <div :style="getWidth">
        <i :class="`${item.icon} mr-2`"></i>
        {{item.text}}

        <span v-if="item.desc" class="float-right text-muted text-sm" style="width: auto">{{item.desc}}</span>
    </div>
</template>

<script>
    export default {
        name: "linkContent",
        props: {
            // item menu object
            item: {
                type: Object
            },
            width: { type: String, default: '' },
        },
        computed: {
            getWidth () {
                if (this.width) {
                    return `width: ${this.width}`
                }
                return ''
            },
        }
    }
</script>

<style scoped>

</style>