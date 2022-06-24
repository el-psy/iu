<template>
	<div class="iu-checkbox" @click="check_box_click">
		<input type="checkbox" :value="label">
		<i :class="['layui-icon', is_checked?'layui-icon-ok':'layui-icon-close']"></i>
		<label><slot></slot></label>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, Ref } from 'vue';

	export interface iu_checkbox_props {
		modelValue: string[],
		value: string,
		// label: string,
	};

	let props = withDefaults(defineProps<iu_checkbox_props>(), {

	});

	let emit = defineEmits(['update:modelValue']);

	let is_checked = computed(()=>{
		return props.modelValue.includes(props.value);
	});

	let checkbox_value: Ref<string[]> = computed({
		get(){
			return props.modelValue;
		},
		set(val){
			emit('update:modelValue', val);
		}
	})

	let check_box_click = function(){
		if(is_checked.value){
			checkbox_value.value.splice(checkbox_value.value.indexOf(props.value), 1);
		}else {
			checkbox_value.value.push(props.value);
		}
	}
</script>

<style lang="scss">
	@import "../../docs/css/variable.scss";

	.iu-checkbox {
		display: inline-block;
		margin: 0 4px 0 0;

		input {
			visibility: hidden;
			width: 0;
			height: 0;
		}

		i {
			display: inline-block;
			margin: 0 8px 0 0;
			border: 1px solid $iu-pure-plain;
			border-radius: 2px;
			color: rgba(0,0,0,0);
			
			&.layui-icon-ok {
				background-color: $iu-deep-lime;
				color: white;
			}
		}
	}
</style>