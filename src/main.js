import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import './plugins/element.js'
import * as Echarts from 'echarts'
// import VCharts from 'v-charts-v2'
import VueECharts from 'vue-echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueECharts)

import {
  use
} from 'echarts/core'

// import ECharts modules manually to reduce bundle size
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);

// register globally (or you can do it locally)
Vue.component('v-chart', VueECharts)

// Vue.use(VCharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')