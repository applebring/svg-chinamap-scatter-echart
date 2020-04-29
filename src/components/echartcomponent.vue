<template>
  <div id="map"></div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
export default {
  data() {
    return {
      chart: null
    };
  },
  methods: {
    setMapOption() {
      let data = [
        {
          name: "江苏",
          value: 5.3
        },
        {
          name: "北京",
          value: 3.8
        },
        {
          name: "上海",
          value: 4.6
        },
        {
          name: "重庆",
          value: 3.6
        },
        {
          name: "河北",
          value: 3.4
        },
        {
          name: "河南",
          value: 3.2
        },
        {
          name: "云南",
          value: 1.6
        },
        {
          name: "辽宁",
          value: 4.3
        },
        {
          name: "黑龙江",
          value: 4.1
        },
        {
          name: "湖南",
          value: 2.4
        },
        {
          name: "安徽",
          value: 3.3
        },
        {
          name: "山东",
          value: 3.0
        },
        {
          name: "新疆",
          value: 3
        },
        {
          name: "江苏",
          value: 3.9
        },
        {
          name: "浙江",
          value: 3.5
        },
        {
          name: "江西",
          value: 2.0
        },
        {
          name: "湖北",
          value: 2.1
        },
        {
          name: "广西",
          value: 3.0
        },
        {
          name: "甘肃",
          value: 1.2
        },
        {
          name: "山西",
          value: 3.2
        },
        {
          name: "内蒙古",
          value: 3.5
        },
        {
          name: "陕西",
          value: 2.5
        },
        {
          name: "吉林",
          value: 4.5
        },
        {
          name: "福建",
          value: 2.8
        },
        {
          name: "贵州",
          value: 1.8
        },
        {
          name: "广东",
          value: 3.7
        },
        {
          name: "青海",
          value: 0.6
        },
        {
          name: "西藏",
          value: 1
        },
        {
          name: "四川",
          value: 3.3
        },
        {
          name: "宁夏",
          value: 0.8
        },
        {
          name: "海南",
          value: 1.9
        },
        {
          name: "台湾",
          value: 0.1
        },
        {
          name: "香港",
          value: 0.1
        },
        {
          name: "澳门",
          value: 0.1
        }
      ];
      let renderdata = [
        { name: "北京", value: [119.1803, 31.2891, 0] },
        { name: "武汉", value: [113.4336, 31.12058, 1] },
        { name: "重庆", value: [108.384366, 30.439702, 2] },
        { name: "天津", value: [105.2219, 46.10449, 3] },
        { name: "济南", value: [116.31588, 37.13404, 4] }
        { name: "青岛", value: [120.14259, 36.60383, 5] }
      ];
      let option = {
        visualMap: {
          orient: "horizontal",
          type: "continuous",
          itemWidth: 9,
          itemHeight: 55,
          text: ["高", "低"],
          showLabel: true,
          seriesIndex: [0],
          min: 0,
          max: 5,
          inRange: {
            color: ["#e4f2dc", "#cde8bc", "#a3ea77", "#90d764", "#68b837"]
          },
          textStyle: {
            color: "#7B93A7",
            fontSize: 14
          }
        },
        tooltip: {
          show: true
        },
        geo: {
          roam: true,
          map: "china",
          //此处echarts4后遗留的bug，改用svg模式后normal不生效，字体大小被放大，目前可以换个思路解决，一般情况下字体给显示并且透明色transparent,鼠标经过显示白色
          label: {
            normal:{
                // //失效
                // show:false,
                // color:"#fff"
                //解决
                show:true,
                color:"transparent"
            },
            emphasis: {
              show:true,
              color:"#fff"
            }
          },

          itemStyle: {
            normal: {
              areaColor: "#a3ea77",
              borderColor: "#fff"
            },
            emphasis: {
              areaColor: "#68b837"
            }
          },
          regions: [
            {
              name: "南海诸岛",
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: {
                    show: false
                  }
                }
              }
            }
          ]
        },
        series: [
          {
            type: "map",
            map: "china",
            geoIndex: 0,
            aspectScale: 0.2, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            },
            animation: false,
            data: data
          },
          {
            name: "svg散点",
            type: "scatter",
            geoIndex: 0,
            data: renderdata,
            coordinateSystem: "geo",
            //此处引用svg动图
            symbol: "image://images/circle.svg",
            symbolSize: 10,
            animation:true,
            animationDelay: function(idx) {
              // 越往后的数据延迟越大
              return idx * 1000;
            }
          }
        ]
      };

      this.chart.setOption(option);
    }
  },
  mounted() {
    //此处需要声明渲染模式为svg，renderer:canvas/svg
    this.chart = echarts.init(document.getElementById("map"), null, {
      renderer: "svg"
    });
    this.setMapOption();
    window.addEventListener("resize", () => {
      this.chart.resize();
    });
  }
};
</script>

<style lang="less" scoped>
#map {
  width: 100%;
  height: 800px;
}
</style>
