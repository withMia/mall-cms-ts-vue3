import { IForm } from '@/base-ui/form'

export const userModelConfig: IForm = {
  formItems: [
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
      field: 'password',
      label: '密码',
      type: 'input',
      placeholder: '请输入密码',
      isHidden: true
    },
    {
      field: 'cellphone',
      label: '电话号码',
      type: 'input',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      label: '选择部门',
      type: 'select',
      options: [],
      placeholder: '请选择部门'
    },
    {
      field: 'roleId',
      label: '选择角色',
      type: 'select',
      options: [],
      placeholder: '请选择角色'
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
