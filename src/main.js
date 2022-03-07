import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import Buefy from 'buefy'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {dom} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'

import firebase from "firebase/app";
import "firebase/auth";

import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);
// or
Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      }
    }
  }
});

import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

import Toasted from 'vue-toasted'
Vue.use(Toasted, {
  singleton: true,
  duration: '2000',
})

Vue.config.productionTip = false

//FontAwesomeIcon
dom.watch()
library.add(fab, fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'fas'
})

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});