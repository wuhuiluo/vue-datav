<template>
  <div class="totalSale">
    <common-card title="累计销售额" :value="salesToday">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphsis">{{ salesGrowthLastDay }}</span>
            <span class="increase"></span>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphsis">{{ salesGrowthLastMonth }}</span>
            <span class="decrease"></span>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="emphsis">{{ salesLastDay }}</span>
      </template>
    </common-card>
  </div>
</template>


<script>
import commonCardMixin from "../../mixins/commonCardMixin";
import commonDataMixin from "../../mixins/commonDataMixin";
export default {
  mixins: [commonCardMixin, commonDataMixin],
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
