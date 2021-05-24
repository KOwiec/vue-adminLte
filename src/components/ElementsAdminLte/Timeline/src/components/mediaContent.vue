<template>
    <div v-if="type === 'carousel'" class="carousel-images">
        <el-carousel :interval="6000" type="card" height="220px">
            <el-carousel-item v-for="item in carouselImg" :key="item">
                <img :src="item+carouselPrefix" class="image">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div v-else-if="type === 'image'" class="images">
        <va-row>
           <div v-for="item in images" class="col-sm-6">
               <img class="img-fluid mb-3" :src="item" alt="Photo">
           </div>
        </va-row>
    </div>
    <div v-else-if="type === 'video'" class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="video" frameborder="0" allowfullscreen=""></iframe>
    </div>
</template>

<script>
    const carouselPrefix = '?imageView2/2/h/440';
    const mediaTypes = [ 'image', 'video', 'carousel' ];
    const Img = [
            '/static/img/photo1.png',
            '/static/img/photo2.png',
            '/static/img/photo3.jpg',
            '/static/img/photo4.jpg',
        ];

    export default {
        name: "mediaContent",
        props: {
            type: {
                default: '',
                validator: function (value) {
                    return mediaTypes.includes(value)
                }
            },
            images: { type: Array },
            video: { type: String }
        },
        data() {
            return {
                carouselImg: this.images || this.Img,
                carouselPrefix
            }
        }
    }
</script>

<style scoped>
    .image {
        width: 100%;
        height: 100%;
    }
    .carousel-images {
        padding-top: 20px;
    }
</style>