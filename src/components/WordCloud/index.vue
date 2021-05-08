<template>
  <div id="container1"></div>
</template>


<script>
import commonDataMixin from "../../mixins/commonDataMixin";
import "echarts-wordcloud";
export default {
  mixins: [commonDataMixin],
  watch: {
    wordCloud() {
      const data = [];
      this.wordCloud.forEach((item) => {
        data.push({
          name: item.word,
          value: item.count,
        });
      });
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
  },
};
</script>


<style lang="scss" scoped>
#container1 {
  width: 100%;
  height: 100%;
}
</style>
