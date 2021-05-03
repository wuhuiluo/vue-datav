import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import './plugins/element.js'
import * as Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

Vue.component('v-chart', VueEcharts)



// Vue.use(VCharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')