<template>
   <div id="control-sidebar-start">
        <form method="post">
          <div class="p-3">
             <h5 style="text-align:center;">Customize {{rootTabs.menu}}</h5>
             <hr class="mb-2"/>
             <p>Customize content of {{rootTabs.menu}}.</p>
             <div>
                 <slot name="customize-page-content"> ... content here</slot>
             </div>
          </div>
        </form>
    </div>
</template>

<script>
    //import { localStorageService } from '@/api/services';
    //import toastr from 'admin-lte/plugins/toastr/toastr.min.js'

    export default {
        name: 'SidebarTabPlus',
        components: {  },
        inject: ['rootTabs'],
        data() {
            return {
                storageName: '',
                collection: 'Content',
            }
        },
        computed: {

        },
        methods: {

        }
    }

</script>
