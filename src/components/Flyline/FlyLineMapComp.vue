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

import { reactive } from '@vue/composition-api'

export default {
  name: "FlyLineMapComp",
  setup() {
    let Flylineconfig = reactive({
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
    })

    return {
      Flylineconfig
    }
  }
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
