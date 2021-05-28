webpackJsonp([20],{1278:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1386),r=a(1618),i=a(1),s=i(n.a,r.a,!1,null,null,null);t.default=s.exports},1306:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(14),s=a(548);t.a={name:"ContentHeader",components:{Breadcrumb:s.a},props:{title:{type:String,default:""},theme:{type:String,default:"dark"},subTitle:{type:String,default:""},isBgColor:{type:Boolean,default:!1},isCustomHeader:{type:Boolean,default:!1}},computed:r()({},Object(i.c)(["showBreadcrumb","showPageHeader","layout","headerBg"]),{isTopNav:function(){return this.layout.TopNav},bgColor:function(){return this.isBgColor?"background-color: "+this.headerBg+" !important":""},textTheme:function(){return"text-"+this.theme}})}},1307:function(e,t,a){"use strict";function n(e){a(1308)}var r=a(1306),i=a(1310),s=a(1),o=n,l=s(r.a,i.a,!1,o,"data-v-814708de",null);t.a=l.exports},1308:function(e,t,a){var n=a(1309);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(1245)("5c048589",n,!0,{})},1309:function(e,t,a){t=e.exports=a(1244)(!0),t.push([e.i,".breadcrumb-container[data-v-814708de]{float:right}","",{version:3,sources:["E:/Github/vue-adminLte/src/layout/components/Content/ContentHeader.vue"],names:[],mappings:"AACA,uCACE,WAAa,CACd",file:"ContentHeader.vue",sourcesContent:["\n.breadcrumb-container[data-v-814708de] {\n  float: right;\n}\n"],sourceRoot:""}])},1310:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.showPageHeader?a("div",{staticClass:"content-header",style:e.bgColor},[a("div",{class:e.isTopNav?"container":"container-fluid"},[a("div",{staticClass:"row sm-2"},[a("div",{staticClass:"col-sm-6"},[a("h1",{staticClass:"m-0 ",class:e.textTheme},[e._v(e._s(e.title)+" "),a("small",{class:e.textTheme},[e._v(e._s(e.subTitle))])]),e._v(" "),e.isCustomHeader?e._t("headerLeft"):e._e()],2),e._v(" "),a("div",{staticClass:"col-sm-6"},[e.showBreadcrumb||e.isCustomHeader?e._e():a("breadcrumb",{staticClass:"breadcrumb-container",attrs:{separator:"",separatorClass:"el-icon-caret-right",isHeader:!0}}),e._v(" "),e.isCustomHeader?e._t("headerRight"):e._e()],2)])])]):e._e()])},r=[],i={render:n,staticRenderFns:r};t.a=i},1311:function(e,t,a){"use strict";t.a={name:"VaCardTable",data:function(){return{currentFilter:"",pageSize:12,currentPage:1}},props:{title:{type:String,default:""},theme:{type:String,default:""},id:{type:String},headers:{type:Array,required:!0},data:{type:Array,required:!0},sorted:{type:Boolean,default:!1},isPagination:{type:Boolean,default:!1},filteredColumn:{type:String},width:{type:String,default:""},height:{type:String,default:""},alignTools:{type:Boolean,default:!1}},created:function(){var e=this;"hover"===this.theme&&this.data.forEach(function(t){e.$set(t,"hover",!1)})},computed:{placeholder:function(){return this.filteredColumn?"Search "+this.filteredColumn:"Search"},pagination:function(){return this.alignTools?"card-tools":""}},methods:{getHeight:function(e){return""!==e?"height: "+e+"px;":""},onPageChange:function(e){this.currentPage=e}}}},1314:function(e,t,a){"use strict";function n(e){a(1315)}var r=a(1311),i=a(1317),s=a(1),o=n,l=s(r.a,i.a,!1,o,null,null);t.a=l.exports},1315:function(e,t,a){var n=a(1316);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(1245)("36b162ac",n,!0,{})},1316:function(e,t,a){t=e.exports=a(1244)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"CardTable.vue",sourceRoot:""}])},1317:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card",attrs:{id:e.id}},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[e._v(e._s(e.title))]),e._v(" "),a("div",{staticClass:"input-group input-group-sm float-right",staticStyle:{width:"180px","padding-left":"30px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentFilter,expression:"currentFilter"}],staticClass:"form-control float-right",attrs:{type:"search",name:"table_search",placeholder:e.placeholder},domProps:{value:e.currentFilter},on:{input:function(t){t.target.composing||(e.currentFilter=t.target.value)}}}),e._v(" "),e._m(0)]),e._v(" "),e.isPagination?a("div",{class:e.pagination},[a("va-pagination",{attrs:{isBtnPagination:!1,isPagination:!1,isPrevNext:!1,data:e.data,pageSize:e.pageSize},on:{"new-page":e.onPageChange}})],1):e._e()]),e._v(" "),a("div",{staticClass:"card-body table-responsive p-0",style:e.getHeight(e.height)},[a("va-table",{attrs:{theme:e.theme,data:e.data,headers:e.headers,sorted:e.sorted,filtered:e.filteredColumn,currentFilter:e.currentFilter,currentPage:e.currentPage,pageSize:e.pageSize,pagination:e.isPagination}})],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[a("i",{staticClass:"fas fa-search"})])])}],i={render:n,staticRenderFns:r};t.a=i},1386:function(e,t,a){"use strict";var n=a(1307),r=a(1314),i=a(91),s=a(179),o=a.n(s),l=i.a.FAKER_BASE_URL+i.a.PEOPLE_PREFIX,c=i.a.FAKER_BASE_URL+i.a.PRODUCT_PREFIX;t.a={name:"APIFaker",components:{ContentHeader:n.a,CardTable:r.a},data:function(){return{headers:[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Department",value:"department"}],headers2:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Color",value:"color"},{text:"Department",value:"department"},{text:"Price",value:"price"},{text:"Adjective",value:"adjective"},{text:"Material",value:"material"},{text:"Product",value:"product"}],peopleLoading:!0,productsLoading:!0,people:[],products:[]}},created:function(){this.getAllPeople(l),this.getAllProducts(c)},methods:{getAllProducts:function(e){var t=this;o.a.get(e).then(function(e){t.products=e.data,t.productsLoading=!1}).catch(function(e){return console.log(e)})},getAllPeople:function(e){var t=this;fetch(e).then(function(e){return e.json()}).then(function(e){t.people=e,t.peopleLoading=!1})}}}},1618:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[a("content-header",{attrs:{title:"API Example 2",subTitle:"(json-server)"}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("va-callout",{attrs:{type:"info",title:"Note!",icon:"fa fa-info"}},[a("div",{staticClass:"attachment-block",attrs:{slot:"calloutText"},slot:"calloutText"},[e._v("\n                    Instructions for how we use JSON Server:\n                    "),a("ul",[a("li",[e._v("if script name 'dev' or 'start' in package.json is running, stop it (Ctr+c) ")]),e._v(" "),a("li",[e._v("in package.json is script name 'start-both' for this example. In terminal write 'npm run start-both'")]),e._v(" "),a("li",[e._v("It will open a instance for each command and process - start http://localhost:8080 and http://localhost:3000")]),e._v(" "),a("li",[e._v("now we have access by webpack-dev-server to our data in JSON server (see: BACKEND-fake/faker-server/db.json)")]),e._v(" "),a("li",[e._v("see: config/index.js - proxyTable in dev property")])])]),e._v(" "),a("div",{attrs:{slot:"calloutText"},slot:"calloutText"},[a("div",{staticClass:"attachment-block"},[e._v("\n                       Documentation:\n                       "),a("a",{staticClass:"text-success",attrs:{href:"https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html",target:"_blank"}},[e._v("Faker")]),e._v(" - AND -\n                       "),a("a",{staticClass:"text-success",attrs:{href:"https://github.com/typicode/json-server",target:"_blank"}},[e._v(" JSON Server ")]),e._v(" - AND -\n                       "),a("a",{staticClass:"text-success",attrs:{href:"http://vuejs-templates.github.io/webpack/proxy.html",target:"_blank"}},[e._v(" API Proxy")])])])]),e._v(" "),a("card-table",{directives:[{name:"loading",rawName:"v-loading",value:e.peopleLoading,expression:"peopleLoading"}],attrs:{"element-loading-text":"Loading...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.3)",title:"Faker People Table",theme:"fixed",height:"400",sorted:!0,isPagination:!0,filteredColumn:"name",headers:e.headers,data:e.people}}),e._v(" "),a("br"),e._v(" "),a("card-table",{directives:[{name:"loading",rawName:"v-loading",value:e.productsLoading,expression:"productsLoading"}],attrs:{"element-loading-text":"Loading...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.3)",title:"Faker Products Table",theme:"fixed",height:"400",sorted:!0,isPagination:!0,filteredColumn:"name",headers:e.headers2,data:e.products}})],1),e._v(" "),a("br")])],1)},r=[],i={render:n,staticRenderFns:r};t.a=i}});
//# sourceMappingURL=20.912f649b6ab52749d64e.js.map