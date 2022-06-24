<template>
	<div :style="style" :class="classes">
		<slot name="default"></slot>
	</div>
</template>

<script setup lang="ts">
	import { provide, ref, computed } from 'vue';
	export interface iu_row_props {
		gutter?:string,
	};
	
	const props = withDefaults(defineProps<iu_row_props>(),{
		gutter:'20',
	});
	let use_gutter = provide('gutter', props.gutter);
	let style = ref(`padding: ${-props.gutter/2}px`);

	let classes = computed(()=>{
		return [
			'iu-row',
		]
	})
</script>

<style lang="scss">
	div.iu-row {
		display: flex;
		flex-wrap: wrap;
	}
</style>