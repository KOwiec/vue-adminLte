<template>
    <!-- Message Start -->
    <div class="media">
        <img :src="`static/img/${item.user.image}`" alt="User Avatar" class="img-size-50 mr-3 img-circle">
        <div class="media-body">
            <h3 class="dropdown-item-title">
                {{item.user.firstName + ' ' + item.user.lastName}}
                <span class="float-right text-sm" :class="starClass"><i class="fas fa-star"></i></span>
            </h3>
            <p class="text-sm">{{item.title}}</p>
            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i>{{ getDate }}</p>
        </div>
    </div>
    <!-- Message End -->
</template>

<script>
    import { parseTime } from '@/utils/date-time'

    export default {
        name: "MessageItem",
        props: {
            // item menu object
            item: { type: Object },
        },
        computed: {
            getDate() {
                return  parseTime( this.item.timestamp, '{y}-{m}-{d} {h}:{i}')
            },
            starClass () {
                return {
                    'text-warning': this.item.importance === 'Medium',
                    'text-danger': this.item.importance === 'High',
                    'text-secondary': this.item.importance === 'Low',

                }
            }
        }
    }
</script>

<style scoped>

</style>