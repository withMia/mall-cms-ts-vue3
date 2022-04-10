<template>
  <div class="user-info">
    <el-dropdown>
      <span class="user-name">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        {{ name }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item divided
            ><el-icon><UserFilled /></el-icon>用户信息</el-dropdown-item
          >
          <el-dropdown-item
            ><el-icon><Management /></el-icon>系统管理</el-dropdown-item
          >
          <el-dropdown-item @click="handleExitClick">
            <el-icon><CircleCloseFilled /></el-icon>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    const router = useRouter()
    const handleExitClick = () => {
      localCache.removeCache('token')
      router.push('/login')
    }
    return { name, handleExitClick }
  }
})
</script>

<style scoped>
.user-name {
  display: flex;
  align-items: center;
}
</style>
