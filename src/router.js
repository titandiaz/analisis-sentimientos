import Vue from "vue";
import Router from "vue-router";
import Admin from "./views/Admin.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: {
        autentificado: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  console.log(usuario)
  let autorizacion = to.matched.some(record => record.meta.autentificado)

  if (autorizacion && !usuario) {
    next('login')
  } else if (!autorizacion && usuario) {
    next('admin')
  } else {
    next()
  }
})

export default router;