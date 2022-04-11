import { IForm } from '@/base-ui/form'

export const categoryModelConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '类别名称',
      type: 'input',
      placeholder: '请输入类别名称'
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
