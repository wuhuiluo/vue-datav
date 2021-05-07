<template>
  <div id="container1"></div>
</template>


<script>
import "echarts-wordcloud";
export default {
  mounted() {
    const data = [
      {
        name: "太对了哥",
        value: 100 * Math.random(),
      },
      {
        name: "123",
        value: 100 * Math.random(),
      },
      {
        name: "whl",
        value: 100 * Math.random(),
      },
      {
        name: "6666",
        value: 100 * Math.random(),
      },
      {
        name: "123",
        value: 100 * Math.random(),
      },
      {
        name: "141",
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
