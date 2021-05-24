<template>
    <va-nav-dropdown
            id="NotificationsDropdownMenu"
            title="notifications"
            :icon="notifications[0].icon"
            :badge="notifications[0].badge">
        <va-dropdown-menu size="lg">
            <va-dropdown-item v-for="(item, index) in notifications"
                              :key="index"
                              :item="item"
                              @click.native="handleItemClick(item)"
            />
        </va-dropdown-menu>
    </va-nav-dropdown>
</template>

<script>
    export default {
        name: "NotificationsSelect",
        data() {
            return {
                notifications: [
                    {
                        isHeader: true,
                        text: '15 Notifications',
                        icon: 'far fa-bell',
                        badge: { data: 9, theme: 'warning'},
                        name: 'header'
                    },
                    { isDivider: true },
                    {
                        icon: 'fas fa-envelope mr-2',
                        link: '#',
                        text: '4 new messages',
                        desc: '3 mins',
                        name: 'envelope',
                    },
                    { isDivider: true },
                    {
                        icon: 'fas fa-users mr-2',
                        link: '#',
                        text: '8 friend requests',
                        desc: '12 hours',
                        name: 'users',
                    },
                    { isDivider: true },
                    {
                        icon: 'fas fa-file mr-2',
                        link: '#',
                        text: '3 new reports',
                        desc: '2 days',
                        name: 'file',
                    },
                    { isDivider: true },
                    { isFooter: true, text: 'See All Notifications', link: '#', name: 'footer'}
                ],
            }
        },
        methods: {
            handleItemClick(item) {
                if (item && item.name && !item.isHeader) {
                    this.$message({
                        message: `This message from ${item.name}`,
                        type: 'success'
                    })
                }
            },
        }
    }
</script>
