(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffc13c6e"],{"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"24b6":function(e,t,n){"use strict";n("e047")},"3de1":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u}));n("ac1f"),n("5319"),n("d3b7"),n("fb6a"),n("d81d");var r=3;function a(e){return null==e?String(e).toLowerCase():Object.prototype.toString.call(e).replace(/\[object\s+(\w+)\]/i,"$1").toLowerCase()||"object"}function i(e,t){return t>Math.ceil(e.length/r)?[]:e.slice((t-1)*r,t*r)}function l(e,t){var n=[];return e.map((function(e){var r=!0;for(var i in t)e[i]?("string"==a(e[i])&&-1==e[i].indexOf(t[i])&&(console.log(e[i]),r=!1),"object"!=a(e[i])||!1!==t[i]&&"false"!==t[i]||(r=!1),"array"==a(e[i])&&t[i]&&-1==e[i].indexOf(t[i])&&(r=!1)):t[i]&&(r=!1);r&&n.push(e)})),n}function o(e,t,n){for(var r=0;r<e.length;r++)if(e[r][t]==n)return!0;return!1}function u(e,t){var n=[];return e.getters.data[t].map((function(e){n.push(e.slug)})),n}},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("7b0b"),l=n("50c4"),o=n("a691"),u=n("1d80"),c=n("8aa5"),s=n("14c3"),p=Math.max,f=Math.min,d=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,y=v?"$":"$0";return[function(n,r){var a=u(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!v&&m||"string"===typeof r&&-1===r.indexOf(y)){var i=n(t,e,this,r);if(i.done)return i.value}var u=a(e),d=String(this),g="function"===typeof r;g||(r=String(r));var b=u.global;if(b){var E=u.unicode;u.lastIndex=0}var $=[];while(1){var w=s(u,d);if(null===w)break;if($.push(w),!b)break;var S=String(w[0]);""===S&&(u.lastIndex=c(d,l(u.lastIndex),E))}for(var A="",k=0,_=0;_<$.length;_++){w=$[_];for(var z=String(w[0]),C=p(f(o(w.index),d.length),0),R=[],O=1;O<w.length;O++)R.push(h(w[O]));var D=w.groups;if(g){var F=[z].concat(R,C,d);void 0!==D&&F.push(D);var P=String(r.apply(void 0,F))}else P=x(z,d,C,R,D,r);C>=k&&(A+=d.slice(k,C)+P,k=C+z.length)}return A+d.slice(k)}];function x(e,n,r,a,l,o){var u=r+e.length,c=a.length,s=b;return void 0!==l&&(l=i(l),s=g),t.call(o,s,(function(t,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":o=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return t;if(s>c){var p=d(s/10);return 0===p?t:p<=c?void 0===a[p-1]?i.charAt(1):a[p-1]+i.charAt(1):t}o=a[s-1]}return void 0===o?"":o}))}}))},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"97af":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"bannerAdd",staticClass:"form",attrs:{model:e.banner,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:""}},[n("el-radio-group",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[n("el-radio-button",{attrs:{label:"图片"}}),n("el-radio-button",{attrs:{label:"视频"}})],1)],1),n("el-form-item",{attrs:{label:"图片/视频",prop:"thing"}},[n("el-input",{model:{value:e.banner.thing,callback:function(t){e.$set(e.banner,"thing",t)},expression:"banner.thing"}})],1),n("el-form-item",{attrs:{label:"标识",prop:"slug"}},[n("el-input",{model:{value:e.banner.slug,callback:function(t){e.$set(e.banner,"slug",t)},expression:"banner.slug"}})],1),n("el-form-item",{attrs:{label:"标题",prop:"title"}},[n("el-input",{model:{value:e.banner.title,callback:function(t){e.$set(e.banner,"title",t)},expression:"banner.title"}})],1),n("el-form-item",{attrs:{label:"链接",prop:"url"}},[n("el-input",{model:{value:e.banner.url,callback:function(t){e.$set(e.banner,"url",t)},expression:"banner.url"}})],1),n("el-form-item",{attrs:{label:"权重",prop:"weight"}},[n("el-input",{model:{value:e.banner.weight,callback:function(t){e.$set(e.banner,"weight",t)},expression:"banner.weight"}})],1),n("el-form-item",{attrs:{label:"活动",prop:"campaign"}},[n("el-select",{attrs:{placeholder:"活动",filterable:""},model:{value:e.banner.campaign,callback:function(t){e.$set(e.banner,"campaign",t)},expression:"banner.campaign"}},e._l(e.campaigns,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),n("el-form-item",{attrs:{label:"广告位",prop:"zones"}},[n("el-select",{attrs:{placeholder:"广告位",filterable:"",multiple:""},model:{value:e.banner.zones,callback:function(t){e.$set(e.banner,"zones",t)},expression:"banner.zones"}},e._l(e.zones,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),n("el-form-item",[n("el-button",{staticClass:"submit",attrs:{type:"primary",plain:""},on:{click:e.handler}},[e._v("提交")])],1)],1)],1)},a=[],i=(n("e9c4"),n("5c96")),l=n("3de1"),o={data:function(){return{id:0,type:"图片",campaigns:[],zones:[],banner:{weight:1,zones:[]},rules:{thing:[{required:!0,message:"请填写图片或视频地址",trigger:"blur"}],slug:[{required:!0,message:"请填写唯一标识",trigger:"blur"}],title:[{required:!0,message:"请填写标题",trigger:"blur"}],weight:[{required:!0,message:"请填写权重",trigger:"blur"}],campaign:[{required:!0,message:"请选择活动",trigger:"change"}],zones:[{required:!0,message:"请选择广告位",trigger:"change"}],url:[{required:!0,message:"请填写跳转链接",trigger:"blur"}]}}},methods:{handler:function(){var e=this;this.$refs["bannerAdd"].validate((function(t){if(!t)return!1;"图片"==e.type&&e.$store.dispatch("data/updateBanner",{id:e.id,data:{image:e.banner.thing,url:e.banner.url,title:e.banner.title,slug:e.banner.slug,weight:e.banner.weight,campaign:e.banner.campaign,zones:e.banner.zones}}),"视频"==e.type&&e.$store.dispatch("data/updateBanner",{id:e.id,data:{image:e.banner.thing,url:e.banner.url,title:e.banner.title,slug:e.banner.slug,weight:e.banner.weight,campaign:e.banner.campaign,zones:e.banner.zones,video:{muted:!0,loop:!0,autoplay:!0,controlslist:"nodownload nofullscreen noremoteplayback",disablepictureinpicture:!0,sources:[{src:e.banner.thing,type:"video/mp4"}]}}}),i["Message"].success("提交成功！"),e.$router.push({path:"/banner/index"})}))}},created:function(){this.id=this.$route.params.id;var e=JSON.parse(JSON.stringify(this.$store.getters.data.banners[this.id]));this.banner={thing:e.video?e.video.sources[0].src:e.image,url:e.url,title:e.title,slug:e.slug,weight:e.weight,campaign:e.campaign,zones:e.zones},this.type=e.video?"视频":"图片",this.campaigns=Object(l["c"])(this.$store,"campaigns"),this.zones=Object(l["c"])(this.$store,"zones")}},u=o,c=(n("24b6"),n("2877")),s=Object(c["a"])(u,r,a,!1,null,"6435b9ce",null);t["default"]=s.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),l=n("9263"),o=n("9112"),u=i("species"),c=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),d=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,p){var g=i(e),b=!a((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),h=b&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!b||!h||"replace"===e&&(!c||!s||f)||"split"===e&&!d){var v=/./[g],m=n(g,""[e],(function(e,t,n,r,a){return t.exec===l?b&&!a?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),y=m[0],x=m[1];r(String.prototype,e,y),r(RegExp.prototype,g,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}p&&o(RegExp.prototype[g],"sham",!0)}},e047:function(e,t,n){},e9c4:function(e,t,n){var r=n("23e7"),a=n("d066"),i=n("d039"),l=a("JSON","stringify"),o=/[\uD800-\uDFFF]/g,u=/^[\uD800-\uDBFF]$/,c=/^[\uDC00-\uDFFF]$/,s=function(e,t,n){var r=n.charAt(t-1),a=n.charAt(t+1);return u.test(e)&&!c.test(a)||c.test(e)&&!u.test(r)?"\\u"+e.charCodeAt(0).toString(16):e},p=i((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&r({target:"JSON",stat:!0,forced:p},{stringify:function(e,t,n){var r=l.apply(null,arguments);return"string"==typeof r?r.replace(o,s):r}})},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),l=n("23cb"),o=n("50c4"),u=n("fc6a"),c=n("8418"),s=n("b622"),p=n("1dde"),f=n("ae40"),d=p("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),b=s("species"),h=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!d||!g},{slice:function(e,t){var n,r,s,p=u(this),f=o(p.length),d=l(e,f),g=l(void 0===t?f:t,f);if(i(p)&&(n=p.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(p,d,g);for(r=new(void 0===n?Array:n)(v(g-d,0)),s=0;d<g;d++,s++)d in p&&c(r,s,p[d]);return r.length=s,r}})}}]);