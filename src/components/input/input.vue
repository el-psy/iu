<template>
	<div :class="wrapper_classes">
		<input :type="type" :placeholder="placeholder" @input="input" :value="modelValue" @focusin="input_focusin" @focusout="input_focusout">
		<i class="layui-icon layui-icon-close" v-show="allow_clear" @click="clear"></i>
	</div>
</template>

<script lang="ts" setup>
	import { ref, computed } from 'vue';

	export interface iu_input_props {
		allow_clear?:boolean,
		type?: string,
		placeholder?: string,
		modelValue: any,
	};

	let props = withDefaults(defineProps<iu_input_props>(), {
		allow_clear:false,
		type: 'text',
		placeholder: '',
		modelValue: '',
	});

	let emit = defineEmits(['update:modelValue']);

	let modelValue = computed({
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
			'iu_input_wrapper',
			is_focus.value ?'iu_input_focus':'',
		]
	});

	let clear = function(){
		modelValue.value = '';
	}
</script>

<style lang="scss">
	.iu_input_wrapper {
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
			padding-right: 10px;
		}
	}

	.iu_input_focus {
		border: 1px solid lime;
	}
</style>