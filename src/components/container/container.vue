<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';

	export interface iu_container_props {
		direction?: 'row'| 'column';
	}

	let props = withDefaults(defineProps<iu_container_props>(), {
		direction: 'row',
	});

	let classes = computed(()=>{
		return [
			'iu-container',
			props.direction? `iu-container-${props.direction}`:'',
		]
	});
</script>

<style lang="scss">
	div.iu-container {
		display: flex;
	}
	div.iu-container-row {
		flex-direction: row;
	}
	div.iu-container-column {
		flex-direction: column;
	}
</style>