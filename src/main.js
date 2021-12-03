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

Vue.config.productionTip = false

//FontAwesomeIcon
dom.watch()
library.add(fab, fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'fas'
})

new Vue({
  render: h => h(App),
  router,
  store: store,
}).$mount('#app')
