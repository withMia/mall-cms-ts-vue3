<template>
  <div class="login-panel">
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <!-- 插槽 #label -->
        <template #label>
          <span>
            <el-icon><user /></el-icon>
            &nbsp;账号登录
          </span>
        </template>
        <AccountLogin ref="accountRef"></AccountLogin>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <!-- 插槽 #label -->
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>
            &nbsp;手机登录
          </span>
        </template>
        <PhoneLogin ref="phoneRef"></PhoneLogin>
      </el-tab-pane>
    </el-tabs>
    <div class="password-control">
      <el-checkbox :checked="isKeepPassword">记住密码</el-checkbox>
      <el-link href="">忘记密码</el-link>
    </div>
    <el-button class="login-button" type="primary" @click="handleLoginClick">
      立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PhoneLogin from './phone-login.vue'
import AccountLogin from './account-login.vue'

export default defineComponent({
  components: {
    PhoneLogin,
    AccountLogin
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof AccountLogin>>()
    const currentTab = ref<string>('account')
    const phoneRef = ref<InstanceType<typeof PhoneLogin>>()

    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.loginAction(isKeepPassword.value)
      }
    }
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      currentTab,
      phoneRef
    }
  }
})
</script>

<style scoped>
.login-panel {
  margin-bottom: 130px;
  width: 320px;
}
.title {
  text-align: center;
}

.password-control {
  width: 100%;
  display: flex;
  padding-top: 5px;
  justify-content: space-between;
}
.login-button {
  width: 100%;
  margin-top: 10px;
}
</style>
