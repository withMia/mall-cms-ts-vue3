<template>
  <div class="page-search">
    <searchForm v-bind="SearchConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handel-btns">
          <el-button plain type="primary" @click="querySearchData">
            搜索
            <el-icon><Search /></el-icon>
          </el-button>
          <el-button plain type="primary" @click="resetSearchData">
            重置<el-icon><Refresh /></el-icon>
          </el-button>
        </div>
      </template>
    </searchForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import searchForm from '@/base-ui/form'

export default defineComponent({
  props: {
    SearchConfig: {
      type: Object,
      required: true
    }
  },
  components: { searchForm },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // SearchForm中各个输入框双向绑定的属性由配置文件中的的field来决定
    const formItems = props.SearchConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    // console.log(formOriginData)
    const formData = ref(formOriginData)

    // 1.重置操作
    const resetSearchData = () => {
      formData.value = formOriginData
      // for (const key in formOriginData) {
      //   // console.log(key) //field
      //   formData.value[`${key}`] = formOriginData[key]
      // }
      emit('resetBtnClick')
    }
    // 2.搜索操作

    const querySearchData = () => {
      emit('queryBtnClick', formData.value)
    }

    return { formData, resetSearchData, querySearchData }
  }
})
</script>

<style scoped lang="less">
.searchForm {
  padding: 22px 68px 22px 0;
  .footer {
    background-color: #fff;
    .handel-btns {
      text-align: right;
      padding: 0 30px 20px 0;
    }
  }
}
</style>
