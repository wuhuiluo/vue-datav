<template>
  <div class="totalSale">
    <common-card title="累计订单量" :value="orderToday">
      <template>
        <v-chart :option="getOptions()" />
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphsis">{{ orderLastDay }}</span>
      </template>
    </common-card>
  </div>
</template>


<script>
import commonCardMixin from "../../mixins/commonCardMixin";
import commonDataMixin from "../../mixins/commonDataMixin";
export default {
  name: "TotalOrders",
  mixins: [commonCardMixin, commonDataMixin],
  components: {},
  methods: {
    getOptions() {
      return this.orderTrend.length > 0
        ? {
            xAxis: {
              type: "category",
              show: false,
              boundaryGap: false,
            },
            yAxis: {
              show: false,
            },
            series: [
              {
                type: "line",
                data: this.orderTrend,
                smooth: true,
                areaStyle: {
                  color: "purple",
                },
                lineStyle: {
                  width: 0,
                },
                itemStyle: {
                  opacity: 0,
                },
              },
            ],
            grid: {
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
            },
          }
        : null;
    },
  },
};
</script>

<style>
</style>
