<template>
    <transition name="fade-component" mode="out-in">
        <div  class="sidebar-footer mt-3 pb-3" :class="line">

            <va-button-group class="block" >
                <va-button theme="danger" icon="el-icon-warning" title="errors"
                           :style="customTheme"
                           :isDisabled="!ifErrors"
                           @btn-click="handleErrors"/>
                <va-button theme="primary" icon="el-icon-date" title="date"
                           :style="customTheme"
                           @btn-click="handleDate"/>
                <va-button id="button-email" theme="primary" icon="el-icon-message"
                           title="email"
                           :style="customTheme"/>
                <va-button theme="primary" icon="el-icon-printer" title="print"
                           :style="customTheme"
                           @btn-click="handlePrint"/>

                <!-- Sidebar Footer dropdawn (AdminLte)-->
                <template v-if="isDefault">
                   <va-button  theme="primary" icon="fas fa-bars"
                               title="more" :isDropdown="true"
                               :style="customTheme"/>
                   <va-dropdown
                             :dropdownList="List"
                             location="right"
                             @dropdown-item-click="handleItemClick"
                   />
                </template>

                <!-- Sidebar Footer dropdown (with ElementUI)-->
                <div v-else>
                  <el-dropdown  trigger="click">
                     <va-button theme="primary" icon="el-icon-more"
                                title="more"
                                :style="customTheme"/>
                     <el-dropdown-menu slot="dropdown">
                         <a href="javascript:void(0);" @click="$Swal.fire('not available now!')">
                             <el-dropdown-item icon="el-icon-question">Help</el-dropdown-item>
                         </a>
                         <a target="_blank" href="https://element.eleme.io/#/en-US/component/dropdown">
                             <el-dropdown-item icon="el-icon-circle-plus-outline">ElementUi dropdown</el-dropdown-item>
                         </a>
                         <router-link to="/dashboards">
                             <el-dropdown-item icon="el-icon-circle-check" >Dashboard v.1</el-dropdown-item>
                         </router-link>
                         <a href="javascript:void(0);" @click="handleInfo">
                             <el-dropdown-item icon="el-icon-info" divided>Info</el-dropdown-item>
                         </a>
                     </el-dropdown-menu>
                  </el-dropdown>
                </div>
            </va-button-group>
            <!-- error log component (see: @/components/ErrorLog) -->
            <error-log :visible="dialogTableVisible" @close-errors-dialog="dialogTableVisible=false"/>
            <info-dialog :visible="infoDialog" @close-info-dialog="infoDialog=false"/>
            <print-dialog :visible="printDialog" @close-print-dialog="printDialog=false"/>
        </div>
    </transition>
</template>

<script>
    import ErrorLog from '@/components/ErrorLog'
    import InfoDialog from './InfoDialog'
    import PrintDialog from './PrintDialog'

    export default {
        name: "SidebarFooter",
        components: { ErrorLog, InfoDialog, PrintDialog },
        props: {
            isDefault: { type: Boolean, default: false },
            isLine: { type: Boolean, default: true },
            isCustomTheme: { type: Boolean, default: true },
        },
        data() {
            return {
                dialogTableVisible: false,
                infoDialog: false,
                printDialog: false,
                List: [
                    {  link: '#', text: 'Help', name: 'help', icon:'far fa-lightbulb'  },
                    {  link: 'https://adminlte.io/docs/3.0/components/main-sidebar.html', text: 'Main Sidebar', icon:'far fa-check-circle'  },
                    {  router: {name: 'DashboardV1'}, text: 'Dashboard v.1', icon: 'fas fa-tachometer-alt' },
                    {  isDivider: true },
                    {  link: '#', text: 'Info', name: 'info', icon:'fas fa-info-circle' },
                ],
            }
        },
        computed: {
            line() {
                return this.isLine ? 'mb-3' : ''
            },
            colorsMode() {
                return this.$store.state.theme.colors.sidebarMode
            },
            customTheme() {
                if(!this.isCustomTheme) return
                if (this.colorsMode === 'dark') {
                    return { 'background-color': this.$store.state.theme.customTheme ? this.$store.state.theme.customTheme : ''}
                } else {
                    return { 'background-color': this.$store.state.theme.customThemeLight ? this.$store.state.theme.customThemeLight : ''}
                }
            },
            ifErrors() {
                return this.$store.getters.errorLogs.length > 0
            },
        },
        methods: {
            handleDate() {
                this.$router.push('/calendar')
            },
            handleErrors() {
                if (!this.ifErrors) return;
                this.dialogTableVisible = true
            },
            handleInfo() {
                this.infoDialog = true
            },
            handlePrint() {
                this.printDialog = true
            },
            handleItemClick(name) {
                if (name && name === 'help') {
                    this.$Swal.fire('not available now!')
                } else if(name && name === 'info') {
                    this.infoDialog = true
                }
                return false
            },
        },
        created() {
            $(document).ready(function(){
                $('#button-email').on('click',function(){
                    window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
                });
            });
        }
    }
</script>

<style scoped>
    .sidebar-footer {
        position: relative;
    }
    .block {
        margin: 10px;
    }
</style>