import VueRouter from 'vue-router';

import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import Admin from './components/admin/admin';
import Main from './components/main/main';
import Dashboard from './components/dashboard/dashboard';

const routes = [{
  path     : '/',
  name     : 'home',
  component: Home
}, {
  path     : '/signin',
  name     : 'signin',
  component: Signin
},
  {
    path     : '/signup',
    name     : 'signup',
    component: Signup
  },
  {
    path     : '/admin',
    name     : 'admin',
    component: Admin
  },
  {
    path     : '/main',
    name     : 'main',
    component: Main
  },
  {
    path     : '/dashboard',
    name     : 'dashboard',
    component: Dashboard
  },
  { path: '*', redirect: { name: 'home' } }];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router