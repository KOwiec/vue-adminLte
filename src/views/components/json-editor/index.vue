<template>
    <section class="content">
        <!-- Content Header (Page header) -->
        <content-header title="JSON Editor"/>

        <!-- Main content -->
        <div class="content">
            <div class="row">
                <div class="col-md-12">
                    <va-card theme="success" title="Json-Editor is base on CodeMirrorr. " WidgetSet="default" :isOutline="true">
                        <div slot="content">
                            <div class="mb-3">
                                <json-editor ref="jsonEditor" v-model="value" />
                            </div>
                            <p class="text-sm mb-0">
                                Lint base on: <a href="https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js" target="_blank">json-lint</a>.
                            </p>
                        </div>
                    </va-card>
                </div>
                <!-- /.col-->
            </div>
            <!-- ./row -->
        </div>
        <!-- /.content -->
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import JsonEditor from '@/components/JsonEditor'

    import people  from "../../../../BACKEND-fake/mirage/data/people"

    export default {
        name: "sonEditor",
        components: { ContentHeader, JsonEditor },
        data() {
            return {
                value: people
            }
        },
    }
</script>

<style scoped>

</style>