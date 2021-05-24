<template>
  <section class="content">
    <content-header title="Login "/>

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
              <p class="login-box-msg">Sign in to start your session</p>

              <form action="javascript:void(0);" method="post">
                <div class="input-group mb-3">
                  <input type="email" class="form-control" placeholder="Email">
                  <div class="input-group-append input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type="password" class="form-control" placeholder="Password">
                  <div class="input-group-append input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <div class="icheck-primary">
                      <input type="checkbox" id="remember">
                      <label for="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <!-- /.col -->
                  <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                  </div>
                  <!-- /.col -->
                </div>
              </form>

              <div class="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="javascript:void(0);" class="btn btn-block btn-primary">
                  <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
                <a href="javascript:void(0);" class="btn btn-block btn-danger">
                  <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
              </div>
              <!-- /.social-auth-links -->

              <p class="mb-1">
                <router-link to="/extras/forgot-password">I forgot my password</router-link>
              </p>
              <p class="mb-0">
                <router-link to="/extras/register" class="text-center">Register a new membership</router-link>
              </p>
            </div>
            <!-- /.login-card-body -->
          </div>
        </div>
        <!-- /.login-box -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </section>


</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    export default {
        name: "LoginExample",
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