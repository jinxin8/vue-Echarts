<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="this.$route.path"
      @open="handleOpen"
      @close="handleClose"
      router
      :collapse="true"
      style="height:100vh;">
      <div class="logicon" @click="gethome">
        <img src="@/assets/icons/logo.jpg" alt="">
      </div>
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        <i :class="['iconfont',item.icon]"></i>
        <span slot="title">{{item.navItem}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList:[
        {name:'/line',icon:'icon-linechart',navItem:'Line'},
        {name:'/bar',icon:'icon-bar-chart',navItem:'Bar'},
        {name:'/pie',icon:'icon-pie-chart',navItem:'Pie'},
      ]
    }
  },
  methods: {
    gethome() {
      this.$router.push({
        path: 'index'
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.logicon {
  width: 34px;
  height: 34px;
  padding: 15px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
