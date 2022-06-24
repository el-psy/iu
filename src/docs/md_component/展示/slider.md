::: title 进度
:::

::: descript ahsdoah_descript
:::

::: show 基础使用

<template>
	<iu-slider v-model="input_value"></iu-slider>
  <br>
  <iu-input-number v-model="input_value"></iu-input-number>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let input_value = ref(20);

    return {
      input_value,
    }
  }
}
</script>

:::

::: show 区间

<template>
	<iu-slider v-model="input_value_1" :min="20" :max="400"></iu-slider>
  <br>
  <iu-input-number v-model="input_value_1"></iu-input-number>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let input_value_1 = ref(20);

    return {
      input_value_1,
    }
  }
}
</script>

:::