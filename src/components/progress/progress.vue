<template>
	<div class="iu-progress" :style="border_radius_style">
		<div class="iu-progress-inner" :style="style_obj+border_radius_style"></div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	export interface iu_progress_props {
		percent?: number,
		color?: string,
		size?: 's' | 'm' | 'l'
	};

	let props = withDefaults(defineProps<iu_progress_props>(), {
		percent: 50,
		color: 'purple',
		size: 'm',
	});

	let height_obj = {
		's':4,
		'm':9,
		'l':18
	};

	let style_obj = `background-color:${props.color}; height:${height_obj[props.size]}px; width:${props.percent}%;`;

	let border_radius_style = `border-radius:${height_obj[props.size]/2}px`;
</script>

<style lang="scss">
	.iu-progress {
		width: 100%;
		background-color: #eee;
	}
</style>