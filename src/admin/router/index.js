import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import axios from 'axios';
import store from '../store';

const guard = axios.create ({
  baseURL: 'https://webdev-api.loftschool.com/'
});


Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
  
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["user/userIsLoggedIn"];

  if (isPublicRoute === false && isUserLogged === false) {
    const token = localStorage.getItem('token');

    guard.defaults.headers['Authorization'] = `Bearer ${ token }`;

    try {
      const response = await guard.get("/user");
      store.commit("user/SET_USER", response.data.user);
      next();
    } catch (error) {
      router.replace('/login');
      localStorage.clear();      
    }

  } else {
    next();
  }

  

  // console.log(isPublicRoute, ": PUBLIC" );
  // console.log(isUserLogged, ": USER" );
  
  // if (isPublicRoute === false && isUserLogged === false) {
  //   const token = localStorage.getItem('token');

  //   $axios.defaults.headers['Authorization'] = `Bearer ${ token }`;

  //   try {
  //     const response = await $axios.get('/user');

  //     store.commit("user/SET_USER", response.data.user);

  //     next();
  //   } catch (e) {
  //     await router.replace('/login');
  //     localStorage.removeItem('token');
  //   }
  // } else {
  //   next();
  // }
});

export default router;
