<template>
    <!-- Widget: user widget style 2 -->
    <div class="card card-widget widget-user-2">
        <!-- Add the bg color to the header using any of the bg-* classes -->
        <div class="widget-user-header bg-warning">
            <div class="widget-user-image">
                <img class="img-circle elevation-2" :src="profileImage" alt="User Avatar">
            </div>
            <!-- /.widget-user-image -->
            <h3 class="widget-user-username">{{ name }}</h3>
            <h5 class="widget-user-desc">{{ description }}</h5>
        </div>
        <div class="card-footer p-0">
            <ul class="nav flex-column">
                <li class="nav-item" v-for="item in list">
                    <a href="#" class="nav-link">
                        {{ item.name }} <span class="float-right badge" :class="item.badge.theme">{{ item.badge.count }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- /.widget-user -->
</template>

<script>
    export default {
        name: "SocialUser.v2",
        props: {
            name: {
                type: String
            },
            description: {
                type: String
            },
            profileImage: {
                type: String
            },
            list: {
                type: Array
            }
        },
        created () {

        }

    }
</script>

