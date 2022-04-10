<template>
  <div class="page-content">
    <infoTable
      v-bind="ContentConfig"
      :listData="dataList"
      :dataCount="dataCount"
      v-model:page="pageInfo"
    >
      <!-- 表头的插槽 -->
      <template #headerHandler>
        <el-button
          type="primary"
          plain
          v-if="isCreate"
          @click="handleCreateClick"
        >
          <slot name="createLabel"> 新建数据 </slot>
        </el-button>
      </template>
      <!-- 表内容的公共插槽 -->
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handler-btns">
          <el-button
            plain
            size="small"
            type="primary"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
          >
            <el-icon><Edit /></el-icon>编辑
          </el-button>
          <el-button
            plain
            size="small"
            type="danger"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
          >
            <el-icon><Delete /></el-icon>删除
          </el-button>
        </div>
      </template>
      <!-- 动态插入表内容的其它插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </infoTable>
  </div>
</template>

<script lang="ts">
import infoTable from '@/base-ui/table'
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/use-permission'

export default defineComponent({
  props: {
    ContentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: { infoTable },
  emits: ['createBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()
    // 获取权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isEdit = usePermission(props.pageName, 'edit')
    const isQuery = usePermission(props.pageName, 'query')

    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => {
      getPageData()
    })
    // 发送网络请求
    const getPageData = (queryInfoInput: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfoInput
        }
      })
    }

    getPageData()
    // 从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed((q) =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    // 获取其它的动态插槽名称
    const otherPropSlots = props.ContentConfig?.propList.filter((item: any) => {
      //  排除公共的插槽
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    // 删除操作
    const handleDeleteClick = (item: any) => {
      // console.log(item)
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    // 新建操作
    const handleCreateClick = () => {
      emit('createBtnClick')
    }
    // 编辑操作
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      dataList,
      dataCount,
      getPageData,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isEdit,
      handleDeleteClick,
      handleCreateClick,
      handleEditClick
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px 20px 20px 10px;
  border-top: 20px solid #f5f5f5;
}
</style>
