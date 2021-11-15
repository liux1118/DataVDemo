<template>
  <div class="hello">
    <div>
      <dv-border-box-11
        title="全国省会飞线图"
        style="width: 95%; height: 800px"
        class="box-13"
      >
        <dv-flyline-chart-enhanced
          :config="Flylineconfig"
          style="width: 80%; height: 100%"
          class="chinaMap"
          :dev="true"
        />
      </dv-border-box-11>
    </div>
  </div>
</template>

<script>
import { points } from "./points";
import { lines } from "./lines";

export default {
  name: "FlyLineMap",
  data() {
    return {
      option: {
        title: {
          text: "剩余油量表",
        },
        series: [
          {
            type: "gauge",
            data: [{ name: "itemA", value: 55 }],
            axisLabel: {
              formatter: "{value}%",
            },
            details: {
              show: true,
              offset: [0, 40],
              formatter: "剩余{value}%",
            },
            animationCurve: "easeInOutBack",
          },
        ],
      },
      config: {
        points: [
          {
            name: "郑州",
            coordinate: [0.48, 0.35],
            halo: {
              show: true,
            },
          },
          {
            name: "新乡",
            coordinate: [0.52, 0.23],
          },
          {
            name: "焦作",
            coordinate: [0.43, 0.29],
          },
          {
            name: "开封",
            coordinate: [0.59, 0.35],
          },
          {
            name: "许昌",
            coordinate: [0.53, 0.47],
          },
          {
            name: "平顶山",
            coordinate: [0.45, 0.54],
          },
          {
            name: "洛阳",
            coordinate: [0.36, 0.38],
          },
          {
            name: "周口",
            coordinate: [0.62, 0.55],
          },
          {
            name: "漯河",
            coordinate: [0.56, 0.56],
          },
          {
            name: "南阳",
            coordinate: [0.37, 0.66],
            halo: {
              show: true,
              color: "#8378ea",
              duration: [10, 30],
            },
          },
          {
            name: "信阳",
            coordinate: [0.55, 0.81],
          },
          {
            name: "驻马店",
            coordinate: [0.55, 0.67],
          },
          {
            name: "济源",
            coordinate: [0.37, 0.29],
          },
          {
            name: "三门峡",
            coordinate: [0.2, 0.36],
          },
          {
            name: "商丘",
            coordinate: [0.76, 0.41],
          },
          {
            name: "鹤壁",
            coordinate: [0.59, 0.18],
          },
          {
            name: "濮阳",
            coordinate: [0.68, 0.17],
            halo: {
              show: true,
              color: "#8378ea",
            },
          },
          {
            name: "安阳",
            coordinate: [0.59, 0.1],
          },
        ],
        lines: [
          {
            source: "新乡",
            target: "郑州",
          },
          {
            source: "焦作",
            target: "郑州",
          },
          {
            source: "开封",
            target: "郑州",
          },
          {
            source: "许昌",
            target: "郑州",
          },
          {
            source: "平顶山",
            target: "郑州",
          },
          {
            source: "洛阳",
            target: "郑州",
          },
          {
            source: "周口",
            target: "郑州",
          },
          {
            source: "漯河",
            target: "郑州",
          },
          {
            source: "南阳",
            target: "郑州",
            color: "#fb7293",
            width: 2,
          },
          {
            source: "信阳",
            target: "郑州",
          },
          {
            source: "驻马店",
            target: "郑州",
          },
          {
            source: "济源",
            target: "郑州",
          },
          {
            source: "三门峡",
            target: "郑州",
          },
          {
            source: "商丘",
            target: "郑州",
            color: "#37a2da",
          },
          {
            source: "鹤壁",
            target: "郑州",
          },
          {
            source: "濮阳",
            target: "郑州",
            color: "#37a2da",
          },
          {
            source: "安阳",
            target: "郑州",
          },
        ],
        text: {
          show: true,
        },
        bgImgSrc: "./img/map/henan.jpg",
      },
      // 飞线配置
      Flylineconfig: {
        // 飞线点
        points: points,
        // 飞线
        lines: lines,
        line: {
          width: 2,
        },
        text: {
          show: true,
        },
        bgImgSrc: require("../../assets/img/china.png"),
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-13 {
  margin: 0 auto;
  position: relative;
  background-color: #fff;
}
.chinaMap {
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
