<template>
  <div class="user">
    <pageSearch
      :SearchConfig="roleSearchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>

    <pageContent
      :ContentConfig="roleContentConfig"
      pageName="role"
      ref="pageContentRef"
      @createBtnClick="handleCreateData"
      @editBtnClick="handleEditData"
    >
      <template #createLabel> 新建角色 </template>
    </pageContent>
    <pageModel
      :defaultInfo="defaultInfo"
      pageName="role"
      ref="pageModelRef"
      :ModelConfig="roleModelConfig"
      :otherInfo="otherInfo"
    >
      <el-tree
        :data="menus"
        ref="elTreeRef"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheckChange"
      ></el-tree>
    </pageModel>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import pageModel from '@/components/page-model'
import { roleContentConfig } from './config/roleContentConfig'
import { roleSearchConfig } from './config/roleSearchConfig'
import { roleModelConfig } from './config/roleModelConfig'
import { usePageModel } from '@/hooks/use-model-page'
import { usePageSearch } from '@/hooks/use-page-search'
import { useStore } from '@/store'
import { getMenuLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: { pageContent, pageSearch, pageModel },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const createCallback = () => {
      pageModelRef.value.dialogTitle = '新建角色'
    }
    const editCallback = (item: any) => {
      pageModelRef.value.dialogTitle = '编辑角色'
      const leafKeys = getMenuLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModelRef, handleCreateData, handleEditData, defaultInfo] =
      usePageModel(createCallback, editCallback)

    const menus = computed(() => store.state.entireMenu)
    const store = useStore()

    const [handleResetClick, handleQueryClick, pageContentRef] = usePageSearch()

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      roleContentConfig,
      roleSearchConfig,
      roleModelConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModelRef,
      handleCreateData,
      handleEditData,
      defaultInfo,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>
<style lang="less">
.page-model {
  .el-tree {
    margin-left: 60px;
  }
}
</style>
