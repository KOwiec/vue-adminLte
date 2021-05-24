<template>
    <div :id="name" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li v-for="(item, index) in list" :key="index"
                  :data="item"
                  :class="index === startIndex ? 'active': ''"
                  :data-target="`#${name}`"
                  :data-slide-to="index">
            </li>
        </ol>
        <div class="carousel-inner">
            <div v-for="(item, index) in list" :key="index"
                  :data="item"
                  class="carousel-item"
                  :class="index===startIndex?'active':''" >

                <img class="d-block w-100" :src="item.image" :alt="item.text">
                <div class="carousel-caption">
                    {{item.text}}
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" :href="`#${name}`" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" :href="`#${name}`" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "VaCarousel",
        props: {
            name: {
                type: String,
                default: 'carousel-example-generic'
            },
            list: {
                type: Array,
                default: []
            },
            startIndex: {
                type: Number,
                default: 0
            }
        },

    }
</script>
