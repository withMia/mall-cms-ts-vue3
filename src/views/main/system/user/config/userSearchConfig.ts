import { IForm } from '@/base-ui/form/types'

export const userSearchConfig: IForm = {
  formItems: [
    { field: 'id', label: 'ID', type: 'input', placeholder: '请输入用户id' },
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      type: 'input',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      label: '电话号码',
      type: 'input',
      placeholder: '请输入电话号码'
    },
    {
      field: 'enable',
      label: '用户状态',
      type: 'select',
      placeholder: '请选择用户状态',
      options: [
        {
          title: '启用',
          value: '1'
        },
        {
          title: '禁用',
          value: '0'
        }
      ]
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
  labelWidth: '68px',
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  itemStyle: { padding: '10px 10px' }
}
