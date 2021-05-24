<template>
  <section class="content">
    <content-header title="Register"/>

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="register-box">
          <div class="register-logo">
            <a href="javascript:void(0);">Vue-<b>Admin</b>LTE</a>
          </div>

          <div class="card">
            <div class="card-body register-card-body">
              <p class="login-box-msg">Register a new membership</p>

              <form action="javascript:void(0);" method="post">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Full name">
                  <div class="input-group-append input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
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
                <div class="input-group mb-3">
                  <input type="password" class="form-control" placeholder="Retype password">
                  <div class="input-group-append input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <div class="icheck-primary">
                      <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                      <label for="agreeTerms">
                        I agree to the <a href="javascript:void(0);">terms</a>
                      </label>
                    </div>
                  </div>
                  <!-- /.col -->
                  <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
                  </div>
                  <!-- /.col -->
                </div>
              </form>

              <div class="social-auth-links text-center">
                <p>- OR -</p>
                <a href="javascript:void(0);" class="btn btn-block btn-primary">
                  <i class="fab fa-facebook mr-2"></i>
                  Sign up using Facebook
                </a>
                <a href="javascript:void(0);" class="btn btn-block btn-danger">
                  <i class="fab fa-google-plus mr-2"></i>
                  Sign up using Google+
                </a>
              </div>

              <router-link to="/extras/login" class="text-center">I already have a membership</router-link>
            </div>
            <!-- /.form-box -->
          </div><!-- /.card -->
        </div>
        <!-- /.register-box -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </section>

</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    export default {
        name: "RegisterExample",
        components: { ContentHeader }
    }
</script>

<style lang="scss" scoped>
  .register-box {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
