<template>
	<div class="iu-radio" @click="radio_click">
		<input type="radio" :value="value">
		<i :class="['layui-icon', is_checked? 'layui-icon-radio':'layui-icon-circle']"></i>
		<label><slot></slot></label>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';

	export interface iu_radio_props {
		value: string,
		modelValue: string,
	};

	let props = withDefaults(defineProps<iu_radio_props>(),{

	});

	let emit = defineEmits(['update:modelValue']);

	let radio_value = computed({
		get(){
			return props.modelValue;
		},
		set(val){
			emit('update:modelValue', val);
		}
	})

	let is_checked = computed(()=>{
		return props.value === radio_value.value;
	})

	let radio_click = function(){
		radio_value.value = props.value;
	}
</script>

<style lang="scss">
	@import "../../docs/css/variable.scss";

	.iu-radio {
		input {
			display: inline-block;
			visibility: hidden;
			width: 0;
			height: 0;
		}

		i {
			&.layui-icon-radio {
				color: $iu-deep-lime;
			}
		}
	}
</style>