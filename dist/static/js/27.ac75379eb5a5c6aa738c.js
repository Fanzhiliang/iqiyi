webpackJsonp([27],{"499o":function(t,s){},AtPd:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{news:void 0,currIndex:0,sliderList:[],cycleObj:!1}},computed:{sliderHref:function(){if(this.sliderList.length>0)return this.sliderList[this.currIndex].href},sliderTitle:function(){if(this.sliderList.length>0)return this.sliderList[this.currIndex].title}},methods:{getTodayData:function(){var t=this;this.$http.get("../../static/data/today.json").then(function(s){if(200===s.data.code){t.news=s.data.data;var e=t.news.slider;e.forEach(function(t,s){e[s].isOn=0===s,e[s].style={"z-index":e-s}}),t.sliderList=e}else console.log("获得今日焦点失败:"),console.log(s.data.data.message)},function(t){console.log("获得今日焦点失败:"),console.log(t)})},toggleItem:function(t){var s=this;this.currIndex+=t,this.currIndex>this.sliderList.length-1?this.currIndex=0:this.currIndex<0&&(this.currIndex=this.sliderList.length-1),this.sliderList.forEach(function(t,e){var i=e===s.currIndex;s.$set(s.sliderList[e],"isOn",i)})},startCycle:function(){var t=this;if(this.cycleObj)return!1;this.cycleObj=setInterval(function(){t.toggleItem(1)},5e3)},stopCycle:function(){clearInterval(this.cycleObj),this.cycleObj=!1}},created:function(){this.getTodayData()},mounted:function(){setTimeout(this.startCycle,2e3)}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.news?e("div",{staticClass:"today"},[e("div",{staticClass:"today-inner clearfix"},[t._m(0),t._v(" "),e("div",{staticClass:"news"},[e("div",{staticClass:"big-new"},[e("em",[t._v("NEWS")]),e("i",{staticClass:"qy-svgicon qy-svgicon-news-point16"}),t._v(" "),e("a",{attrs:{href:t.news.big[0].href,title:t.news.big[0].title}},[t._v(t._s(t.news.big[0].title))])]),t._v(" "),t._l([0,1,2],function(s){return e("div",{staticClass:"small-new"},[e("i",{staticClass:"arrow"}),t._v(" "),e("a",{attrs:{href:t.news.small[s].href,title:t.news.small[s].title}},[t._v(t._s(t.news.small[s].title))])])}),t._v(" "),e("div",{staticClass:"big-new"},[e("em",[t._v("NEWS")]),e("i",{staticClass:"qy-svgicon qy-svgicon-news-point16"}),t._v(" "),e("a",{attrs:{href:t.news.big[1].href,title:t.news.big[1].title}},[t._v(t._s(t.news.big[1].title))])]),t._v(" "),t._l([3,4],function(s){return e("div",{staticClass:"small-new"},[e("i",{staticClass:"arrow"}),t._v(" "),e("a",{attrs:{href:t.news.small[s].href,title:t.news.small[s].title}},[t._v(t._s(t.news.small[s].title))])])}),t._v(" "),e("div",{staticClass:"small-new double"},[e("i",{staticClass:"arrow"}),t._v(" "),e("a",{attrs:{href:t.news.small[5].href,title:t.news.small[5].title}},[t._v(t._s(t.news.small[5].title))]),t._v(" "),e("i",{staticClass:"separate"}),t._v(" "),e("a",{attrs:{href:t.news.small[6].href,title:t.news.small[6].title}},[t._v(t._s(t.news.small[6].title))])]),t._v(" "),t._l(t.news.pic1,function(s){return e("a",{staticClass:"pic-new",attrs:{href:s.href,title:s.title}},[e("div",{staticClass:"img-frame"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.src,expression:"item.src"}],attrs:{alt:""}})]),t._v(" "),e("div",{staticClass:"p-frame"},[e("p",[t._v(t._s(s.title))])])])})],2),t._v(" "),e("div",{staticClass:"stars"},[e("div",{staticClass:"start-slider",on:{mouseenter:t.stopCycle,mouseleave:t.startCycle}},[t._l(t.sliderList,function(t){return e("a",{class:["slider-item",{on:t.isOn}],style:t.style,attrs:{href:t.href}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"item.img"}],attrs:{alt:""}})])}),t._v(" "),e("div",{staticClass:"slider-ctrl"},[e("div",{staticClass:"ctrl-up"},[e("i",{staticClass:"qy-svgicon qy-svgicon-focus-today"}),e("a",{attrs:{href:t.sliderHref}},[t._v(t._s(t.sliderTitle))])]),t._v(" "),e("div",{staticClass:"ctrl-down clearfix"},[t._l(t.sliderList,function(s,i){return e("span",{directives:[{name:"show",rawName:"v-show",value:t.currIndex==i,expression:"currIndex == index"}],staticClass:"info"},[t._v(t._s(s.info))])}),t._v(" "),e("div",{staticClass:"toggle-item"},[e("i",{staticClass:"qy-common-icon qy-common-pageleft8",on:{click:function(s){return t.toggleItem(-1)}}}),e("span",[t._v(t._s(t.currIndex+1)+"/4")]),e("i",{staticClass:"qy-common-icon qy-common-pageright8",on:{click:function(s){return t.toggleItem(1)}}})])],2)])],2),t._v(" "),t._l(t.news.stars,function(s){return e("div",{staticClass:"small-new double"},[e("i",{staticClass:"arrow"}),t._v(" "),e("a",{attrs:{href:s[0].href,title:s[0].title}},[t._v(t._s(s[0].title))]),t._v(" "),e("i",{staticClass:"separate"}),t._v(" "),e("a",{attrs:{href:s[1].href,title:s[1].title}},[t._v(t._s(s[1].title))])])})],2),t._v(" "),e("div",{staticClass:"pics clearfix"},t._l(t.news.pic2,function(s){return e("a",{staticClass:"pic-new",attrs:{href:s.href,title:s.title}},[e("div",{staticClass:"img-frame"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.src,expression:"item.src"}],attrs:{alt:""}})]),t._v(" "),e("div",{staticClass:"p-frame"},[e("p",[t._v(t._s(s.title))])])])}),0)])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"head-line"},[s("span",{staticClass:"qy-mod-icon focuplay"}),this._v(" "),s("a",{staticClass:"head-name",attrs:{href:"#"}},[s("h3",[this._v("今日焦点")]),s("span",[this._v("更多>")])])])}]};var l=e("VU/8")(i,a,!1,function(t){e("499o")},"data-v-1c044439",null);s.default=l.exports}});
//# sourceMappingURL=27.ac75379eb5a5c6aa738c.js.map