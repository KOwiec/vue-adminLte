<template>
  <section class="content">
    <content-header title="404 Error Page"/>

    <!-- Main content -->
    <div class="content">
    <div class="error-page">
      <h2 class="headline text-warning"> 404</h2>

      <div class="error-content">
        <h3><i class="fa fa-warning text-warning"></i> Oops! Page not found.</h3>

        <p>
          We could not find the page you were looking for.
          Meanwhile, you may <router-link to="/widgets">return to home page</router-link> or try using the search form.
        </p>

        <form class="search-form">
          <div class="input-group">
            <input type="text" name="search" class="form-control" placeholder="Search">

            <div class="input-group-append">
              <button type="button" name="button" class="btn btn-warning"><i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <!-- /.input-group -->
        </form>
      </div>
      <!-- /.error-content -->
    </div>
    <!-- /.error-page -->
    </div>
  </section>
  <!-- /.content -->
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    export default {
        name: "error404",
        components: { ContentHeader }
    }

</script>