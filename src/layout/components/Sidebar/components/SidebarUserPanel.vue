<template>
    <transition name="fade-component" mode="out-in">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img :src="`/static/img/${testUser.image}`"
                     class="img-circle elevation-2" :alt="testUser.position">
            </div>
            <div class="info">
                <a href="javascript:void(0)" class="d-block" title="username / roles">{{user.username}}/
                    <small><span>[{{getRole}}]</span></small>
                </a>
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "SidebarUserPanel",
        computed: {
            ...mapGetters([ 'testUser', 'user', 'roles' ]),
            getRole() {
                return this.roles.join(' | ')
            }
        },
    }
</script>

<style  scoped>

</style>