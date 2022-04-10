import myRequest from '../../index'
import { IDataType } from '../../types'

// url：users/list
export function getPageListData(url: string, queryInfo: any) {
  return myRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url：users/id
export function deletePageData(url: string) {
  return myRequest.delete<IDataType>({
    url: url
  })
}

// url：users
export function createPageData(url: string, createData: any) {
  return myRequest.post<IDataType>({
    url: url,
    data: createData
  })
}

// url：users/1
export function editPageData(url: string, editData: any) {
  return myRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
