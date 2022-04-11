import { ITable } from '@/base-ui/table/types'

export const departmentContentConfig: ITable = {
  propList: [
    { prop: 'leader', label: '部门主管', minWidth: '80', slotName: 'leader' },
    {
      prop: 'parentId',
      label: '上级部门',
      minWidth: '120',
      slotName: 'parentId'
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
  title: '部门列表'
}
