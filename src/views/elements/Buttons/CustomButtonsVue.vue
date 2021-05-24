<template>
    <va-row>
        <div class="col-md-12">
            <va-card theme="primary" :isOutline="true" title="Custom Buttons " icon="fa fa-edit" >
                <div slot="content" class="table-responsive">
                    <p> va-button & el-button Vue components. Using custom class <code>pan-btn</code> & <code>custom-btn </code> . See directory: src/styles/btn.scss</p>
                    <table class="table table-bordered text-center">
                        <tbody>
                        <tr>
                            <td>
                                <va-button class="pan-btn light-blue-btn"
                                           name="Primary"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button class="pan-btn gray-btn"
                                           name="Secondary"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button class="pan-btn green-btn"
                                           name="Success"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button class="pan-btn teal-btn"
                                           name="Info"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button class="pan-btn red-btn"
                                           name="Danger"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button class="pan-btn yellow-btn"
                                           name="Warning"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <va-button
                                        class="custom-btn light-blue-btn"
                                        name="Primary"
                                        :isBlock="true">
                               </va-button>
                            </td>
                            <td>
                                <va-button class="custom-btn gray-btn"
                                           name="Secondary"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button class="custom-btn green-btn"
                                           name="Success"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button class="custom-btn teal-btn"
                                           name="Info"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button class="custom-btn red-btn"
                                           name="Danger"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button class="custom-btn yellow-btn"
                                           name="Warning"
                                           :isBlock="true"
                                ></va-button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <el-button type="primary" icon="el-icon-edit" >
                                    Primary
                                </el-button>
                            </td>
                            <td>
                                <el-button icon="el-icon-share">
                                    Default
                                </el-button>
                            </td>
                            <td>
                                <el-button type="success" icon="el-icon-delete">
                                    Success
                                </el-button>
                            </td>
                            <td>
                                <el-button type="info" icon="el-icon-search">
                                    Info
                                </el-button>
                            </td>
                            <td>
                                <el-button type="danger" icon="el-icon-upload">
                                    Danger
                                </el-button>
                            </td>
                            <td>
                                <el-button type="warning" icon="el-icon-right">
                                    Warning
                                </el-button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </va-card>
        </div>
    </va-row>
</template>

<script>

    export default {
        name: "CustomButtonsVue",
    }
</script>
