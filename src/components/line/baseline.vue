<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>LINE</span>
      <i v-popover:popover class="btn iconfont icon-warring"></i>
      <el-popover
        ref="popover"
        placement="right"
        title="详细配置"
        width="300"
        trigger="click">
        <div class="cont">
          1. title 设置图表标题<br/>
          2. tooltip 设置提示框组件<br/>
          3. legend 设置图例组件<br/>
          4. grid 设置 grid 组件，可设置 grid 组件离容器的距离，grid 中 containLabel 设置 grid 区域是否包含坐标轴的刻度标签<br/>
          5. xAxis 设置 x 轴<br/>&nbsp&nbsp
          5.1. type 包含：<br/>
          (1) 'value' 数值轴，适用于连续数据<br/>
          (2) 'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据<br/>
          (3) 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度<br/>
          (4) 'log' 对数轴。适用于对数数据<br/>&nbsp&nbsp
          5.2. axisTick 坐标轴刻度相关设置 alignWithLabel: true 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐<br/>
          6. yAxis 设置 y 轴，type 类型同 x 轴相同<br/>
          7. color 设置图标颜色<br/>
          8. series 系列列表，每个系列通过 type 决定图表类型<br/>&nbsp&nbsp
          8.1. 数据堆叠图通过设置 stack 相同实现<br/>&nbsp&nbsp
          8.2. smooth 是否平滑曲线显示<br/>&nbsp&nbsp
          8.3. areaStyle 区域填充样式<br/>
       </div>
      </el-popover>
    </div>
    <div id="line1"></div>
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
      const myChart = this.$echarts.init(document.getElementById('line1'));
      const option = {
        title: {
          text: '折线图',
          top: 0,
          textStyle: {
            fontSize:15,
            color: '#666'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: '2%',
          top: 0,
          data: ['data']
        },
        grid: {
            left: '0%',
            right: '2%',
            top: '15%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['1.1','1.2','1.3','1.4','1.5','1.6','1.7'],
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
        series: [
          {
            name: 'data',
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
            data: [220, 182, 191, 234, 290, 330, 310]
          }
          // {
          //   name: 'data2',
          //   type: 'line',
          //   stack: '总量',
          //   smooth: true,
          //   areaStyle: {
          //     color: {
          //       type: 'linear',
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [{
          //         offset: 0, color: 'rgba(68,184,112,.9)'
          //       }, {
          //         offset: 1, color: 'rgba(68,184,112,.3)'
          //       }],
          //       global: false
          //     }
          //   },
          //   data: [120, 132, 101, 134, 90, 230, 210]
          // }
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
  #line1 {
    width: 100%;
    height: 240px;
  }
}
</style>