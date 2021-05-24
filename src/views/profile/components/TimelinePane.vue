<template>
    <div class="tab-pane" id="timeline">
        <!-- radio -->
        <va-radio-group v-model="reverse" inline>
            <label style="padding-right: 10px">
                Order:
            </label>
            <va-radio
                    radioClass="icheck-info"
                    styled="padding-right: 5px"
                    id="radio1"
                    name="R1"
                    :data="true">
                descending
            </va-radio>
            <va-radio
                    radioClass="icheck-info"
                    id="radio2"
                    name="R1"
                    :data="false">
                ascending
            </va-radio>
        </va-radio-group>

        <!-- The timeline -->
        <va-timeline :reverse="reverse">
            <va-timeline-daily v-for="(item,index) in timeline"
                            :key="index"
                            :date="item.date"
                            :dateTheme="item.dateTheme"
                            :dailyItems="item.items">
            </va-timeline-daily>
        </va-timeline>

    </div>
</template>

<script>

    export default {
        name: "TimelinePane",
        data() {
            return {
                reverse: false,
                timeline: [
                    {
                        date: '10 Feb. 2014',
                        dateTheme: 'danger',
                        items: [
                            {
                                timestamp: '12:05',
                                theme: 'primary',
                                icon: 'fas fa-envelope',
                                sender: 'Support Team ',
                                title: 'sent you an email',
                                content: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo... ',
                                footerSlot: true,
                                btnSet: [
                                    {
                                        name: 'read',
                                        text: 'Read more',
                                        theme: 'primary',
                                    },
                                    {
                                        name: 'delete',
                                        text: 'Delete',
                                        theme: 'danger',
                                    },
                                ]
                            },
                            {
                                timestamp: '13:09',
                                theme: 'info',
                                icon: 'fas fa-user',
                                sender: 'Sarah Young ',
                                title: 'accepted your friend request ',

                            },
                            {
                                timestamp: '17:00',
                                theme: 'warning',
                                icon: 'fas fa-comments',
                                sender: 'Jay White',
                                title: ' accepted your friend request ',
                                content: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood! ',
                                footerSlot: true,
                                btnSet: [
                                    {
                                        name: 'view',
                                        text: 'View comment',
                                        theme: 'warning',
                                    }
                                ]
                            },

                        ]
                    },
                    {
                        date: '3 Jan. 2014',
                        dateTheme: 'success',
                        items: [
                            {
                                timestamp: '09:23',
                                theme: 'purple',
                                icon: 'fas fa-camera',
                                sender: 'Mina Lee ',
                                title: 'New photos',
                                contentSlot: true,
                                type: 'carousel',
                                images:  [
                                    '/static/img/photo1.png',
                                    '/static/img/photo2.png',
                                    '/static/img/photo3.jpg',
                                    '/static/img/photo4.jpg',
                                ]
                            }
                        ]
                    },
                ]
            }
        },
    }
</script>

