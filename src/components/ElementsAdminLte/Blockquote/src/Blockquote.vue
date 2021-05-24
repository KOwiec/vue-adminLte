<template>
    <blockquote :class="classObject">
        <p>{{info.text}}</p>
        <small>{{info.small}}<cite title="Source Title">{{info.cite}}</cite></small>
    </blockquote>
</template>

<script>
    const BlockTypes = ['success', 'info', 'warning', 'danger', 'secondary'];
    export default {
        name: "VaBlockquote",
        props: {
            type: {
                type: String,
                default: 'primary',
            },
            info: { type: Object }
        },
        computed: {
            classObject () {
                return {
                    'quote-success': this.type === 'success',
                    'quote-info': this.type === 'info',
                    'quote-warning': this.type === 'warning',
                    'quote-danger': this.type === 'danger',
                    'quote-secondary': this.type === 'secondary',
                    'quote-primary': this.type === 'primary',
                }
            }
        }
    }
</script>
