<template>
  <div id="container"></div>
</template>


<script>
import "echarts-liquidfill";
export default {
  mounted() {
    const data = [0.67];
    const chart = this.$echarts.init(document.getElementById("container"));
    chart.setOption({
      series: [
        {
          type: "liquidFill",
          data,
        },
      ],
    });
  },
};
</script>


<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
