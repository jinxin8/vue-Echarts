import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes';
Vue.use(Router)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes
});

export default router;
