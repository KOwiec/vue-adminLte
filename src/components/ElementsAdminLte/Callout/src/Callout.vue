<template>
    <div class="callout" :class="classObject">
        <h5><i :class="[icon, iconType]"></i> {{ title }}</h5>

        <p>{{ text }}</p>
        <slot name="calloutText"/>
    </div>
</template>

<script>
    const CalloutTypes = ['success', 'info', 'warning', 'danger']

    export default {
        name: "VaCallout",
        props: {
            type: {
                default: 'success',
                validator: function (value) {
                    return CalloutTypes.includes(value)
                }
            },
            title: { type: String },

            text: { type: String },

            icon: {  type: String, default: ''},

            iconType: {type: String, default: ''},
        },
        computed: {
            classObject () {
                return {
                    'callout-success': this.type === 'success',
                    'callout-info': this.type === 'info',
                    'callout-warning': this.type === 'warning',
                    'callout-danger': this.type === 'danger'
                }
            }
        }
    }
</script>
