webpackJsonp([49],{1294:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(1413),a=e(1689),r=e(1),o=r(i.a,a.a,!1,null,null,null);s.default=o.exports},1318:function(t,s,e){"use strict";s.a={name:"socialAuthLinks",methods:{facebookHandleClick:function(t){alert("OK "+t)},googleHandleClick:function(t){alert("OK "+t)}}}},1327:function(t,s,e){"use strict";function i(t){e(1328)}var a=e(1318),r=e(1330),o=e(1),n=i,l=o(a.a,r.a,!1,n,"data-v-47f59064",null);s.a=l.exports},1328:function(t,s,e){var i=e(1329);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(1245)("58fb380e",i,!0,{})},1329:function(t,s,e){s=t.exports=e(1244)(!0),s.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"socialAuthLinks.vue",sourceRoot:""}])},1330:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("div",{staticClass:"social-auth-links text-center mb-3"},[e("p",[t._v("- OR -")]),t._v(" "),e("a",{staticClass:"btn btn-block btn-primary",attrs:{href:"javascript:void(0);"},on:{click:function(s){return t.facebookHandleClick("facebook")}}},[e("i",{staticClass:"fab fa-facebook mr-2"}),t._v(" Sign in using Facebook\n        ")]),t._v(" "),e("a",{staticClass:"btn btn-block btn-danger",attrs:{href:"javascript:void(0);"},on:{click:function(s){return t.googleHandleClick("googlePlus")}}},[e("i",{staticClass:"fab fa-google-plus mr-2"}),t._v(" Sign in using Google+\n        ")])])])},a=[],r={render:i,staticRenderFns:a};s.a=r},1413:function(t,s,e){"use strict";var i=e(68),a=e.n(i),r=e(8),o=e.n(r),n=e(14),l=e(550),c=e(1327);s.a={name:"login",components:{LangSelect:l.a,socialAuthLinks:c.a},data:function(){return{showLinks:!1,username:"",password:"",submitted:!1,passwordType:"password",redirect:void 0,otherQuery:{},isCheckedAlert:!1,showAlert:null,alert:null,cname:"loginAlert1",customStyle:{type:Object,default:function(){return{}}}}},mounted:function(){},computed:o()({},Object(n.c)(["notifications","alertSimple"]),{loggingIn:function(){return this.$store.getters.isloggingIn},loginError:function(){return this.$store.getters.isLoginError},showLoginInfo:function(){var t=this.checkAppSettings();return this.showAlert=this.checkAndShow(),t&&this.showAlert}}),watch:{$route:{handler:function(t){var s=t.query;s&&(this.redirect=s.redirect,this.otherQuery=this.getOtherQuery(s))},immediate:!0}},methods:{goToRegister:function(){this.loginError&&this.$store.dispatch("alert/clear"),this.$router.push({path:"/register"})},handleLogin:function(){var t=this;this.submitted=!0,this.$validator.validate().then(function(s){if(!s)return console.log("error submit!!"),!1;var e=t.username,i=t.password;e&&i&&t.$store.dispatch("account/login",{username:e,password:i}).then(function(){t.$bus.$emit("logged","User logged"),t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.submitted=!1}).catch(function(){t.submitted=!1,t.username="",t.password=""})})},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){t.$refs.password.focus()})},getOtherQuery:function(t){return a()(t).reduce(function(s,e){return"redirect"!==e&&(s[e]=t[e]),s},{})},changeHandler:function(){this.isCheckedAlert=!this.isCheckedAlert},closeLoginInfo:function(){this.isCheckedAlert?(this.$store.dispatch("notifications/Dismiss",this.alert),this.showAlert=!1):this.showAlert=!0},getAlert:function(){var t=this;return this.alert=this.notifications.find(function(s){return s.cname===t.cname}),void 0!==this.alert},checkAndShow:function(){return this.getAlert()?this.alert.show:(this.$store.dispatch("notifications/Added",{cname:this.cname,type:"info",icon:"icon fa fa-info",title:"Note!",note:{html:'<span>REGISTER User in auth-fake service in this App, OR use default username: "admin" <br> AND password: "admin1"</span>'}}).then(this.getAlert()),this.alert.show)},checkAppSettings:function(){var t=this.$store.getters.showLoginInfo;return t||this.$store.dispatch("notifications/Removed",this.cname),t},goToForgot:function(){}}}},1689:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("div",{staticClass:"login-page"},[e("div",{staticClass:"login-box"},[t.loginError?e("div",{class:"alert alert-"+t.alertSimple.type,attrs:{id:"loginErrorAlert"}},[t._v(t._s(t.alertSimple.message))]):t._e(),t._v(" "),t.showLoginInfo?e("va-alert",{attrs:{id:"loginInfoAlert",type:t.alert.type,dismissible:!0},on:{"alert-btn-click":t.closeLoginInfo}},[e("h5",{attrs:{slot:"header"},slot:"header"},[e("i",{class:t.alert.icon}),t._v(" "+t._s(t.alert.title)+" ")]),t._v(" "),e("div",{attrs:{slot:"body"},slot:"body"},[t.alert.note.html?e("div",{domProps:{innerHTML:t._s(t.alert.note.html)}}):e("div",[t._v(t._s(t.alert.note))]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"loginCheckbox1"},domProps:{value:t.isCheckedAlert},on:{change:t.changeHandler}}),e("br"),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"loginCheckbox1"}},[t._v("Don't show me again")])])])])]):t._e(),t._v(" "),e("div",{staticClass:"login-logo"},[e("a",{attrs:{href:"javascript:void(0);"}},[t._v("Vue-"),e("b",[t._v("Admin")]),t._v("LTE")])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body login-card-body"},[e("p",{staticClass:"login-box-msg"},[t._v("Sign in to start your session")]),t._v(" "),e("form",{ref:"loginForm",staticClass:"login",on:{submit:function(s){return s.preventDefault(),t.handleLogin(s)},keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.handleLogin(s)}}},[e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],ref:"username",staticClass:"form-control",class:{"is-invalid":t.submitted&&t.errors.has("username")},attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-user"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.submitted&&t.errors.has("username"),expression:"submitted && errors.has('username')"}],staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("username")))])]),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validate",rawName:"v-validate",value:{required:!0,min:6},expression:"{ required: true, min: 6 }"}],ref:"password",staticClass:"form-control",class:{"is-invalid":t.submitted&&t.errors.has("password")},attrs:{type:t.passwordType,name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),t._v(" "),e("div",{staticClass:"input-group-append input-group-text"},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:t.showPwd}},[e("span",{class:"password"===t.passwordType?"fas fa-lock":"fas fa-lock-open"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.submitted&&t.errors.has("password"),expression:"submitted && errors.has('password')"}],staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("password")))])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"}),t._v(" "),e("div",{staticClass:"col-3",style:{"text-align":"center"}},[e("i",{directives:[{name:"show",rawName:"v-show",value:t.loggingIn,expression:"loggingIn"}],staticClass:"el-icon-loading",style:{"font-size":"33px"}})]),t._v(" "),e("div",{staticClass:"col-5"},[e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",disabled:t.loggingIn}},[t._v("Login")])])])]),t._v(" "),t.showLinks?e("social-auth-links"):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("va-check-box",{attrs:{checkClass:"custom-control",id:"socialLinksCheckbox"},model:{value:t.showLinks,callback:function(s){t.showLinks=s},expression:"showLinks"}},[t._v("\n                        Social Links\n                    ")])],1)]),e("br"),t._v(" "),e("p",{staticClass:"mb-0"},[e("a",{staticClass:"text-center",attrs:{href:"javascript:void(0);"},on:{click:t.goToRegister}},[t._v("Register a new membership")])])],1)])],1)])])},a=[],r={render:i,staticRenderFns:a};s.a=r}});
//# sourceMappingURL=49.d4b5ae274d8b22b20a68.js.map