<template>
    <!-- DIRECT CHAT -->
    <div class="card direct-chat" :class="[boxColor, isOutline?'card-outline':'', directChatColor]">
        <div class="card-header">
            <h3 class="card-title">{{title}}</h3>

            <div class="card-tools">
                <span data-toggle="tooltip" title="3 New Messages" class="badge" :class="badgeColor" >{{badgeCount}}</span>
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-toggle="tooltip" title="Contacts"
                        data-widget="chat-pane-toggle">
                    <i class="fas fa-comments"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body">

            <direct-chat-messages class="direct-chat-messages"
                    :id="id"
                    :talkList="talkList"
            ></direct-chat-messages>

            <direct-chat-contacts class="direct-chat-contacts"
                    :id="id"
                    :contacts="contacts"
            ></direct-chat-contacts>

        </div>
        <!-- /.card-body -->
        <div class="card-footer">
            <form action="#" method="post">
                <div class="input-group">
                    <input type="text" name="message" :placeholder="placeholder" class="form-control">
                    <span class="input-group-append">
                      <button type="button" :class="btnColor">Send</button>
                    </span>
                </div>
            </form>
        </div>
        <!-- /.card-footer-->
    </div>
    <!--/.direct-chat -->
</template>

<script>
    import DirectChatContacts from './DirectChatContacts.vue'
    import DirectChatMessages from './DirectChatMessages.vue'

    export default {
        name: 'direct-chat',
        components: {  DirectChatContacts, DirectChatMessages },
        data () {
            return {
                isShowing: true,
            }
        },
        props: {
            id: {
                type: String,
                default: ''
            },
            theme: {
                type: String,
                default: ''
            },
            talkList: {
                type: Array
            },
            contacts: {
                type: Array
            },
            title: {
                type: String
            },
            badgeCount: {
                type: Number,
                default: 0
            },
            isOutline: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: 'Type Message ...'
            },
            color: {
                type: String,
                default: 'primary'
            },
        },
        computed: {
            badgeColor () {
                switch (this.theme) {
                    case 'primary':
                        return 'badge-success';
                    case 'success':
                        return 'badge-primary';
                    case 'warning':
                        return 'badge-danger';
                    case 'danger':
                        return 'badge-warning';
                    default:
                        return `badge-${this.color}`
                }
            },
            boxColor () {
                switch (this.theme) {
                    case 'primary':
                    case 'success':
                    case 'warning':
                    case 'danger':
                        return `card-${this.theme}`;
                    default:
                        return ''
                }
            },
            directChatColor () {
                switch (this.theme) {
                    case 'primary':
                    case 'success':
                    case 'warning':
                    case 'danger':
                        return `direct-chat-${this.theme}`;
                    default:
                        return `direct-chat-${this.color}`
                }
            },
            btnColor () {
                return `btn btn-${this.theme}`
            }
        }

    }
</script>
