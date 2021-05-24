<template>
    <div class="card-comment">
        <!-- User image -->
        <img class="img-circle img-sm" :src="profileImage" alt="User Image">

        <div class="comment-text">
                    <span class="username">
                     {{name}}
                      <span class="text-muted float-right">{{parseDate}}</span>
                    </span><!-- /.username -->
            {{text}}
        </div>
        <!-- /.comment-text -->
    </div>
    <!-- /.card-comment -->
</template>

<script>
    export default {
        name: "SocialBoxComment",
        props: {
            name: {
                type: String
            },
            profileImage: {
                type: String
            },
            date: {
                type: Date
            },
            text: {
                type: String
            }
        },
        computed: {
            parseDate () {
                // TODO:
                return this.date.toDateString()
            }
        },
        created () {

        }
    }
</script>

