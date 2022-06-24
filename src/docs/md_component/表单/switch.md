::: title 面包屑
:::

::: descript ahsdoah_descript
:::

::: show 基本使用

<template>
	<iu-switch v-model:select_key="select_key">
	</iu-switch>开关kaiguan
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let select_key = ref(true);

    return {
      select_key,
    }
  }
}
</script>

:::