<template>
    <section class="content">
        <content-header title="Fixed Layout"/>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <!-- Default box -->
                <va-row>
                    <div class="col-md-12">
                        <va-card
                                WidgetSet="default"
                                title="Title">
                            <div slot="content" v-for="(item, index) in 20" :key="index">
                                Start creating your amazing application!<br>
                                <br>
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
        name: "Fixed",
        components: { ContentHeader },

    }
</script>

<style scoped>

</style>