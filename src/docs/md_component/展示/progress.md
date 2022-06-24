::: title 进度
:::

::: descript ahsdoah_descript
:::

::: show 基础使用

<template>
	<iu-progress :percent="input_value">
	</iu-progress>
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

::: show 尺寸大小

<template>
	<iu-progress :percent="input_value_2" size="s"></iu-progress>
	<br>
	<iu-progress :percent="input_value_2" size="m"></iu-progress>
	<br>
	<iu-progress :percent="input_value_2" size="l"></iu-progress>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let input_value_2 = ref(30);

    return {
      input_value_2,
    }
  }
}
</script>

:::

::: show 颜色

<template>
	<iu-progress :percent="input_value_3" color="red"></iu-progress>
	<br>
	<iu-progress :percent="input_value_3" color="green"></iu-progress>
	<br>
	<iu-progress :percent="input_value_3" color="blue"></iu-progress>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let input_value_3 = ref(70);

    return {
      input_value_3,
    }
  }
}
</script>

:::