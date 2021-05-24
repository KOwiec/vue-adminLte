<template>
  <section class="content">
  <!-- Content Header (Page header) -->
  <content-header title="Profile"/>

  <!-- Main content -->
  <div class="content">
    <div class="container-fluid">
      <div class="row">

        <div class="col-md-3">
           <user-card :user="currentUser" />
        </div>

        <div class="col-md-9">

          <va-card  headerType="p-0 pt-1" >

            <va-nav-tabs slot="cardTitle" navClass="pills" :activeTab="activeTab" navData="ml-auto p-2"/>

            <va-tab-pane slot="content" id="tab_1" title="Activity">
              <div id="tabs-one-home">
                <activity/>
              </div>
            </va-tab-pane>

            <va-tab-pane slot="content" id="tab_2" title="Timeline">
              <div id="tabs-two-profile">
                <timeline-pane/>
              </div>
            </va-tab-pane>

            <va-tab-pane slot="content" id="tab_3" title="Settings">
              <div>
                <settings :user="currentUser"/>
              </div>
            </va-tab-pane>

          </va-card>

        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import { mapGetters } from 'vuex'
    import UserCard from './components/UserCard'
    import Activity from './components/Activity'
    import TimelinePane from './components/TimelinePane'
    import Settings from './components/Settings'

    export default {
        name: "Profile",
        components: { ContentHeader, UserCard, Activity, TimelinePane, Settings },
        data() {
            return {
                currentUser: {},
                activeTab: '0'
            }
        },
        computed: {
            ...mapGetters([ 'testUser', 'user', 'roles' ])
        },
        created() {
            this.getUser()
        },
        methods: {
            getUser() {
                this.currentUser = {
                    username: this.user.username,
                    firstName: this.user.firstName,
                    email: this.user.email,
                    roles: this.roles.join(' | '),
                    avatar: this.testUser.image
                }
            }
        }
    }
</script>

<style>

</style>
