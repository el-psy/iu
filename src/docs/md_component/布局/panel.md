::: title 基本介绍
:::

::: descript 面板
:::

::: title 基础使用
:::

::: show 

<template>
  <iu-panel>
	<div style="padding:30px;">面板</div>
  </iu-panel>
</template>

<style>
	
</style>

<script>
import { ref } from 'vue'

export default {
  setup() {

    return {
    }
  }
}
</script>

:::

::: title 阴影
:::

::: show 属性shadow，可选always，hover，never。

<template>
  <iu-panel shadow="hover" >
	<div style="padding:30px;">面板</div>
  </iu-panel>
</template>

<style>

</style>

<script>
import { ref } from 'vue'

export default {
  setup() {

    return {
    }
  }
}
</script>

:::

::: title panel属性
:::

::: table

|属性|描述|属性值|默认值|
|---|----|---|--|
|shadow|阴影|always hover never|md|

:::