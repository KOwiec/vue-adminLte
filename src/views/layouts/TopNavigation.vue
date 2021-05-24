<template>
    <section class="content">
        <content-header
                title="Top Navigation"
                subTitle="Example 3.0">
        </content-header>

        <!-- Main content -->
        <div class="content">
            <div class="container">
                <va-row>
                    <div class="col-lg-6">
                        <va-card :isHeader="false" title="Title">
                            <div slot="content">
                                <h5 class="card-title">Card title</h5>

                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                </p>

                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </va-card>

                        <va-card theme="primary" :isOutline="true" :isHeader="false" title="Title">
                            <div slot="content">
                                <h5 class="card-title">Card title</h5>

                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                </p>

                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </va-card>

                    </div>

                    <div class="col-lg-6">

                        <va-card title="Featured">
                            <div slot="content">
                                <h6 class="card-title">Special title treatment</h6>

                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </va-card>

                        <va-card title="Featured" :isOutline="true" theme="primary">
                            <div slot="content" >
                                <h6 class="card-title">Special title treatment</h6>

                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </va-card>

                    </div>

                </va-row>
                <br/><br/>
            </div>
        </div>
        <!-- /.content -->
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'

    export default {
        name: "StartPage",
        components: { ContentHeader }
    }
</script>

<style scoped>

</style>