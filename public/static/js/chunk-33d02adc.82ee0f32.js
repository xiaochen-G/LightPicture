(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33d02adc"],{"78f4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-head"},[t._v("软件更新")]),a("div",{staticClass:"card-body"},[a("Alert",{attrs:{"show-icon":""}},[t._v("为较好的体验感，系统不会自动检测新版本，需点击“检测更新”手动获取")]),a("div",{staticClass:"auth"},[t.isUpdate?a("div",{staticClass:"title"},[t._v(" 发现新版本啦")]):a("div",{staticClass:"title"},[a("Icon",{attrs:{type:"md-thumbs-up",color:"#ff5473"}}),t._v("\n              当前已是最新版啦")],1),a("div",{staticClass:"version"},[t._v(" 当前程序版本："+t._s(t.config.version)+" （"+t._s(t.config.time)+"）")]),t.isUpdate?a("div",{staticClass:"version"},[t._v(" 最新程序版本："+t._s(t.data.version)+" （"+t._s(t.data.time)+"） ")]):t._e(),t.isUpdate?t._e():a("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t._getData}},[t._v("检测更新")]),t.isUpdate?a("p",{staticStyle:{margin:"5px 0 15px 0"},domProps:{innerHTML:t._s(t.data.info)}}):t._e(),t.isUpdate?a("Button",{attrs:{type:"success",loading:t.editload},on:{click:t._postUpdate}},[t._v("立即更新")]):t._e()],1),a("Divider"),t.speedload?a("div",{staticClass:"auth"},[t.error?t._e():a("div",{staticClass:"speed"},[a("span",{staticClass:"loader-77"})]),a("div",{staticClass:"speed-sm"},[t._v("\n              "+t._s(t.explain)+"\n            ")])]):t._e()],1)])])]),a("Modal",{attrs:{title:"数据库更新","class-name":"vertical-center-modal","footer-hide":""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("iframe",{attrs:{src:"/admin/home/update",frameborder:"0"}})])],1)},i=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),o=a("365c"),r=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={data:function(){return{data:{},loading:!1,isUpdate:!1,editload:!1,speedload:!1,error:!1,explain:"",file:""}},computed:d({},Object(r["c"])(["config"])),methods:{_getData:function(){var t=this;this.loading=!0,Object(o["n"])().then((function(e){t.loading=!1,1001==e.code&&t.$Message.success({background:!0,content:e.msg}),1002==e.code&&(t.data=e.data,t.isUpdate=!0)}))},_postUpdate:function(){var t=this;this.editload=!0,this.speedload=!0,this.explain="程序更新中...请不要返回和关闭页面，请保持网络通畅",Object(o["y"])().then((function(e){200==e.code?(t.error=!0,t.editload=!1,t.explain=e.msg):(t.error=!0,t.explain="更新失败... "+e.msg,t.editload=!1)}))}}},p=l,u=(a("e3e2"),a("2877")),v=Object(u["a"])(p,s,i,!1,null,"04639f59",null);e["default"]=v.exports},e316:function(t,e,a){},e3e2:function(t,e,a){"use strict";a("e316")}}]);
//# sourceMappingURL=chunk-33d02adc.82ee0f32.js.map