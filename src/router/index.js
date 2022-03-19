import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue'),
    meta: {
      title: 'Blogs'
    }
  },
  {
    path: '/create',
    name: 'CreateBlogs',
    component: () => import('../views/CreateBlogs.vue'),
    meta: {
      title: 'Create Blogs'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      title: 'Forgot Password'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      title: 'Admin'
    }
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../components/Error.vue'),
    meta: {
      title: 'Error'
    }
  },
];

const router = new VueRouter({
  routes,
});

// Name of pages
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Cecilia`
  next()

  //require login
})

export default router;