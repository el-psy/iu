::: title 基本介绍
:::

::: descript 按钮用于开始一个即时操作
:::

::: title 按钮尺寸
:::

::: show 使用```size```属性, 创建指定尺寸的按钮, 可选值```lg``` ```sm``` ```xs```

<template>
  <iu-button size="sm">测试按钮</iu-button>
  <iu-button size="md">测试按钮</iu-button>
  <iu-button size="lg">测试按钮</iu-button>
</template>

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

::: title 按钮颜色
:::

::: show 使用```bgc```属性, 调整按钮颜色, 可选值```red``` ```lime``` ```blue```等

<template>
  <iu-button brightness="light" bgc="red">测试按钮</iu-button>
  <iu-button brightness="light" bgc="lime">测试按钮</iu-button>
  <iu-button brightness="light" bgc="blue">测试按钮</iu-button>
  <iu-button brightness="light" bgc="yellow">测试按钮</iu-button>
  <iu-button brightness="light" bgc="fuchsia">测试按钮</iu-button>
  <iu-button brightness="light" bgc="aqua">测试按钮</iu-button>
  <iu-button brightness="light" bgc="plain">测试按钮</iu-button>
</template>

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

::: title 按钮圆角
:::

::: show 使用```radius```属性, 调整按钮颜色, 可选值```red``` ```lime``` ```blue```等

<template>
  <iu-button radius bgc="red">测试按钮</iu-button>
  <iu-button radius bgc="lime">测试按钮</iu-button>
  <iu-button radius bgc="blue">测试按钮</iu-button>
  <iu-button radius bgc="yellow">测试按钮</iu-button>
  <iu-button radius bgc="fuchsia">测试按钮</iu-button>
  <iu-button radius bgc="aqua">测试按钮</iu-button>
  <iu-button radius bgc="plain">测试按钮</iu-button>
</template>

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

::: title 流式按钮
:::

::: show 使用```fluid```属性。

<template>
  <div style="width:100%; margin:0 auto;">
    <iu-button fluid bgc="red">测试按钮</iu-button>
    <iu-button fluid bgc="lime">测试按钮</iu-button>
    <iu-button fluid bgc="blue">测试按钮</iu-button>
    <iu-button fluid bgc="yellow">测试按钮</iu-button>
    <iu-button fluid bgc="fuchsia">测试按钮</iu-button>
    <iu-button fluid bgc="aqua">测试按钮</iu-button>
    <iu-button fluid bgc="plain">测试按钮</iu-button>
  </div>
</template>

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

::: title 禁用状态
:::

::: show 使用```disabled```属性。

<template>
  <div style="width:100%; margin:0 auto;">
    <iu-button disabled bgc="red">测试按钮</iu-button>
    <iu-button disabled bgc="lime">测试按钮</iu-button>
    <iu-button disabled bgc="blue">测试按钮</iu-button>
    <iu-button disabled bgc="yellow">测试按钮</iu-button>
    <iu-button disabled bgc="fuchsia">测试按钮</iu-button>
    <iu-button disabled bgc="aqua">测试按钮</iu-button>
    <iu-button disabled bgc="plain">测试按钮</iu-button>
  </div>
</template>

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

::: title 暗色模式
:::

::: show 使用```brightness```属性，修改为```dark```。

<template>
  <div style="width:100%; margin:0 auto;">
    <iu-button brightness="dark" bgc="red">测试按钮</iu-button>
    <iu-button brightness="dark" bgc="lime">测试按钮</iu-button>
    <iu-button brightness="dark" bgc="blue">测试按钮</iu-button>
    <iu-button brightness="dark" bgc="yellow">测试按钮</iu-button>
    <iu-button brightness="dark" bgc="fuchsia">测试按钮</iu-button>
    <iu-button brightness="dark" bgc="aqua">测试按钮</iu-button>
    <iu-button brightness="dark" bgc="plain">测试按钮</iu-button>
  </div>
</template>

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

::: table

|属性|属性值|默认值|
|---|---|--|
|size|sm md lg|md|
|bgc|red lime blue yellow fuchsia qua plain|plain|
|radius|true flase|false|
|fluid|true flase|false|
|disabled|true flase|false|
|brightness|light dark|light|

:::