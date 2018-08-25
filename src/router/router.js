import Vue from 'vue'
import Router from 'vue-router'
const pcIndex = resolve=> require(['@/pages/pc_index'],resolve);
const mIndex = resolve=> require(['@/pages/m_index'],resolve);
const mSearch = resolve=> require(['@/pages/m_search'],resolve);
const mHistory = resolve=> require(['@/pages/m_history'],resolve);
const mHome = resolve=> require(['@/pages/m_home'],resolve);
const mChannel = resolve=> require(['@/pages/m_channel'],resolve);
const error = resolve=> require(['@/pages/error'],resolve);

import isMobile from '@/utils/isMobile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dist/',
      component: isMobile?mIndex:pcIndex
    },
    {
      path: '/dist/search',
      component: isMobile?mSearch:{}
    },
    {
      path: '/dist/history',
      component: isMobile?mHistory:{}
    },
    {
      path: '/dist/home',
      component: isMobile?mHome:{}
    },
    {
      path: '/dist/channel',
      component: isMobile?mChannel:{}
    },
    {
      path: '/dist/404',
      component: error
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
})
