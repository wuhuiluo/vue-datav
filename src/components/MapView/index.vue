<template>
  <div class="map-view">
    <div class="left">
      <Bmap />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <liquid-fill />
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <word-cloud />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>


<script>
import LiquidFill from "../LiquidFill/index";
import Bmap from "../Map/Bmap";
import WordCloud from "../WordCloud/index";
export default {
  components: {
    Bmap,
    LiquidFill,
    WordCloud,
  },
};
</script>


<style lang="scss" scoped>
.map-view {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
    background: #fff;
  }
  .right {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    .title {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 50;
      padding: 0 0 0 20px;
    }
    .chart-wrapper {
      width: 100%;
      height: 190px;
    }
  }
}
</style>
