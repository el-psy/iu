::: title 复选框
:::

::: descript ahsdoah_descript
:::

::: show 基本使用

<template>
	<iu-checkbox v-model="check" value="value_1">label_1</iu-checkbox>
  <iu-checkbox v-model="check" value="value_2">label_2</iu-checkbox>
  <iu-checkbox v-model="check" value="value_3">label_3</iu-checkbox>
  <br>
  result: {{ check }}
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let check = ref([]);

    return {
      check,
    }
  }
}
</script>

:::