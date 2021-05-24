<template>
    <el-dialog :title="title"  width="30%" :visible.sync="visible" :before-close="handleClose" append-to-body>
        <el-table :data="createPjsonData" border>
            <el-table-column label="Data from package.json">
                <template slot-scope="scope">
                    <div>
                        <span class="message-title">Name:</span>
                        <el-tag effect="plain" >{{ scope.row.name }}</el-tag>
                    </div>
                    <div>
                        <span class="message-title">Version:</span>
                        <el-tag effect="plain" >{{ scope.row.version }}</el-tag>
                    </div>
                    <div>
                        <span class="message-title">Author:</span>
                        <el-tag effect="plain">{{ scope.row.author.name }}</el-tag>
                    </div>
                    <div>
                        <span class="message-title">Email:</span>
                        <el-tag effect="plain">{{ scope.row.author.email }}</el-tag>
                    </div>
                    <div>
                        <span class="message-title">License:</span>
                        <el-tag effect="plain">{{ scope.row.license }}</el-tag>
                    </div>
                    <br/>
                </template>
            </el-table-column>
        </el-table>
    </el-dialog>
</template>

<script>

    export default {
        name: "InfoDialog",
        props: {
            visible: { type: Boolean, default: false },
            title: { type: String, default: 'Info' },
        },
        computed: {
            createPjsonData() {
                let data = [];
                data.push({
                    name: AppName,
                    version: AppVersion ,
                    author:  AppAuthor,
                    license: AppLicense
                });
                return data;
            },
        },
        methods: {
            handleClose() {
                 this.$emit('close-info-dialog')
            }
        }
    }
</script>

<style scoped>
    .message-title {
        font-size: 16px;
        color: #333;
        padding-right: 8px;
    }
</style>