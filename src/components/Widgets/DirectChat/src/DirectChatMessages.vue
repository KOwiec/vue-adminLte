<template>
    <!-- Conversations are loaded here -->
    <div class="direct-chat-messages" :id="messagesId">
            <!-- Message. Default to the left -->
            <chat-messages-item
                    v-for="(item, index) in talkList" :key="index"
                    :name="item.name"
                    :date="item.date"
                    :profileImage="item.profileImage"
                    :message="item.message"
                    :isMine="item.isMine"
            ></chat-messages-item>
    </div>
</template>

<script>
    import ChatMessagesItem from './ChatMessagesItem.vue'

    export default {
        name: "directChatMessages",
        components: { ChatMessagesItem },
        props: {
            id: {
                type: String,
                default: ''
            },
            talkList: {
                type: Array
            }
        },
        computed: {
            messagesId () {
                return `messages-${this.id}`
            }
        },
        mounted () {
            OverlayScrollbars(document.getElementById(this.messagesId), {
                scrollbars : {
                    autoHide: "scroll"
                }
            });
        }

    }
</script>

<style scoped>

</style>