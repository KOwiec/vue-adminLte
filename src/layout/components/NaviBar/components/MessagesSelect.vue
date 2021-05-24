<template>
    <va-nav-dropdown
            id="MsgDropdownMenu"
            title="messages"
            icon="far fa-comments"
            :badge="messages[0].badge">
        <va-dropdown-menu size="lg">
            <va-dropdown-item v-for="(item, index) in messages"
                              :key="index"
                              :item="item"
                              @click.native="handleItemClick(item)"
            />
        </va-dropdown-menu>
    </va-nav-dropdown>
</template>

<script>
    export default {
        name: "MessagesSelect",
        componentName: 'MessagesSelect',
        data() {
            return {
                messages: [
                    {
                        link: '#',
                        badge: { data: 4, theme: 'danger'},
                        isMessage: true,
                        user: { image: 'user1-128x128.jpg', firstName: 'Brad', lastName: 'Diesel',},
                        importance: 'High',
                        title: 'Call me whenever you can...',
                        timestamp: this.getDate(),
                        name: 'message-Diesel'
                    },
                    { isDivider: true },
                    {
                        link: '#',
                        isMessage: true,
                        user: { image: 'user8-128x128.jpg', firstName: 'John', lastName: 'Pierce',},
                        importance: 'Low',
                        title: 'I got your message bro',
                        timestamp: this.getDate(),
                        name: 'message-Pierce'
                    },
                    { isDivider: true },
                    {
                        link: '#',
                        isMessage: true,
                        user: { image: 'user3-128x128.jpg', firstName: 'Nora', lastName: 'Silvester',},
                        importance: 'Medium',
                        title: 'The subject goes here',
                        timestamp: this.getDate(),
                        name: 'message-Silvester'
                    },
                    { isDivider: true },
                    { isFooter: true, text: 'See All Messages', link: '#', name: 'footer'}
                ],
            }
        },
        methods: {
            getDate() {
                return new Date().getTime()      //Math.floor(Date.now() / 1000);
            },
            handleItemClick(item) {
                if (item && item.user.firstName) {
                        this.$message({
                        message: `This message from ${item.user.firstName}`,
                        type: 'success'
                    })
                }
            },
        }
    }
</script>
