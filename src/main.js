import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFilterDateFormat from 'vue-filter-date-format'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from 'vee-validate'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuetify)
Vue.use(ElementUI);

Vue.use(VueFilterDateFormat)

Vue.config.productionTip = false;
Validator.localize('es', es)
Vue.use(VeeValidate, {
  locale: 'es'
})

const firebaseConfig = {
  apiKey: "AIzaSyBykCUpV6uttnTjE8k2lj_u7AWdhksmqJA",
  authDomain: "analisis-de-sentimientos-dc53e.firebaseapp.com",
  databaseURL: "https://analisis-de-sentimientos-dc53e.firebaseio.com",
  projectId: "analisis-de-sentimientos-dc53e",
  storageBucket: "analisis-de-sentimientos-dc53e.appspot.com",
  messagingSenderId: "810052387458",
  appId: "1:810052387458:web:a09a76323219bd2f"
};
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(function (user) {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
})

