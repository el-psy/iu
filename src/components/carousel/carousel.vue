<template>
	<div class="iu-carousel" :style="carousel_style">
		<slot name="default"></slot>
		<button class="iu-carousel-arrow iu-carousel-pre" @click="pre">
			<i class="layui-icon layui-icon-left"></i>
		</button>
		<button class="iu-carousel-arrow iu-carousel-next" @click="nex">
			<i class="layui-icon layui-icon-right"></i>
		</button>
		<div class="iu-carousel-choice">
			<div class="iu-carousel-point" v-for="(item, index) in slot.default()" :key="index" @click="change(index)"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { provide, ref, Ref, computed, watch, nextTick, useSlots } from 'vue';

	export interface iu_carousel_props {
		arrow?: 'hover'|'always'|'none',
		interval?: number,
		indicator?: 'inside'|'outside'|'none',
		width?:string,
		height?:string,
		labels:string[] | number[],
	};

	let props = withDefaults(defineProps<iu_carousel_props>(), {
		arrow:'hover',
		interval:3000,
		indicator:'inside',
		width:'100%',
		height:'150px'
	});

	let slot = useSlots();
	let label_point = ref(0);
	let label_play = ref([ props.labels[label_point.value] ]);
	let label_now = computed(()=>{
		return props.labels[label_point.value];
	});
	let label_pre: Ref<string|number> = ref(props.labels[label_point.value]);
	let label_next: Ref<string|number> = ref(props.labels[label_point.value]);
	// let label_pre = computed(()=>{
	// 	if(label_point.value === 0){
	// 		return props.labels[props.labels.length-1];
	// 	}else {
	// 		return props.labels[label_point.value - 1];
	// 	}
	// });
	// let label_next = computed(()=>{
	// 	if(label_point.value === props.labels.length - 1){
	// 		return props.labels[0];
	// 	}else {
	// 		return props.labels[label_point.value + 1];
	// 	}
	// });

	provide('carousel_width', props.width);
	provide('carousel_height', props.height);
	provide('label_now', label_now);
	provide('label_pre', label_pre);
	provide('label_next', label_next);
	provide('label_play', label_play);

	let carousel_style = `width:${props.width};height:${props.height};`;

	let wait = async function(ms: number){
		return new Promise((resolve, reject)=>{
			setTimeout(() => {
				resolve(null);
			}, ms);
		});
	};
	let pre = async function(){
		label_play.value = [ props.labels[label_point.value] ]//, props.labels[label_point.value-1] ];
		let new_label = 0;
		if(label_point.value === 0){
			new_label = props.labels.length - 1;
		}else {
			new_label = label_point.value - 1;
		}
		label_play.value.push(props.labels[new_label]);

		label_pre.value = props.labels[new_label];
		await wait(0);
		label_next.value = props.labels[label_point.value];
		label_point.value = new_label;
		label_pre.value = label_now.value ;
		
		await wait(300);
		label_play.value = [ props.labels[label_point.value] ];
	};
	let nex = async function(){
		label_play.value = [ props.labels[label_point.value]]//, props.labels[label_point.value+1] ];
		let new_label = 0;
		if(label_point.value === props.labels.length - 1){
			new_label = 0;
		}else {
			new_label = label_point.value + 1;
		}
		label_play.value.push(props.labels[new_label]);

		label_next.value = props.labels[new_label];
		await wait(0);
		label_pre.value = props.labels[label_point.value];
		label_point.value = new_label;
		label_next.value = label_now.value ;

		await wait(300);
		label_play.value = [ props.labels[label_point.value] ];
		label_pre.value = props.labels[label_point.value];
	};
	let change = async function(index: number){
		console.log(index);
		label_play.value = [ props.labels[label_point.value]]//, props.labels[label_point.value+1] ];
		// let new_label = 0;
		// if(label_point.value === props.labels.length - 1){
		// 	new_label = 0;
		// }else {
		// 	new_label = label_point.value + 1;
		// }
		label_play.value.push(props.labels[index]);

		label_next.value = props.labels[index];
		await wait(0);
		label_pre.value = props.labels[label_point.value];
		label_point.value = index;
		label_next.value = label_now.value ;

		await wait(300);
		label_play.value = [ props.labels[label_point.value] ];
		label_pre.value = props.labels[label_point.value];
	};

	let shell = function(core: Function, delay: number){
		let mark = true;
		return async ()=>{
			if(mark){
				mark = false;
				await core();
				setTimeout(()=>{
					mark = true;
				}, delay);
			}
		}
	};
	pre = shell(pre, 300);
	nex = shell(nex, 300);
	// let interval_buff = setInterval(nex, props.interval);
</script>

<style lang="scss">
	.iu-carousel {
		overflow: hidden;
		position: relative;
		// .iu-carousel-item {
		// 	display: none;
		// }
		// .iu-carousel-item-active {
		// 	display: block;
		// }
	}
	.iu-carousel-arrow {
		position: absolute;
		display: block;
		top: 50%;
		transform: translateY(-50%);

		font-size: 14px;
		width: 26px;
		height: 26px;
		line-height: 26px;
		border-radius: 50%;
		border: 0px;
		background-color: rgba($color: #000000, $alpha: 0.1);

		&.iu-carousel-pre {
			left: 5%;
		}
		&.iu-carousel-next {
			right: 5%;
		}
		&:active {
			background-color: rgba($color: #000000, $alpha: 0.3);
		}
	}
	.iu-carousel-choice {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 10%;
		// background-color: rgba($color: #000000, $alpha: 0.1);
		// border-radius: 9px;
		.iu-carousel-point {
			display: inline-block;
			background-color: rgba($color: #000000, $alpha: 0.3);
			height: 6px;
			width: 6px;
			border-radius: 50%;
			margin: 6px 6px 6px 6px;
			&:hover {
				background-color: rgba($color: #000000, $alpha: 0.5);
				cursor: pointer;
			}
		}
	}
</style>