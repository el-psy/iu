<template>
	<div :class="classes" @click="switch_click">

	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';

	export interface iu_switch_props {
		color?: string,
		select_key: boolean,
	};

	let props = withDefaults(defineProps<iu_switch_props>(), {

	});

	let emit = defineEmits(['update:select_key']);

	let select_key = computed({
		get(){
			return props.select_key;
		},
		set(val){
			emit('update:select_key', val);
		}
	});

	let switch_click = function(){
		select_key.value = !select_key.value;
	}

	let classes = computed(()=>{
		return [
			'iu-switch',
			props.select_key? 'iu-switch-true':'iu-switch-false',
		]
	})
</script>

<style lang="scss">
	@import "../../docs/css/variable.scss";

	.iu-switch {
		display: inline-block;

		height: 2em;
		width: 4em;
		border-radius: 1em;

		

		&.iu-switch-true {
			background-color: $iu-pure-lime;

			&::after {
				top: 0.25em;
				right: -0.25em;
			}
		}

		&.iu-switch-false {
			background-color: $iu-pure-plain;

			&::after {
				top: 0.25em;
				right: -2.25em;
			}
		}

		&:after {
			content:'';
			display: inline-block;
			height: 1.5em;
			width: 1.5em;
			border-radius: 50%;
			background-color: white;
			position: relative;
			transition: all 0.5s;
		}
	}
</style>