<template>
  <div class="home">
    <top-view />
  </div>
</template>

<script>
import TopView from "../components/TopView";
export default {
  name: "Home",
  components: {
    TopView,
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