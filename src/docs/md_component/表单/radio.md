::: title 单选框
:::

::: descript ahsdoah_descript
:::

::: show 基本使用

<template>
	<iu-radio v-model="check" value="value_1">label_1</iu-radio>
	<iu-radio v-model="check" value="value_2">label_2</iu-radio>
	<iu-radio v-model="check" value="value_3">label_3</iu-radio>
	<br>
	result: {{ check }}
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let check = ref('');

    return {
      check,
    }
  }
}
</script>

:::