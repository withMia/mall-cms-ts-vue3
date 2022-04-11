import { IForm } from '@/base-ui/form/types'

export const departmentSearchConfig: IForm = {
  formItems: [
    { field: 'id', label: 'ID', type: 'input', placeholder: '请输入用户id' },
    {
      field: 'name',
      label: '部门名称',
      type: 'input',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      label: '部门主管',
      type: 'input',
      placeholder: '请输入部门主管'
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
