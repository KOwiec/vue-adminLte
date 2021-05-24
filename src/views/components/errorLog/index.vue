<template>
    <section class="content">
        <content-header title="Error Log"/>
        <errorA />
        <errorB />
        <!-- Main content -->
        <div class="content" id="content" >
            <div class="container-fluid">
                <va-row>
                    <div class="col-lg-6">
                        <va-card :isHeader="false">
                            <div slot="content">
                                <h4 class="card-title">Description:</h4><br/>
                                <p class="card-text">
                                    Error Log component (see: src/components/ErrorLog) came from Vue-element-admin master template.
                                    If you wanna see it in action, please click the first button in Sidebar footer in the lower left corner.
                                </p>
                                <h4 class="card-title">Sources:</h4><br/>
                                <a href="https://element.eleme.io/#/en-US/component/dialog" target="_blank">Dialog - ElementUI component</a><br/>
                                <a href="https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500" target="_blank" class="card-link">Error handler in Vue</a><br/>
                                <a href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/error.html" target="_blank" class="card-link">Error in vue-element-admin</a><br/>
                            </div>
                        </va-card>
                    </div>

                    <div class="col-lg-6">
                        <va-card title="Modal component" :is-outline="true" theme="primary">
                            <div slot="content">
                                <p class="card-text">To show errors log we use bootstrap Modal component wrap in Vue.</p>
                                <a href="https://getbootstrap.com/docs/3.4/javascript/#modals" target="_blank" class="card-link">Documentation for Bootstrap Modal</a>
                                <br/><br/>
                                <button type="button" class="btn btn-primary " @click="handleErrors"
                                        data-toggle="modal" data-target="#modal-errors-log"> Errors Log
                                </button>
                            </div>
                        </va-card>
                    </div>
                </va-row>
            </div>
            <va-modal id="modal-errors-log" size="xl" title="Error Log" :isFooter="false">
                <el-table slot="body" :data="errorLogs" border>
                    <el-table-column label="Message">
                        <template slot-scope="scope">
                            <div>
                                <span class="message-title">Msg:</span>
                                <el-tag type="danger">{{ scope.row.err.message }}</el-tag>
                            </div>
                            <br>
                            <div>
                                <span class="message-title" style="padding-right: 10px;">Info: </span>
                                <el-tag type="warning">{{ scope.row.vm.$vnode.tag }} error in {{ scope.row.info }}</el-tag>
                            </div>
                            <br>
                            <div>
                                <span class="message-title" style="padding-right: 16px;">Url: </span>
                                <el-tag type="success">{{ scope.row.url }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Stack">
                        <template slot-scope="scope">
                            {{ scope.row.err.stack }}
                        </template>
                    </el-table-column>
                </el-table>
            </va-modal>
        </div>
        <!-- /.content -->
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import errorA from './errorTestA'
    import errorB from './errorTestB'

    export default {
        name: "ErrorLog",
        components: { ContentHeader, errorA, errorB },
        data() {
            return {
                modalVisible: false
            };
        },
        computed: {
            errorLogs() {
                return this.$store.getters.errorLogs
            }
        },
        methods: {
            handleErrors() {
                this.$bus.$emit('modal-open', {
                    clickOverlay: () => {
                        this.$message({
                            message: 'Click button to close modal',
                            type: 'warning'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>