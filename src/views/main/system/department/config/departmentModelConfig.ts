import { IForm } from '@/base-ui/form'

export const departmentModelConfig: IForm = {
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
      field: 'parentId',
      label: '上级部门',
      type: 'input',
      placeholder: '请输入上级部门'
    }
  ],
  labelWidth: '68px',
  colLayout: {
    span: 20
  },
  itemStyle: {
    padding: '10px 0'
  }
}
