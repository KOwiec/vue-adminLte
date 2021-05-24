<template>
    <!-- Main Footer -->
    <footer class="main-footer" :class="{'text-sm': textSmFooter}">
       <div :class="isTopNav ? 'container' : ''">
         <right-footer/>
         <left-footer/>
       </div>
    </footer>
</template>

<script>
    import LeftFooter from './LeftFooter.vue'
    import RightFooter from './RightFooter.vue'
    import {  mapGetters } from 'vuex'
    export default {
        name: "Footer",
        components: { LeftFooter, RightFooter },
        computed: {
            ...mapGetters(['textSmFooter', 'layout']),
            isTopNav() {
                return this.layout.TopNav
            },
        },
    }

</script>

