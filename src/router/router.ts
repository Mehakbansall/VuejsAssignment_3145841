import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/Settings.vue'),
  },
  {
    path: '/editor',
    name: 'editor_new',
    component: () => import('@/views/CreateArticle.vue'),
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/views/EditArticle.vue'),
  },
  {
    path: '/article/:article-slug',
    name: 'article',
    component: () => import('@/views/Article.vue'),
  },
  {
    path: '/@:username',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
