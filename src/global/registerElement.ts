const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElIcon,
  Cellphone,
  User,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElSubMenu,
  ElMenuItem,
  Expand,
  Fold,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElOption,
  ElSelect,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  Search,
  Refresh,
  ElTable,
  ElTableColumn,
  Edit,
  Delete,
  RefreshRight,
  ElPagination,
  ElImage,
  ElDialog,
  Management,
  UserFilled,
  CircleCloseFilled,
  ElTree,
  ElCard
]

// 局部导入的路径
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElSubMenu,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElOption,
  ElSelect,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard
} from 'element-plus/lib/components'

import {
  Cellphone,
  User,
  Expand,
  Fold,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Search,
  Refresh,
  Edit,
  Delete,
  RefreshRight,
  Management,
  UserFilled,
  CircleCloseFilled
} from '@element-plus/icons'

import { App } from 'vue'

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
