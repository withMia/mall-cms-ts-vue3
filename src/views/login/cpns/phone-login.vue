<template>
  <div class="user-login">
    <el-form
      label-width="70px"
      :rules="rules"
      :model="phoneAccount"
      ref="formRef"
    >
      <el-form-item label="手机号:" prop="phone">
        <el-input v-model="phoneAccount.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="验证码:" prop="verifyCode">
        <el-input
          v-model="phoneAccount.verifyCode"
          placeholder="请输入验证码"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/phone-config'
import LocalCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const formRef = ref<InstanceType<typeof ElForm>>()

    const store = useStore()
    const phoneAccount = reactive({
      phone: LocalCache.getCache('phone') ?? '',
      verifyCode: LocalCache.getCache('verifyCode') ?? ''
    })
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            LocalCache.setCache('phone', phoneAccount.phone)
            LocalCache.setCache('verifyCode', phoneAccount.verifyCode)
          } else {
            LocalCache.removeCache('phone')
            LocalCache.removeCache('verifyCode')
          }
        }
        store.dispatch('login/phoneLoginAction', { ...phoneAccount })
      })
    }
    return {
      phoneAccount,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
