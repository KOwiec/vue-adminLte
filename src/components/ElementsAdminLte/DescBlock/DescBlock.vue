<template>
    <div class="description-block" :class="getAlign">
        <slot name="block"/>
        <h5 class="description-header">{{title}}</h5>
        <span class="description-text">{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "VaDescBlock",
        props: {
            align: { type: String, default: '' },
            title: { type: String, default: '' },
            text: { type: String, default: '' }
        },
        computed: {
            getAlign () {
                if (this.align) {
                    switch (this.align) {
                        case 'left':
                        case 'right':
                            break;
                        default:
                            return ''
                    }

                    return 'border-' + this.align
                }
                return ''
            },
        }
    }
</script>
