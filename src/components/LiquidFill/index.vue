<template>
  <div id="container"></div>
</template>


<script>
import "echarts-liquidfill";
function getColor(value) {
  return value[0] > 0 && value[0] <= 0.5
    ? "rgba(97,216,0,.7)"
    : value[0] > 0.5 && value[0] <= 0.8
    ? "rgba(286,178,26,.7)"
    : value[0] > 0.8
    ? "rgba(241,47,28.7)"
    : "#c7c7cb";
}
export default {
  mounted() {
    const data = [0.87];
    const chart = this.$echarts.init(document.getElementById("container"));
    chart.setOption({
      series: [
        {
          type: "liquidFill",
          data,
          radius: "80%",
          amplitude: 8,
          color: [getColor(data)],
          label: {
            formatter: (v) => {
              return `${Math.floor(v.data * 100)}%`;
            },
            textStyle: {
              fontSize: 36,
              color: "#999",
              fontWight: "normal",
            },
            position: ["50%", "50%"],
            insideColor: "#fff",
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
          backgroundStyle: {
            color: "#fff",
          },
          itemStyle: {
            shadowBlur: 0,
            shadowColor: "#fff",
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
