(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64f78696"],{"14c3":function(e,t,r){var a=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"3de1":function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return o}));r("ac1f"),r("5319"),r("d3b7"),r("fb6a"),r("d81d");var a=10;function n(e){return null==e?String(e).toLowerCase():Object.prototype.toString.call(e).replace(/\[object\s+(\w+)\]/i,"$1").toLowerCase()||"object"}function i(e,t){return t>Math.ceil(e.length/a)?[]:e.slice((t-1)*a,t*a)}function l(e,t){var r=[];return e.map((function(e){var a=!0;for(var i in t)e[i]?("string"==n(e[i])&&-1==e[i].indexOf(t[i])&&(a=!1),"object"!=n(e[i])||!1!==t[i]&&"false"!==t[i]||(a=!1),"array"==n(e[i])&&t[i]&&-1==e[i].indexOf(t[i])&&(a=!1)):t[i]&&(a=!1);a&&r.push(e)})),r}function c(e,t,r){for(var a=0;a<e.length;a++)if(e[a][t]==r)return!0;return!1}function o(e,t){var r=[];return e.getters.data[t].map((function(e){r.push(e.slug)})),r}},"432a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"actionbar"},[r("div",{staticClass:"right"},[r("el-button",{staticClass:"button",attrs:{type:"danger",plain:""},on:{click:e.add}},[e._v("新增广告")])],1)]),r("div",{staticClass:"actionbar"},[r("div",{staticClass:"left"},[r("span",[e._v("搜索?")]),r("el-input",{staticClass:"box",attrs:{placeholder:"标识",clearable:""},model:{value:e.param.slug,callback:function(t){e.$set(e.param,"slug",t)},expression:"param.slug"}}),r("el-select",{staticClass:"box",attrs:{placeholder:"类型",clearable:""},model:{value:e.param.video,callback:function(t){e.$set(e.param,"video",t)},expression:"param.video"}},e._l(e.type,(function(e){return r("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1),r("el-select",{staticClass:"box",attrs:{placeholder:"活动",clearable:"",filterable:""},model:{value:e.param.campaign,callback:function(t){e.$set(e.param,"campaign",t)},expression:"param.campaign"}},e._l(e.campaigns,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1),r("el-select",{staticClass:"box",attrs:{placeholder:"广告位",clearable:"",filterable:""},model:{value:e.param.zones,callback:function(t){e.$set(e.param,"zones",t)},expression:"param.zones"}},e._l(e.zones,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("div",{staticClass:"right"},[r("el-button",{attrs:{circle:"",icon:"el-icon-refresh-left"},on:{click:e.reset}}),r("el-button",{attrs:{type:"primary",circle:"",plain:"",icon:"el-icon-search"},on:{click:e.search}})],1)]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.banners,border:"",stripe:""}},[r("el-table-column",{attrs:{align:"center",prop:"slug",label:"标识"}}),r("el-table-column",{attrs:{align:"center",prop:"image",label:"图片"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.video?r("span",[e._v("无")]):r("el-image",{staticClass:"img",attrs:{src:t.row.image,fit:"contain","preview-src-list":[t.row.image]}})]}}])}),r("el-table-column",{attrs:{align:"center",prop:"video",label:"视频"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.video?r("el-link",{attrs:{type:"primary"},on:{click:function(r){return e.play(t.row.video.sources[0].src)}}},[e._v("预览")]):r("span",[e._v("无")])]}}])}),r("el-table-column",{attrs:{align:"center",prop:"title",label:"标题"}}),r("el-table-column",{attrs:{align:"center",prop:"url",label:"链接"}}),r("el-table-column",{attrs:{align:"center",prop:"campaign",label:"活动"}}),r("el-table-column",{attrs:{align:"center",prop:"zones",label:"广告位"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{domProps:{innerHTML:e._s("["+t.row.zones.join("]<br>[")+"]")}})]}}])}),r("el-table-column",{attrs:{align:"center",prop:"weight",label:"权重"}}),r("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.handler(t.row)}}},[e._v("编辑")])]}}])})],1),e.all.length>e.size?r("div",{staticClass:"pager"},[r("el-pagination",{attrs:{"page-size":e.size,background:"",layout:"prev, pager, next, jumper",total:e.all.length,"current-page":e.current},on:{"current-change":e.handleCurrentChange}})],1):e._e(),r("el-dialog",{attrs:{visible:e.dialogVisible,width:"720px","destroy-on-close":!0,"custom-class":"video-dialog"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("video",{ref:"video",staticClass:"video",attrs:{controls:"",preload:"",src:e.src}})])],1)},n=[],i=r("3de1"),l=(r("a78e"),{data:function(){return{dialogVisible:!1,src:"",banners:[],all:[],pagerVisible:!1,size:i["e"],current:1,param:{slug:"",video:"",campaign:"",zones:""},type:[{label:"图片",value:!1},{label:"视频",value:!0}],campaigns:[],zones:[]}},methods:{pager:function(e){this.current=e,this.banners=Object(i["d"])(this.all,e)},handler:function(e){for(var t=0;t<this.$store.getters.data.banners.length;t++)if(e==this.$store.getters.data.banners[t]){this.$router.push({path:"/banner/edit/".concat(t)});break}},add:function(){this.$router.push({path:"/banner/add"})},handleCurrentChange:function(e){this.pager(e)},search:function(){this.param.slug||this.param.campaign||this.param.zones||this.reset(),this.all=Object(i["b"])(this.$store.getters.data.banners,this.param),this.pager(1)},reset:function(){this.param.slug="",this.all=this.$store.getters.data.banners,this.pager(1)},play:function(e){var t=this;this.dialogVisible=!0,this.src=e,this.$nextTick((function(){t.$refs.video.play()}))}},created:function(){this.reset(),this.campaigns=Object(i["c"])(this.$store,"campaigns"),this.zones=Object(i["c"])(this.$store,"zones")}}),c=l,o=(r("95c9"),r("2877")),s=Object(o["a"])(c,a,n,!1,null,"6ae827ed",null);t["default"]=s.exports},5319:function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),i=r("7b0b"),l=r("50c4"),c=r("a691"),o=r("1d80"),s=r("8aa5"),u=r("14c3"),p=Math.max,f=Math.min,d=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var v=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,y=v?"$":"$0";return[function(r,a){var n=o(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n,a):t.call(String(n),r,a)},function(e,a){if(!v&&m||"string"===typeof a&&-1===a.indexOf(y)){var i=r(t,e,this,a);if(i.done)return i.value}var o=n(e),d=String(this),h="function"===typeof a;h||(a=String(a));var b=o.global;if(b){var E=o.unicode;o.lastIndex=0}var $=[];while(1){var _=u(o,d);if(null===_)break;if($.push(_),!b)break;var C=String(_[0]);""===C&&(o.lastIndex=s(d,l(o.lastIndex),E))}for(var k="",w=0,S=0;S<$.length;S++){_=$[S];for(var z=String(_[0]),A=p(f(c(_.index),d.length),0),R=[],j=1;j<_.length;j++)R.push(g(_[j]));var T=_.groups;if(h){var O=[z].concat(R,A,d);void 0!==T&&O.push(T);var P=String(a.apply(void 0,O))}else P=x(z,d,A,R,T,a);A>=w&&(k+=d.slice(w,A)+P,w=A+z.length)}return k+d.slice(w)}];function x(e,r,a,n,l,c){var o=a+e.length,s=n.length,u=b;return void 0!==l&&(l=i(l),u=h),t.call(c,u,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(o);case"<":c=l[i.slice(1,-1)];break;default:var u=+i;if(0===u)return t;if(u>s){var p=d(u/10);return 0===p?t:p<=s?void 0===n[p-1]?i.charAt(1):n[p-1]+i.charAt(1):t}c=n[u-1]}return void 0===c?"":c}))}}))},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"95c9":function(e,t,r){"use strict";r("96b5")},"96b5":function(e,t,r){},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),i=r("b622"),l=r("9263"),c=r("9112"),o=i("species"),s=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),d=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var h=i(e),b=!n((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),g=b&&!n((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return t=!0,null},r[h](""),!t}));if(!b||!g||"replace"===e&&(!s||!u||f)||"split"===e&&!d){var v=/./[h],m=r(h,""[e],(function(e,t,r,a,n){return t.exec===l?b&&!n?{done:!0,value:v.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),y=m[0],x=m[1];a(String.prototype,e,y),a(RegExp.prototype,h,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}p&&c(RegExp.prototype[h],"sham",!0)}},fb6a:function(e,t,r){"use strict";var a=r("23e7"),n=r("861d"),i=r("e8b5"),l=r("23cb"),c=r("50c4"),o=r("fc6a"),s=r("8418"),u=r("b622"),p=r("1dde"),f=r("ae40"),d=p("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),g=[].slice,v=Math.max;a({target:"Array",proto:!0,forced:!d||!h},{slice:function(e,t){var r,a,u,p=o(this),f=c(p.length),d=l(e,f),h=l(void 0===t?f:t,f);if(i(p)&&(r=p.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(p,d,h);for(a=new(void 0===r?Array:r)(v(h-d,0)),u=0;d<h;d++,u++)d in p&&s(a,u,p[d]);return a.length=u,a}})}}]);