<template>
    <section class="content">
        <content-header title="Blank Page"/>

        <div class="content">
            <div class="container-fluid">
                <va-row>
                    <div class="col-md-12">
                        <va-card WidgetSet="default" title="Title">
                            <div slot="content">
                                Start creating your amazing application!
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
        name: "StartPage",
        components: { ContentHeader },

    }
</script>

<style scoped>

</style>