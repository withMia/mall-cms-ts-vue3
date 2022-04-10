import { ref } from 'vue'
import pageModel from '@/components/page-model'
type CallbackFn = (item?: any) => void

export function usePageModel(
  createCallback?: CallbackFn,
  editCallback?: CallbackFn
) {
  const defaultInfo = ref<any>({})
  const pageModelRef = ref<InstanceType<typeof pageModel>>()
  const handleCreateData = () => {
    defaultInfo.value = {}
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true
    }
    createCallback && createCallback()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true
    }
    console.log('点击了编辑按钮---------')

    editCallback && editCallback(item)
  }
  return [pageModelRef, handleCreateData, handleEditData, defaultInfo]
}
