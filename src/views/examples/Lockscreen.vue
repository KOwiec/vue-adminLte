<template>
  <section class="content">
    <content-header title="Lockscreen"/>

  <!-- Automatic element centering -->
  <div class="lockscreen-wrapper">
    <div class="lockscreen-logo">
      <a href="javascript:void(0);"><b>Admin</b>LTE</a>
    </div>
    <!-- User name -->
    <div class="lockscreen-name">John Doe</div>

    <!-- START LOCK SCREEN ITEM -->
    <div class="lockscreen-item">
      <!-- lockscreen image -->
      <div class="lockscreen-image">
        <img src="../../../static/img/user1-128x128.jpg" alt="User Image">
      </div>
      <!-- /.lockscreen-image -->

      <!-- lockscreen credentials (contains the form) -->
      <form class="lockscreen-credentials">
        <div class="input-group">
          <input type="password" class="form-control" placeholder="password">

          <div class="input-group-append">
            <button type="button" class="btn"><i class="fas fa-arrow-right text-muted"></i></button>
          </div>
        </div>
      </form>
      <!-- /.lockscreen credentials -->

    </div>
    <!-- /.lockscreen-item -->
    <div class="help-block text-center">
      Enter your password to retrieve your session
    </div>
    <div class="text-center">
      <router-link to="/extras/login">Or sign in as a different user</router-link>
    </div>
    <div class="lockscreen-footer text-center">
      <b><a href="javascript:void(0);" class="text-black" target="_blank"> </a></b><br>
    </div>
  </div>
  <!-- /.center -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    export default {
        name: "LockscreenExample",
        components: { ContentHeader }
    }
</script>

<style lang="scss" scoped>
  // User name [optional]
  .lockscreen-name {
    font-weight: 600;
    text-align: center;
  }
</style>