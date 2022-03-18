import Vue from 'vue'
import App from './App.vue'

import QzFrontend from '@quanzhiFE/qz-frontend';
import '@quanzhiFE/qz-frontend/dist/index.css';

Vue.use(QzFrontend);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import * as Echarts from 'echarts'
Vue.prototype.$echarts = Echarts

import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

import dataV from '@jiaminghi/data-view'
import './assets/css/normalize.css'

Vue.use(dataV)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
