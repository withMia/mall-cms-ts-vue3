<template>
  <div class="department">
    <pageSearch
      :SearchConfig="departmentSearchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>

    <pageContent
      ref="pageContentRef"
      :ContentConfig="departmentContentConfig"
      pageName="department"
      @createBtnClick="handleCreateData"
      @editBtnClick="handleEditData"
    >
      <template #createLabel> 新建部门 </template>
    </pageContent>
    <pageModel
      :defaultInfo="defaultInfo"
      ref="pageModelRef"
      :ModelConfig="cDModelConfig"
      pageName="department"
    ></pageModel>
  </div>
</template>

<script lang="ts">
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'

import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { departmentSearchConfig } from './config/departmentSearchConfig'
import { departmentContentConfig } from './config/departmentContentConfig'
import { departmentModelConfig } from './config/departmentModelConfig'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModel } from '@/hooks/use-model-page'

export default defineComponent({
  name: 'department',
  components: { pageSearch, pageContent, pageModel },
  setup() {
    const store = useStore()
    const cDModelConfig = computed(() => {
      const parentIdItem = departmentModelConfig.formItems?.find(
        (item) => item.field === 'parentId'
      )
      parentIdItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })
      return departmentModelConfig
    })
    const [handleResetClick, handleQueryClick, pageContentRef] = usePageSearch()
    const createCallback = () => {
      pageModelRef.value.dialogTitle = '新建部门'
    }
    const editCallback = () => {
      pageModelRef.value.dialogTitle = '编辑部门'
    }

    // 弹窗
    const [pageModelRef, handleCreateData, handleEditData, defaultInfo] =
      usePageModel(createCallback, editCallback)

    return {
      departmentSearchConfig,
      departmentContentConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModelRef,
      handleCreateData,
      handleEditData,
      defaultInfo,
      cDModelConfig
    }
  }
})
</script>
<style lang="less"></style>
