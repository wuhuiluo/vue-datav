<template>
  <div class="Bmap2"><ve-map :data="chartData" /></div>
</template>


<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["位置", "税收"],
        rows: [
          { 位置: "上海", 税收: 379 },
          { 位置: "北京", 税收: 456 },
        ],
      },
    };
  },
};
</script>


<style>
</style>
