<template>
    <!-- From vue-element-admin-master -->
    <el-dialog :visible.sync="visible" width="80%" :before-close="handleClose" append-to-body>
        <div slot="title">
            <span style="padding-right: 10px;">Error Log</span>
            <el-button size="mini" type="primary" icon="el-icon-delete" @click="clearAll">Clear All</el-button>
        </div>
        <el-table :data="errorLogs" border>
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
    </el-dialog>
</template>

<script>

    export default {
        name: "index",
        props: {
            visible: { type: Boolean, default: false },
        },
        computed: {
            errorLogs() {
                return this.$store.getters.errorLogs
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('Are you sure to close this dialog?')
                    .then(_ => {
                        this.$emit('close-errors-dialog')
                        done();
                })
                    .catch(_ => {
                });
            },
            clearAll() {
                this.$store.dispatch('errorLog/clearErrorLog').then(() => {
                    this.$emit('close-errors-dialog')
                })
            }
        }
    }
</script>

<style scoped>
    .message-title {
        font-size: 16px;
        color: #333;
        font-weight: bold;
        padding-right: 8px;
    }
</style>