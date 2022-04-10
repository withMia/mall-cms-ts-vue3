<template>
  <div class="login">
    <h1 class="title">后台管理系统</h1>
    <LoginPanel></LoginPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    padding-top: 100px;
  }
}
</style>
