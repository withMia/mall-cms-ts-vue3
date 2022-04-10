// import { ITable } from '@/base-ui/Table/types'

export const menuContentConfig = {
  title: '菜单列表',
  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: '120',
      slotName: 'Name'
    },
    {
      prop: 'type',
      label: '类型',
      minWidth: '100',
      slotName: 'type'
    },
    {
      prop: 'url',
      label: '菜单链接',
      minWidth: '100',
      slotName: 'url'
    },
    {
      prop: 'icon',
      label: '菜单图标',
      minWidth: '100',
      slotName: 'icon'
    },
    {
      prop: 'permission',
      label: '权限',
      minWidth: '100',
      slotName: 'permission'
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
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
