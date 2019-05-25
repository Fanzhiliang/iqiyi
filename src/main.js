import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import isMobile from '@/utils/isMobile'
import vueResource from 'vue-resource'
import store from '@/store/store.js'
import _global from '@/global'
import VueLazyload from 'vue-lazyload'
import srcloading from '@/assets/img/bg-loading.gif'
Vue.use(VueLazyload,{
  loading: srcloading
})
Vue.use(vueResource);
Vue.prototype.GLOBAL = _global
Vue.config.productionTip = false

const pcHeader = resolve => require(['@/components/pc_header'],resolve);
const pcHeaderSide = resolve => require(['@/components/pc_header_side'],resolve);
const pcSlider = resolve => require(['@/components/pc_slider'],resolve);
const pcBody = resolve => require(['@/components/pc_body'],resolve);
const pcTodayRow = resolve => require(['@/components/pc_today_row'],resolve);
const pcRepeatRow1 = resolve => require(['@/components/pc_repeat_row_1'],resolve);
const pcRecommendRow = resolve => require(['@/components/pc_recommend_row'],resolve);
const pcRepeatRow2 = resolve => require(['@/components/pc_repeat_row_2'],resolve);
const pcAdRow1 = resolve => require(['@/components/pc_ad_row_1'],resolve);
const pcRepeatRow3 = resolve => require(['@/components/pc_repeat_row_3'],resolve);
const pcAdRow2 = resolve => require(['@/components/pc_ad_row_2'],resolve);
const pcPindaoRow = resolve => require(['@/components/pc_pindao_row'],resolve);
const pcFooter = resolve => require(['@/components/pc_footer'],resolve);
const pcSidebar = resolve => require(['@/components/pc_sidebar'],resolve);
const mIndexHeader = resolve => require(['@/components/m_index_header'],resolve);
const mHeaderTop = resolve => require(['@/components/m_header_top'],resolve);
const mHeaderNav = resolve => require(['@/components/m_header_nav'],resolve);
const mFooter = resolve => require(['@/components/m_footer'],resolve);
const mIndexSlider = resolve => require(['@/components/m_index_slider'],resolve);
const mTuijian = resolve => require(['@/components/m_tuijian'],resolve);
const mVideo1 = resolve => require(['@/components/m_video_1'],resolve);
const mToday = resolve => require(['@/components/m_today'],resolve);
const mRepeatRow1 = resolve => require(['@/components/m_repeat_row_1'],resolve);
const mVideo2 = resolve => require(['@/components/m_video_2'],resolve);
const mRepeatRow2 = resolve => require(['@/components/m_repeat_row_2'],resolve);
const mAppTuijian = resolve => require(['@/components/m_app_tuijian'],resolve);
const mBackTop = resolve => require(['@/components/m_backTop'],resolve);

Vue.component('v-pcHeader',pcHeader);
Vue.component('v-pcHeaderSide',pcHeaderSide);
Vue.component('v-pcSlider',pcSlider);
Vue.component('v-pcBody',pcBody);
Vue.component('v-pcTodayRow',pcTodayRow);
Vue.component('v-pcRepeatRow1',pcRepeatRow1);
Vue.component('v-pcRecommendRow',pcRecommendRow);
Vue.component('v-pcRepeatRow2',pcRepeatRow2);
Vue.component('v-pcAdRow1',pcAdRow1);
Vue.component('v-pcRepeatRow3',pcRepeatRow3);
Vue.component('v-pcAdRow2',pcAdRow2);
Vue.component('v-pcPindaoRow',pcPindaoRow);
Vue.component('v-pcFooter',pcFooter);
Vue.component('v-pcSidebar',pcSidebar);
Vue.component('v-mIndexHeader',mIndexHeader);
Vue.component('v-mHeaderTop',mHeaderTop);
Vue.component('v-mHeaderNav',mHeaderNav);
Vue.component('v-mFooter',mFooter);
Vue.component('v-mIndexSlider',mIndexSlider);
Vue.component('v-mTuijian',mTuijian);
Vue.component('v-mVideo1',mVideo1);
Vue.component('v-mToday',mToday);
Vue.component('v-mRepeatRow1',mRepeatRow1);
Vue.component('v-mVideo2',mVideo2);
Vue.component('v-mRepeatRow2',mRepeatRow2);
Vue.component('v-mAppTuijian',mAppTuijian);
Vue.component('v-mBackTop',mBackTop);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
