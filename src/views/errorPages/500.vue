<template>
  <div class="err500-container">

    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>500 Error Page</h1>
        </div>
      </div>
    </div>
    <!-- Main content -->
   <div class="content">
    <div class="error-page">
      <h2 class="headline text-danger">500</h2>

      <div class="error-content">
        <h3><i class="fa fa-warning text-danger"></i> Oops! Something went wrong.</h3>

        <p>
          {{ message }}
          Meanwhile, you may <router-link to="/dashboards/index">return to home page</router-link>
        </p>

      </div>
    </div>
    <!-- /.error-page -->
  </div>
  <!-- /.content -->
  </div>
</template>

<script>
    export default {
        name: "Page500",
        computed: {
            message() {
                return ' We will work on fixing that right away.'
            }
        }
    }

</script>