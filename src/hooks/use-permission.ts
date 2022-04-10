import { useStore } from '@/store'
export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  // 获取所有的权限
  const permissions = store.state.login.permissions
  //需要判断的权限
  const verifyPermission = `system:${pageName}:${handleName}`
  //   !!可以转换为布尔值
  // 判断是否有这项权限
  return !!permissions.find((item) => item === verifyPermission)
}
