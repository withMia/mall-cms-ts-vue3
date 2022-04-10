<template>
  <div class="user-login">
    <el-form label-width="70px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="用户名:" prop="name">
        <el-input v-model="account.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import LocalCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      // console.log('用户登录中')
      formRef.value?.validate((valid) => {
        // console.log('验证' + valid)
        if (valid) {
          // console.log('执行登录逻辑')
          // 1.判断是否记住密码
          if (isKeepPassword) {
            //将密码进行本地存储
            {
              LocalCache.setCache('name', account.name)
              LocalCache.setCache('password', account.password)
            }
          } else {
            LocalCache.removeCache('name')
            LocalCache.removeCache('password')
          }

          // 2.开始登陆验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
