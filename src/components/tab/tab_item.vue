<template>
	<div :class="classes">
		<slot name="default"></slot>
	</div>
</template>

<script setup lang="ts">
	import { computed, inject, ref, Ref } from 'vue';

	export interface iu_tab_item {
		title: string,
		name:string
	};

	let props = withDefaults(defineProps<iu_tab_item>(), {

	});

	let title_change:Ref<boolean> = inject('title_change');
	let tab_active:Ref<string> = inject('tab_active');
	title_change.value = !title_change.value;

	let classes = computed(()=>{
		return [
			'iu-tab-item',
			tab_active.value === props.name? '':'iu-tab-item-close',
		]
	})

	console.log(props.title);
</script>

<style lang="scss">
	.iu-tab-item-close {
		display: none;
	}
</style>