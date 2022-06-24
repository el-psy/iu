<template>
	<div :class="classes">
		<slot name="default"></slot>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	export interface iu_panel_props {
		shadow?: 'always' | 'hover' | 'never';
	}

	let props = withDefaults(defineProps<iu_panel_props>(), {
		shadow: 'always',
	});

	let classes = computed(()=>{
		return [
			'iu-panel',
			{
				// props.shadow == 'never': '',
				'iu-panel-shadow' : props.shadow == 'always',
				'iu-panel-hover-shadow' : props.shadow == 'hover',
			}
		]
	});
	console.log(props.shadow);
</script>

<style lang="scss">
	.iu-panel {
		border-radius: 5px;
		border: 1px solid #eee;
	}
	.iu-panel-shadow, .iu-panel-hover-shadow:hover {
		box-shadow: 1px 1px 4px 1px #00000045;
	}
</style>