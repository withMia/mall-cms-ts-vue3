export interface IFormItem {
  label: string
  type: string
  field: string
  isHidden?: boolean
  // 校验规则
  rules?: any[]
  placeholder?: any
  // select
  options?: any
  //datepicker
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemStyle: any
}
