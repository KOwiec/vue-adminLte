<template>
    <el-dialog :title="title" :closeOnClickModal="false" width="50%" :visible.sync="visible" :before-close="handleClose" append-to-body>
        <el-table :data="data" border>
            <el-table-column label="Print settings">
                <template slot-scope="scope">
                    <div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button size="mini" @click="handleClose">Cancel</el-button>
            <el-button size="mini" type="primary" >Generate</el-button>
        </span>
    </el-dialog>
</template>

<script>

    export default {
        name: "PrintDialog",
        props: {
            visible: { type: Boolean, default: false },
            title: { type: String, default: 'Generation of printout' },
        },
        data() {
            return {
                data: []
            }
        },
        computed: {

        },
        methods: {
            handleClose() {
                 this.$emit('close-print-dialog')
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