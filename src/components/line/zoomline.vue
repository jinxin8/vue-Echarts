<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>堆叠缩放LINE</span>
      <i v-popover:popover class="btn iconfont icon-warring"></i>
      <el-popover
        ref="popover"
        placement="right"
        title="详细配置"
        width="300"
        trigger="click">
        <div class="cont">
          1. 数据堆叠图通过在 series 中设置 stack 相同实现<br/>
          2. dataZoom设置图标缩放相关配置：<br/>
          2.1. dataZoom 中 type 包含：<br/>
          (1) inside 内置型组件内置在坐标系中，平移：在坐标系中滑动拖拽进行数据区域平移。
          缩放：PC端鼠标在坐标系范围内滚轮滚动(MAC触控板类同)，移动端在移动端触屏上，支持两指滑动缩放<br/>
          (2) slider 滑动条型数据区域缩放组件,可通过组件滑动及缩放
          2.2. handleStyle可设置滑动条形组件的手柄<br/>
          2.3. labelFormatter 显示的label的格式化器<br/>
          2.4. showDetail 是否显示detail，即拖拽时候显示详细数值信息<br/>
          2.5. realtime 拖动时，是否实时更新系列的视图。如果设置为 false，则只在拖拽结束的时候更新<br/>
          2.6. yAxisIndex，xAxisIndex 设置组件控制的哪个 x 轴或 y 轴<br/>
          2.7. start，end 数据窗口范围的开始结束百分比。范围是：0 ~ 100<br/>
          2.8. startValue，endValue 数据窗口范围的开始结束数值，如：0 ~ 6显示7条数据<br/>
          2.9. zoomLock 是否锁定选择区域（或叫做数据窗口）的大小，如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放<br/>
          2.10. top，bottom，left，right 设置组件离容器上下左右的距离<br/>
          2.11. height 设置组件高度<br/>
       </div>
      </el-popover>
    </div>
    <div id="line2"></div>
  </el-card>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initCharts();
    },
    initCharts () {
      const myChart = this.$echarts.init(document.getElementById('line2'));
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: '2%',
          top: 0,
          data: ['data1','data2']
        },
        grid: {
            left: '0%',
            right: '2%',
            top: '13%',
            bottom: 20,
            containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.10','1.11','1.12','1.13'],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value'
        },
        color: [
          '#3f78b1',
          '#56b870',
          '#f0cb3d',
          '#ffa53b',
          '#e14861',
          '#e14894',
          '#5bacd6',
          '#7ec7d7'
        ],
        dataZoom: [
          // {
          //   type:'inside'
          // },
          {
            type:'slider',
            startValue: 0 ,
            endValue: 6 ,
            height: 20,
            bottom: 0
          }
        ],
        series: [
          {
            name: 'data1',
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(63,120,177,.9)'
                }, {
                  offset: 1, color: 'rgba(63,120,177,.3)'
                }],
                global: false
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 330, 290, 234, 191, 182, 220 ]
          },
          {
            name: 'data2',
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(68,184,112,.9)'
                }, {
                  offset: 1, color: 'rgba(68,184,112,.3)'
                }],
                global: false
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 230, 90, 134, 101, 132, 120]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>
<style lang="scss" scoped>
.box-card {
  .clearfix {
    .btn {
      float: right;
      color: #ffab00;
      font-size: 18px;
    }
  }
  #line2 {
    width: 100%;
    height: 240px;
  }
}
</style>