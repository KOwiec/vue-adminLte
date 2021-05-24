<template>
    <section class="content">
        <content-header title="Forgot Password"/>

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
                            <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

                            <form action="javascript:void(0);" method="post">
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" placeholder="Email">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary btn-block">Request new password</button>
                                    </div>
                                    <!-- /.col -->
                                </div>
                            </form>

                            <p class="mt-3 mb-1">
                                <router-link to="/extras/login">Login</router-link>
                            </p>
                            <p class="mb-0">
                                <router-link to="/extras/register" class="text-center">Register a new membership</router-link>
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
        name: "ForgotExample",
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