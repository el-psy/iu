::: title 布局容器
:::

::: title 常见页面布局
:::

::: show 

<template>
  <iu-container direction="column">
	<iu-header class="header-demo">header</iu-header>
	<iu-main class="main-demo">main</iu-main>
  </iu-container>
</template>

<style>
	header.header-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ffc0c0;
	}
	main.main-demo {
		flex: 1;
		min-height: 300px;
		background-color: #8f8fff;
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


::: show 

<template>
  <iu-container direction="column">
	<iu-header class="header-demo">header</iu-header>
	<iu-main class="main-demo">main</iu-main>
	<iu-footer class="footer-demo">footer</iu-footer>
  </iu-container>
</template>

<style>
	header.header-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ffc0c0;
	}
	main.main-demo {
		flex: 1;
		min-height: 300px;
		background-color: #8f8fff;
	}
	footer.footer-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ff8bff;
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

::: show 

<template>
  <iu-container direction="row">
	<iu-aside class="aside-demo">aside</iu-aside>
	<iu-main class="main-demo">main</iu-main>
  </iu-container>
</template>

<style>
	aside.aside-demo {
		min-height: 100px;
		min-width: 200px;
		background-color: #88fcfc;
	}
	main.main-demo {
		flex: 1;
		background-color: #8f8fff;
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


::: show 

<template>
  <iu-container direction="column">
	<iu-header class="header-demo">header</iu-header>
	<iu-container direction="row">
		<iu-aside class="aside-demo">aside</iu-aside>
		<iu-main class="main-demo">main</iu-main>
	</iu-container>
  </iu-container>
</template>

<style>
	header.header-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ffc0c0;
	}
	aside.aside-demo {
		min-height: 100px;
		min-width: 200px;
		background-color: #88fcfc;
	}
	main.main-demo {
		flex: 1;
		background-color: #8f8fff;
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

::: show 

<template>
  <iu-container direction="column">
	<iu-header class="header-demo">header</iu-header>
	<iu-container direction="row">
		<iu-aside class="aside-demo">aside</iu-aside>
		<iu-container direction="column" style="width:100%">
			<iu-main class="main-demo">main</iu-main>
			<iu-footer class="footer-demo">footer</iu-footer>
		</iu-container>
	</iu-container>
  </iu-container>
</template>

<style>
	header.header-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ffc0c0;
	}
	aside.aside-demo {
		min-height: 100px;
		min-width: 200px;
		background-color: #88fcfc;
	}
	main.main-demo {
		flex: 1;
		background-color: #8f8fff;
	}
	footer.footer-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ff8bff;
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

::: show 

<template>
  <iu-container direction="row">
    <iu-aside class="aside-demo">aside</iu-aside>
	<iu-container direction="column" style="flex:1">
		<iu-header class="header-demo">header</iu-header>
		<iu-main class="main-demo">main</iu-main>
	</iu-container>
  </iu-container>
</template>

<style>
	header.header-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ffc0c0;
	}
	aside.aside-demo {
		min-height: 100px;
		min-width: 200px;
		background-color: #88fcfc;
	}
	main.main-demo {
		flex: 1;
		background-color: #8f8fff;
	}
	footer.footer-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ff8bff;
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

::: show 

<template>
  <iu-container direction="row">
  	<iu-aside class="aside-demo">aside</iu-aside>
	<iu-container direction="column" style="flex:1;">
		<iu-header class="header-demo">header</iu-header>
		<iu-main class="main-demo">main</iu-main>
		<iu-footer class="footer-demo">footer</iu-footer>
	</iu-container>
  </iu-container>
</template>

<style>
	header.header-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ffc0c0;
	}
	aside.aside-demo {
		min-height: 100px;
		min-width: 200px;
		background-color: #88fcfc;
	}
	main.main-demo {
		flex: 1;
		background-color: #8f8fff;
	}
	footer.footer-demo {
		min-height: 40px;
		min-width: 200px;
		background-color: #ff8bff;
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