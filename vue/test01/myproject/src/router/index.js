import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/view/grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Grid',
      component: Grid
    }
  ]
})
