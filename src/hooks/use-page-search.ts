import { ref } from 'vue'
import pageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfoInput: any) => {
    pageContentRef.value?.getPageData(queryInfoInput)
  }
  return [handleResetClick, handleQueryClick, pageContentRef]
}
