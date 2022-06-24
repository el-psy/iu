::: title 面包屑
:::

::: descript ahsdoah_descript
:::

::: show 基本使用

<template>
	<iu-breadcrumb :crumb="crumb">
	</iu-breadcrumb>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let crumb = ref([
		{
			title:'References',
			link:'http://202.108.22.5'
		},
		{
			title:'Basic',
			link:''
		},
	]);

    return {
      crumb
    }
  }
}
</script>

:::

::: show 分隔符

<template>
	<iu-breadcrumb :crumb="crumb" separator="--">
	</iu-breadcrumb>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let crumb = ref([
		{
			title:'References',
			link:'http://202.108.22.5'
		},
		{
			title:'Basic',
			link:''
		},
	]);

    return {
      crumb
    }
  }
}
</script>

:::