<template>
    <div class="custom-control custom-switch" :class="getColors">
        <input
               type="checkbox"
               class="custom-control-input"
               ref="input"
               :id="id"
               :name="name"
               :checked="value"
               @change="changeHandler"
               :disabled="isDisabled"
        >
        <label class="custom-control-label" :for="id">{{ text }}</label>
    </div>

</template>

<script>
    export default {
        name: "VaSwitch",
        props: {
            switchClass:  { type: String, default: '' },

            text: { type: String, default: '' },

            name: { type: String, default: '' },

            id: { type: String },

            value: { type: [Boolean, String, Number], default: false },

            isDisabled: { type: Boolean, default: false },

            colors:{ type: Object }
        },

        computed: {
            // danger/success, warning/info
            getColors () {
                if (!this.colors) {
                    return ''
                }
                return 'custom-switch-off-' + this.colors.off + ' custom-switch-on-' + this.colors.on
            }
        },

        methods: {
            changeHandler () {
                this.$emit('input', !this.value)
            }
        }
    }
</script>
