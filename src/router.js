import Vue from 'vue'
import Router from 'vue-router'

import comehy from './components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'comehy',
      component: comehy
    },
    {
      path: '/comehy',
      name: 'comehy',
      component: comehy
    }
  ]
})
