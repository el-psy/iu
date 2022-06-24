::: title 基本介绍
:::

::: descript 卡片
:::

::: title 按钮尺寸
:::

::: show 基础使用

<template>
  <iu-card>
	<template v-slot:title>标题</template>
	<template v-slot:body>内容</template>
  </iu-card>
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



::: title card属性
:::

::: table

|属性|描述|属性值|默认值|
|---|----|---|--|
|xs|尺寸超小<576px|string number|md|
|sm|尺寸小屏 576px-768px|string number|plain|
|md|中屏 768-1200px|string number|false|
|lg|大屏 >1200px|string number|false|
|xs_offset|尺寸偏移 屏幕超小<576px|string number|md|
|sm_offset|尺寸偏移 小屏 576px-768px|string number|plain|
|md_offset|尺寸偏移 中屏 768-1200px|string number|false|
|lg_offset|尺寸偏移 大屏 >1200px|string number|false|

:::