<template>
    <div class="tab-pane" id="activity">
        <!-- Post -->
        <div class="post">
            <div class="user-block">
                <img class="img-circle img-bordered-sm" src="static/img/user1-128x128.jpg" alt="user image">
                <span class="username">
                          <a href="#">Jonathan Burke Jr.</a>
                          <a href="#" class="float-right btn-tool"><i class="fa fa-times"></i></a>
                        </span>
                <span class="description">Shared publicly - 7:30 PM today</span>
            </div>
            <!-- /.user-block -->
            <p>
                Lorem ipsum represents a long-held tradition for designers,
                typographers and the like. Some people hate it and argue for
                its demise, but others ignore the hate as they create awesome
                tools to help create filler text for everyone from bacon lovers
                to Charlie Sheen fans.
            </p>

            <p>
                <a href="#" class="link-black text-sm mr-2"><i class="fa fa-share mr-1"></i> Share</a>
                <a href="#" class="link-black text-sm"><i class="fa fa-thumbs-up mr-1"></i> Like</a>
                <span class="float-right">
                          <a href="#" class="link-black text-sm">
                            <i class="fa fa-comments mr-1"></i> Comments (5)
                          </a>
                        </span>
            </p>

            <input class="form-control form-control-sm" type="text" placeholder="Type a comment">
        </div>
        <!-- /.post -->

        <!-- Post -->
        <div class="post clearfix">
            <div class="user-block">
                <img class="img-circle img-bordered-sm" src="static/img/user7-128x128.jpg" alt="User Image">
                <span class="username">
                          <a href="#">Sarah Ross</a>
                          <a href="#" class="float-right btn-tool"><i class="fa fa-times"></i></a>
                        </span>
                <span class="description">Sent you a message - 3 days ago</span>
            </div>
            <!-- /.user-block -->
            <p>
                Lorem ipsum represents a long-held tradition for designers,
                typographers and the like. Some people hate it and argue for
                its demise, but others ignore the hate as they create awesome
                tools to help create filler text for everyone from bacon lovers
                to Charlie Sheen fans.
            </p>

            <form class="form-horizontal">
                <div class="input-group input-group-sm mb-0">
                    <input class="form-control form-control-sm" placeholder="Response">
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-danger">Send</button>
                    </div>
                </div>
            </form>
        </div>
        <!-- /.post -->

        <!-- Post -->
        <div class="post">
            <div class="user-block">
                <img class="img-circle img-bordered-sm" src="static/img/user6-128x128.jpg" alt="User Image">
                <span class="username">
                          <a href="#">Adam Jones</a>
                          <a href="#" class="float-right btn-tool"><i class="fa fa-times"></i></a>
                        </span>
                <span class="description">Posted 5 photos - 5 days ago</span>
            </div>
            <!-- /.user-block -->
            <div class="row mb-3">
                <div class="col-sm-6">
                    <img class="img-fluid" src="static/img/photo1.png" alt="Photo">
                </div>
                <!-- /.col -->
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-sm-6">
                            <img class="img-fluid mb-3" src="static/img/photo2.png" alt="Photo">
                            <img class="img-fluid" src="static/img/photo3.jpg" alt="Photo">
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-6">
                            <img class="img-fluid mb-3" src="static/img/photo4.jpg" alt="Photo">
                            <img class="img-fluid" src="static/img/photo1.png" alt="Photo">
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->

            <p>
                <a href="#" class="link-black text-sm mr-2"><i class="fa fa-share mr-1"></i> Share</a>
                <a href="#" class="link-black text-sm"><i class="fa fa-thumbs-up mr-1"></i> Like</a>
                <span class="float-right">
                          <a href="#" class="link-black text-sm">
                            <i class="fa fa-comments mr-1"></i> Comments (5)
                          </a>
                        </span>
            </p>

            <input class="form-control form-control-sm" type="text" placeholder="Type a comment">
        </div>
        <!-- /.post -->
    </div>
</template>

<script>
    export default {
        name: "activity"
    }
</script>

<style scoped>

</style>