import { ITable } from '@/base-ui/table/types'

export const listContentConfig: ITable = {
  propList: [
    { prop: 'title', label: '标题', minWidth: '150', slotName: 'title' },
    {
      prop: 'content',
      label: '内容',
      minWidth: '300',
      slotName: 'content'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180',
      slotName: 'createAt'
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
