<template>
  <div class="echarts-warp">
    <div class="warp-menu">
      <ecMenu></ecMenu>
    </div>
    <div class="warp-content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ecMenu from "../menu/index"
export default {
  data () {
    return {}
  },
  components: {
    ecMenu
  },
  methods: {}
}
</script>

<style lang="scss">
.echarts-warp {
  display: flex;
  .warp-content {
    flex: 1;
    padding: 20px;
  }
}
</style>
