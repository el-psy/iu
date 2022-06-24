::: title 面包屑
:::

::: descript ahsdoah_descript
:::

::: show 基本使用

<template>
	<iu-tab :close="close_mark" v-model:tab_active="tab_active_name">
		<iu-tab-item title="first" name="1">first item</iu-tab-item>
		<iu-tab-item title="second" name="2">second item</iu-tab-item>
		<iu-tab-item title="third" name="3">third item</iu-tab-item>
		<iu-tab-item title="forth" name="4">forth item</iu-tab-item>
	</iu-tab>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let close_mark = ref(true);
	let tab_active_name = ref('1');

    return {
      close_mark,
	  tab_active_name
    }
  }
}
</script>

:::