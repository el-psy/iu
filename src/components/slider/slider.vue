<template>
	<div class="iu-slider" @mousedown.stop="mou_down" ref="slider_ref">
		<div class="iu-progress-inner" :style="inner_style"></div>
		<div class="iu-slider-dot" :style="dot_style"></div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, VNode } from 'vue';

	export interface iu_progress_props {
		modelValue: number,
		min?:number,
		max?:number,
		step?:number,
		color?: string,
	};

	let props = withDefaults(defineProps<iu_progress_props>(), {
		step: 1,
		min:0,
		max:100,
		color: 'green',
	});

	let emit = defineEmits(['update:modelValue']);

	let modelValue = computed({
		get(){
			return props.modelValue;
		},
		set(val){
			emit('update:modelValue', val);
		}
	});

	(function(){
		if(modelValue.value < props.min){
			modelValue.value = props.min;
		}else if(modelValue.value > props.max){
			modelValue.value = props.max;
		}
	})();

	let inner_style = computed(()=>{
		return `width:${(props.modelValue-props.min)/(props.max-props.min)*100}%; background-color:${props.color}`;
	});
	let dot_style = computed(()=>{
		return `left:${(props.modelValue-props.min)/(props.max-props.min)*100}%`;
	});

	let slider_ref = ref<HTMLElement>();

	let change_dot_left = function(page_left, offset_left, offset_width){
		let width = (parseInt(page_left) - parseInt(offset_left))/parseInt(offset_width)*(props.max-props.min)+props.min;
		if(width<props.min){
			width = props.min;
		}else if(width>props.max){
			width = props.max;
		}
		width = Math.round(width);
		modelValue.value = width;
	};

	let mou_point = 0;
	let mou_move_listener = null;
	let mou_up_listener = null;

	let mou_down = function(event){
		// console.log(event.pageX, event.pageY);
		// console.log(slider_ref);
		// console.log(slider_ref.value.offsetHeight, slider_ref.value.offsetWidth, slider_ref.value.offsetLeft);
		mou_point = 1;
		window.getSelection().removeAllRanges();
		change_dot_left(event.pageX, slider_ref.value.offsetLeft, slider_ref.value.offsetWidth);
		mou_move_listener = window.addEventListener('mousemove',mou_move);
		mou_up_listener = window.addEventListener('mouseup',mou_up);
	};

	let mou_move = function(event){
		if(mou_point === 1){
			change_dot_left(event.pageX, slider_ref.value.offsetLeft, slider_ref.value.offsetWidth);
		};
		// console.log('mou_move')
	};

	let mou_up = function(event){
		if(mou_point = 1){
			change_dot_left(event.pageX, slider_ref.value.offsetLeft, slider_ref.value.offsetWidth);
		}
		mou_point = 0;
		// change_dot_left(event.pageX, slider_ref.value.offsetLeft, slider_ref.value.offsetWidth);
		window.removeEventListener('mousemove', mou_move);
		window.removeEventListener('mouseup', mou_up);
		// console.log('mou_up')
	}
</script>

<style lang="scss">
	.iu-slider {
		width: 100%;
		height: 6px;
		cursor: pointer;
		background-color: #eee;
		position: relative;

		.iu-progress-inner {
			height: 100%;
		}
		
		.iu-slider-dot {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: white;
			border: 3px solid blue;
			transform: translate(-8px, -11px);
			position: absolute;
			// top: -5px;
			// left: 0px;

			// opacity: 0.5;
		}
	}
</style>