<template>
    <div class="card bg-light">
        <div class="card-header text-muted border-bottom-0">
            Department: {{ item.department }}
        </div>
        <div class="card-body pt-0">
            <div class="row">
                <div class="col-7">
                    <h2 class="lead"><b>{{ item.name }}</b></h2>
                    <p class="text-muted text-sm"><b>About: </b><br/> {{item.jobs}} </p>
                    <ul class="ml-4 mb-0 fa-ul text-muted">
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span> Address:<br/> {{ item.street }}, {{ item.city }} {{ item.zipCode }}, {{ item.stateAbbr }}</li>
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>Phone: <br/>{{ item.phone }}</li>
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-envelope"></i></span>Mail: <br/>{{ item.email }}</li>
                    </ul>
                </div>
                <div class="col-5 text-center">
                    <img :src="avatar" alt="" class="img-circle img-fluid">
                </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="text-right">
                <a href="javascript:void(0);" class="btn btn-sm bg-teal">
                    <i class="fas fa-comments"></i>
                </a>
                <a href="javascript:void(0);" class="btn btn-sm btn-primary">
                    <i class="fas fa-user"></i> View Profile
                </a>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        props: {
            item: { type: Object },
        },
        data () {
            return {
                alt: '2189-3.jpg'
            }
        },
        computed: {
            avatar() {
                return this.checkAvatarUrl(this.item.avatar) ? this.item.avatar : `static/img/${this.alt}`
            }
        },
        methods: {
             checkAvatarUrl (url) {
                 var img = new Image();
                 img.src = url;
                 return img.height != 0;
             },
        },
    }
</script>

<style scoped>

</style>