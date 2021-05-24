<template>
            <li>
                <a href="javascript:void(0);">
                    <img class="contacts-list-img" :src="`/static/img/${profileImage}`">

                    <div class="contacts-list-info">
                          <span class="contacts-list-name">
                            {{ name }}
                            <small class="contacts-list-date float-right">{{ parseDate }}</small>
                          </span>
                        <span class="contacts-list-msg">{{latestMessage}}</span>
                    </div>
                    <!-- /.contacts-list-info -->
                </a>
            </li>
            <!-- End Contact Item -->
</template>

<script>
    export default {
        name: "DirectChatContact",
        props: {
            name: {
                type: String
            },
            profileImage: {
                type: String
            },
            latestDate: {
                type: Date
            },
            latestMessage: {
                type: String
            }
        },
        computed: {
            parseDate () {
                // TODO:
                return this.latestDate.toDateString();
            }
        }
    }
</script>

