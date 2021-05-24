<template>
    <va-row>
        <div class="col-md-12">
            <va-card theme="primary" :isOutline="true" title="Block Buttons & waves directive for click event" icon="fa fa-edit" >
                <div slot="content" class="table-responsive">
                    <p>Various types of button vue component. Using <code>v-waves </code> directive. See directory: src/directives/waves </p>
                    <table class="table table-bordered text-center">
                        <tbody>
                        <tr>
                            <td>
                                <va-button v-waves
                                        name="Primary"
                                        theme="primary"
                                        :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button v-waves
                                        name="Secondary"
                                        theme="secondary"
                                        :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button v-waves
                                        name="Success"
                                        theme="success"
                                        :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button v-waves
                                        name="Info"
                                        theme="info"
                                        :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button v-waves
                                        name="Danger"
                                        theme="danger"
                                        :isGradient="true"
                                        :isBlock="true"
                                ></va-button>
                            </td>
                            <td>
                                <va-button v-waves
                                        name="Warning"
                                        theme="warning"
                                        :isGradient="true"
                                        :isBlock="true"
                                ></va-button>
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
    import waves from '@/directives/waves/index.js'
    export default {
        name: "WavesButtonsVue",
        directives: { waves },
    }
</script>
