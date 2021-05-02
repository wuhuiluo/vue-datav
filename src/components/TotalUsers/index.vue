<template>
  <div class="totalSale">
    <common-card value="2,880,816" title="累计用户数">
      <template>
        <div
          id="total-users-chart"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphsis">8.73%</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphsis">35.91%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>


<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById("total-users-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      xAxis: {
        show: false,
        type: "value",
      },
      yAxis: {
        show: false,
        type: "category",
      },
      series: [
        {
          type: "bar",
          stack: "总量",
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: "#45c946",
          },
        },
        {
          type: "bar",
          stack: "总量",
          data: [250],
          itemStyle: {
            color: "#eee",
          },
        },
      ],
    });
  },
};
</script>


<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
