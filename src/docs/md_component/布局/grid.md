::: title 基本介绍
:::

::: descript 栅格系统
:::

::: title 基础使用
:::

::: show 基础使用

<template>
  <iu-row gutter="10">
	<iu-col xs="6" sm="6" md="6" lg="6"><div class="demo">1</div></iu-col>
	<iu-col xs="6" sm="6" md="6" lg="6"><div class="demo">2</div></iu-col>
	<iu-col xs="6" sm="6" md="6" lg="6"><div class="demo">3</div></iu-col>
	<iu-col xs="6" sm="6" md="6" lg="6"><div class="demo">4</div></iu-col>
	<iu-col xs="6" sm="6" md="6" lg="6"><div class="demo">5</div></iu-col>
	<iu-col xs="6" sm="6" md="6" lg="6"><div class="demo">6</div></iu-col>
  </iu-row>
</template>

<style>
	div.demo {
		height:50px;
		line-height:50px;
		text-align:center;
		background-color: fuchsia;
		border: 1px solid black;
	}
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

::: title 栅格偏移
:::

::: show 

<template>
  <iu-row gutter="10">
	<iu-col xs="4" sm="4" md="4" lg="4"><div class="demo">1</div></iu-col>
	<iu-col xs="4" sm="4" md="4" lg="4" lg_offset="4" md_offset="4"><div class="demo">2</div></iu-col>
  </iu-row>
</template>

<style>
	div.demo {
		height:50px;
		line-height:50px;
		text-align:center;
		background-color: fuchsia;
		border: 1px solid black;
	}
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

::: title 栅格适应
:::

::: show 

<template>
  <iu-row gutter="10">
	<iu-col xs="12" sm="6" md="4" lg="3"><div class="demo">1</div></iu-col>
	<iu-col xs="12" sm="6" md="4" lg="3"><div class="demo">2</div></iu-col>
	<iu-col xs="12" sm="6" md="4" lg="3"><div class="demo">3</div></iu-col>
	<iu-col xs="12" sm="6" md="4" lg="3"><div class="demo">4</div></iu-col>
	<iu-col xs="12" sm="6" md="4" lg="3"><div class="demo">5</div></iu-col>
	<iu-col xs="12" sm="6" md="4" lg="3"><div class="demo">6</div></iu-col>
  </iu-row>
</template>

<style>
	div.demo {
		height:50px;
		line-height:50px;
		text-align:center;
		background-color: fuchsia;
		border: 1px solid black;
	}
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

::: title row属性
:::

::: table

|属性|属性值|默认值|
|---|---|--|
|gutter|string number|20|

:::

::: title col属性
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