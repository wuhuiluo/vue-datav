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
                <div class="chart-data">93,634</div>
                <v-chart :option="searchUserOption" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">93,634,123</div>
                <v-chart :option="searchUserOption" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column />
              </el-table>
              <el-pagination />
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
          <v-chart :option="categoryOption" />
        </template>
      </el-card>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchNumberOption: {},
      searchUserOption: {
        xAxis: {
          type: "category",
          boundaryGap: false,
        },
        yAxis: {
          show: false,
          min: 0,
          max: 300,
        },
        series: [
          {
            type: "line",
            areaStyle: {
              color: "rgba(95,187,255,.5)",
            },
            data: [100, 150, 200, 250, 200, 150, 150, 150],
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
      },
      categoryOption: {},
      radioSelect: "品类",
      tableData: [],
    };
  },
};
</script>


<style lang="scss" scoped>
.echarts {
  height: 50px;
}
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
    }
  }
}
</style>
