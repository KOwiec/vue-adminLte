<template>
    <div class="errPage-container">
        <el-button class="back-btn" @click="back">
          Back
        </el-button>
        <el-row>
            <el-col :span="5">
                <h1 class="text-jumbo text-ginormous">
                    Oops!
                </h1>

                <h2>401 Unauthorized</h2>
                <h6>client error status</h6>
                <ul class="list-unstyled">
                    <li>Links:</li>
                    <li class="link-type">
                        <router-link to="/dashboards/index">
                            return to home
                        </router-link>
                    </li>
                    <li class="link-type">
                        <a :href="linkDocs" target="_blank">documentation</a>
                    </li>
                    <li><a href="#" @click.prevent="dialogVisible=true">Show dialog</a></li>
                </ul>
            </el-col>
            <el-col :span="10">
                <img class="err-img" :src="errImg" alt="401">
            </el-col>
        </el-row>
        <el-dialog :visible.sync="dialogVisible" title="Description error 401">
            <p>The HTTP 401 Unauthorized client error status response code indicates that the request has not been<br/>
                applied because it lacks valid authentication credentials for the target resource.
                This status is sent with a WWW-Authenticate header that contains information on how to authorize correctly.
                This status is<br/> similar to 403, but in this case, authentication is possible.<br/>
                <span>(https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)</span></p>
        </el-dialog>
    </div>
</template>

<script>
    import errImg from '@/assets/errors/item-01.png'

    export default {
        name: "Page401",
        data() {
            return {
                errImg: errImg + '?' + +new Date(),
                linkDocs: 'https://adminlte.io/docs/3.0/index.html',
                dialogVisible: false
            }
        },
        methods: {
            back() {
                if (this.$route.query.noGoBack) {
                    this.$router.push({ path: '/widgets' })
                } else {
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .errPage-container {
        width: 800px;
        max-width: 100%;
        margin: 100px auto;
        .back-btn {
            background: #008489;
            color: #fff;
            border: none !important;
        }
        .err-img {
            opacity: 0;
            display: block;
            max-width: 700px;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-delay: 0.3s;
            animation-fill-mode: forwards;
        }
        @keyframes slideUp {
            0% {
                transform: translateY(60px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
        .text-jumbo {
            font-size: 60px;
            font-weight: 700;
            color: #484848;

        }
        .list-unstyled {
            font-size: 14px;
            li {
                padding-bottom: 5px;
            }
            a {
                color: #008489;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>