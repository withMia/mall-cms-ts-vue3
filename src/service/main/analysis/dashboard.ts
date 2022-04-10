import myRequest from '@/service'
import { IDataType } from '../../types'

enum dashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function getCategoryGoodsCount() {
  return myRequest.get<IDataType>({
    url: dashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return myRequest.get<IDataType>({
    url: dashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return myRequest.get<IDataType>({
    url: dashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return myRequest.get<IDataType>({
    url: dashboardAPI.addressGoodsSale
  })
}
