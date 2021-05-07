import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import './plugins/element.js'
// import './plugins/vcharts'
import  Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
// import VCharts from 'v-charts'
Vue.component('v-chart', VueEcharts)
// Vue.use(VCharts)


// Vue.use(VCharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')