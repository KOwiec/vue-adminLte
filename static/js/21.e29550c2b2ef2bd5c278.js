webpackJsonp([21],{1259:function(t,a,e){"use strict";function r(t){e(1494)}Object.defineProperty(a,"__esModule",{value:!0});var o=e(1349),s=e(1498),n=e(1),i=r,c=n(o.a,s.a,!1,i,null,null);a.default=c.exports},1306:function(t,a,e){"use strict";var r=e(8),o=e.n(r),s=e(14),n=e(548);a.a={name:"ContentHeader",components:{Breadcrumb:n.a},props:{title:{type:String,default:""},theme:{type:String,default:"dark"},subTitle:{type:String,default:""},isBgColor:{type:Boolean,default:!1},isCustomHeader:{type:Boolean,default:!1}},computed:o()({},Object(s.c)(["showBreadcrumb","showPageHeader","layout","headerBg"]),{isTopNav:function(){return this.layout.TopNav},bgColor:function(){return this.isBgColor?"background-color: "+this.headerBg+" !important":""},textTheme:function(){return"text-"+this.theme}})}},1307:function(t,a,e){"use strict";function r(t){e(1308)}var o=e(1306),s=e(1310),n=e(1),i=r,c=n(o.a,s.a,!1,i,"data-v-814708de",null);a.a=c.exports},1308:function(t,a,e){var r=e(1309);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(1245)("5c048589",r,!0,{})},1309:function(t,a,e){a=t.exports=e(1244)(!0),a.push([t.i,".breadcrumb-container[data-v-814708de]{float:right}","",{version:3,sources:["E:/Github/vue-adminLte/src/layout/components/Content/ContentHeader.vue"],names:[],mappings:"AACA,uCACE,WAAa,CACd",file:"ContentHeader.vue",sourcesContent:["\n.breadcrumb-container[data-v-814708de] {\n  float: right;\n}\n"],sourceRoot:""}])},1310:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showPageHeader?e("div",{staticClass:"content-header",style:t.bgColor},[e("div",{class:t.isTopNav?"container":"container-fluid"},[e("div",{staticClass:"row sm-2"},[e("div",{staticClass:"col-sm-6"},[e("h1",{staticClass:"m-0 ",class:t.textTheme},[t._v(t._s(t.title)+" "),e("small",{class:t.textTheme},[t._v(t._s(t.subTitle))])]),t._v(" "),t.isCustomHeader?t._t("headerLeft"):t._e()],2),t._v(" "),e("div",{staticClass:"col-sm-6"},[t.showBreadcrumb||t.isCustomHeader?t._e():e("breadcrumb",{staticClass:"breadcrumb-container",attrs:{separator:"",separatorClass:"el-icon-caret-right",isHeader:!0}}),t._v(" "),t.isCustomHeader?t._t("headerRight"):t._e()],2)])])]):t._e()])},o=[],s={render:r,staticRenderFns:o};a.a=s},1349:function(t,a,e){"use strict";var r=e(1307),o=e(1496);a.a={name:"ChartjsComp",components:{ContentHeader:r.a,ChartJs:o.a},data:function(){return{chartConfig:{type:"pie",data:{labels:["HTML","JavaScript","CSS"],datasets:[{data:[56.6,37.7,4.1],backgroundColor:["#00a65a","#f39c12","#00c0ef"],hoverBackgroundColor:["#00a65a","#f39c12","#00c0ef"]}]},options:{responsive:!0,maintainAspectRatio:!this.isMobile,legend:{position:"bottom",display:!0}}},lineChartConfig:{type:"line",data:{datasets:[{label:"Scatter Dataset",data:[{x:-10,y:0},{x:0,y:10},{x:10,y:5}]}]},options:{scales:{xAxes:[{type:"linear",position:"bottom"}]}}},barChartConfig:{type:"bar",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,data:[65,59,80,81,56,55,40]}]},options:{scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}},radarChartConfig:{type:"radar",data:{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},options:{scale:{reverse:!0,ticks:{beginAtZero:!0}}}},polarAreaChartConfig:{type:"polarArea",data:{datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},options:{elements:{arc:{borderColor:"#000000"}}}},doughnutChartConfig:{type:"doughnut",data:{labels:["Red","Blue","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},options:{animation:{animateScale:!0}}},bubbleChartConfig:{type:"bubble",data:{datasets:[{label:"First Dataset",data:[{x:20,y:30,r:15},{x:40,y:10,r:10}],backgroundColor:"#FF6384",hoverBackgroundColor:"#FF6384"}]},options:{elements:{points:{borderWidth:1,borderColor:"rgb(0, 0, 0)"}}}}}}}},1350:function(t,a,e){"use strict";var r=e(68),o=e.n(r);a.a={name:"VaChart",props:{"chart-config":{type:Object,validator:function(t){var a=o()(t);return a.includes("type")?!!a.includes("data")||(console.error("[Chart.js] Object must has data (key)"),!1):(console.error("[Chart.js] Object must has type (key)"),!1)}}},mounted:function(){var t=this.$el.getContext("2d"),a=this.chartConfig;new Chart(t,a)}}},1494:function(t,a,e){var r=e(1495);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(1245)("071bcf8e",r,!0,{})},1495:function(t,a,e){a=t.exports=e(1244)(!0),a.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"ChartjsComp.vue",sourceRoot:""}])},1496:function(t,a,e){"use strict";var r=e(1350),o=e(1497),s=e(1),n=s(r.a,o.a,!1,null,null,null);a.a=n.exports},1497:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement;return(t._self._c||a)("canvas")},o=[],s={render:r,staticRenderFns:o};a.a=s},1498:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"content"},[e("content-header",{attrs:{title:"ChartJS ",subTitle:"(Vue Component)"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("va-card",{attrs:{theme:"default",title:"Charts 1",widgetSet:"+max"}},[e("div",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"col-md-4"},[e("p",{staticClass:"text-center"},[e("strong",[t._v("Web Traffic Overview")])]),t._v(" "),e("chart-js",{attrs:{"chart-config":t.chartConfig}})],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("p",{staticClass:"text-center"},[e("strong",[t._v("Test Line Chart")])]),t._v(" "),e("chart-js",{attrs:{"chart-config":t.lineChartConfig}})],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("p",{staticClass:"text-center"},[e("strong",[t._v("Test Bar Chart")])]),t._v(" "),e("chart-js",{attrs:{"chart-config":t.barChartConfig}})],1)])]),t._v(" "),e("va-card",{attrs:{theme:"default",title:"Charts 2",widgetSet:"+max"}},[e("div",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"col-md-4"},[e("p",{staticClass:"text-center"},[e("strong",[t._v("Test Radar Chart")])]),t._v(" "),e("chart-js",{attrs:{"chart-config":t.radarChartConfig}})],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("p",{staticClass:"text-center"},[e("strong",[t._v("Test Polar Area Chart")])]),t._v(" "),e("chart-js",{attrs:{"chart-config":t.polarAreaChartConfig}})],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("p",{staticClass:"text-center"},[e("strong",[t._v("Test Doughnut Chart")])]),t._v(" "),e("chart-js",{attrs:{"chart-config":t.doughnutChartConfig}})],1)])]),t._v(" "),e("va-card",{attrs:{theme:"default",title:"Charts 3",widgetSet:"+max"}},[e("div",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"col-md-4"},[e("p",{staticClass:"text-center"},[e("strong",[t._v("Test Bubble Chart")])]),t._v(" "),e("chart-js",{attrs:{"chart-config":t.bubbleChartConfig}})],1)])]),t._v(" "),e("br")],1)])],1)},o=[],s={render:r,staticRenderFns:o};a.a=s}});
//# sourceMappingURL=21.e29550c2b2ef2bd5c278.js.map