<template>
    <section class="content">
        <content-header title="Project Page"/>

        <div class="content">
          <div class="container-fluid">
              <va-row>
                  <div class="col-md-12">
                      <va-card WidgetSet="default" title="Title">
                           <div slot="content">
                             <aside class="aside-info"><strong>Under construction !</strong> </aside>
                           </div>
                         <div slot="footer">Footer</div>
                      </va-card>
                  </div>
              </va-row>
        </div>
    </div>

    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'

    export default {
        name: "Project",
        components: { ContentHeader },

    }
</script>

<style scoped>
    .aside-info {
        text-align: center;
        background-color: #f9e061;
        padding: 8px 16px;
        border-radius: 4px;
    }
</style>