<template>
	<div :class="classes" :style="carousel_style">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
	import { ref, Ref, inject, computed } from 'vue';

	export interface carousel_item_props {
		label: string | number,
	};

	let props = withDefaults(defineProps<carousel_item_props>(), {});

	let width = inject('carousel_width');
	let height = inject('carousel_height');
	let label_now: Ref<number|string> = inject('label_now');
	let label_pre: Ref<number|string> = inject('label_pre');
	let label_next: Ref<number|string> = inject('label_next');
	let label_play: Ref<number[] | string[]> = inject('label_play')

	let item_type = computed(()=>{
		if(props.label === label_now.value){
			return 'now';
		}else if(props.label === label_pre.value){
			return 'pre';
		}else if(props.label === label_next.value){
			return 'next';
		}else {
			return 'plain';
		}
	});

	console.log('label', label_now, label_pre, label_next);

	let carousel_style = `width:${width};height:${height};`;
	let classes = computed(()=>{
		return [
			'iu-carousel-item',
			`iu-carousel-item-${item_type.value}`,
			label_play.value.includes(props.label) ? 'iu-carousel-item-play':'',
		]
	});

</script>

<style lang="scss">
	.iu-carousel-item {
		position: absolute;
		display: none;
		&.iu-carousel-item-play {
			display: block;
		}
		&.iu-carousel-item-pre {
			transform: translateX(-100%);
		}
		&.iu-carousel-item-next {
			transform: translateX(100%);
		}
		&.iu-carousel-item-now {
			// position: static;
			transform: translateX(0);
		}
		transition: all 0.3s;
	}
</style>