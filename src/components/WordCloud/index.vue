<template>
  <div id="container1"></div>
</template>


<script>
import "echarts-wordcloud";
export default {
  mounted() {
    const data = [
      {
        name: "慕课网",
        value: 100 * Math.random(),
      },
      {
        name: "数据可视化",
        value: 100 * Math.random(),
      },
      {
        name: "sam",
        value: 100 * Math.random(),
      },
      {
        name: "慕课网2",
        value: 100 * Math.random(),
      },
      {
        name: "数据可视化4",
        value: 100 * Math.random(),
      },
      {
        name: "sam5",
        value: 100 * Math.random(),
      },
    ];
    const chart = this.$echarts.init(document.getElementById("container1"));
    chart.setOption({
      series: [
        {
          type: "wordCloud",
          data,
          textStyle: {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                ].join(",") +
                ")"
              );
            },
          },
        },
      ],
    });
  },
};
</script>


<style lang="scss" scoped>
#container1 {
  width: 100%;
  height: 100%;
}
</style>
