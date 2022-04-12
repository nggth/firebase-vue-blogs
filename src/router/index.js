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
    component: () => import('../views/Blog/Blogs.vue'),
    meta: {
      title: 'Blogs'
    }
  },
  {
    path: '/create-blogs',
    name: 'CreateBlogs',
    component: () => import('../views/Blog/CreateBlogs.vue'),
    meta: {
      title: 'Create Blogs'
    }
  },
  {
    path: '/post-preview',
    name: 'BlogPreview',
    component: () => import('../views/Blog/BlogPreview.vue'),
    meta: {
    title: 'Blog Preview'
    }
  },
  {
    path: '/view-blog',
    name: 'ViewBlog',
    component: () => import('../views/Blog/ViewBlog.vue'),
    meta: {
    title: 'View Blog'
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