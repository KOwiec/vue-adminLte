<template>
    <section class="content">
        <content-header title="Boxed Layout"/>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <!-- Default box -->
                <va-row>
                    <div class="col-md-12">
                        <va-card
                                WidgetSet="default"
                                title="Title">
                            <div slot="content">
                                Start creating your amazing application!
                            </div>
                            <div slot="footer">Footer</div>
                        </va-card>
                    </div>
                </va-row>
                <!-- /.card -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content -->
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'

    export default {
        name: "Boxed",
        components: { ContentHeader },
    }
</script>

<style scoped>

</style>