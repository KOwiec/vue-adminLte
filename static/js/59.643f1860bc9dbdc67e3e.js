webpackJsonp([59],{1299:function(n,e,t){"use strict";function i(n){t(1695)}Object.defineProperty(e,"__esModule",{value:!0});var A=t(1414),o=t(1698),a=t(1),r=i,l=a(A.a,o.a,!1,r,null,null);e.default=l.exports},1414:function(n,e,t){"use strict";e.a={data:function(){return{article:"",fullscreenLoading:!0}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var n=this;t.e(65).then(t.bind(null,1697)).then(function(e){var t=e.default.title;document.title=t,n.content=e.default,setTimeout(function(){n.fullscreenLoading=!1,n.$nextTick(function(){window.print()})},3e3)})}}}},1695:function(n,e,t){var i=t(1696);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(1245)("60627702",i,!0,{})},1696:function(n,e,t){e=n.exports=t(1244)(!0),e.push([n.i,'.main-article{padding:20px;margin:0 auto;display:block;width:740px;background:#fff}.article__heading{position:relative;padding:0 0 20px;overflow:hidden}.article__heading__title{display:block;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;word-wrap:break-word;overflow-wrap:break-word;font-size:32px;line-height:48px;font-weight:600;color:#333;overflow:hidden}.node-article-content{margin:20px 0 0;font-size:16px;color:#333;letter-spacing:.5px;line-height:28px;margin-bottom:30px;font-family:medium-content-serif-font,Georgia,Cambria,Times New Roman,Times,serif}.node-article-content:after,.node-article-content:before{display:table;content:"";clear:both}.node-article-content>:last-child{margin-bottom:0}.node-article-content b,.node-article-content strong{font-weight:inherit;font-weight:bolder}.node-article-content img{max-width:100%;display:block;margin:0 auto}.node-article-content p{font-weight:400;font-style:normal;font-size:21px;line-height:1.58;letter-spacing:-.003em}.node-article-content ul{margin-bottom:30px}.node-article-content li{--x-height-multiplier:0.375;--baseline-multiplier:0.17;letter-spacing:.01rem;font-weight:400;font-style:normal;font-size:21px;line-height:1.58;letter-spacing:-.003em;margin-left:30px;margin-bottom:14px}.node-article-content a{background-repeat:repeat-x;background-image:-webkit-gradient(linear,left top,right top,color-stop(100%,rgba(0,0,0,.84)),color-stop(0,transparent));background-image:linear-gradient(90deg,rgba(0,0,0,.84) 100%,transparent 0);background-size:1px 1px;background-position:0 calc(1em + 1px);padding:0 6px}.node-article-content code{background:rgba(0,0,0,.05);padding:3px 4px;margin:0 2px;font-size:16px;display:inline-block}.node-article-content img{border:0;-ms-interpolation-mode:bicubic}.node-article-content blockquote{--x-height-multiplier:0.375;--baseline-multiplier:0.17;font-family:medium-content-serif-font,Georgia,Cambria,Times New Roman,Times,serif;letter-spacing:.01rem;font-weight:400;font-style:italic;font-size:21px;line-height:1.58;letter-spacing:-.003em;border-left:3px solid rgba(0,0,0,.84);padding-left:20px;margin-left:-23px;padding-bottom:2px}.node-article-content a{text-decoration:none}.node-article-content h2,.node-article-content h3,.node-article-content h4{font-size:34px;line-height:1.15;letter-spacing:-.015em;margin:53px 0 0}.node-article-content h4{font-size:26px}',"",{version:3,sources:["E:/Github/vue-adminLte/src/views/pdf/download.vue"],names:[],mappings:"AACA,cACE,aAAc,AACd,cAAe,AACf,cAAe,AACf,YAAa,AACb,eAAiB,CAClB,AACD,kBACE,kBAAmB,AACnB,iBAAkB,AAClB,eAAiB,CAClB,AACD,yBACE,cAAe,AACf,oBAAqB,AACrB,4BAA6B,AAC7B,qBAAsB,AACtB,aAAc,AACd,qBAAsB,AACtB,yBAA0B,AAC1B,eAAgB,AAChB,iBAAkB,AAClB,gBAAiB,AACjB,WAAY,AACZ,eAAiB,CAClB,AACD,sBACE,gBAAiB,AACjB,eAAgB,AAChB,WAAY,AACZ,oBAAsB,AACtB,iBAAkB,AAClB,mBAAoB,AACpB,iFAA0F,CAE3F,AAMD,yDACI,cAAe,AACf,WAAY,AACZ,UAAY,CACf,AACD,kCACI,eAAiB,CACpB,AACD,qDAEI,oBAAqB,AACrB,kBAAoB,CACvB,AACD,0BACI,eAAgB,AAChB,cAAe,AACf,aAAe,CAClB,AACD,wBACI,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,iBAAkB,AAClB,sBAAwB,CAC3B,AACD,yBACI,kBAAoB,CACvB,AACD,yBACI,4BAA6B,AAC7B,2BAA4B,AAC5B,sBAAuB,AACvB,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,iBAAkB,AAClB,uBAAwB,AACxB,iBAAkB,AAClB,kBAAoB,CACvB,AACD,wBAEI,2BAA4B,AAC5B,wHAAwI,AACxI,2EAA0F,AAC1F,wBAAyB,AACzB,sCAAuC,AACvC,aAAe,CAClB,AACD,2BACI,2BAAgC,AAChC,gBAAiB,AACjB,aAAc,AACd,eAAgB,AAChB,oBAAsB,CACzB,AACD,0BACI,SAAU,AAGV,8BAAgC,CAFnC,AAID,iCACI,4BAA6B,AAC7B,2BAA4B,AAC5B,kFAA0F,AAC1F,sBAAuB,AACvB,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,iBAAkB,AAClB,uBAAwB,AACxB,sCAA2C,AAC3C,kBAAmB,AACnB,kBAAmB,AACnB,kBAAoB,CACvB,AACD,wBACI,oBAAsB,CACzB,AACD,2EAGI,eAAgB,AAChB,iBAAkB,AAClB,uBAAwB,AACxB,eAAiB,CACpB,AACD,yBACI,cAAgB,CACnB",file:"download.vue",sourcesContent:["\n.main-article {\n  padding: 20px;\n  margin: 0 auto;\n  display: block;\n  width: 740px;\n  background: #fff;\n}\n.article__heading {\n  position: relative;\n  padding: 0 0 20px;\n  overflow: hidden;\n}\n.article__heading__title {\n  display: block;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  font-size: 32px;\n  line-height: 48px;\n  font-weight: 600;\n  color: #333;\n  overflow: hidden;\n}\n.node-article-content {\n  margin: 20px 0 0;\n  font-size: 16px;\n  color: #333;\n  letter-spacing: 0.5px;\n  line-height: 28px;\n  margin-bottom: 30px;\n  font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\n  /*  IE6-7 */\n}\n.node-article-content:before {\n    display: table;\n    content: '';\n    clear: both;\n}\n.node-article-content:after {\n    display: table;\n    content: '';\n    clear: both;\n}\n.node-article-content > :last-child {\n    margin-bottom: 0;\n}\n.node-article-content b,\n  .node-article-content strong {\n    font-weight: inherit;\n    font-weight: bolder;\n}\n.node-article-content img {\n    max-width: 100%;\n    display: block;\n    margin: 0 auto;\n}\n.node-article-content p {\n    font-weight: 400;\n    font-style: normal;\n    font-size: 21px;\n    line-height: 1.58;\n    letter-spacing: -.003em;\n}\n.node-article-content ul {\n    margin-bottom: 30px;\n}\n.node-article-content li {\n    --x-height-multiplier: 0.375;\n    --baseline-multiplier: 0.17;\n    letter-spacing: .01rem;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 21px;\n    line-height: 1.58;\n    letter-spacing: -.003em;\n    margin-left: 30px;\n    margin-bottom: 14px;\n}\n.node-article-content a {\n    text-decoration: none;\n    background-repeat: repeat-x;\n    background-image: -webkit-gradient(linear, left top, right top, color-stop(100%, rgba(0, 0, 0, 0.84)), color-stop(0, rgba(0, 0, 0, 0)));\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.84) 100%, rgba(0, 0, 0, 0) 0);\n    background-size: 1px 1px;\n    background-position: 0 calc(1em + 1px);\n    padding: 0 6px;\n}\n.node-article-content code {\n    background: rgba(0, 0, 0, 0.05);\n    padding: 3px 4px;\n    margin: 0 2px;\n    font-size: 16px;\n    display: inline-block;\n}\n.node-article-content img {\n    border: 0;\n}\n.node-article-content img {\n    -ms-interpolation-mode: bicubic;\n}\n.node-article-content blockquote {\n    --x-height-multiplier: 0.375;\n    --baseline-multiplier: 0.17;\n    font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\n    letter-spacing: .01rem;\n    font-weight: 400;\n    font-style: italic;\n    font-size: 21px;\n    line-height: 1.58;\n    letter-spacing: -.003em;\n    border-left: 3px solid rgba(0, 0, 0, 0.84);\n    padding-left: 20px;\n    margin-left: -23px;\n    padding-bottom: 2px;\n}\n.node-article-content a {\n    text-decoration: none;\n}\n.node-article-content h2,\n  .node-article-content h3,\n  .node-article-content h4 {\n    font-size: 34px;\n    line-height: 1.15;\n    letter-spacing: -.015em;\n    margin: 53px 0 0;\n}\n.node-article-content h4 {\n    font-size: 26px;\n}\n"],sourceRoot:""}])},1698:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:n.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"main-article",attrs:{"element-loading-text":"Efforts to generate PDF"}},[t("div",{staticClass:"article__heading"},[t("div",{staticClass:"article__heading__title"},[n._v(" "+n._s(n.article.title))])]),n._v(" "),t("div",{staticStyle:{color:"#ccc"}},[n._v("\n    This place show info outside PDF file.\n  ")]),n._v(" "),t("div",{ref:"content",staticClass:"node-article-content",domProps:{innerHTML:n._s(n.article.content)}})])},A=[],o={render:i,staticRenderFns:A};e.a=o}});
//# sourceMappingURL=59.643f1860bc9dbdc67e3e.js.map