<template>
  <div class="goods">
    <h2>goods</h2>
    <pageContent :ContentConfig="goodsContentConfig" pageName="goods">
      <template #img="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope"> {{ '￥' + scope.row.oldPrice }}</template>
      <template #newPrice="scope"> {{ '￥' + scope.row.newPrice }}</template>
      <template #status="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.status ? 'success' : 'danger'"
        >
          {{ scope.row.status ? '启用' : '禁用' }}
        </el-button>
      </template>
    </pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { goodsContentConfig } from './config/goodsContentConfig'

export default defineComponent({
  name: 'goods',
  components: { pageContent },
  setup() {
    return {
      goodsContentConfig
    }
  }
})
</script>

<style scoped></style>
