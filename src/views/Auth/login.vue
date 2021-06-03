<template>
    <transition name="fade" mode="out-in">
     <div class="login-page" >
       <div class="login-box">
           <!-- simple alert for login error -->
           <div v-if="loginError" id="loginErrorAlert" :class="`alert alert-${alertSimple.type}`">{{alertSimple.message}}</div>
           <!-- alert info component  ------------->
           <va-alert v-if="showLoginInfo"
                  id="loginAlert"
                  :type="alert.type"
                  :dismissible="true"
                  @alert-btn-click="closeLoginInfo">
               <h5 slot="header"><i :class="alert.icon"></i> {{ $t('login.alert.title') }} </h5>
               <div slot="body">
                   <div >{{ $t('login.alert.text')}}</div>
                   <div class="form-group">
                       <div class="custom-control custom-checkbox">
                           <input class="custom-control-input" type="checkbox" id="loginCheckbox1" @change="changeHandler" :value="isCheckedAlert"><br/>
                           <label for="loginCheckbox1" class="custom-control-label">{{ $t('login.alert.checkLabel') }}</label>
                       </div>
                   </div>
               </div>
           </va-alert>
           <!-- /.alert ------------------------------------------------------------------------->
          <div class="login-logo">
              <a href="javascript:void(0);">Vue-<b>Admin</b>LTE</a>
          </div>

          <div class="card">
            <div class="card-body login-card-body">
                <!-- Language Dropdown Menu -->
                <div class="row">
                    <div class="col-2">
                        <ul class="navbar-nav ml-auto">
                            <lang-select style="padding-left: 30px" icon="fas fa-globe fa-2x"/>
                        </ul>
                    </div>
                    <div class="col-8">
                        <p class="login-box-msg">{{ $t('login.text')}}</p>
                    </div>
                </div>
                <!-- Login form -->
                <form ref="loginForm" class="login" @submit.prevent="handleLogin" @keyup.enter="handleLogin">
                    <div class="input-group mb-3">
                        <input v-model.trim="username"
                               v-validate="'required'"
                               ref="username"
                               type="text"
                               name="username"
                               class="form-control" :class="{ 'is-invalid': submitted && errors.has('username') }"
                               :placeholder="$t('login.username')">
                        <div class="input-group-append">
                            <div class="input-group-text">
                               <span class="fas fa-user"></span>
                            </div>
                        </div>
                        <div v-show="submitted && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>
                    </div>
                    <div class="input-group mb-3">
                        <input v-model.trim="password"
                               v-validate="{ required: true, min: 6 }"
                               ref="password"
                               :type="passwordType"
                               name="password"
                               class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }"
                               :placeholder="$t('login.password')">
                        <div class="input-group-append input-group-text">
                           <a href="javascript:void(0);" @click="showPwd">

                                  <span :class="passwordType === 'password' ? 'fas fa-lock' : 'fas fa-lock-open'" ></span>

                           </a>
                        </div>
                        <div v-show="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <!-- optional Remember user- not implemented yet
                            <div class="custom-control">
                                <input type="checkbox" id="remember" v-model="remember">
                                <label for="remember">
                                    Remember Me
                                </label>
                            </div>--->
                        </div>
                        <div class="col-3" :style="{'text-align': 'center'}">
                            <i v-show="loggingIn" class="el-icon-loading" :style="{ 'font-size': '33px' }"></i>
                        </div>

                        <div class="col-5">
                            <button type="submit" class="btn btn-primary btn-block" :disabled="loggingIn">{{$t('login.logIn')}}</button>
                        </div>
                    </div>
                </form>

                <social-auth-links v-if="showLinks"/>

                <div class="row">
                    <div class="col-8">
                       <va-check-box
                              v-model="showLinks"
                              checkClass="custom-control"
                              id="socialLinksCheckbox">
                          Social Links
                       </va-check-box>
                    </div>
                </div><br/>
                <!-- forgot-password - not implemented yet
                <p class="mb-1">
                    <a href="javascript:void(0);" class="text-center" @click="goToForgot">I forgot my password</a>
                </p>
                -->
                <p class="mb-0">
                    <a href="javascript:void(0);" class="text-center" @click="goToRegister">{{$t('login.register')}}</a>
                </p>
            </div>
        </div>
       </div>
     </div>
    </transition>

</template>

<script>
    import {  mapGetters } from 'vuex'
    import LangSelect from '@/components/LangSelect'
    import socialAuthLinks from './components/socialAuthLinks.vue'

    export default {
        name: "login",
        components: { LangSelect, socialAuthLinks },
        data(){
            return {
                //social links
                showLinks: false,
                // login card
                username: '',
                password: '',
                remember: false,
                submitted: false,
                passwordType: 'password',
                redirect: undefined,
                otherQuery: {},
                // alert
                isCheckedAlert: false,
                showAlert: null,
                alert: null,
                cname: 'loginAlert1',
                customStyle: {
                    type: Object,
                    default: function () {
                        return {}
                    }
                }
            }
        },
        mounted() {
           // option
           // if (this.username === '') {
           //     this.$refs.username.focus()
           // } else if (this.password === '') {
           //     this.$refs.password.focus()
           // }
        },
        computed: {
            ...mapGetters([ 'notifications', 'alertSimple', 'language' ]),
            loggingIn () {
                return this.$store.getters.isloggingIn;
            },
            loginError () {
                return this.$store.getters.isLoginError;
            },
            // for alert section
            showLoginInfo() {
                let appSettings = this.checkAppSettings();
                this.showAlert = this.checkAndShow();

                return appSettings && this.showAlert
            }
        },
        watch: {
            $route: {
                handler: function(route) {
                    const query = route.query;
                    if (query) {
                        this.redirect = query.redirect
                        this.otherQuery = this.getOtherQuery(query)
                    }
                },
                immediate: true,
            }
        },
        methods: {
            goToRegister () {
                if( this.loginError ) {
                    // clear alert on location change
                    this.$store.dispatch('alert/clear');
                }
                this.$router.push({ path:  '/register' });
            },
            handleLogin () {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        const { username, password } = this;
                        if (username && password) {
                            this.$store.dispatch('account/login', {username, password})
                                .then(() => {
                                    this.$bus.$emit('logged', 'User logged');
                                    this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                                    this.submitted = false
                                }).catch(() => {
                                    this.submitted = false
                                    this.username = ''
                                    this.password = ''
                                })
                        }
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                });
            },
            showPwd() {
                if (this.passwordType === 'password') {
                    this.passwordType = ''
                } else {
                    this.passwordType = 'password'
                }
                this.$nextTick(() => {
                    this.$refs.password.focus()
                })
            },
            getOtherQuery(query) {
                return Object.keys(query).reduce((acc, cur) => {
                    if (cur !== 'redirect') {
                        acc[cur] = query[cur]
                    }
                    return acc
                }, {})
            },
            //--------------------------------------- for alert section --------------------------------
            changeHandler () {
                this.isCheckedAlert = !this.isCheckedAlert;

            },
            closeLoginInfo ()  {
                if (this.isCheckedAlert) {
                    this.$store.dispatch('notifications/Dismiss', this.alert);
                    this.showAlert = false;
                }
                else {
                    this.showAlert = true;
                }
            },
            getAlert() {
                this.alert = this.notifications.find( o => o.cname === this.cname );
                return this.alert !== undefined
            },
            checkAndShow () {
                // if notification is added
                if ( this.getAlert() ) {
                     return this.alert.show;
                } else {
                    // add notification
                    this.$store.dispatch('notifications/Added', {
                        cname: this.cname,
                        type: 'info',
                        icon:'icon fa fa-info',
                    }).then ( this.getAlert())
                    return this.alert.show;
                }
            },
            checkAppSettings () {
                let app = this.$store.getters.showLoginInfo;
                if (!app ) {
                    this.$store.dispatch( 'notifications/Removed', this.cname );
                }
                return app
            },
            goToForgot() {
                // todo
            }
        }
    }
</script>





