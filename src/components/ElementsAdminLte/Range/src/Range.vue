<template>
    <div>
        <label :for="id">{{text}}</label>
        <input
               type="range"
               :class="[ rangeClass, getColor]"
               ref="input"
               :id="id"
               :name="name"
               :checked="value"
               @change="changeHandler"
               :disabled="isDisabled"
        >
    </div>
</template>

<script>
    export default {
        name: "VaRange",
        props: {
            rangeClass:  { type: String, default: 'custom-range' },

            text: { type: String, default: '' },

            name: { type: String, default: '' },

            id: { type: String },

            value: {},

            isDisabled: { type: Boolean, default: false },

            color: { type: String },
        },

        computed: {
            getColor () {
                if (!this.color) {
                    return ''
                }
                return 'custom-range-' + this.color
            }
        },

        methods: {
            changeHandler () {
                this.$emit('input', this.value)
            }
        }
    }
</script>

