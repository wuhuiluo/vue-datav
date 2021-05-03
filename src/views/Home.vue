<template>
  <div class="home">
    <top-view />
    <sales-view />
  </div>
</template>

<script>
import SalesView from "../components/SalesView/index";
import TopView from "../components/TopView";
export default {
  name: "Home",
  components: {
    TopView,
    SalesView,
  },
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
}
</style>