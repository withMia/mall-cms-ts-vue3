<template>
  <div class="list">
    <pageSearch
      :SearchConfig="categorySearchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>

    <pageContent
      ref="pageContentRef"
      :ContentConfig="categoryContentConfig"
      pageName="category"
      @createBtnClick="handleCreateData"
      @editBtnClick="handleEditData"
    >
      <template #createLabel> 新建故事 </template>
    </pageContent>
    <pageModel
      :defaultInfo="defaultInfo"
      ref="pageModelRef"
      :ModelConfig="categoryModelConfig"
      pageName="category"
    ></pageModel>
  </div>
</template>

<script lang="ts">
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'

import { defineComponent } from 'vue'
import { categorySearchConfig } from './config/categorySearchConfig'
import { categoryContentConfig } from './config/categoryContentConfig'
import { categoryModelConfig } from './config/categoryModelConfig'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModel } from '@/hooks/use-model-page'

export default defineComponent({
  name: 'list',
  components: { pageSearch, pageContent, pageModel },
  setup() {
    const [handleResetClick, handleQueryClick, pageContentRef] = usePageSearch()
    const createCallback = () => {
      pageModelRef.value.dialogTitle = '新建故事'
    }
    const editCallback = () => {
      pageModelRef.value.dialogTitle = '编辑故事'
    }
    const [pageModelRef, handleCreateData, handleEditData, defaultInfo] =
      usePageModel(createCallback, editCallback)

    return {
      categorySearchConfig,
      categoryContentConfig,
      categoryModelConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModelRef,
      handleCreateData,
      handleEditData,
      defaultInfo
    }
  }
})
</script>
<style lang="less"></style>
