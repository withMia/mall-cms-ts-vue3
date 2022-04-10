<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" class="fold-menu">
      <component class="fold-menu" :is="iconName"></component>
    </el-icon>

    <div class="content">
      <myBreadCrumb :breadcrumbs="breadcrumbs"></myBreadCrumb>
      <userInfo></userInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import myBreadCrumb from '@/base-ui/breadcrumb'
import { pathMapToBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    userInfo,
    myBreadCrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    let iconName = ref('Fold')
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      if (isFold.value == false) {
        iconName.value = 'Expand'
      } else {
        iconName.value = 'Fold'
      }
      emit('foldChange', isFold.value)
    }

    // breadcrumbs的数据
    const breadcrumbs = computed(() => {
      const store = useStore()
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapToBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      iconName,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 20px;
}
</style>
