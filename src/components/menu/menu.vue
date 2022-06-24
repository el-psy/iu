<template>
	<div :class="classes">
		<slot name="default"></slot>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, provide } from 'vue';

	export interface iu_menu_props {
		direction?: 'hoz' | 'ver';
		color?: 'red' | 'lime' | 'blue' | 'yellow' | 'fuchsia' | 'aqua' | 'plain';
		brightness?: 'dark' | 'light';
		select_key:string,
		open_key:any[],
	}

	let props = withDefaults(defineProps<iu_menu_props>(), {
		direction: 'hoz',
		color: 'plain',
		brightness: 'light',
		select_key:'',
		open_key: ()=>[],
	});

	const emit = defineEmits(['update:select_key', 'update:open_key']);

	let classes = computed(()=>{
		return [
			'iu-menu',
			`iu-menu-${props.brightness}-${props.color}`,
			`iu-menu-${props.direction}`
		]
	});


	let select_key = computed({
		get(){
			return props.select_key;
		},
		set(val){
			emit("update:select_key", val);
		}
	});
	let open_key = computed({
		get(){
			return props.open_key;
		},
		set(val){
			emit("update:open_key", val);
		}
	});

	provide('select_key', select_key);
	provide('open_key', open_key);
	provide('direction', props.direction);
</script>

<style lang="scss">
	@import "../../docs/css/variable.scss";

	.iu-menu {
		display: flex;
		border: 1px solid;
	}

	.iu-menu-hoz {
		flex-direction: row;
		height: 48px;

		.iu-sub-menu-choice {
			position: absolute;
			top: 105%;
			width: auto;

			display: flex;
			flex-direction: column;

			box-shadow: 0px 0px 4px rgba(0,0,0,0.5);
		}
	}

	.iu-menu-ver {
		flex-direction: column;
		width: 200px;

		.iu-sub-menu {
			display: block;
		}

		.iu-sub-menu-choice {
			// position: relative;
			flex-direction: column;
			box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
		}
	}

	.iu-menu-item {
		position: relative;
	}

	.iu-menu-item>a, .iu_sub_menu_title {
		display: block;
		height: 48px;
		line-height: 48px;
		padding: 0 16px;
		font-size: 14px;
	}

	.iu-menu-item-this:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0px;
		width: 100%;
		height: 3px;
	}

	@each $color in $color-list {
		.iu-menu-light-#{$color} {
			background-color: bright_color('light', $color);

			.iu-sub-menu-choice {
				background-color: bright_color('light', $color);
				
			}
			.iu-sub-menu-open {
				border: 1px solid bright_color('deep', $color);
			}

			
			.iu-menu-item a, .iu_sub_menu_title{
				color: bright_color('dark', $color);

				&:hover {
					color: bright_color('deep', $color);
						cursor: pointer;
				}
			}
			
			
			.iu-menu-item-this:after {
				background-color: bright_color('deep', $color);
			}
		}

		.iu-menu-dark-#{$color} {
			background-color: bright_color('dark', $color);

			.iu-sub-menu-choice {
				background-color: bright_color('dark', $color);
				
			}
			.iu-sub-menu-open {
				border: 1px solid bright_color('light', $color);
			}

			
			.iu-menu-item a, .iu_sub_menu_title{
				color: bright_color('light', $color);

				&:hover {
					color: bright_color('pure', $color);
					cursor: pointer;
				}
			}
			
			
			.iu-menu-item-this:after {
				background-color: bright_color('light', $color);
			}
		}
	}

</style>