export interface ITableItem {
  prop?: string
  label: string
  minWidth: string
  slotName: string
}

export interface ITable {
  propList: ITableItem[]
  showIndexCol: boolean
  showSelectCol: boolean
  title: string
}
