<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">{{ searchCount }}</div>
                <v-chart :option="searchUserOption" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">{{ userCount }}</div>
                <v-chart :option="searchNumberOption" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键字" />
                <el-table-column prop="count" label="搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination
                :total="total"
                :page-size="pageSize"
                layout="prev,pager,next"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group size="small" v-model="radioSelect">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :option="categoryOption" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>


<script>
import commonDataMixin from "../../mixins/commonDataMixin";

const colors = [
  "#8d7fec",
  "#5085f2",
  "#f8726b",
  "#e7e702",
  "#78f283",
  "#4bc1fc",
];
export default {
  mixins: [commonDataMixin],
  data() {
    return {
      searchCount: 0,
      userCount: 0,
      total: 0,
      pageSize: 4,
      searchNumberOption: {},
      searchUserOption: {},
      totalData: [],
      categoryOption: {},
      radioSelect: "品类",
      tableData: [],
    };
  },
  watch: {
    category1() {
      this.renderPieChart();
    },
    wordCloud() {
      const totalData = [];
      this.wordCloud.forEach((item, index) => {
        totalData.push({
          id: index + 1,
          rank: index + 1,
          keyword: item.word,
          count: item.count,
          users: item.user,
          range: `${((item.user / item.count) * 100).toFixed(2)}%`,
        });
      });
      this.totalData = totalData;
      this.total = this.totalData.length;
      this.userCount = this.format(
        totalData.reduce((prev, next) => prev + next.users, 0)
      );
      this.searchCount = this.format(
        totalData.reduce((prev, next) => prev + next.count, 0)
      );
      this.renderTable(1);
      this.renderLineChart();
    },
  },
  methods: {
    onPageChange(page) {
      this.renderTable(page);
    },
    renderPieChart() {
      let data;
      let axis;
      let total = 0;
      if (this.radioSelect === "品类") {
        data = this.category1.data1.slice(0, 6);
        axis = this.category1.axisX.slice(0, 6);
        total = data.reduce((prev, next) => prev + next, 0);
      } else {
        data = this.category2.data1.slice(0, 6);
        axis = this.category2.axisX.slice(0, 6);
        total = data.reduce((prev, next) => prev + next, 0);
      }
      const chartData = [];
      data.forEach((item, index) => {
        const percent = `${((item / total) * 100).toFixed(2)}%`;
        chartData.push({
          legendname: axis[index],
          value: item,
          percent,
          itemStyle: {
            color: colors[index],
          },
          name: `${axis[index]} | ${percent}`,
        });
      });
      this.categoryOption = {
        title: [
          {
            text: `{this.radioSelect}分布`,
            textStyle: {
              fontSize: 14,
              color: "#666",
            },
            left: 20,
            top: 20,
          },
          {
            text: "累计订单量",
            subtext: "320",
            x: "33.5%",
            y: "46.5%",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
              color: "#999",
            },
            subtextStyle: {
              fontSize: 20,
              color: "#333",
            },
          },
        ],
        series: [
          {
            name: "品类分布",
            type: "pie",
            data: mockData,
            label: {
              show: true,
              formatter: function (params) {
                return params.data.legendname;
              },
            },
            labelLine: {
              length: 15,
              length2: 20,
              smooth: true,
            },
            center: ["34%", "50%"],
            radius: ["45%", "60%"],
            clockwise: true,
            itemStyle: {
              borderWidth: 4,
              borderColor: "#fff",
            },
          },
        ],
        legend: {
          type: "scroll",
          orient: "vertical",
          height: 250,
          left: "70%",
          top: "middle",
          textStyle: {
            color: "#8c8c8c",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            const str = `${params.seriesName}<br />${params.marker}${params.data.legendname}<br />数量：${params.data.value}<br />占比：${params.data.percent}%`;
            return str;
          },
        },
      };
    },
    renderTable(page) {
      this.tableData = this.totalData.slice(
        (page - 1) * this.pageSize,
        (page - 1) * this.pageSize + this.pageSize
      );
    },
    renderLineChart() {
      const createOption = (key) => {
        const data = [];
        const axis = [];
        this.wordCloud.forEach((item) => data.push(item[key]));
        this.wordCloud.forEach((item) => axis.push(item.word));
        console.log(data);
        return {
          tooltip: {},
          xAxis: {
            data: axis,
            type: "category",
            boundaryGap: false,
          },
          yAxis: {
            show: false,
            min: 0,
            max: 10000,
          },
          series: [
            {
              type: "line",
              areaStyle: {
                color: "rgba(95,187,255,.5)",
              },
              data: data,
              lineStyle: {
                color: "rgba(95,187,255)",
              },
              itemStyle: {
                opacity: 0,
              },
              smooth: true,
            },
          ],
          grid: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          },
        };
      };
      this.searchUserOption = createOption("user");
      this.searchNumberOption = createOption("count");
    },
  },
  mounted() {
    // this.renderPieChart();
  },
};
</script>


<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .echarts {
            height: 50px;
          }
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            margin-top: 5px;
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
        }
      }
      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px 0;
      }
    }
  }
}
.el-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
</style>
