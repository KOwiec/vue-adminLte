<template>
    <a class="btn btn-app" @click="handleClick">
        <span v-if="badge && badge.data" class="badge" :class="badgeColor">{{badge.data}}</span>
        <i :class="icon"></i>
        {{name}}
    </a>
</template>

<script>
    export default {
        name: "VaAppButton",
        props: {
            icon: { type: String, default: '' },
            name: { type: String, default: '' },
            badge: { type: Object },
        },
        computed: {
            badgeColor() {
                return this.badge.color ? `bg-${this.badge.color}` : ''
            },
        },
        methods: {
            handleClick(evt) {
                this.$emit('app-btn-click', evt);
            }
        }
    }
</script>
