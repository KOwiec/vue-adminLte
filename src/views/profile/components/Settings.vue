<template>
    <div class="tab-pane" id="settings">
        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputName" class="col-sm-2 control-label">Username</label>

                <div class="col-sm-10">
                    <input type="text" v-model.trim="user.username" class="form-control" id="inputName" placeholder="Username">
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                <div class="col-sm-10">
                    <input type="email" v-model.trim="user.email"  class="form-control" id="inputEmail" placeholder="Email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputName2" class="col-sm-2 control-label">First Name</label>

                <div class="col-sm-10">
                    <input type="text" v-model.trim="user.firstName" class="form-control" id="inputName2" placeholder=" First Name">
                </div>
            </div>
            <div class="form-group">
                <label for="inputExperience" class="col-sm-2 control-label">Experience</label>

                <div class="col-sm-10">
                    <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="inputSkills" class="col-sm-2 control-label">Skills</label>

                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputSkills" placeholder="Skills">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <va-check-box
                            checkClass="icheck-primary"
                            id="exampleCheck"
                            text=" I agree to the ">
                        <a slot="checkbox-label" href="#">terms and conditions</a>
                    </va-check-box>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" @click="submit" class="btn btn-danger">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "settings",
        props: {
            user: {
                type: Object,
                default: () => {
                    return {
                        username: '',
                        firstName: '',
                        email: ''
                    }
                }
            }
        },
        methods: {
            submit() {
                this.$message({
                    message: 'User information has been updated successfully',
                    type: 'success',
                    duration: 5 * 1000
                })
            }
        }
    }
</script>

<style scoped>

</style>