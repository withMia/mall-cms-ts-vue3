import { IForm } from '@/base-ui/form/types'

export const roleModelConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名称',
      type: 'input',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      label: '权限介绍',
      type: 'input',
      placeholder: '请输入角色权限'
    }
  ],
  labelWidth: '68px',
  colLayout: {
    span: 20
  },
  itemStyle: { padding: '10px 0px' }
}
