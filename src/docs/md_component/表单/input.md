::: title 输入框
:::

::: descript ahsdoah_descript
:::

::: show 基本使用

<template>
	<iu-input v-model="input_value">
	</iu-input>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let input_value = ref('');

    return {
      input_value,
    }
  }
}
</script>

:::

::: show 允许清空

<template>
	<iu-input v-model="input_value" :allow_clear="true">
	</iu-input>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let input_value = ref('');

    return {
      input_value,
    }
  }
}
</script>

:::