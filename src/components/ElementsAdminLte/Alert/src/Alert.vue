<template>
    <div class="alert" :class="classObject" :id="id">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"
                @click="btnClicked"
                v-if="dismissible">&times;</button>
        <slot name="header"></slot>
        <slot name="body"></slot>
    </div>
</template>

<script>
    const AlertTypes = ['success', 'info', 'warning', 'danger'];
    export default {
        name: "VaAlert",
        props: {
            id: {
                type: String,
                default: ''
            },
            type: {
                default: 'success',
                validator: function (value) {
                    return AlertTypes.includes(value)
                }
            },
            dismissible: {
                default: false
            }
        },
        computed: {
            classObject () {
                return {
                    'alert-success': this.type === 'success',
                    'alert-info': this.type === 'info',
                    'alert-warning': this.type === 'warning',
                    'alert-danger': this.type === 'danger',
                    'alert-dissmissible': this.dismissible
                }
            }
        },
        methods: {
            btnClicked () {
                if (this.dismissible) {
                    this.$emit('alert-btn-click');
                }
                 return false
            }
        }
    }
</script>
