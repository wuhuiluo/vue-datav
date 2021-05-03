<template>
  <ve-line :data="data" />
</template>


<script>
export default {
  data() {
    return {
      data: {
        columns: ["日期", "销售额"],
        rows: [
          { 日期: "1月1日", 销售额: 123 },
          { 日期: "1月1日", 销售额: 123 },
          { 日期: "1月1日", 销售额: 123 },
          { 日期: "1月1日", 销售额: 123 },
          { 日期: "1月1日", 销售额: 123 },
          { 日期: "1月1日", 销售额: 123 },
        ],
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
