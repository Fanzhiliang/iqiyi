webpackJsonp([35],{0:function(t,n){},"Dr+p":function(t,n,e){t.exports=e.p+"static/img/bg-loading.2eb88ba.gif"},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({created:function(){this.$store.commit("getUserData",this),this.$store.commit("getHotSearch",this),this.$store.commit("getHistoryData",this)}},c,!1,function(t){e("m7Yi")},null,null).exports,i=e("/ocq"),r=!!/Android|webOS|iPhone|iPod|BlackBerry|Phone|Mobile/i.test(navigator.userAgent);o.a.use(i.a);var u=new i.a({mode:"history",routes:[{path:"/",component:r?function(t){return e.e(28).then(function(){var n=[e("3rdg")];t.apply(null,n)}.bind(this)).catch(e.oe)}:function(t){return e.e(9).then(function(){var n=[e("B45/")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/search",component:r?function(t){return e.e(20).then(function(){var n=[e("XvRQ")];t.apply(null,n)}.bind(this)).catch(e.oe)}:{}},{path:"/history",component:r?function(t){return e.e(18).then(function(){var n=[e("2hv4")];t.apply(null,n)}.bind(this)).catch(e.oe)}:{}},{path:"/home",component:r?function(t){return e.e(33).then(function(){var n=[e("QoEM")];t.apply(null,n)}.bind(this)).catch(e.oe)}:{}},{path:"/channel",component:r?function(t){return e.e(5).then(function(){var n=[e("S7VE")];t.apply(null,n)}.bind(this)).catch(e.oe)}:{}},{path:"/404",component:function(t){return e.e(11).then(function(){var n=[e("Kq85")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"*",redirect:"/404"}]}),l=e("8+8L"),p=e("NYxO");o.a.use(p.a);var h=new p.a.Store({state:{user:{},keyword:"",hotSearch:[],historyData:{}},mutations:{getUserData:function(t,n){n.$http.get("../../static/data/user.json").then(function(n){200===n.data.code?t.user=n.data.data.user:(console.log("获得用户信息失败:"),console.log(n.data.data.message))},function(t){console.log("获得用户信息失败:"),console.log(t)})},removeUserData:function(t){t.user=void 0},getHotSearch:function(t,n){n.$http.get("../../static/data/hotSearch.json").then(function(n){200===n.data.code?(t.hotSearch=n.data.data.list,t.keyword=t.hotSearch[0]):(console.log("获得热门搜索信息失败:"),console.log(n.data.data.message))},function(t){console.log("获得热门搜索信息失败:"),console.log(t)})},getHistoryData:function(t,n){n.$http.get("../../static/data/history.json").then(function(n){200===n.data.code?t.historyData=n.data.data:(console.log("获得观看历史失败:"),console.log(n.data.data.message))},function(t){console.log("获得观看历史失败:"),console.log(t)})},deleteHistoryData:function(t,n,e){t.historyData.list[n].list.splice(e,1)}}}),d=e("pFYg"),s=e.n(d),f=e("mvHQ"),m=e.n(f),v={isMobile:r,setData:function(t,n,e){n=m()(n);var o=window.localStorage;if(e="number"==typeof e?e:7,void 0!==o)o.setItem(t,n);else{var c=new Date;c.setTime(c.getTime()+24*e*60*60*1e3);var a="expires="+c.toGMTString();document.cookie=t+"="+n+"; "+a}},getData:function(t){var n=window.localStorage;if(void 0!==n)return JSON.parse(n.getItem(t));for(var e=t+"=",o=document.cookie.split(";"),c=0;c<o.length;c++){var a=o[c].trim();if(0==a.indexOf(e))return JSON.parse(a.substring(e.length,a.length))}return""},removeData:function(t){var n=window.localStorage;if(void 0!==n)n.removeItem(t);else{var e=new Date;e.setTime(e.getTime()-1);var o="expires="+e.toGMTString();document.cookie=t+"=; "+o}},camelize:function(t){return t.replace(/\-(\w)/g,function(t,n){return n.toUpperCase()})},getStyle:function(t,n){var e=window.getComputedStyle(t,null);return e?e.getPropertyValue(n):t.currentStyle.getAttribute(this.camelize(n))},setStyle:function(t,n,e){t.style[this.camelize(n)]=e},getScrollTop:function(){var t=0,n=0;return document.body&&(t=document.body.scrollTop),document.documentElement&&(n=document.documentElement.scrollTop),t>n?t:n},setScrollTop:function(t){document.body&&(document.body.scrollTop=t),document.documentElement&&(document.documentElement.scrollTop=t)},getScrollHeight:function(){var t=0,n=0;return document.body&&(t=document.body.scrollHeight),document.documentElement&&(n=document.documentElement.scrollHeight),t>n?t:n},getWindowWidth:function(){return"CSS1Compat"==document.compatMode?document.documentElement.clientWidth:document.body.clientWidth},getWindowHeight:function(){return"CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight},getOffset:function(t){var n={top:t.offsetTop,left:t.offsetLeft};if(t.offsetParent){var e=this.getOffset(t.offsetParent);return{top:n.top+e.top,left:n.left+e.left}}return n},arrayDeleteRepeat:function(t){if(t&&"[object Array]"!==Object.prototype.toString.call(t))return!1;var n={},e="",o=[];return t.forEach(function(t){e=void 0===t?"undefined":s()(t),void 0===n[t+e]&&(n[t+e]=t,o.push(t))}),o}},y=e("cTzj"),g=e.n(y),b=e("Dr+p"),w=e.n(b);o.a.use(g.a,{loading:w.a}),o.a.use(l.a),o.a.prototype.GLOBAL=v,o.a.config.productionTip=!1;o.a.component("v-pcHeader",function(t){return e.e(1).then(function(){var n=[e("3CBq")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcHeaderSide",function(t){return e.e(15).then(function(){var n=[e("x/mB")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcSlider",function(t){return e.e(6).then(function(){var n=[e("NigB")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcBody",function(t){return e.e(2).then(function(){var n=[e("PHbL")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcTodayRow",function(t){return e.e(27).then(function(){var n=[e("AtPd")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcRepeatRow1",function(t){return e.e(3).then(function(){var n=[e("kcHk")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcRecommendRow",function(t){return e.e(25).then(function(){var n=[e("wViu")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcRepeatRow2",function(t){return e.e(31).then(function(){var n=[e("1H3q")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcAdRow1",function(t){return e.e(10).then(function(){var n=[e("5AON")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcRepeatRow3",function(t){return e.e(30).then(function(){var n=[e("mjw+")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcAdRow2",function(t){return e.e(32).then(function(){var n=[e("PPZh")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcPindaoRow",function(t){return e.e(12).then(function(){var n=[e("tqDk")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcFooter",function(t){return e.e(17).then(function(){var n=[e("VXc3")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-pcSidebar",function(t){return e.e(21).then(function(){var n=[e("H16W")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mIndexHeader",function(t){return e.e(29).then(function(){var n=[e("b+qV")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mHeaderTop",function(t){return e.e(13).then(function(){var n=[e("H2Jl")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mHeaderNav",function(t){return e.e(22).then(function(){var n=[e("ybtG")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mFooter",function(t){return e.e(0).then(function(){var n=[e("GXxV")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mIndexSlider",function(t){return e.e(4).then(function(){var n=[e("1qRZ")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mTuijian",function(t){return e.e(26).then(function(){var n=[e("Yc0n")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mVideo1",function(t){return e.e(7).then(function(){var n=[e("sKyr")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mToday",function(t){return e.e(24).then(function(){var n=[e("szlq")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mRepeatRow1",function(t){return e.e(23).then(function(){var n=[e("Yo4D")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mVideo2",function(t){return e.e(8).then(function(){var n=[e("QM3C")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mRepeatRow2",function(t){return e.e(14).then(function(){var n=[e("/cfU")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mAppTuijian",function(t){return e.e(19).then(function(){var n=[e("wBy7")];t.apply(null,n)}.bind(this)).catch(e.oe)}),o.a.component("v-mBackTop",function(t){return e.e(16).then(function(){var n=[e("93Fr")];t.apply(null,n)}.bind(this)).catch(e.oe)}),new o.a({el:"#app",router:u,store:h,components:{App:a},template:"<App/>"})},m7Yi:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.03b9f5c4bb58187cd4d3.js.map