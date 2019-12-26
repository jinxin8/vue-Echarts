
import HelloWorld from '@/components/HelloWorld'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = file => () => import('@/components/' + file);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index
//     }
//   ]
// })