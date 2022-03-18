<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script>
import useEchart from '../hooks/useEchart'

import { EChartsOption } from 'echarts'

export default {
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "360px"
    },
    option: {
      option: EChartsOption,
      required: true
    }
  },
  components: {

  },
  data() {
    return {
      chartInstane: null
    };
  },
  methods: {
    initChart() {
      this.chartInstane = this.$echarts.init(this.$refs.echartDivRef)
      const initOption = this.option
      this.chartInstane.setOption(initOption);
    }
  },
  computed: {
    setOptionsChange() {
      return setOptions(this.option)
    }
  },
  mounted() {
    this.initChart()
    const { setOptions } = useEchart(this.chartInstane.value)

    watch: {
      return setOptions(this.option)
    }
  },
};
</script>

<style lang="less"></style>
