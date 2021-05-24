<template>
    <transition name="page" mode="out-in">
        <overlay-scrollbars class="container-fluid" ref="panelEditUserScroll">
            <!-- Default box -->
            <va-row style=" padding: 5px 5px 0 5px">
                <div class="col-md-12">
                    <div  class="card card-info">
                        <div class="card-header">
                            <h3 class="card-title">Edit user from db.users </h3>
                            <h4 v-if="admin" class="card-title float-right">ID: {{updatedUser.id}}</h4>
                        </div>
                        <!-- form start -->
                        <form class="form-horizontal" @submit.prevent="handleUpdate" @keyup.enter="handleUpdate">
                            <div class="card-body" >
                                <div class="form-group row">
                                    <label for="inputFirstName" class="col-sm-3 col-form-label-sm">First name:</label>
                                    <div class="col-sm-9">
                                        <input type="text" v-model="updatedUser.firstName" v-validate="'required'" id="inputFirstName" name="first name" placeholder="first name"
                                               class="form-control form-control-sm" :class="{ 'is-invalid': submitted && errors.has('first name') }">
                                        <div v-if="submitted && errors.has('first name')" class="invalid-feedback">{{ errors.first('first name') }}</div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputLastName" class="col-sm-3 col-form-label-sm">Last name:</label>
                                    <div class="col-sm-9">
                                        <input type="text" v-model="updatedUser.lastName" v-validate="'required'" id="inputLastName" name="last name" placeholder="last name"
                                               class="form-control form-control-sm" :class="{ 'is-invalid': submitted && errors.has('last name') }">
                                        <div v-if="submitted && errors.has('last name')" class="invalid-feedback">{{ errors.first('last name') }}</div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputUserName" class="col-sm-3 col-form-label-sm">Username:</label>
                                    <div class="col-sm-9">
                                        <input type="text" v-model="updatedUser.username" v-validate="'required'" id="inputUserName" name="username" placeholder="username"
                                               class="form-control form-control-sm" :class="{ 'is-invalid': submitted && errors.has('username') }">
                                        <div v-if="submitted && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail" class="col-sm-3 col-form-label-sm">Email:</label>
                                    <div class="col-sm-9">
                                        <input type="email" v-model="updatedUser.email" v-validate="'required|email'" id="inputEmail" name="email" placeholder="Email"
                                               class="form-control form-control-sm" :class="{ 'is-invalid': submitted && errors.has('email') }">
                                        <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                                    </div>
                                </div>

                                <div v-if="!admin || admin && updatedUser.id === currentUser.id">
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-3 col-form-label-sm">Password:</label>
                                        <div class="col-sm-8">
                                            <input :type="passwordType" v-model="updatedUser.password" :disabled="isDisabled" v-validate="{ required: true, min: 6, is: confirmPassword }"
                                                   id="inputPassword" name="password" placeholder="Password"
                                                   class="form-control form-control-sm" :class="{ 'is-invalid': submitted && errors.has('password') }">
                                            <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                                        </div>
                                        <div class="col-sm-1">
                                            <a href="javascript:void(0);" @click="showPwd">
                                                <span :class="passwordType === 'password' ? 'fas fa-lock' : 'fas fa-lock-open'" ></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputConfirm" class="col-sm-3 col-form-label-sm">Confirm:</label>
                                        <div class="col-sm-8">
                                            <input :type="passwordType" ref="confirmed" v-model="confirmPassword"
                                                   v-validate="{ required: true }"
                                                   id="inputConfirm" name="confirmed" placeholder="Retype password"
                                                   class="form-control form-control-sm" :class="{ 'is-invalid': submitted && errors.has('confirmed') }">
                                            <div v-if="submitted && errors.has('password_confirmation')" class="invalid-feedback">{{ errors.first('confirmed') }}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label  class="col-sm-3 col-form-label-sm">Roles: </label>
                                    <span>{{ updatedUser.roles }}</span>
                                </div>

                                <va-form-group v-if="admin">
                                    <div class="form-group row">
                                        <label class="col-sm-4 col-form-label-sm">Switch roles:</label>
                                        <switch-roles :user="updatedUser" @change-role="handleRolesChange" />
                                    </div>
                                </va-form-group>

                                <span v-permission="['admin']" class="permission-info">
                                        If logged user has role 'admin', can change roles for all users. <br/>
                                        <small class="permission-small-info"> this info use, v-permission="['admin']" directive.</small>
                                </span>

                                <span v-permission="['user']" class="permission-info">
                                        If logged user has role 'user', can't change roles, only own data in db.users.<br/>
                                        <small class="permission-small-info"> this info use, v-permission="['user']" directive.</small>
                                </span>

                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer">
                                <button type="submit" class="btn btn-info float-left">Save & Close</button>
                                <button type="submit" class="btn btn-secondary float-right" @click.prevent="cancelEdit">Cancel</button>
                            </div>
                            <!-- /.card-footer -->
                        </form>
                    </div>
                    <!-- /.card -->
                    <br/><br/><br/>
                </div>
            </va-row>
        </overlay-scrollbars>
    </transition>
</template>

<script>
    import permission from '@/directives/permission'
    import SwitchRoles from '@/views/permission/components/SwitchRoles.vue'

    export default {
        name: "RightPanelEditUser",
        components: {  SwitchRoles },
        directives: { permission },
        props: {
            user: {
                type: Object,
                default: function() {
                    return {}
                },
            },
            admin: { type: Boolean, default: false },
            userAdmin: { type: Boolean, default: false },
        },
        data() {
            return {
                submitted: false,
                updatedUser: Object.assign({}, this.user),
                confirmPassword: '',
                passwordType: 'password',
                isDisabled: true,
                currentUser: this.$store.getters.user,
                rolesChange: false,
            }
        },
        watch:{
            user(newUser){
                this.updatedUser = Object.assign({}, newUser)
            }
        },
        methods: {
            cancelEdit() {
               if (this.rolesChange) {
                   // if roles changed delete last element
                   this.updatedUser.roles.pop();
                   this.rolesChange = false;
               }
               this.passwordType = 'password';
               this.$emit('cancelEdit', false)
            },
            handleUpdate() {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        let showForm = false;
                        this.$emit('updateUser', this.updatedUser, showForm);
                        this.confirmPassword = '';
                        this.passwordType = 'password'
                        this.submitted = false;
                    } else {
                        console.log('error update user submit!!');
                        return false
                    }
                });
            },
            showPwd() {
                if (this.passwordType === 'password') {
                    this.passwordType = '';
                    this.isDisabled = false
                } else {
                    this.passwordType = 'password';
                    this.isDisabled = true
                }
                this.$nextTick(() => {
                    this.$refs.confirmed.focus()
                })
            },
            handleRolesChange(val) {
                // check if role is in the table
                const permissionRole = val;
                const hasRole = this.updatedUser.roles.some(role => {
                    return permissionRole === role
                });
                if (!hasRole) {
                    this.rolesChange = true ;
                    this.updatedUser.roles.push(val)
                } else {
                    return false
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container-fluid {
        height: 100vh;
        overflow: auto;
    }
    .container-fluid {
        /deep/ .permission-info {
            color: #67c23a;
            background-color: #f0f9eb;
            padding: 8px 16px;
            border-radius: 4px;
            display: inline-block;

            .permission-small-info {
                color: #10ab8e;
            }
        }
    }

</style>