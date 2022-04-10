<template>
  <div class="rose-echart"><baseEchart :options="options"></baseEchart></div>
</template>

<script setup lang="ts">
import baseEchart from '@/base-ui/echart'
import { defineComponent, defineProps, computed } from '@vue/runtime-core'
import { IEchartDataType } from '../types'
defineComponent({ baseEchart })

const props = defineProps<{ roseData: IEchartDataType[] }>()
const options = computed(() => ({
  title: { text: '', sbutext: '', left: 'center' },
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '分类数据',
      data: props.roseData,
      type: 'pie',
      radius: ['10', '60'],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      }
    }
  ]
}))
</script>
<style scoped></style>
