import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import WelcomeWorld from '@/views/WelcomeWorld';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Welcome',
      name: 'WelcomeWorld',
      component: WelcomeWorld
    }
  ]
})
