import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 多页面进行懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// const _import = file => require('@/components/' + file).default;
const _import = file => () => import('@/components/' + file);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'index'
      },
      component: _import('layout/layout'),
      children:[
        {
          path: 'index',
          name: 'index',
          component: _import('index')
        },
        {
          path: 'line',
          name: 'line',
          component: _import('line/line'),
        },
        {
          path: 'bar',
          name: 'bar',
          component: _import('line/line'),
        },
        {
          path: 'pie',
          name: 'pie',
          component: _import('line/line'),
        }
      ]
    }
  ]
})

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}