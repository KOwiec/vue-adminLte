<template>
    <div class="drawer-container">
        <div class="content-header">
             <span>
                 <i class="fa fa-user" :style="{'color':theme, 'font-size': 20+'px'}">
                    <a href="https://jasonwatmore.com/post/2018/07/14/vue-vuex-user-registration-and-login-tutorial-example"
                         target="_blank"> Users in Vue-AdminLTE
                    </a>
                 </i>
             </span>
        </div>

        <div class="content">
             <overlay-scrollbars class="content-users-info" v-show="!show">
                <img v-if="logo" :src="logo" :alt="alt" class="brand-image" style="opacity: .8">
                <h3 >Hi {{account.user.firstName}} !</h3>

                <h6 v-if="isAdmin">Manage Users accounts:</h6>
                <h6 v-else>Manage your account:</h6>
                <em v-if="users.loading">Loading users...</em>
                <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>

                <table  class="table table-striped" v-if="users.items">
                    <thead>
                    <tr>
                        <th v-for="header in headers" :key="header.text">
                            {{ header.text }}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="user in users.items" :key="user.id">
                        <td v-for="field in headers" :key="field.value">
                            <template v-if="field.value === 'fullName'">
                                {{user.firstName + ' ' + user.lastName}}
                            </template>
                            <template v-else-if="field.value === 'status'">
                                <span v-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                                <span v-else-if="user.deleting" class="badge badge-danger"> Deleting...</span>
                                <span v-else-if="user.updating" class="badge badge-info"> Updating ...</span>
                                <span v-else-if="account.user.username !== user.username" class="badge badge-warning">Log Out</span>
                                <span v-else="account.status.loggedIn" class="badge badge-success">Logged in</span>
                            </template>
                            <template v-else-if="field.value === 'action'">
                                <span>
                                  <button v-if="isAdmin" class="btn-danger btn-xs" title="delete" @click="showDeleteModal(user)"
                                          data-toggle="modal" data-target="#modal-delete-user"
                                          :style="{'background-color':theme, 'width': '35px', 'height': '35px'}" >
                                     <a class="text-danger">
                                          <i class="el-icon-delete"></i>
                                     </a>
                                  </button>
                                  <button class="btn-warning btn-xs" title="edit" @click="showEditForm(user)"
                                          :style="{'background-color':theme, 'width': '35px', 'height': '35px'}">
                                     <a class="text-warning">
                                          <i class="el-icon-edit"></i>
                                     </a>
                                  </button>
                                </span>
                            </template>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <hr class="mb-2"/>
                <p>
                    <button class="btn-outline-primary btn-xs"> <a @click="logout" class="nav-link">Logout</a></button>
                </p>
                <br/>
            </overlay-scrollbars>

             <edit-user-form v-if="show"
                            :user="editedUser"
                            :admin="isAdmin"
                            @updateUser="makeUpdateUser"
                            @cancelEdit="show = $event"
             />
        </div>
        <!-- modal-dialog -->
        <div class="modal fade" id="modal-delete-user">
            <div class="modal-dialog">
                <div class="modal-content bg-warning">
                    <div class="modal-header">
                        <h4 class="modal-title">Are you sure ?</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Do you want delete User: {{editedUser.firstName}} {{editedUser.lastName}} ?</p>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" @click="makeDeleteUser(editedUser.id)" data-dismiss="modal">Delete User</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import editUserForm from './RightPanelEditUser'
    import checkPermission from '@/utils/permission'

    export default {
        name: "RightPanelContent",
        componentName: "RightPanelContent",
        components: { editUserForm },

        data() {
            return {
                title: 'Vue-AdminLTE-3  ',
                logo: '/static/img/icons/vue2-adminlte-logo-128x128.png',
                alt: 'Vue-AdminLTE3 Logo',
                headers: [
                    {text:'Full Name', value:'fullName'},
                    {text:'Status', value:'status'},
                    {text:'Action', value:'action'},
                ],
                show: false,
                editedUser: {
                    id: '',
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: ''
                },
            }
        },
        computed: {
            ...mapState({
                account: state => state.account,
                users: state => state.users.all,
            }),
            theme() {
                return this.$store.state.theme.customTheme
            },
            isAdmin() {
                return checkPermission(['admin'])
            },
        },
        created () {
            setTimeout(() => {
                this.handleRolesChange()
            }, 0);
        },
        methods: {
            ...mapActions('users', { getAllUsers: 'getAll',
                                     getUserById: 'getById',
                                     deleteUser: 'delete',
                                     updateUser: 'update'
            }),
            async logout() {
                await this.$store.dispatch('account/logout')
                let url = `/login?redirect=${this.$route.fullPath}`;
                this.$router.push(url)
            },
            showDeleteModal(user) {
                if (user) {
                    this.editedUser = Object.assign({}, user);
                }
            },
            makeDeleteUser(id) {
                this.deleteUser(id);
                //console.log('user deleted: ' +id);
                if ( id === this.account.user.id && this.editedUser.username === this.account.user.username )
                    this.logout();
                this.clearEditedUser();
            },
            showEditForm(user) {
                this.show = !this.show;
                //console.log('user edit: ' +user.id);
                if (user) {
                    this.editedUser = Object.assign({}, user);
                }
            },

            makeUpdateUser(user, show) {
                this.show = show;
                this.updateUser(user);
                this.clearEditedUser();
            },
            clearEditedUser() {
                this.editedUser = {
                    id: '',
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: ''
                }
            },
            getStatus (theme, value ) {
                return `<span class="tag tag-${theme}"><em>${value}</em></span>`
            },
            handleRolesChange() {
                if (this.isAdmin) {
                    this.getAllUsers();
                } else {
                    this.getUserById(this.account.user.id)
                }
            }
        },
        mounted() {
            this.$on('change-role', this.handleRolesChange);
        }
    }
</script>

<style scoped>
    .drawer-container {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
    }
    .content {
        text-align: center;
        margin-top: 10px;
    }
    .content-users-info {
        height: 100vh;
        overflow: auto;
    }
    .content-header {
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495E;
        color: #ffffff;
        text-align: center;
    }
    .content-header span {
        text-align: center;
        display: block;
        position: relative;
        font-size: 18px;
        line-height: 1;
        letter-spacing: .02em;
        font-weight: 400;
        box-sizing: border-box;
        padding-top: 16px;
    }
    .brand-image {
        width: 60px;
        height: 60px;
    }
    .content-users-info {
        height: 100vh;
        overflow: auto;
    }
</style>