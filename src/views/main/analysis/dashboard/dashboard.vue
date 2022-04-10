<template>
  <div class="dashboard">
    <el-row :gutter="5" class="content1">
      <el-col :span="7">
        <analysis-card title="分类商品数量（饼图）">
          <pieEchart :pieData="categoryGoodsCount"></pieEchart>
        </analysis-card>
      </el-col>
      <el-col :span="10">
        <analysis-card title="不同城市商品销量">
          <mapEchart :mapData="addressGoodsSale"></mapEchart>
        </analysis-card>
      </el-col>
      <el-col :span="7">
        <analysis-card title="分类商品数量（玫瑰图）">
          <roseEchart :roseData="categoryGoodsCount"></roseEchart>
        </analysis-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content2">
      <el-col :span="12">
        <analysis-card title="分类商品销量">
          <lineEchart v-bind="categoryGoodsSale"></lineEchart>
        </analysis-card>
      </el-col>
      <el-col :span="12">
        <analysis-card title="分类商品收藏">
          <barEchart v-bind="categoryGoodsFavor"></barEchart>
        </analysis-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import analysisCard from '@/base-ui/card/analysis-card.vue'
import {
  pieEchart,
  roseEchart,
  lineEchart,
  barEchart,
  mapEchart
} from '@/components/page-echart'

export default defineComponent({
  name: 'dashboard',
  components: {
    analysisCard,
    pieEchart,
    roseEchart,
    lineEchart,
    barEchart,
    mapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardAction', {})
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: string[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: string[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }

      return { xLabels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.content2 {
  margin-top: 10px;
}
</style>
