<template>
    <!-- Contacts are loaded here -->
    <div class="direct-chat-contacts" :id="contactsId">
            <ul class="contacts-list">
                <chat-contacts-item
                        v-for="(contact, index) in contacts" :key="index"
                        :name="contact.name"
                        :profileImage="contact.profileImage"
                        :latestDate="contact.latestDate"
                        :latestMessage="contact.latestMessage"
                ></chat-contacts-item>
            </ul>
            <!-- /.contacts-list -->
    </div>
</template>

<script>
   import ChatContactsItem from './ChatContactsItem.vue'

    export default {
        name: "directChatContacts",
        components: { ChatContactsItem },
        props: {
            id: {
                type: String,
                default: ''
            },
            contacts: {
                type: Array
            }
        },
        computed: {
            contactsId () {
                return `contacts-${this.id}`
            }
        },
        mounted () {
            // make wrong rendering - todo
            //OverlayScrollbars(document.getElementById(this.contactsId), { });
        }
    }
</script>

<style scoped>

</style>