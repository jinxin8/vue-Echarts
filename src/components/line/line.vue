<template>
  <div class="line-cont">
    <baseline class="line"></baseline>
    <zoomline class="line"></zoomline>
    <zoomline class="line"></zoomline>
  </div>
</template>
<script>
import baseline from "./baseline";
import zoomline from "./zoomline";
export default {
  data () {
    return {

    }
  },
  components: {
    baseline,
    zoomline
  }
}
</script>
<style lang="scss" scoped>
.line-cont {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .line {
    width: 30%;
    height: 321px;
  }
}
</style>