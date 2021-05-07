import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import abc from '../views/liquidfill.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/abc',
  name: 'abc',
  component: abc
}]

const router = new VueRouter({
  routes
})

export default router