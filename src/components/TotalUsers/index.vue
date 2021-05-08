<template>
  <div class="totalSale">
    <common-card :value="userToday" title="累计用户数">
      <template>
        <v-chart :option="getOptions()" />
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphsis">{{ userGrowthLastDay }}</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphsis">{{ userGrowthLastMonth }}</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>


<script>
import commonCardMixin from "../../mixins/commonCardMixin";
import commonDataMixin from "../../mixins/commonDataMixin";
export default {
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions() {
      return {
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
            name: "上月的平台用户数",
            type: "bar",
            stack: "总量",
            data: [this.userLastMonth],
            barWidth: 10,
            itemStyle: {
              color: "#45c946",
            },
          },
          {
            name: "今日平台用户数",
            type: "bar",
            stack: "总量",
            data: [this.userTodayNumber],
            itemStyle: {
              color: "#eee",
            },
          },
          {
            type: "custom",
            stack: "总量",
            data: [this.userLastMonth],
            renderItem: (params, api) => {
              const value = api.value(0);
              const endPoint = api.coord([value, 0]);
              return {
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path",
                    shape: {
                      d:
                        "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#34c946",
                    },
                  },
                  {
                    type: "path",
                    shape: {
                      d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z",
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#34c946",
                    },
                  },
                ],
              };
            },
          },
        ],
      };
    },
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
