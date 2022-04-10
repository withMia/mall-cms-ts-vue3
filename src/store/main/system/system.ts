import { Module } from 'vuex'
import { IRootState } from '@/store/rootTypes'
import { ISystemState } from './types'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'
import { firstCapitaltoUpper } from '@/utils/stringChange'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList: any) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: any) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: any) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: any) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: any) {
      state.menuCount = menuCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 1.对页面发送请求获取列表数据
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `${pageName}/list`
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      commit(`change${firstCapitaltoUpper(pageName)}List`, list)
      commit(`change${firstCapitaltoUpper(pageName)}Count`, totalCount)
    },
    // 2.删除列表数据
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 删除数据
      await deletePageData(pageUrl) //注意：user id小于10不允许删除

      //重新获取数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 3.新建列表数据
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, createData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, createData)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 4.编辑列表数据
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
