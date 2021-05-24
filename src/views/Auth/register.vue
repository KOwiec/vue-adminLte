<template>
    <transition name="fade" mode="out-in">
        <div class="login-page">
          <div class="register-box">

              <!-- simple alert for register error -->
             <div v-if="registerError" id="registerErrorAlert" :class="`alert alert-${alertSimple.type}`">{{alertSimple.message}}</div>

             <div class="register-logo">
                 <a href="javascript:void(0);">Vue-<b>Admin</b>LTE</a>
             </div>

             <div class="card">
                <div class="card-body register-card-body">
                    <p class="login-box-msg">Register a new membership</p>

                    <form @submit.prevent="handleRegister" @keyup.enter="handleRegister">
                        <div class="input-group mb-3">
                            <input type="text" v-model="user.firstName" v-validate="'required'" ref="firstName" name="firstName" placeholder="First Name"
                                   class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                     <span class="fas fa-user"></span>
                                </div>
                            </div>
                            <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
                        </div>

                        <div class="input-group mb-3">
                            <input type="text" v-model="user.lastName" v-validate="'required'" ref="lastName" name="lastName" placeholder="Last Name"
                                   class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                     <span class="fas fa-user"></span>
                                </div>
                            </div>
                            <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
                        </div>

                        <div class="input-group mb-3">
                            <input type="text"  v-model="user.username" v-validate="'required'" ref="username" name="username" placeholder="Username"
                                   class="form-control" :class="{ 'is-invalid': submitted && errors.has('username') }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-user"></span>
                                </div>
                            </div>
                            <div v-if="submitted && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>
                        </div>

                        <div class="input-group mb-3">
                            <input type="email" v-model="user.email" v-validate="'required|email'" ref="email" name="email" placeholder="Email"
                                   class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                            <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                        </div>

                        <div class="input-group mb-3">
                            <input :type="passwordType"
                                   ref="password"
                                   v-model.trim="user.password"
                                   v-validate="{ required: true, min: 6, is: confirmPassword }"
                                   name="password"
                                   placeholder="Password"
                                   class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>

                            <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                        </div>

                        <div class="input-group mb-3">
                            <input :type="passwordType"
                                   ref="confirmed"
                                   v-model.trim="confirmPassword"
                                   v-validate="{ required: true }"
                                   name="confirmed"
                                   placeholder="Retype password"
                                   class="form-control" :class="{ 'is-invalid': submitted && errors.has('confirmed') }">
                            <div class="input-group-append input-group-text">
                                <a href="javascript:void(0);" @click="showPwd">
                                        <span :class="passwordType === 'password' ? 'fas fa-lock' : 'fas fa-lock-open'" ></span>
                                </a>
                            </div>
                            <div v-if="submitted && errors.has('confirmed')" class="invalid-feedback">{{ errors.first('confirmed') }}</div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <!-- optional terms
                                <div class="icheck-primary">
                                    <input type="checkbox" id="agreeTerms" name="terms"  v-model="agree">
                                    <label for="agreeTerms">
                                       I agree to the <a href="#">terms</a>
                                    </label>
                                </div>--->
                            </div>
                            <div class="col-3" :style="{'text-align': 'center'}">
                                <i v-show="registering" class="el-icon-loading" :style="{ 'font-size': '33px' }"></i>
                                <!-- second option <img v-show="registering" class="register-img" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />-->
                            </div>
                            <div class="col-5">
                                <button type="submit" class="btn btn-primary btn-block" :disabled="registering">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>

                    <social-auth-links v-if="showLinks"/>
                    <!-- social links component -->
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

                    <a href="javascript:void(0);" class="text-center" @click="goToLogin">I already have a membership</a>
                </div>
            </div>
          </div>
        </div>
    </transition>

</template>

<script>
    import {  mapGetters, mapActions } from 'vuex'
    import socialAuthLinks from './components/socialAuthLinks.vue'

    export default {
        name: "register",
        components: { socialAuthLinks },
        data(){
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: '',
                    email: ''
                },
                submitted: false,
                confirmPassword: '',
                passwordType: 'password',
                showLinks: false
            }
        },
        mounted() {
            this.$refs.firstName.focus()
        },
        computed: {
            ...mapGetters([ 'alertSimple' ]),

            registering () {
                return this.$store.getters.isRegistering;
            },
            registered () {
                return this.$store.getters.isRegistered;
            },
            registerError () {
                return this.$store.getters.isRegisterError;
            },
        },
        methods: {
            ...mapActions({
                clearAlert: 'alert/clear'
            }),

            clearData () {
                this.user.firstName = '';
                this.user.username = '';
                this.user.lastName = '';
                this.user.password = '';
                this.user.email = '';
                this.confirmPassword = ''
            },

            goToLogin () {
                if (this.registerError ) {
                    // clear alert on location change
                    this.clearAlert();
                }
                this.$router.push({ path:  '/login' })
            },

            handleRegister() {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.$store.dispatch('account/register', this.user)
                            .then(() => {
                                this.$router.push({ path: '/login' });
                                this.submitted = false;
                            }).catch(() => {
                                 this.submitted = false;
                        })
                    } else {
                        console.log('error register submit!!');
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
                    this.$refs.confirmed.focus()
                })
            },
        }
    }
</script>


