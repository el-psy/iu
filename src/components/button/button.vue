<template>
	<button :class="classes" :disabled="disabled">
		<slot name="default"></slot>
	</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	export interface iu_button_props {
		size?: 'lg'| 'md' | 'sm';
		brightness?:'dark' | 'light';
		bgc?: 'red' | 'lime' | 'blue' | 'yellow' | 'fuchsia' | 'aqua' | 'plain';
		// border: boolean;
		fluid?: boolean;
		radius?: boolean;
		disabled?: boolean;
	}

	let props = withDefaults(defineProps<iu_button_props>(), {
		size: 'md',
		brightness: 'light',
		bgc: 'plain',
		// border: false,
		fluid: false,
		radius: false,
		disabled: false
	});
	// console.log('props', props.size, props.bgc);
	let classes = computed(()=> {
		return [
			'iu-btn',
			props.size? `iu-btn-${props.size}`: '',
			'iu-btn-border',
			`iu-btn-${props.brightness}`,
			`iu-btn-${props.brightness}-${props.bgc}`,
			props.radius? 'iu-btn-round':'',
			props.fluid? 'iu-btn-fluid':'',
			
		]
	});
	let on_click = (event: any) => {
		return 0;
	}
</script>

<style lang="scss">
	@import "../../docs/css/variable.scss";

	button.iu-btn {
		margin: 10px;
		box-sizing: border-box;
		outline: 0;
		border-width: 1px;
		border-style: solid;
		position: relative;
		// overflow: hidden;

		text-align: center;
		cursor: pointer;
	}

	button.iu-btn[disabled] {
		cursor: not-allowed;
	}

	button.iu-btn::after {
		content: ' ';
		display: block;
		// background-color: #000;
		opacity: 0.0;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}
	button.iu-btn.iu-btn-light::after {
		background-color: #000;
	}
	button.iu-btn.iu-btn-dark::after {
		background-color: #fff;
	}
	
	
	button.iu-btn:not(:disabled):hover::after {
		opacity: 0.1;
	}
	button.iu-btn:active::after, button[disabled]::after {
		opacity: 0.2 !important;
	}
	
	button.iu-btn-md {
		height: 36px;
		line-height: 36px;
		padding: 0 14px;
		font-size: 14px;
	}
	.iu-btn-sm {
		height: 30px;
		line-height: 30px;
		padding: 0 12px;
		font-size: 12px;
	}
	.iu-btn-lg {
		height: 44px;
		line-height: 44px;
		padding: 0 18px;
		font-size: 18px;
	}

	// button.iu-btn-border {
	// 	border-width: 1px;
	// 	border-style: solid;
	// }

	.iu-btn-light-red {
		background-color: $iu-light-red;
		border-color: $iu-dark-red;
		color: $iu-dark-red;
	}
	.iu-btn-light-lime {
		background-color: $iu-light-lime;
		border-color: $iu-dark-lime;
		color: $iu-dark-lime;
	}
	.iu-btn-light-blue {
		background-color: $iu-light-blue;
		border-color: $iu-dark-blue;
		color: $iu-dark-blue;
	}
	.iu-btn-light-yellow {
		background-color: $iu-light-yellow;
		border-color: $iu-dark-yellow;
		color: $iu-dark-yellow;
	}
	.iu-btn-light-fuchsia {
		background-color: $iu-light-fuchsia;
		border-color: $iu-dark-fuchsia;
		color: $iu-dark-fuchsia;
	}
	.iu-btn-light-aqua {
		background-color: $iu-light-aqua;
		border-color: $iu-dark-aqua;
		color: $iu-dark-aqua;
	}
	.iu-btn-light-plain {
		background-color: white;
		border-color: black;
		color: black;
	}

	.iu-btn-dark-red {
		background-color: $iu-dark-red;
		border-color: $iu-light-red;
		color: $iu-light-red;
	}
	.iu-btn-dark-lime {
		background-color: $iu-dark-lime;
		border-color: $iu-light-lime;
		color: $iu-light-lime;
	}
	.iu-btn-dark-blue {
		background-color: $iu-dark-blue;
		border-color: $iu-light-blue;
		color: $iu-light-blue;
	}
	.iu-btn-dark-yellow {
		background-color: $iu-dark-yellow;
		border-color: $iu-light-yellow;
		color: $iu-light-yellow;
	}
	.iu-btn-dark-fuchsia {
		background-color: $iu-dark-fuchsia;
		border-color: $iu-light-fuchsia;
		color: $iu-light-fuchsia;
	}
	.iu-btn-dark-aqua {
		background-color: $iu-dark-aqua;
		border-color: $iu-light-aqua;
		color: $iu-light-aqua;
	}
	.iu-btn-dark-plain {
		background-color: black;
		border-color: white;
		color: white;
	}

	.iu-btn-round {
		border-radius: 5px;
	}

	button.iu-btn-fluid {
		width: 100%;
		margin: 10px 0;
	}
</style>