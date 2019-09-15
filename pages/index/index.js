import * as echarts from '../../ec-canvas/echarts';
let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    color: ['#F47378'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      confine: true
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      top: '10%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      axisLabel: {
        color: '#fff'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: true,
        length: 10,
        lineStyle: {
          color: "#fff"
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
      data: ['2019\n03', '2019\n04', '2019\n05', '2019\n06', '2019\n07', '2019\n08']
    }],
    yAxis: [{
      type: 'value',
      name: '(元/平)',
      min: 6840,
      axisLabel: {
        color: '#fff'
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#ccc'
        }
      },
      axisLine: {
        show:false,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      }
    }],
    series: [{
      name: '玉田县房价',
      type: 'line',
      smooth: true,
      symbol:'react',
      symbolSize: 6,
      lineStyle: {
        normal: {
          color: "#F47378"
        }
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#fff'
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#eb64fb'
            },
            {
              offset: 1,
              color: '#3fbbff'
            }
          ], false)
        }
      },
      data: [6869, 6883, 7022, 7171, 7227, 7281]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function(res) {
    return {
      title: '',
      path: '/pages/index/index',
      success: function() {},
      fail: function() {}
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});