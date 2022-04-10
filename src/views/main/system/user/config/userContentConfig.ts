// import { ITable } from '@/base-ui/table/types'

export const userContentConfig = {
  propList: [
    { prop: 'name', label: '用户名', minWidth: '120', slotName: 'userName' },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '100',
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      minWidth: '130',
      slotName: 'cellphone'
    },
    { prop: 'enable', label: '状态', minWidth: '80', slotName: 'enable' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '180',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '160',
      slotName: 'handler'
    }
  ],
  showIndexCol: true,
  showSelectCol: true,
  title: '用户列表'
}
