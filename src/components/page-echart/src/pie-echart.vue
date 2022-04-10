<template>
  <div class="pie-echart"><baseEchart :options="options"></baseEchart></div>
</template>

<script setup lang="ts">
import baseEchart from '@/base-ui/echart'
import { defineComponent, defineProps, computed } from '@vue/runtime-core'
import { IEchartDataType } from '../types'

defineComponent({ baseEchart })
const props = defineProps<{ pieData: IEchartDataType[] }>()
const options = computed(() => ({
  title: { text: '', sbutext: '', left: 'center' },
  tooltip: { trigger: 'item', confine: true },
  legend: {
    orient: 'horizontal',
    y: 'top'
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  series: [
    {
      name: '分类数据',
      data: props.pieData,
      type: 'pie',
      radius: '40%',
      center: ['50%', '50%'],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetx: 0,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      }
    }
  ]
}))
</script>
<style scoped></style>
