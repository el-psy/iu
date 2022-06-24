::: title 菜单
:::

::: descript ahsdoah_descript
:::

::: show 尽管按钮在同节点并排时会自动拉开间距，但在按钮太多的情况，效果并不是很美好。因为你需要用到按钮容器

<template>
	<iu-menu v-model:select_key="select_key_1" v-model:open_key="open_key_1" color="fuchsia">
		<iu-menu-item item="1">测试按钮</iu-menu-item>
		<iu-menu-item item="2">测试按钮</iu-menu-item>
		<iu-menu-item item="3">测试按钮</iu-menu-item>
	</iu-menu>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let select_key_1 = ref('1');
    let open_key_1 = ref([]);

    return {
      select_key_1,
      open_key_1
    }
  }
}
</script>

:::

::: show 尽管按钮在同节点并排时会自动拉开间距，但在按钮太多的情况，效果并不是很美好。因为你需要用到按钮容器

<template>
	<iu-menu v-model:select_key="select_key_2" v-model:open_key="open_key_2">
    <iu-sub-menu sub="1">
      <template #title>标题</template>
      <iu-menu-item item="1">测试按钮</iu-menu-item>
	  	<iu-menu-item item="2">测试按钮</iu-menu-item>
    </iu-sub-menu>
		<iu-menu-item item="3">测试按钮</iu-menu-item>
		<iu-menu-item item="4">测试按钮</iu-menu-item>
		<iu-menu-item item="5">测试按钮</iu-menu-item>
	</iu-menu>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let select_key_2 = ref('1');
    let open_key_2 = ref([]);

    return {
      select_key_2,
      open_key_2
    }
  }
}
</script>

:::

::: show 尽管按钮在同节点并排时会自动拉开间距，但在按钮太多的情况，效果并不是很美好。因为你需要用到按钮容器

<template>
	<iu-menu v-model:select_key="select_key_3" v-model:open_key="open_key_3" color="aqua" brightness="dark">
    <iu-sub-menu sub="1">
      <template #title>标题</template>
      <iu-menu-item item="1">测试按钮</iu-menu-item>
	  	<iu-menu-item item="2">测试按钮</iu-menu-item>
    </iu-sub-menu>
		<iu-menu-item item="3">测试按钮</iu-menu-item>
		<iu-menu-item item="4">测试按钮</iu-menu-item>
		<iu-menu-item item="5">测试按钮</iu-menu-item>
	</iu-menu>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let select_key_3 = ref('1');
    let open_key_3 = ref([]);

    return {
      select_key_3,
      open_key_3
    }
  }
}
</script>

:::


::: show 尽管按钮在同节点并排时会自动拉开间距，但在按钮太多的情况，效果并不是很美好。因为你需要用到按钮容器

<template>
	<iu-menu v-model:select_key="select_key_4" v-model:open_key="open_key_4" color="fuchsia" direction="ver" brightness="light">
    <iu-sub-menu sub="1">
      <template #title>标题</template>
      <iu-menu-item item="1">测试按钮</iu-menu-item>
	  	<iu-menu-item item="2">测试按钮</iu-menu-item>
    </iu-sub-menu>
		<iu-menu-item item="3">测试按钮</iu-menu-item>
		<iu-menu-item item="4">测试按钮</iu-menu-item>
		<iu-menu-item item="5">测试按钮</iu-menu-item>
	</iu-menu>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    let select_key_4 = ref('1');
    let open_key_4 = ref([]);

    return {
      select_key_4,
      open_key_4
    }
  }
}
</script>

:::