(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{172:function(e,t,n){"use strict";var o=n(1),r=n(2),s=n(53),i=n(6),a=n(18),l=n(15),c=n(71),p=n(109),u=n(54),d=n(3),m=n(110),h=d("isConcatSpreadable"),f=m>=51||!r((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),v=u("concat"),g=function(e){if(!i(e))return!1;var t=e[h];return void 0!==t?!!t:s(e)};o({target:"Array",proto:!0,forced:!f||!v},{concat:function(e){var t,n,o,r,s,i=a(this),u=p(i,0),d=0;for(t=-1,o=arguments.length;t<o;t++)if(s=-1===t?i:arguments[t],g(s)){if(d+(r=l(s.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,d++)n in s&&c(u,d,s[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(u,d++,s)}return u.length=d,u}})},183:function(e,t,n){},258:function(e,t,n){"use strict";t.__esModule=!0;var o=n(259);t.getParameters=o.getParameters},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(260);t.getParameters=function(e){return t=JSON.stringify(e),o.compressToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var t}},260:function(e,t,n){var o,r=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={};function r(e,t){if(!o[e]){o[e]={};for(var n=0;n<e.length;n++)o[e][e.charAt(n)]=n}return o[e][t]}var s={compressToBase64:function(e){if(null==e)return"";var n=s._compress(e,6,(function(e){return t.charAt(e)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:s._decompress(e.length,32,(function(n){return r(t,e.charAt(n))}))},compressToUTF16:function(t){return null==t?"":s._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:s._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=s.compress(e),n=new Uint8Array(2*t.length),o=0,r=t.length;o<r;o++){var i=t.charCodeAt(o);n[2*o]=i>>>8,n[2*o+1]=i%256}return n},decompressFromUint8Array:function(t){if(null==t)return s.decompress(t);for(var n=new Array(t.length/2),o=0,r=n.length;o<r;o++)n[o]=256*t[2*o]+t[2*o+1];var i=[];return n.forEach((function(t){i.push(e(t))})),s.decompress(i.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":s._compress(e,6,(function(e){return n.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),s._decompress(e.length,32,(function(t){return r(n,e.charAt(t))})))},compress:function(t){return s._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,n){if(null==e)return"";var o,r,s,i={},a={},l="",c="",p="",u=2,d=3,m=2,h=[],f=0,v=0;for(s=0;s<e.length;s+=1)if(l=e.charAt(s),Object.prototype.hasOwnProperty.call(i,l)||(i[l]=d++,a[l]=!0),c=p+l,Object.prototype.hasOwnProperty.call(i,c))p=c;else{if(Object.prototype.hasOwnProperty.call(a,p)){if(p.charCodeAt(0)<256){for(o=0;o<m;o++)f<<=1,v==t-1?(v=0,h.push(n(f)),f=0):v++;for(r=p.charCodeAt(0),o=0;o<8;o++)f=f<<1|1&r,v==t-1?(v=0,h.push(n(f)),f=0):v++,r>>=1}else{for(r=1,o=0;o<m;o++)f=f<<1|r,v==t-1?(v=0,h.push(n(f)),f=0):v++,r=0;for(r=p.charCodeAt(0),o=0;o<16;o++)f=f<<1|1&r,v==t-1?(v=0,h.push(n(f)),f=0):v++,r>>=1}0==--u&&(u=Math.pow(2,m),m++),delete a[p]}else for(r=i[p],o=0;o<m;o++)f=f<<1|1&r,v==t-1?(v=0,h.push(n(f)),f=0):v++,r>>=1;0==--u&&(u=Math.pow(2,m),m++),i[c]=d++,p=String(l)}if(""!==p){if(Object.prototype.hasOwnProperty.call(a,p)){if(p.charCodeAt(0)<256){for(o=0;o<m;o++)f<<=1,v==t-1?(v=0,h.push(n(f)),f=0):v++;for(r=p.charCodeAt(0),o=0;o<8;o++)f=f<<1|1&r,v==t-1?(v=0,h.push(n(f)),f=0):v++,r>>=1}else{for(r=1,o=0;o<m;o++)f=f<<1|r,v==t-1?(v=0,h.push(n(f)),f=0):v++,r=0;for(r=p.charCodeAt(0),o=0;o<16;o++)f=f<<1|1&r,v==t-1?(v=0,h.push(n(f)),f=0):v++,r>>=1}0==--u&&(u=Math.pow(2,m),m++),delete a[p]}else for(r=i[p],o=0;o<m;o++)f=f<<1|1&r,v==t-1?(v=0,h.push(n(f)),f=0):v++,r>>=1;0==--u&&(u=Math.pow(2,m),m++)}for(r=2,o=0;o<m;o++)f=f<<1|1&r,v==t-1?(v=0,h.push(n(f)),f=0):v++,r>>=1;for(;;){if(f<<=1,v==t-1){h.push(n(f));break}v++}return h.join("")},decompress:function(e){return null==e?"":""==e?null:s._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,n,o){var r,s,i,a,l,c,p,u=[],d=4,m=4,h=3,f="",v=[],g={val:o(0),position:n,index:1};for(r=0;r<3;r+=1)u[r]=r;for(i=0,l=Math.pow(2,2),c=1;c!=l;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),i|=(a>0?1:0)*c,c<<=1;switch(i){case 0:for(i=0,l=Math.pow(2,8),c=1;c!=l;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),i|=(a>0?1:0)*c,c<<=1;p=e(i);break;case 1:for(i=0,l=Math.pow(2,16),c=1;c!=l;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),i|=(a>0?1:0)*c,c<<=1;p=e(i);break;case 2:return""}for(u[3]=p,s=p,v.push(p);;){if(g.index>t)return"";for(i=0,l=Math.pow(2,h),c=1;c!=l;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),i|=(a>0?1:0)*c,c<<=1;switch(p=i){case 0:for(i=0,l=Math.pow(2,8),c=1;c!=l;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),i|=(a>0?1:0)*c,c<<=1;u[m++]=e(i),p=m-1,d--;break;case 1:for(i=0,l=Math.pow(2,16),c=1;c!=l;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),i|=(a>0?1:0)*c,c<<=1;u[m++]=e(i),p=m-1,d--;break;case 2:return v.join("")}if(0==d&&(d=Math.pow(2,h),h++),u[p])f=u[p];else{if(p!==m)return null;f=s+s.charAt(0)}v.push(f),u[m++]=s+f.charAt(0),s=f,0==--d&&(d=Math.pow(2,h),h++)}}};return s}();void 0===(o=function(){return r}.call(t,n,t,e))||(e.exports=o)},261:function(e,t,n){"use strict";var o,r=(o=n(122))&&"object"==typeof o&&"default"in o?o.default:o;function s(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])e[n]=arguments[t][n];return e}var i={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(e,t){var n=t.props.code||(t.children&&t.children.length>0?t.children[0].text:""),o=t.props.inline,i=t.props.language,a=r.languages[i],l="language-".concat(i);return o?e("code",s({},t.data,{class:[t.data.class,l],domProps:s({},t.data.domProps,{innerHTML:r.highlight(n,a)})})):e("pre",s({},t.data,{class:[t.data.class,l]}),[e("code",{class:l,domProps:{innerHTML:r.highlight(n,a)}})])}};e.exports=i},262:function(e,t,n){"use strict";var o=n(183);n.n(o).a},266:function(e,t,n){"use strict";n.r(t);n(172),n(40),n(19),n(22);var o=n(258),r=n(261),s={name:"previewer",components:{Prism:n.n(r).a},props:{name:{type:String,required:!0},preview:{type:String,default:""},html:{type:String,default:""},es5Js:{type:String,default:""},modernJs:{type:String,default:""},css:{type:String,default:""},htmlDisabled:{type:Boolean,default:!1},jsDisabled:{type:Boolean,default:!1},cssDisabled:{type:Boolean,default:!1},htmlOnly:{type:Boolean,default:!1},jsOnly:{type:Boolean,default:!1},cssOnly:{type:Boolean,default:!1},resultDisabled:{type:Boolean,default:!1},resultOnly:{type:Boolean,default:!1},playgroundOnly:{type:Boolean,default:!1}},data:function(){return{displayPreview:!0,displayCode:!1,showCopySuccess:!1,url:"",renderComponent:!0}},computed:{langVariants:function(){return{html:{default:this.unsanitize(this.html)},js:{es5:this.unsanitize(this.es5Js),modern:this.unsanitize(this.modernJs)},css:{default:this.unsanitize(this.css)}}},blocks:function(){return{html:this.formatDirectives(this.langVariants.html.default),js:this.formatDirectives(this.langVariants.js.es5),css:this.langVariants.css.default}},code:function(){return"<template>\n".concat(this.blocks.html,"\n</template>\n\n<script>\n").concat(this.blocks.js,"\n<\/script>")},compatBlocks:function(){return{html:this.langVariants.html.default,js:this.langVariants.js.es5,css:this.langVariants.css.default}},shouldRenderResult:function(){return!(this.resultDisabled||this.htmlOnly||this.jsOnly||this.cssOnly)},resultIFrameHtml:function(){var e=document.createElement("iframe");return e.srcdoc="\n        <!DOCTYPE html>\n        <body>\n          ".concat(this.blocks.html,'\n          <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n          <script>').concat(this.blocks.js,"<\/script>\n          <script>\n            (function(){\n              var appNum = 1\n              if (app instanceof Vue) {\n                while(window.parent.window['app' + appNum] != null) {\n                  appNum += 1\n                }\n                window.parent.window['app' + appNum] = app\n                var appNoticeEl = document.createElement('div')\n                appNoticeEl.style = 'position:fixed;top:0;right:0'\n                appNoticeEl.textContent = 'app' + appNum\n                document.body.appendChild(appNoticeEl)\n              }\n            })()\n          <\/script>\n          <style>\n            ").concat(this.blocks.css,"\n          </style>\n        </body>\n      "),e.name=this.name,e.outerHTML}},methods:{unsanitize:function(e){return e.replace(/&quot;/g,'"').replace(/\[\[/g,"{{").replace(/\]\]/g,"}}")},formatDirectives:function(e){return e.replace(/\bv-bind:\b/g,":").replace(/\bv-on:\b/g,"@")},copyCode:function(){var e=this;this.$copy(this.code).then((function(){e.showCopySuccess=!0,setTimeout((function(){e.showCopySuccess=!1}),2e3)}))},reloadExample:function(){var e=this;this.renderComponent=!1,this.$nextTick((function(){e.renderComponent=!0}))},openCodePen:function(){var e=document.createElement("form");e.method="POST",e.action="https://codepen.io/pen/define",e.target="_blank";var t=document.createElement("input");t.type="hidden",t.name="data",t.value=JSON.stringify({title:"Vue Batteries: ".concat(this.name),editors:"".concat(this.blocks.html?1:0).concat(this.blocks.css?1:0).concat(this.blocks.js?1:0),private:!0,html:this.blocks.html,js_external:["https://cdn.jsdelivr.net/npm/vue/dist/vue.js"],js:this.blocks.js,css:this.blocks.css,css_prefix:"autoprefixer",css_external:["https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.1.2/tailwind.min.css"]}),e.appendChild(t),document.body.appendChild(e),e.submit(),e.parentNode.removeChild(e)},openCodeSandboxIO:function(){var e=document.createElement("form");e.method="POST",e.action="https://codesandbox.io/api/v1/sandboxes/define",e.target="_blank";var t=document.createElement("input");t.type="hidden",t.name="parameters",t.value=Object(o.getParameters)({files:{"package.json":{content:{dependencies:{vue:"latest","@vue/composition-api":"latest",tailwindcss:"latest","@tailwindcss/custom-forms":"latest",autoprefixer:"latest"},devDependencies:{"@vue/cli-plugin-eslint":"4.1.1","@vue/cli-service":"4.1.1","babel-eslint":"^10.0.3",eslint:"^6.7.2","eslint-plugin-vue":"^6.0.1","vue-template-compiler":"^2.6.11"},eslintConfig:{root:!0,env:{node:!0},extends:["plugin:vue/essential","eslint:recommended"],rules:{},parserOptions:{parser:"babel-eslint"}}}},"tailwind.config.js":{content:"module.exports = {\n  theme: {\n    extend: {}\n  },\n  variants: {},\n  plugins: [require('@tailwindcss/custom-forms')]\n}"},"main.js":{content:'import Vue from "vue";\nimport App from "./App.vue";\nimport VueCompositionApi from \'@vue/composition-api\'\nimport \'./tailwind.css\'\n// TODO: add vue batteries use plugin\nVue.use(VueCompositionApi)\nVue.config.productionTip = false;\n\nnew Vue({\n  render: h => h(App)\n}).$mount("#app");\n'},"App.vue":{content:"<template>\n              ".concat(this.blocks.html,"\n              </template>\n              ")},"index.html":{content:'<!DOCTYPE html>\n                        <html lang="en">\n                          <head>\n                            <meta charset="utf-8">\n                            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n                            <meta name="viewport" content="width=device-width,initial-scale=1.0">\n                            <title>'.concat(this.name," | CodeSandbox</title>\n                          </head>\n                          <body>\n                            <noscript>\n                              <strong>We're sorry but codesandbox doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>\n                            </noscript>\n                            <div id=\"app\"></div>\n                            \x3c!-- built files will be auto injected --\x3e\n                          </body>\n                        </html>")},"tailwind.css":{content:"\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"},"postcss.config.js":{content:"module.exports = {\n  plugins: [\n    require('tailwindcss'),\n    require('autoprefixer')\n  ]\n}"}}}),e.appendChild(t),document.body.appendChild(e),e.submit(),e.parentNode.removeChild(e)}}},i=(n(262),n(0)),a=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-4 border border-gray-300 rounded-md tailwind-preflight"},[n("div",{staticClass:"flex items-center justify-between px-4 py-2 border-b border-gray-300"},[n("div",[n("p",{staticClass:"inline-flex font-semibold leading-normal text-gray-800"},[e._t("title",[e._v("Demo title")])],2),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.showCopySuccess,expression:"showCopySuccess"}],staticClass:"inline-flex ml-2 text-sm font-semibold leading-normal transition duration-700 ease-in-out text-vuepress"},[e._v("\n        Copié !\n      ")])]),e._v(" "),n("div",{staticClass:"flex items-center justify-end"},[n("CellIcon",{staticClass:"w-5 h-5 ml-2 text-gray-500 cursor-pointer hover:text-vuepress",attrs:{name:"reload"},on:{click:e.reloadExample}}),e._v(" "),n("button",{staticClass:"inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer hover:bg-gray-300 hover:text-vuepress focus:outline-none active:bg-gray-300",class:{"bg-gray-300 text-vuepress":e.displayPreview},attrs:{type:"button"},on:{click:function(t){e.displayPreview=!e.displayPreview}}},[e._v("\n        Preview\n      ")]),e._v(" "),n("button",{staticClass:"inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer hover:bg-gray-300 hover:text-vuepress focus:outline-none active:bg-gray-300",class:{"bg-gray-300 text-vuepress":e.displayCode},attrs:{type:"button"},on:{click:function(t){e.displayCode=!e.displayCode}}},[e._v("\n        Code\n      ")]),e._v(" "),n("CellIcon",{staticClass:"w-5 h-5 ml-2 text-gray-500 cursor-pointer hover:text-vuepress",attrs:{name:"clipboard-file"},on:{click:e.copyCode}}),e._v(" "),n("CellIcon",{staticClass:"w-5 h-5 ml-2 text-gray-500 cursor-pointer hover:text-vuepress",attrs:{name:"codepen","view-box":"0 0 32 32"},on:{click:e.openCodePen}}),e._v(" "),n("CellIcon",{staticClass:"w-5 h-5 ml-2 text-gray-500 cursor-pointer hover:text-vuepress",attrs:{name:"codesandbox","view-box":"0 0 32 32"},on:{click:e.openCodeSandboxIO}})],1)]),e._v(" "),n("div",{staticClass:"rounded-b-md"},[e.displayPreview?n("div",{staticClass:"p-4 bg-white"},[n("ClientOnly",[e.renderComponent?n(e.preview?e.preview:e.name,{tag:"component"}):e._e()],1)],1):e._e(),e._v(" "),e.displayCode?n("Prism",{staticClass:"rounded-t-none rounded-b-md",staticStyle:{margin:"0","border-top-left-radius":"0","border-top-right-radius":"0"}},[e._v(e._s(e.code))]):e._e()],1)])}),[],!1,null,"1a56b8d2",null);t.default=a.exports}}]);