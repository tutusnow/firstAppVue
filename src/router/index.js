import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import WelcomeWorld from '@/views/WelcomeWorld';

Vue.use(Router)
const router = new Router({
// export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta:{
        title:'你好世界',
      },
      component: HelloWorld
    },
    {
      path:'/Welcome:id',
      name: 'WelcomeWorld',
      meta:{
        title:'欢迎世界11',
      },
      component: WelcomeWorld
    }
  ]
})
//前守卫
router.beforeEach((to,from,next)=>{
   document.title=to.meta.title;
   next();
})
export default router;
