<template>
  <div class="user">
    <pageSearch
      :SearchConfig="userSearchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>

    <pageContent
      ref="pageContentRef"
      :ContentConfig="userContentConfig"
      pageName="users"
      @createBtnClick="handleCreateData"
      @editBtnClick="handleEditData"
    >
      <template #enable="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createLabel> 新建用户 </template>
    </pageContent>
    <pageModel
      :defaultInfo="defaultInfo"
      ref="pageModelRef"
      :ModelConfig="userMCComputed"
      pageName="users"
    ></pageModel>
  </div>
</template>

<script lang="ts">
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'

import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { userSearchConfig } from './config/userSearchConfig'
import { userContentConfig } from './config/userContentConfig'
import { userModelConfig } from './config/userModelConfig'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModel } from '@/hooks/use-model-page'

export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent, pageModel },
  setup() {
    const store = useStore()
    // 对store有依赖的数据放在computed里面
    const userMCComputed = computed(() => {
      //   2.2动态添加部门和角色列表数据到弹窗的选项中
      const departmentItem = userModelConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      if (departmentItem)
        departmentItem.options = store.state.entireDepartment.map((item) => {
          return { title: item.name, value: item.id }
        })
      // console.log(departmentItem!.options)
      const roleItem = userModelConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      if (roleItem)
        roleItem.options = store.state.entireRole.map((item) => {
          return { title: item.name, value: item.id }
        })
      // console.log(roleItem!.options)
      console.log(userModelConfig)

      return userModelConfig
    })

    // 1.搜索部分
    // 重置 搜索操作按钮
    const [handleResetClick, handleQueryClick, pageContentRef] = usePageSearch()

    // 2.列表部分
    //  2.1新建和编辑按钮的回调 密码是否显示 弹窗的标题
    const createCallback = () => {
      const passwordItem = userModelConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) passwordItem.isHidden = false
      pageModelRef.value.dialogTitle = '新建用户'
    }
    const editCallback = () => {
      const passwordItem = userModelConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) passwordItem.isHidden = true
      pageModelRef.value.dialogTitle = '编辑用户'
    }

    // 弹窗
    const [pageModelRef, handleCreateData, handleEditData, defaultInfo] =
      usePageModel(createCallback, editCallback)

    return {
      userSearchConfig,
      userContentConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModelRef,
      handleCreateData,
      handleEditData,
      defaultInfo,
      userMCComputed
    }
  }
})
</script>
<style lang="less"></style>
