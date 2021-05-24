<template>
    <div>
        <!-- timeline time label -->
        <div class="time-label">
                        <span :class="theme">
                          {{date}}
                        </span>
        </div>
        <!-- timeline item -->
        <timeline-item v-for="(item,index) in dailyItems" :key="index"
                     :item="item"
                     @timeline-header-click="handleHeaderClick">

            <media-content v-if="item.contentSlot"
                           slot="timelineBody"
                           :type="item.type"
                           :images="item.images"
                           :video="item.src"
            />

            <footer-btns v-if="item.footerSlot"
                           slot="timelineFooter"
                           v-for="(btn, index) in item.btnSet" :key="index"
                           :button="btn"
                           @footer-btn-click="handleFooterBtnClick(item, $event)"
            />

        </timeline-item>
    </div>
</template>

<script>
    import TimelineItem from './TimelineItem'
    import FooterBtns from './components/FooterBtns'
    import mediaContent  from './components/mediaContent'

    export default {
        name: "VaTimelineDaily",
        components: { TimelineItem, FooterBtns, mediaContent },

        props: {
            // day time object
            dailyItems: { type: Array, required: true  },

            date: { type: String },

            dateTheme: { type: String, default: 'default' },

        },
        computed: {
            theme() {
                return `bg-${this.dateTheme}`
            }
        },
        methods: {
            handleHeaderClick(val) {
                //console.log('tameline header click: ' +val)
            },
            handleFooterBtnClick(item, val) {
                if (val === 'read') {
                    //console.log('footer read click: ' +item.timestamp)
                } else if (val === 'delete') {
                     //console.log('footer delete click: ' +item.content)
                } else if (val === 'view') {
                     //console.log('footer view click: ' +item.sender)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .time-label {
        span {
            font-weight: 600;
            padding: 5px;
            display: inline-block;
            background-color:  #ffffff;
            border-radius:  0.25rem;;
        }
    }
</style>