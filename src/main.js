import Vue from 'vue'
import App from './App.vue'

import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

import dataV from '@jiaminghi/data-view'
import './assets/css/normalize.css'

Vue.use(dataV)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
