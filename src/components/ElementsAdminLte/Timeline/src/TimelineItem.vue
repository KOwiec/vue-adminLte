<template>
    <div class="timeline-item-wrapper">
        <i v-if="item.icon" :class="[item.icon,  timeTheme]"></i>

        <div class="timeline-item">
            <span class="time"><i class="far fa-clock"></i> {{item.timestamp}} </span>

            <h3 v-if="item.title || item.sender || $slots.timelineHeader" class="timeline-header">
                <a href="javascript:void(0);" @click="handleClick(item.sender)">{{item.sender}}</a>
                {{item.title}}
                <slot name="timelineHeader"></slot>
            </h3>

            <div v-if="item.content || $slots.timelineBody" class="timeline-body">
                {{item.content}}
                <slot name="timelineBody"></slot>
            </div>

            <div v-if="item.footer || $slots.timelineFooter" class="timeline-footer">
                <slot name="timelineFooter"></slot>
                {{item.footer}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VaTimelineItem",

        props: {
            // item timeline object
            item: {
                type: Object
            },
        },
        computed: {
            timeTheme() {
                return `bg-${this.item.theme}`
            }
        },
        methods: {
            handleClick(evt) {
                this.$emit('timeline-header-click', evt);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .timeline-item-wrapper {
        margin-top: 15px;
        margin-right: 10px;
        position: relative;
    }
    // The icons
    .fa,
    .fas,
    .glyphicon,
    .ion {
        width: 30px;
        height: 30px;
        font-size: 15px;
        line-height: 30px;
        position: relative;
        background: #adb5bd;
        border-radius: 50%;
        text-align: center;
        left: 18px;
        top: 0;
    }
    // The content
    .timeline-item {
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);;
        border-radius: 0.25rem;
        margin-top: 0;
        background: #f8f9fa;
        color: #444;
        margin-left: 60px;
        margin-right: 15px;
        padding: 0;
        position: relative;

        // The time and header
        >  .time {
            color: #999;
            float: right;
            padding: 10px;
            font-size: 12px;
        }
        > .timeline-header {
            margin: 0;
            color: #555;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            padding: 10px;
            font-size: 16px;
            line-height: 1.1;
            a {
                font-weight: 600;
            }
        }
        // Item body and footer
        > .timeline-body, > .timeline-footer {
            padding: 10px;
        }
    }
</style>