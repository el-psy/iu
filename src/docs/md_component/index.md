::: title index
:::

::: descript ahsdoah_descript
:::

::: show 尽管按钮在同节点并排时会自动拉开间距，但在按钮太多的情况，效果并不是很美好。因为你需要用到按钮容器

<template>
  <lay-button-container>
      <lay-button type="default" :loading="loadState">加载</lay-button>
      <lay-switch v-model="loadState"></lay-switch>
  </lay-button-container>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const loadState = ref(true)

    return {
      loadState
    }
  }
}
</script>

:::
