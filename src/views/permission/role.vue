<template>
    <section class="content">
        <content-header title="Role Permission"/>

        <div class="content">
            <div class="container-fluid">
                <va-row>
                    <div class="col-md-12">
                        <va-card WidgetSet="default" content="p-0">
                            <button slot="cardTitle" type="button " class="btn btn-primary btn-sm"  @click="handleAddRole"
                                    data-toggle="modal" data-target="#modal-role-form">
                                <i class="fas fa-plus"></i> New Role
                            </button>

                            <div slot="content">
                                <table  class="table table-striped projects" >
                                    <thead>
                                    <tr>
                                        <th v-for="header in headers" :key="header.text">
                                            {{ header.text }}
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(role, index) in rolesList" :key="index">
                                        <td v-for="field in headers" :key="field.value">
                                            <template v-if="field.value === 'roleKey'">
                                                {{role.key}}
                                            </template>
                                            <template v-if="field.value === 'roleName'">
                                                {{role.name}}
                                            </template>
                                            <template v-if="field.value === 'desc'">
                                                {{role.description}}
                                            </template>
                                            <template v-if="field.value === 'operation'">
                                                <a class="btn btn-info btn-sm" href="#" @click="handleEdit(role)"
                                                   data-toggle="modal" data-target="#modal-role-form">
                                                    <i class="fas fa-pencil-alt">
                                                    </i>
                                                    Edit
                                                </a>
                                                <a class="btn btn-danger btn-sm" href="#" @click="handleDelete(index, role)">
                                                    <i class="fas fa-trash">
                                                    </i>
                                                    Delete
                                                </a>
                                            </template>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <!-- modal -->
                                <div class="modal fade" id="modal-role-form" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="ModalTitle">{{modalType}}</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form :model="role">
                                                    <div class="form-group">
                                                        <label for="role-name" class="col-form-label">Name:</label>
                                                        <input v-model="role.name" type="text" class="form-control" id="role-name" placeholder="Role Name">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="desc-text" class="col-form-label">Description:</label>
                                                        <textarea v-model="role.description" class="form-control" id="desc-text" placeholder="Role Description"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label  class="col-form-label">Menus:</label>
                                                        <el-tree
                                                                ref="tree"
                                                                :check-strictly="checkStrictly"
                                                                :data="routesData"
                                                                :props="defaultProps"
                                                                show-checkbox
                                                                node-key="path"
                                                                class="permission-tree"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-primary" @click="confirmRole">Confirm</button>
                                            </div>
                                        </div>
                                        <!-- /.modal-content -->
                                    </div>
                                    <!-- /.modal-dialog -->
                                </div>
                            </div>
                        </va-card>
                        <aside class="aside-info">
                            It's only demo CRUD for role table in mirage (our fake backend: see directory BACKEND-fake/mirage/index.js & roles directory).
                            Changes only for session (not saved in local storage).
                        </aside>
                    </div>
                </va-row>
            </div>
        </div>
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import { roleService } from '@/api/services';
    import { deepClone } from '@/utils/document'
    import path from 'path'

    const defaultRole = {
        key: '',
        name: '',
        description: '',
        routes: []
    }

    export default {
        name: "role",
        components: { ContentHeader },
        data() {
            return {
                headers: [
                    {text:'Role Key', value:'roleKey'},
                    {text:'Role Name', value:'roleName'},
                    {text:'Description', value:'desc'},
                    {text:'Operation', value:'operation'},
                ],
                role: Object.assign({}, defaultRole),
                rolesList: [],
                routes: [],
                serviceRoutes: [],
                dialogType: 'new',
                checkStrictly: false,
                defaultProps: {
                    children: 'children',
                    label: 'title'
                }
            }
        },
        computed: {
            routesData() {
                return this.routes
            },
            modalType() {
                return this.dialogType==='edit'? 'Edit Role' : 'New Role'
            }
        },
        created() {
            // Mirage: get all routes and roles list from server
            this.getRoutes()
            this.getRoles()
        },
        methods: {
            async getRoles() {
                const res = await roleService.getAll()
                this.rolesList = res.data
            },
            async getRoutes() {
                const res = await roleService.getRoutes()
                this.serviceRoutes = res.data
                this.routes = this.generateRoutes(res.data)
            },
            // Reshape the routes structure so that it looks the same as the sidebar
            generateRoutes(routes, basePath = '/') {
                const res = []

                for (let route of routes) {
                    // skip some route
                    if (route.hidden) {
                        continue
                    }

                    const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)

                    if (route.children && onlyOneShowingChild && !route.alwaysShow) {
                        route = onlyOneShowingChild
                    }

                    const data = {
                        path: path.resolve(basePath, route.path),
                        title: route.meta && route.meta.title
                    }

                    // recursive child routes
                    if (route.children) {
                        data.children = this.generateRoutes(route.children, data.path)
                    }
                    res.push(data)
                }
                return res
            },
            // reference: src/layout/components/Sidebar/SidebarItem.vue
            onlyOneShowingChild(children = [], parent) {
                let onlyOneChild = null
                const showingChildren = children.filter(item => !item.hidden)

                // When there is only one child route, the child route is displayed by default
                if (showingChildren.length === 1) {
                    onlyOneChild = showingChildren[0]
                    onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
                    return onlyOneChild
                }

                // Show parent if there are no child route to display
                if (showingChildren.length === 0) {
                    onlyOneChild = { ... parent, path: '', noShowingChildren: true }
                    return onlyOneChild
                }

                return false
            },
            handleAddRole() {
                this.role = Object.assign({}, defaultRole)
                if (this.$refs.tree) {
                    this.$refs.tree.setCheckedNodes([])
                }
                this.dialogType = 'new'
            },
            generateArr(routes) {
                let data = []
                routes.forEach(route => {
                    data.push(route)
                    if (route.children) {
                        const temp = this.generateArr(route.children)
                        if (temp.length > 0) {
                            data = [...data, ...temp]
                        }
                    }
                })
                return data
            },
            handleEdit( role ) {
                this.dialogType = 'edit'
                this.checkStrictly = true
                this.role = deepClone(role)
                this.$nextTick(() => {
                    const routes = this.generateRoutes(this.role.routes)
                    this.$refs.tree.setCheckedNodes(this.generateArr(routes))
                    // set checked state of a node not affects its father and child nodes
                    this.checkStrictly = false
                })

            },
            handleDelete( i, role ) {
                this.$Swal.fire({
                    title: 'Confirm to remove the role?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirm'
                }).then(async (result) => {
                    if (result.value) {
                        await roleService.delete(role.id)
                        .then((res) => {
                           // console.log(res);
                           this.$Swal.fire({title: 'Info!', text: res.data.message, type: res.data.status})
                           this.rolesList.splice(i, 1)
                        })
                    }
                }).catch(err => { console.error(err) })

            },
            generateTree(routes, basePath = '/', checkedKeys) {
                const res = []

                for (const route of routes) {
                    const routePath = path.resolve(basePath, route.path)

                    // recursive child routes
                    if (route.children) {
                        route.children = this.generateTree(route.children, routePath, checkedKeys)
                    }

                    if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
                        res.push(route)
                    }
                }
                return res
            },
            async confirmRole() {
                const isEdit = this.dialogType === 'edit'

                const checkedKeys = this.$refs.tree.getCheckedKeys()
                this.role.routes = this.generateTree(deepClone(this.serviceRoutes), '/', checkedKeys)
                if (isEdit) {
                    await roleService.update(this.role.id, this.role)
                    for (let index = 0; index < this.rolesList.length; index++) {
                        if (this.rolesList[index].key === this.role.key) {
                            this.rolesList.splice(index, 1, Object.assign({}, this.role))
                            break
                        }
                    }
                } else {
                    const { data } = await roleService.create(this.role)
                    this.role.key = data
                    this.rolesList.push(this.role)
                }

                const { description, key, name } = this.role
                this.$Toaster.success(`<div>Role Key: ${key}</div><div>Role Name: ${name}</div><div>Description: ${description}</div>`)
                this.$Toaster.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
            },
        }
    }
</script>

<style scoped>
   .aside-info {
       background-color: #f9ebaa;
       padding: 8px 16px;
       border-radius: 4px;
   }
   .permission-tree {
       margin-bottom: 30px;
       margin-left: 40px;
   }
</style>