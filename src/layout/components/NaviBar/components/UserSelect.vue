<template>
    <va-nav-dropdown
            id="UserDropdownMenu"
            title="profile"
            className="user-menu"
            :image="imageObj">
        <va-dropdown-menu size="lg">
            <!-- User image-->
            <li class="user-header bg-primary">
                <img :src="getImage" class="img-circle elevation-2" alt="User Image">

                <p>
                    {{testUser.name}} - {{testUser.position}}
                    <small>Member since {{parseDate}}</small>
                </p>
            </li>
            <!-- Menu Body-->
            <li class="user-body">

            </li>
            <!-- Menu Footer -->
            <li class="user-footer">
                <router-link to="/profile/index">
                    <va-button class="pan-btn gray-btn"
                               setStyle="padding: 6px 16px;"
                               name="Profile"
                    />
                </router-link>

                <va-button class="pan-btn yellow-btn"
                           setStyle="padding: 6px 16px; float: right"
                           name="Sign out"
                           @btn-click="logout"
                />
            </li>
        </va-dropdown-menu>
    </va-nav-dropdown>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "UserDropdownMenu",
        props: {
            title: { type: String,  default: '' },
        },
        data() {
            return {
                image: {}
            }
        },
        computed: {
            ...mapGetters([
                'testUser'
            ]),
            parseDate () {
                return this.testUser.createdAt.toDateString()
            },
            getImage() {
                return `static/img/${this.testUser.image}`
            },
            imageObj() {
                return this.image = { src: this.getImage, alt: this.testUser.position, }  // text: this.testUser.name
            }
        },
        methods: {
            async logout() {
                await this.$store.dispatch('account/logout')
                let url = `/login?redirect=${this.$route.fullPath}`;
                this.$router.go(url);
            },

        }
    }
</script>

<style scoped>

</style>