<template>
  <div id="container"></div>
</template>


<script>
import "echarts-liquidfill";
export default {
  mounted() {
    const data = [0.6111];
    const chart = this.$echarts.init(document.getElementById("container"));
    chart.setOption({
      series: [
        {
          type: "liquidFill",
          data,
          radius: "80%",
          label: {
            formatter: (v) => {
              return `${Math.floor(v.data * 100)}%`;
            },
            textStyle: {
              fontSize: 36,
              color: "#999",
              fontWight: "normal",
            },
          },
          outline: {
            itemStyle: {
              borderColor: "#aaa4a4",
              borderWidth: 1,
              color: "none",
              shadowBlur: 0,
              shadowColor: "#fff",
            },
            borderDistance: 0,
          },
        },
      ],
    });
  },
};
</script>


<style lang="scss" scoped>
#container {
  height: 100%;
}
</style>
