<template>
    <div :class="[vertical, radio]" >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "VaButtonGroup",
        componentName: "VaButtonGroup",
        props: {
            isVertical: false,
            isRadio: false,
            size: String,
            value: {},
        },
        computed: {
            vertical() {
                return this.isVertical ? 'btn-group-vertical' : 'btn-group'
            },
            radio() {
                return this.isRadio ? 'btn-group-toggle' : ''
            }
        },
        created() {
            this.$on('handleChange', value => {
                 this.$emit('change', value);
            });
        },
    }
</script>

