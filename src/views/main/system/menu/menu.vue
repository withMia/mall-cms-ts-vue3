<template>
  <div class="user">
    <pageContent
      :ContentConfig="menuContentConfig"
      pageName="menu"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { menuContentConfig } from './config/menuContentConfig'

export default defineComponent({
  name: 'my-menu',
  components: { pageContent },
  setup() {
    return {
      menuContentConfig
    }
  }
})
</script>
<style lang="less"></style>
