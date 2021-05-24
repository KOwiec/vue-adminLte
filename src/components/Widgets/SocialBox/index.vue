<template>
    <!-- Box Comment -->
    <div class="card card-widget">
        <div class="card-header">
            <div class="user-block">
                <img class="img-circle" :src="profileImage" alt="User Image">
                <span class="username"><a href="#">{{name}}</a></span>
                <span class="description">{{description}}</span>
            </div>
            <!-- /.user-block -->
            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-toggle="tooltip" :title="readTooltipTitle">
                    <i class="far fa-circle"></i></button>
                <button type="button" class="btn btn-tool" data-toggle="tooltip" title="Collapse" data-card-widget="collapse">
                    <i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-toggle="tooltip" title="Remove" data-card-widget="remove">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            <!-- /.card-tools -->
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <img v-for="image in images" class="img-fluid pad" :src="image" alt="Photo">

            <p>{{ text }}</p>

            <!-- Attachment -->
            <div class="attachment-block clearfix"  v-for="attachment in attachments">
                <img class="attachment-img" :src="attachment.image" alt="Attachment Image">

                <div class="attachment-pushed">
                    <h4 class="attachment-heading"><a :href="attachment.url">{{attachment.title}}</a></h4>

                    <div class="attachment-text">
                        {{ attachment.text }} <a href="#">more</a>
                    </div>
                    <!-- /.attachment-text -->
                </div>
                <!-- /.attachment-pushed -->
            </div>
            <!-- /.attachment-block -->

            <!-- Social sharing buttons -->
            <button v-for="button in buttons" type="button" class="btn btn-default btn-sm" @click="button.onClick">
                <i :class="button.icon"></i> {{button.name}}</button>

            <span class="float-right text-muted">{{likeCount}} likes - {{commentCount}} comments</span>
        </div>
        <!-- /.card-body -->
        <div class="card-footer card-comments">
            <social-box-comment v-for="(comment, index) in comments" :key="index"
                                :name="comment.name"
                                :profileImage="comment.profileImage"
                                :text="comment.text"
                                :date="comment.date">
            </social-box-comment>
        </div>
        <!-- /.card-footer -->
        <div class="card-footer">
            <form action="#" method="post">
                <img class="img-fluid img-circle img-sm" :src="profileImage" alt="Alt Text">
                <!-- .img-push is used to add margin to elements next to floating images -->
                <div class="img-push">
                    <input type="text" class="form-control form-control-sm" :placeholder="placeholder">
                </div>
            </form>
        </div>
        <!-- /.card-footer -->
    </div>
    <!-- /.card -->
</template>

<script>
    import SocialBoxComment from './SocialBoxComment.vue'

    export default {
        name: "SocialBox",
        components: { SocialBoxComment },
        props: {
            profileImage: {
                type: String
            },
            name: {
                type: String
            },
            description: {
                type: String
            },
            readTooltipTitle: {
                type: String,
                default: 'Mark as read'
            },
            images: {
                type: Array
            },
            text: {
                type: String
            },
            buttons: {
                type: Array
            },
            likeCount: {
                type: Number
            },
            commentCount: {
                type: Number
            },
            comments: {
                type: Array
            },
            placeholder: {
                type: String,
                default: 'Press enter to post comment'
            },
            attachments: {
                type: Array
            }
        },
        methods: {
            btnClicked () {
                this.$emit('btn-click');
            }
        }
    }
</script>

