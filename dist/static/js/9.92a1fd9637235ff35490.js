webpackJsonp([9],{NigB:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:["isTop"],data:function(){return{sliderList:[],link:"#",currIndex:0,cycleObj:!1,headerHeight:"",groups:[[["娱乐","体育","资讯"],["电影","片花","网络电影"],["电视剧","综艺","脱口秀"],["动漫","儿童","教育"],["生活","母婴","健康"],["音乐","时尚","旅游"],["搞笑","原创","拍客"],["财经","科技","汽车"],["军事","公益","纪录片"]],[["热点","风云榜","全网影视"],["奇秀直播","直播中心","应用商店"],["商城","游戏","游戏中心"],["大头","爱奇艺号","VR"],["文学","漫画","泡泡广场"]],[["娱乐","资讯"],["电影","网络电影"],["电视剧","片花"],["综艺","脱口秀"]],[["动漫","游戏"],["搞笑","旅游"],["音乐","时尚"],["原创","拍客"]],[["财经","科技"],["体育","教育"],["儿童","母婴"],["生活","健康"],["军事","汽车"],["公益","纪录片"],["文学","漫画"]],[["热点","风云榜"],["全网影视","应用商店"],["奇秀直播","直播中心"],["商城","VR"],["大头","爱奇艺号"],["泡泡广场","游戏中心"]]]}},computed:{sliderStyle:function(){return this.isTop?{}:{"margin-top":this.headerHeight}}},methods:{getSliderList:function(){var t=this;this.$http.get("../../static/data/slider.json").then(function(e){if(200===e.data.code){var s=e.data.data.list;s.forEach(function(t,e){s[e].style={"z-index":s.length-e,"background-image":"url("+t.img+")"},s[e].isOn=0===e}),t.sliderList=s,t.link=t.sliderList[0].href}else console.log("获得焦点图信息失败:"),console.log(e.data.data.message)},function(t){console.log("获得焦点图信息失败:"),console.log(t)})},toggleBg:function(t){var e=this;this.sliderList.forEach(function(s,i){t==i?(e.$set(e.sliderList[i],"isOn",!0),e.currIndex=t,e.link=e.sliderList[i]):e.$set(e.sliderList[i],"isOn",!1)})},startCycle:function(){var t=this;if(!1!==this.cycleObj)return!1;this.cycleObj=setInterval(function(){t.currIndex+=1,t.currIndex>=t.sliderList.length&&(t.currIndex=0),t.toggleBg(t.currIndex)},5e3)},stopCycle:function(){clearInterval(this.cycleObj),this.cycleObj=!1}},created:function(){this.getSliderList()},mounted:function(){var t=this;setTimeout(this.startCycle,2e3),window.addEventListener("load",function(){t.headerHeight=t.GLOBAL.getStyle(document.querySelector(".header"),"height")})}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.sliderList.length>0?s("div",{staticClass:"slider",style:t.sliderStyle,on:{mouseenter:t.stopCycle,mouseleave:t.startCycle}},[s("ul",{staticClass:"slider-bg"},t._l(t.sliderList,function(t){return s("li",{class:{on:t.isOn},style:t.style},[s("a",{attrs:{href:t.href}})])})),t._v(" "),s("a",{staticClass:"slider-toggle-link",attrs:{href:t.link}},[s("div",{staticClass:"link-inner clearfix"},[s("ul",{staticClass:"slider-title"},t._l(t.sliderList,function(e,i){return s("li",[s("a",{class:{on:e.isOn},attrs:{href:e.href},on:{mouseenter:function(e){t.toggleBg(i)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t")])])})),t._v(" "),s("a",{staticClass:"left-block",attrs:{href:t.link}})])]),t._v(" "),s("div",{staticClass:"slider-bottom"},[s("div",{staticClass:"bottom-inner clearfix"},[s("div",{staticClass:"left-col"},t._l(t.groups,function(e){return s("div",{staticClass:"group"},t._l(e,function(e){return s("div",{staticClass:"group-col"},t._l(e,function(e){return s("div",{staticClass:"group-item"},[s("a",{attrs:{href:"#"}},[t._v(t._s(e))])])}))}))})),t._v(" "),t._m(0)])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-col"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"big-vip-gold"}),this._v(" "),e("p",[this._v("会员精选")])])])}]};var n=s("vSla")(i,r,!1,function(t){s("ZR1a")},"data-v-6f610092",null);e.default=n.exports},ZR1a:function(t,e){}});
//# sourceMappingURL=9.92a1fd9637235ff35490.js.map