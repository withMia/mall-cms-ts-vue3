import { ITable } from '@/base-ui/table/types'

export const categoryContentConfig: ITable = {
  propList: [
    { prop: 'name', label: '类别名称', minWidth: '150', slotName: 'title' },

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
  title: '故事列表'
}
