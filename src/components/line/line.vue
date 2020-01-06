<template>
  <div class="line-cont">
    <baseline class="line"></baseline>
  </div>
</template>
<script>
import baseline from "./baseline";
export default {
  data () {
    return {

    }
  },
  components: {
    baseline
  }
}
</script>
<style lang="scss" scoped>
.line-cont {
  .line {
    width: 30%;
    height: 300px;
  }
}
</style>