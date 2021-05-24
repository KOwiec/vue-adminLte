<template>
    <div class="direct-chat-msg" :class="isMine?'':'right'">
        <div class="direct-chat-info clearfix">
            <span class="direct-chat-name" :class="isMine?'float-left':'float-right'">{{name}}</span>
            <span class="direct-chat-timestamp" :class="isMine?'float-right':'float-left'">{{ parseDate }}</span>
        </div>
        <!-- /.direct-chat-info -->
        <img class="direct-chat-img" :src="`/static/img/${profileImage}`" alt="Message User Image">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
            {{message}}
        </div>
        <!-- /.direct-chat-text -->
    </div>
    <!-- /.direct-chat-msg -->
</template>

<script>
    export default {
        name: "DirectChatItem",
        props: {
            name: {
                type: String
            },
            date: {
                type: Date
            },
            profileImage: {
                type: String
            },
            message: {
                type: String
            },
            isMine: {
                type: Boolean
            }
        },
        computed: {
            parseDate () {
                return this.date.toDateString()
            }
        }
    }
</script>

