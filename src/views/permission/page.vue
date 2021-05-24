<template>
  <section class="content">
    <content-header title="Page Permission"/>

    <div class="content">
      <div class="container-fluid">
        <va-row>
          <div class="col-md-12">
            <va-card WidgetSet="default" title="Switch Roles">
              <div slot="content">
                <div class="form-group row">
                  <switch-roles class="col-sm-6" :adminLte="false" :user="user" @change-role="handleRolesChange" />
                </div>
                <span v-permission="['admin']" class="permission-info">
                        We change role from 'admin' to 'user' without save it in fake-backend (db.users), if username is 'admin'. It's default admin.<br/>
                        If wanna back to 'admin' role, simply reload page.
                        See: BACKEND-fake/mirage/data/defaultUsers.js<br/>
                        <small class="permission-small-info"> this info use, v-permission="['admin']" directive.</small>
                </span>

              </div>
            </va-card>
          </div>
        </va-row>
      </div>
    </div>
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import { mapGetters } from 'vuex'
    import SwitchRoles from './components/SwitchRoles'
    import permission from '@/directives/permission'

export default {
    name: 'PagePermission',
    components: { ContentHeader, SwitchRoles },
    directives: { permission },
    computed: {
        ...mapGetters([ 'user', 'roles' ])
    },
    methods: {
       handleRolesChange() {
          this.$router.push({ path: '/permission/index?' + +new Date() })
       }
    }
}
</script>

<style lang="scss" scoped>
  .permission-info {
    color: #67c23a;
    background-color: #f0f9eb;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;

    .permission-small-info {
      color: #10ab8e;
    }
  }
</style>
