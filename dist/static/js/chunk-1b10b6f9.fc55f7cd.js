(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b10b6f9"],{"13db":function(t,e,n){"use strict";n("21f4")},"21f4":function(t,e,n){},"5c7f":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"actionbar"},[n("el-button",{staticClass:"add",attrs:{type:"primary",plain:""},on:{click:t.add}},[t._v("新增广告位")])],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.zones,border:"",stripe:""}},[n("el-table-column",{attrs:{align:"center",prop:"slug",label:"标识"}}),n("el-table-column",{attrs:{align:"center",prop:"width",label:"宽度"}}),n("el-table-column",{attrs:{align:"center",prop:"height",label:"高度"}}),n("el-table-column",{attrs:{align:"center",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.type||"banner"))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"冷却时长"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.settings&&e.row.settings.refractory_period||0))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Cookie"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.settings&&e.row.settings.cookie_pattern||"未定义"))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"延迟打开"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.settings&&e.row.settings.open_after||0))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"定时关闭"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.settings&&e.row.settings.close_after||0))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"展示位置"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.settings&&e.row.settings.position||"center center"))])]}}])}),n("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.handler(e.row)}}},[t._v("编辑")])]}}])})],1)],1)},a=[],l={data:function(){return{zones:[]}},methods:{handler:function(t){for(var e=0;e<this.zones.length;e++)if(t.slug==this.zones[e].slug){this.$router.push({path:"/zone/edit/".concat(e)});break}},add:function(){this.$router.push({path:"/zone/add"})}},created:function(){this.zones=this.$store.getters.data.zones}},r=l,o=(n("13db"),n("2877")),i=Object(o["a"])(r,s,a,!1,null,"4002e390",null);e["default"]=i.exports}}]);