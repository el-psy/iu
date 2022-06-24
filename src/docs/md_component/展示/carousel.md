::: title 进度
:::

::: descript ahsdoah_descript
:::

::: show 基础使用

<template>
	<iu-carousel :labels="labels">
    <iu-carousel-item :label="1">
      <div style="background-color: pink;height: 100%">1</div>
    </iu-carousel-item>
    <iu-carousel-item :label="2">
      <div style="background-color: lime;height: 100%">2</div>
    </iu-carousel-item>
    <iu-carousel-item :label="3">
      <div style="background-color: cyan;height: 100%">3</div>
    </iu-carousel-item>
  </iu-carousel>
</template>

<style>
  .carousel-md {
    border: 1px solid black;
    background-color: lime;
  }
</style>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let labels = ref([1, 2, 3]);

    return {
      labels,
    }
  }
}
</script>

:::

::: show 基础使用

<template>
	<iu-carousel :labels="labels_1">
    <iu-carousel-item :label="1">
      <div style="background-color: pink;height: 100%">1</div>
    </iu-carousel-item>
    <iu-carousel-item :label="2">
      <div style="background-color: lime;height: 100%">2</div>
    </iu-carousel-item>
  </iu-carousel>
</template>

<style>
  .carousel-md {
    border: 1px solid black;
    background-color: lime;
  }
</style>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let labels_1 = ref([1, 2]);

    return {
      labels_1,
    }
  }
}
</script>

:::

::: show 基础使用

<template>
	<iu-carousel :labels="labels_2">
    <iu-carousel-item :label="1">
      <div style="background-color: pink;height: 100%">1</div>
    </iu-carousel-item>
  </iu-carousel>
</template>

<style>
  .carousel-md {
    border: 1px solid black;
    background-color: lime;
  }
</style>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let labels_2 = ref([1]);

    return {
      labels_2,
    }
  }
}
</script>

:::