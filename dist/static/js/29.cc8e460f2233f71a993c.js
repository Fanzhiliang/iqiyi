webpackJsonp([29],{Yo4D:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:["id"],data:function(){return{thats:{tv:{icon:"c-channel-dianshiju",name:"电视剧",length:6,ableToggle:!0},movie:{icon:"c-channel-dianying",name:"电影",length:6,ableToggle:!0},donman:{icon:"c-channel-dongman",name:"动漫",length:6,ableToggle:!1},qixiu:{icon:"c-channel-qixiu",name:"奇秀直播",length:3,ableToggle:!1,more:"更多美女直播"},record:{icon:"c-channel-jilupian",name:"纪录片",length:6,ableToggle:!1,more:"更多纪录片"}},list:[],showLength:6,isToggle:!1}},computed:{that:function(){return this.thats[this.id]},showList:function(){return this.isToggle?this.list.slice(this.that.length,2*this.that.length):this.list.slice(0,this.that.length)}},created:function(){var t=this;this.$http.get("../../static/data/"+this.id+".json").then(function(e){200===e.data.code?t.list=e.data.data.list:(console.log("获得"+t.id+"信息失败:"),console.log(e.data.data.message))},function(e){console.log("获得"+t.id+"信息失败:"),console.log(e)})}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list.length>0?n("div",{staticClass:"repeat-row",attrs:{id:t.id}},[n("a",{staticClass:"headline",attrs:{href:"#"}},[n("i",{class:["c-channelicon",t.that.icon]}),t._v(" "),n("span",[t._v(t._s(t.that.name))])]),t._v(" "),n("div",{staticClass:"videos"},t._l(t.showList,function(e,a){return n("v-mVideo2",{key:a,attrs:{data:e,id:t.id}})})),t._v(" "),n("div",{staticClass:"bottom"},[n("a",{attrs:{href:"#"}},[t._v("\n\t\t\t"+t._s(t.that.more||"更多资讯")),n("i",{staticClass:"c-glyphicon c-glyphicon-more"})]),t._v(" "),t.that.ableToggle?n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.isToggle=!t.isToggle}}},[t._v("\n\t\t\t换一批"),n("i",{staticClass:"c-glyphicon c-glyphicon-refresh"})]):t._e()])]):t._e()},staticRenderFns:[]};var s=n("vSla")(a,i,!1,function(t){n("g62f")},"data-v-13357e74",null);e.default=s.exports},g62f:function(t,e){}});
//# sourceMappingURL=29.cc8e460f2233f71a993c.js.map