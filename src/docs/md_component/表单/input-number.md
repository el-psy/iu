::: title 数字输入框
:::

::: descript ahsdoah_descript
:::

::: show 基本使用

<template>
	<iu-input-number v-model="input_value">
	</iu-input-number>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let input_value = ref(0);

    return {
      input_value,
    }
  }
}
</script>

:::

::: show 限制数字大小

<template>
	<iu-input-number v-model="input_value_2" :min="0" :max="10">
	</iu-input-number>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let input_value_2 = ref(0);

    return {
      input_value_2,
    }
  }
}
</script>

:::

::: show 步长

<template>
	<iu-input-number v-model="input_value_3" :step="10">
	</iu-input-number>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let input_value_3 = ref(0);

    return {
      input_value_3,
    }
  }
}
</script>

:::