<template>
	<div :class="wrapper_classes">
		<i class="layui-icon layui-icon-subtraction input-pre-button" @click="number_sub"></i>
		<input type="text" v-model.number="modelValue" @focusin="input_focusin" @focusout="input_focusout">
		<i class="layui-icon layui-icon-addition input-end-button" @click="number_add"></i>
	</div>
</template>

<script lang="ts" setup>
	import { ref, computed, Ref } from 'vue';

	export interface iu_input_props {
		// init?:number,
		step?:number,
		min?:number,
		max?:number,
		// allow_clear?:boolean,
		// type?: string,
		// placeholder?: string,
		modelValue?: number,
	};

	let props = withDefaults(defineProps<iu_input_props>(), {
		init:0,
		step: 1,
		modelValue: 0,
	});

	let emit = defineEmits(['update:modelValue']);

	let modelValue: Ref<number> = computed({
		get(){
			return props.modelValue;
		},
		set(val){
			emit('update:modelValue', val);
		}
	})

	let input = function(event){
		emit('update:modelValue', event.target.value);
	}

	let is_focus = ref(false);

	let input_focusin = function(event){
		is_focus.value = true;
		// console.log(is_focus);
	};
	let input_focusout = function(event){
		is_focus.value = false;
		// console.log(is_focus);
	};

	let wrapper_classes = computed(()=>{
		return [
			'iu_input_number_wrapper',
			is_focus.value ?'iu_input_focus':'',
		]
	});

	let number_add = function(){
		if(modelValue.value + props.step > props.max){
			return 0;
		}else {
			modelValue.value = modelValue.value + props.step;
		}
	};

	let number_sub = function(){
		if(modelValue.value - props.step < props.min){
			return 0;
		}else {
			modelValue.value = modelValue.value - props.step;
		}
	};
</script>

<style lang="scss">
	.iu_input_number_wrapper {
		display: inline-flex;
		width: 100%;
		border: 1px solid gray;
		border-radius: 4px;
		height: 30px;
		line-height: 30px;
		// padding: 0 10px 0 10px;
		input {
			// flex-grow: 1;

			width: 100%;
			
			border: 0;
			outline: 0;

			font-size: 14px;
			line-height: 30px;

			padding-left: 10px;
		}

		i {
			padding: 0 10px 0 10px;
			// border: 1px solid gray;
		}

		i.input-pre-button {
			// padding-left: 10px;
			border-right: 1px solid gray;
			// border-radius: 4px 0 0 4px;
		}
		i.input-end-button {
			// padding-right: 10px;
			border-left: 1px solid gray;
		}
	}

	.iu_input_focus {
		border: 1px solid lime;
	}
</style>