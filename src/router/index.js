import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app'
import 'firebase/auth'

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
      title: 'Create Blogs',
      requiresAuth: true
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
    path: '/view-blog/:blogid',
    name: 'ViewBlog',
    component: () => import('../views/Blog/ViewBlog.vue'),
    meta: {
    title: 'View Blog'
    }
  },
  {
    path: '/edit-blog/:blogid',
    name: 'EditBlog',
    component: () => import('../views/Blog/EditBlog.vue'),
    meta: {
      title: 'Edit Blog'
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
      title: 'Profile',
      requiresAuth: true
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

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser
  // if (user) {
  //   let token = await user.getIdTokenResult
  //   admin = token.claims.admin
  // }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      return next()
    }
    return (
      alert('Please login to do.'),
      next({ name: 'Home'})
    )
  }
  return next()
})
export default router;