import { IForm } from '@/base-ui/form/types'

export const roleSearchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名',
      type: 'input',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      label: '权限',
      type: 'input',
      placeholder: '请输入权限'
    },
    {
      field: 'createAt',
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        type: 'daterange',
        startplaceholder: '起始时间',
        endplaceholder: '终止时间',
        defaultTime: [
          new Date(2000, 1, 1, 0, 0, 0),
          new Date(2000, 2, 1, 23, 59, 59)
        ]
      }
    }
  ],
  labelWidth: '90px',
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  itemStyle: { padding: '10px 10px' }
}
