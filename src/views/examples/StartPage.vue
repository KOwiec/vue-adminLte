<template>
    <section class="content">
        <content-header title="Starter Page"/>

        <!-- Main content -->
        <div class="content" id="content" >
            <div class="container-fluid">
                <va-row>
                    <div class="col-lg-6">

                        <va-card :isHeader="false">
                            <div slot="content">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                </p>

                                <a href="javascript:void(0);" class="card-link">Card link</a>
                                <a href="javascript:void(0);" class="card-link">Another link</a>
                            </div>
                        </va-card>


                        <va-card theme="primary" :isHeader="false" :isOutline="true">
                            <div slot="content">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                </p>

                                <a href="javascript:void(0);" class="card-link">Card link</a>
                                <a href="javascript:void(0);" class="card-link">Another link</a>
                            </div>
                        </va-card>

                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-lg-6">

                        <va-card title="Featured">
                            <div slot="content">
                                <h6 class="card-title">Special title treatment</h6>

                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </va-card>

                        <va-card title="Featured" :is-outline="true" theme="primary">
                            <div slot="content">
                                <h6 class="card-title">Special title treatment</h6>

                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </va-card>

                    </div>
                    <!-- /.col-md-6 -->
                </va-row>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content -->
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'

    export default {
        name: "StartPage",
        components: { ContentHeader },
    }
</script>

<style scoped>

</style>