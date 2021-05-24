<template>
    <section class="content">
        <content-header title="Recover Password"/>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="login-box">
                    <div class="login-logo">
                        <a href="javascript:void(0);">Vue-<b>Admin</b>LTE</a>
                    </div>
                    <!-- /.login-logo -->
                    <div class="card">
                        <div class="card-body login-card-body">
                            <p class="login-box-msg">You are only one step a way from your new password, recover your password now.</p>

                            <form action="javascript:void(0);" method="post">
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" placeholder="Password">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" placeholder="Confirm Password">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary btn-block">Change password</button>
                                    </div>
                                    <!-- /.col -->
                                </div>
                            </form>

                            <p class="mt-3 mb-1">
                                <router-link to="/extras/login">Login</router-link>
                            </p>
                        </div>
                        <!-- /.login-card-body -->
                    </div>
                </div>
                <!-- /.login-box -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content -->
    </section>

</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    export default {
        name: "RecoverExample",
        components: { ContentHeader }
    }
</script>

<style lang="scss" scoped>
    .login-box {
        position: relative;
        max-width: 100%;
        margin: 0 auto;
        overflow: hidden;
    }
</style>