<template>
  <section class="content">
    <!-- Content Header (Page header) -->
    <content-header title="jsGrid"/>

    <!-- Main content -->
    <div class="content">
      <div class="row">
        <div class="col-12">

          <va-card title="jsGrid">
            <div slot="content" >
              <div id="jsGrid1"></div>
            </div>
          </va-card>

        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.content -->
  </section>
</template>

<script>
    import 'admin-lte/plugins/jsgrid/demos/db.js'
    import 'admin-lte/plugins/jsgrid/jsgrid.min.js'

    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'

    export default {
        name: "Data",
        components: { ContentHeader },
        created () {
            $(function () {
                $("#jsGrid1").jsGrid({
                    height: "100%",
                    width: "100%",

                    sorting: true,
                    paging: true,

                    data: db.clients,

                    fields: [
                        { name: "Name", type: "text", width: 150 },
                        { name: "Age", type: "number", width: 50 },
                        { name: "Address", type: "text", width: 200 },
                        { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                        { name: "Married", type: "checkbox", title: "Is Married" }
                    ]
                });
            });
        },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
  @import "~admin-lte/plugins/jsgrid/jsgrid.min.css";
  @import "~admin-lte/plugins/jsgrid/jsgrid-theme.min.css";
</style>