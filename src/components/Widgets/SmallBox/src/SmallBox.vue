<template>
    <!-- small box -->
    <div class="small-box" :class="bgColor">
        <div class="inner">
            <h3>{{title}}</h3>

            <p>{{description}}</p>
        </div>
        <div class="icon">
            <!-- Ionicons-->
            <i class="ion" :class="icon"></i>
        </div>
        <a href="#" class="small-box-footer" @click="moreEvent">{{moreText}} <i class="fa fa-arrow-circle-right"></i></a>
    </div>
</template>

<script>
    export default {
        name: 'SmallBox',
        props: {
            color: { type: String },
            icon: { type: String },
            description: { type: String },
            title: { type: String },
            moreText: { type: String }
        },

        computed: {
            bgColor () {
                return `bg-${this.color}`
            }
        },
        methods: {
            moreEvent () {
                this.$emit('more-click')
            }
        }
    }
</script>

