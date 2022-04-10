// import { ITable } from '@/base-ui/table/types'

export const roleContentConfig = {
  propList: [
    {
      prop: 'name',
      label: '角色名称',
      minWidth: '120',
      slotName: 'Name'
    },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '200',
      slotName: 'intro'
    },
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
  title: '角色列表'
}
