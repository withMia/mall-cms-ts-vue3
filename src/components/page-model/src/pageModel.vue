<template>
  <div class="page-model">
    <el-dialog
      center
      draggable
      destroy-on-close
      v-model="dialogVisible"
      width="40%"
    >
      <template #title>
        <h2 class="dialogTitle">{{ dialogTitle }}</h2>
      </template>
      <searchForm v-bind="ModelConfig" v-model="formData"> </searchForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handelCancelClick">取消</el-button>
          <el-button type="primary" @click="handelConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import searchForm from '@/base-ui/form'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    ModelConfig: {
      type: Object,
      required: true
    },
    defaultInfo: { type: Object, default: () => ({}) },
    otherInfo: { type: Object, default: () => ({}) },
    pageName: {
      type: String,
      require: true
    }
  },
  components: { searchForm },
  setup(props) {
    const store = useStore()
    const formData = ref<any>({})
    const dialogVisible = ref(false)
    const dialogTitle = ref('')
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.ModelConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    const handelCancelClick = () => {
      dialogVisible.value = false
    }
    const handelConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log('编辑')

        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        console.log('新建')

        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          createData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return {
      dialogTitle,
      formData,
      dialogVisible,
      handelCancelClick,
      handelConfirmClick
    }
  }
})
</script>

<style scoped lang="less">
.page-model {
  .dialogTitle {
    padding-top: 10px;
  }
}
</style>
