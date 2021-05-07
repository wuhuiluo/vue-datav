<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import BottomView from "../components/BottomView/BottomView.vue";
import SalesView from "../components/SalesView/index";
import TopView from "../components/TopView";
import MapView from "../components/MapView/index";
import { wordcloud } from "../util/index";
export default {
  name: "Home",
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null,
    };
  },
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },
  mounted() {
    wordcloud();
  },
};
</script>
    BottomView
<style lang="scss">
.home {
  width: 100%;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
}
</style>