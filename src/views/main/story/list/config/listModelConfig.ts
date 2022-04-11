import { IForm } from '@/base-ui/form'

export const listModelConfig: IForm = {
  formItems: [
    {
      field: 'title',
      label: '标题',
      type: 'input',
      placeholder: '请输入标题'
    },
    {
      field: 'content',
      label: '内容',
      type: 'input',
      placeholder: '请输入内容'
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
