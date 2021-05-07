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
import {
  wordcloudRequest,
  screenDataRequest,
  mapScatterRequest,
} from "../util/index";
export default {
  name: "Home",
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null,
    };
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getMapData: this.getMapData,
      getWordData: thisgetWordData,
    };
  },
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },
  async mounted() {
    const WordCloudData = await wordcloudRequest();
    const ScreenData = await screenDataRequest();
    const MapScatterData = await mapScatterRequest();
    console.log(WordCloudData);
    this.reportData = ScreenData;
    this.mapData = MapScatterData;
    this.wordCloud = WordCloudData;
  },
  methods: {
    getReportData() {
      return this.reportData;
    },
    getMapData() {
      return this.mapData;
    },
    getWordData() {
      return this.mapData;
    },
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