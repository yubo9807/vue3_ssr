import {createRouter,createWebHashHistory} from 'vue-router';
import Home from '../views/home/index.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: import('../views/about/index.vue'),
  },
]