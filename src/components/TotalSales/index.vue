<template>
  <div class="totalSale">
    <common-card title="累计销售额" value="¥ 57,381,555">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphsis">7.33%</span>
            <span class="increase"></span>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphsis">38.79%</span>
            <span class="decrease"></span>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span> <span class="emphsis"> ￥ 3000000 </span>
      </template>
    </common-card>
  </div>
</template>


<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
};
</script>


<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>
