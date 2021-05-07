<template>
  <div class="map-view">
    <div class="left">
      <Bmap />
    </div>
    <div class="right"></div>
  </div>
</template>


<script>
import Bmap from "../Map/Bmap";
export default {
  components: {
    Bmap,
  },
};
</script>


<style lang="scss" scoped>
.map-view {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
    background: #fff;
  }
}
</style>
