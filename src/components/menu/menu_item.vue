<template>
	<div :class="classes">
		<a @click.prevent="menu_item_click">
			<slot name="default">

			</slot>
		</a>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, inject, Ref } from 'vue';

	export interface iu_menu_item_props {
		item: string;
	}

	// let props = withDefaults(defineProps<iu_menu_item_props>(), {
	// 	key:''
	// });

	let props = defineProps<iu_menu_item_props>();

	let select_key: Ref<string> = inject('select_key') as Ref<string>;

	let classes = computed(()=>{
		return [
			'iu-menu-item',
			select_key.value === props.item? 'iu-menu-item-this':'',
		]
	});

	let menu_item_click = function(){
		select_key.value = props.item;
		// console.log(select_key.value, 'mid', props.item);
	};
</script>

<style lang="scss">
	
</style>