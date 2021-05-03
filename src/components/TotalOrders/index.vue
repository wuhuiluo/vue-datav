<template>
  <div class="totalSale">
    <common-card title="累计订单量" value="3,509,068">
      <template>
        <v-chart :options="getOptions()" />
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphsis">2,000,000</span>
      </template>
    </common-card>
  </div>
</template>


<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
  methods: {
    getOptions() {
      return {
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
            data: [
              620,
              432,
              220,
              534,
              790,
              430,
              220,
              320,
              532,
              320,
              834,
              698,
              530,
              220,
              620,
            ],
            areaStyle: {
              color: "purple",
            },
            smooth: true,
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
      };
    },
  },
  mounted() {
    console.log(this.getOptions());
  },
};
</script>


<style>
</style>
