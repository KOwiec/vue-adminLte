<template>
   <section class="content">
      <content-header title="Timeline example"/>

       <!-- The timeline -->
       <va-timeline>
           <va-timeline-daily v-for="(item,index) in timeline"
                              :key="index"
                              :date="item.date"
                              :dateTheme="item.dateTheme"
                              :dailyItems="item.items">
           </va-timeline-daily>
       </va-timeline>
       <br/>
   </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    export default {
        name: "Timeline",
        components: { ContentHeader },

        data() {
            return {
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
                                title: 'uploaded new photos',
                                contentSlot: true,
                                type: 'image',
                                images:  [
                                    'static/img/photo1.png',
                                    'static/img/photo2.png',
                                    'static/img/photo3.jpg',
                                    'static/img/photo4.jpg',
                                ],
                            },
                            {
                                timestamp: '5 days ago',
                                theme: 'maroon',
                                icon: 'fas fa-video',
                                sender: 'Mr. Doe ',
                                title: 'shared a video',
                                contentSlot: true,
                                type: 'video',
                                src: 'https://www.youtube.com/embed/tMWkeBIohBs',
                                footerSlot: true,
                                btnSet: [
                                    {
                                        name: 'See',
                                        text: 'See comments',
                                        color: 'maroon',
                                    }
                                ]
                            }
                        ]
                    },

                ],

            }
        },
    }
</script>
