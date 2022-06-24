<template>
	<div class="iu-sub-menu" ref="sub_ref">
		<div class="iu_sub_menu_title" @click="open_handle">
			<slot name="title"></slot>
		</div>
		<div :class="sub_menu_classes">
			<slot name="default"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, inject, computed, Ref } from 'vue';
	import { onClickOutside } from '@vueuse/core'

	export interface sub_menu_prpos {
		sub:string,
	}

	let props = withDefaults(defineProps<sub_menu_prpos>(),{
		sub:''
	});

	let open_key: Ref<string[]> = inject('open_key') as Ref<string[]>;
	let direction: Ref<string> = inject('direction') as Ref<string>;

	let sub_ref = ref<HTMLElement>();

	let open_handle = function(){
		if(open_key.value.includes(props.sub)){
			open_key.value.splice(open_key.value.indexOf(props.sub), 1);
		}else {
			open_key.value.push(props.sub);
		}
		console.log(open_key.value, open_key.value.includes(props.sub), props.sub);
	};

	onClickOutside(sub_ref, (event: PointerEvent)=>{
		console.log('on click outside');
		let index = open_key.value.indexOf(props.sub);
		if(index !== -1 && direction.value == 'hoz'){
			open_key.value.splice(index, 1);
		}
	})

	let sub_menu_classes = computed(()=>{
		return [
			'iu-sub-menu-choice',
			open_key.value.includes(props.sub)? 'iu-sub-menu-open':'iu-sub-menu-close',
		]
	});
</script>

<style lang="scss">
	.iu-sub-menu {
		display: flex;
		position: relative;
	}

	// .iu-sub-menu-choice {
	// 	top: 105%;
	// 	width: auto;

	// 	display: flex;
	// 	flex-direction: column;

	// 	box-shadow: 0px 0px 4px rgba(0,0,0,0.5);
	// }

	.iu-sub-menu-open {
		display: flex;
		white-space: nowrap;
	}

	.iu-sub-menu-close {
		height: 0;
		overflow: hidden;
		// display: none;
	}
</style>