// import { ITable } from '@/base-ui/table/types'

export const goodsContentConfig = {
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '150', slotName: 'userName' },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '80',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '80',
      slotName: 'newPrice'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '130',
      slotName: 'img'
    },
    { prop: 'status', label: '状态', minWidth: '80', slotName: 'status' },
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
  title: '商品列表'
}
