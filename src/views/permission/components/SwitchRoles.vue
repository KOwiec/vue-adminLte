<template>
  <div>
    <!-- vue-admin-lte-->
    <va-button-group v-if="adminLte" v-model="switchRoles" :isRadio="true" size="sm">
      <va-radio-button id="admin" data="admin" color="olive"/>
      <va-radio-button id="user" data="user" color="olive"/>
    </va-button-group>
    <!-- element-ui-->
    <el-radio-group v-else v-model="switchRoles">
      <el-radio-button label="admin" />
      <el-radio-button label="user" />
    </el-radio-group>
  </div>
</template>

<script>
    import Emitter from '@/mixins/emitter-mixin';

export default {
    name: "SwitchRoles",
    mixins: [ Emitter ],
    props: {
        user: {
            type: Object,
            default: function() {
                return {}
            },
        },
        adminLte: { type: Boolean, default: true },
    },
    computed: {
        currentRoles() {
            return this.$store.getters.roles
        },
        isDefaultAdmin() {
            return this.$store.getters.user.username === 'admin' && this.$store.getters.user.id === this.user.id
        },
        switchRoles: {
            get() {
                   return this.isDefaultAdmin  ? this.currentRoles[0] : this.user.roles[0]
            },
            set(val) {
                // change role for 'admin' user dynamically without save in db.users in miracle.js (fake backend) for demo,
                // reload page - return admin role
                if (this.isDefaultAdmin)  {
                    this.$store.dispatch('account/changeRoles', val).then(() => {
                        this.dispatch( 'RightPanelContent', 'change-role');
                        this.$emit('change-role')
                    })
                } else {
                    // update user role
                    this.$emit('change-role', val)
                }
            }
        }
    }
}
</script>
