import { Module } from 'vuex'
import { IDashboardState } from './types'
import { IRootState } from '@/store/rootTypes'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changecGCount(state, cGCount: any) {
      state.categoryGoodsCount = cGCount
    },
    changecGSale(state, cGSale: any) {
      state.categoryGoodsSale = cGSale
    },
    changecGFavor(state, cGFavor: any) {
      state.categoryGoodsFavor = cGFavor
    },
    changeaGSale(state, aGSale: any) {
      state.addressGoodsSale = aGSale
    }
  },
  getters: {},
  actions: {
    async getDashboardAction({ commit }, payload: any) {
      const cGCountResult = await getCategoryGoodsCount()
      const cGSaleResult = await getCategoryGoodsSale()
      const cGFavorResult = await getCategoryGoodsFavor()
      const aGSaleResult = await getAddressGoodsSale()
      const cGCount = cGCountResult.data
      const cGSale = cGSaleResult.data
      const cGFavor = cGFavorResult.data
      const aGSale = aGSaleResult.data
      commit('changecGCount', cGCount)
      commit('changecGSale', cGSale)
      commit('changecGFavor', cGFavor)
      commit('changeaGSale', aGSale)
      console.log(cGCount)
      console.log(cGSale)
      console.log(cGFavor)
      console.log(aGSale)
    }
  }
}
export default dashboardModule
