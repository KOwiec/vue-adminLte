<template>
  <section class="content">

    <content-header title="500 Error Page"/>

    <!-- Main content -->
   <div class="content">
    <div class="error-page">
      <h2 class="headline text-danger">500</h2>

      <div class="error-content">
        <h3><i class="fa fa-warning text-danger"></i> Oops! Something went wrong.</h3>

        <p>
          We will work on fixing that right away.
          Meanwhile, you may <router-link to="/widgets">return to home page</router-link> or try using the search form.
        </p>

        <form class="search-form">
          <div class="input-group">
            <input type="text" name="search" class="form-control" placeholder="Search">

            <div class="input-group-append">
              <button type="button" name="button" class="btn btn-danger"><i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <!-- /.input-group -->
        </form>
      </div>
    </div>
    <!-- /.error-page -->
  </div>
  <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    export default {
        name: "error500",
        components: { ContentHeader }
    }

</script>