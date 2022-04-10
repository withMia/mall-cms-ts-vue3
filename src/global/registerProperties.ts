// 全局添加属性
import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
