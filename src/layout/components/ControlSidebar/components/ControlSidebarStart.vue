<template>
    <!-- Control Sidebar -->
    <div id="control-sidebar-start">
        <form method="post">
          <div class="p-3">
             <h5 style="text-align:center;">Customize {{collection}}</h5>
             <hr class="mb-2"/>
             <p>Default users:</p>
             <div>
                 USER: admin<br>
                 PASSWORD: admin1<br>
                 ROLES: ['admin']
                 <hr class="mb-2"/>
                 USER: user<br>
                 PASSWORD: user11<br>
                 ROLES: ['user']<br>
                 <p/>
                 <p>New users registered by authorisation system have ['user'] role</p>
             </div>
          </div>
        </form>
    </div>
    <!-- /.control-sidebar -->
</template>

<script>
    export default {
        name: 'SidebarTabStart',
        components: {  },
        inject: ['rootTabs'],
        data() {
            return {
                storageName: '',
                collection: 'Users',
            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>
