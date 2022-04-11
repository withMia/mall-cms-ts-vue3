<template>
  <div class="chat">
    <h1 class="title">你的故事</h1>
    <StoryEditor v-model:value="htmlString" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import StoryEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: {
    StoryEditor
  },
  setup() {
    const htmlString = ref<string>('Type your story')
    return {
      htmlString
    }
  }
})
</script>

<style scoped lang="less">
.chat {
  margin: 20px;
  .title {
    padding-top: 30px;
  }
}
</style>
