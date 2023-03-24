// 路由的配置都放在这里

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

// 当用用户访问根路径时，展示给用户helloworld组件
// 恰好App.vue里写了 router-view 展示的是由当前路由地址所配置的内容
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }]
})
