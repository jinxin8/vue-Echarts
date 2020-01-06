<template>
  <div id="line1"></div>
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
          text: '折线图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: '2%',
          data: ['data1']
        },
        grid: {
            left: '0%',
            right: '2%',
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
            name: 'data1',
            type: 'line',
            stack: '总量1',
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
          //   stack: '总量2',
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

</style>