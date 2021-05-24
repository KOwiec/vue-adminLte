<template>
    <!-- The timeline -->
    <div class="timeline"
         :class="{
             'timeline-inverse': !reverse
         }">

        <slot/>

        <!-- END timeline -->
        <div>
            <i :class="[ icon,  timeTheme]"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VaTimeline",
        props: {
            reverse: { type: Boolean, default: false },

            theme: { type: String, default: 'gray' },

            icon: { type: String, default: 'far fa-clock' },
        },
        computed: {
            timeTheme() {
                return `bg-${this.theme}`
            }
        },
        watch: {
            reverse: {
                handler(newVal) {
                    if (newVal) {
                        this.$slots.default = [...this.$slots.default].reverse();
                    }
                },
                immediate: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .timeline {
        margin: 0 0 45px;
        padding: 0;
        position: relative;
        // The line
        &::before {
            border-radius: 0.25rem;
            background: #dee2e6;
            bottom: 0;
            content: '';
            left: 31px;
            margin: 0;
            position: absolute;
            top: 0;
            width: 4px;
        }
    }
</style>