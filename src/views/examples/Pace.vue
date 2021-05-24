<template>
<!-- Main content -->
<section class="content">
  <content-header title="Pace"/>

  <!-- Main content -->
  <div class="content">
    <!-- Default box -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Title</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
            <i class="fa fa-minus"></i></button>
          <button type="button" class="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
            <i class="fa fa-times"></i></button>
        </div>
      </div>
      <div class="card-body">
        Pace loading works automatically on page. You can still implement it with ajax requests by adding this js:
        <br /><code>$(document).ajaxStart(function() { Pace.restart(); });</code>
        <br />
        <div class="row">
          <div class="text-center">
            <button type="button" class="btn btn-default btn-lrg ajax" title="Ajax Request">
              <i class="fa fa-spin fa-refresh"></i>&nbsp; Get External Content
            </button>
          </div>
        </div>
        <div class="ajax-content">
        </div>
      </div>
      <!-- /.card-body -->
      <div class="card-footer">
        Footer
      </div>
      <!-- /.card-footer-->
    </div>
    <!-- /.card -->
  </div>
  <!-- Default box -->


</section>
<!-- /.content -->
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
// import Pace from 'admin-lte/plugins/pace/pace.min.js';

export default {
    name: "Icons",
    components: { ContentHeader },
    ready() {
        $(document).ajaxStart(function() { Pace.restart(); });
  }
}
</script>