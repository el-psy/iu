<template>
	<div class="iu-tab">
		<div class="iu-tab-head">
			<div v-for="(item, index) in tab_list" @click="active_item(index, item.props.name)" :class="[item.props.name === tab_active?'iu-tab-title-this':'',]">
				<span :class="['iu-tab-title']">{{ item.props.title }}</span>
				<i class="layui-icon layui-icon-close iu-tab-close" v-if="close" @click.stop="close_item(index, item.props.name)"></i>
			</div>
		</div>
		<div class="iu-tab-content">
			<slot name="default"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, Ref, VNode, useSlots, provide, watch, computed } from 'vue';

	export interface iu_tab_props {
		close?: boolean,
		tab_active: string
	};

	let props = withDefaults(defineProps<iu_tab_props>(), {
		close: false,
		tab_active: ''
	});

	let emit = defineEmits(["update:tab_active", "close", "active"]);

	let slot = useSlots();
	let tab_list: Ref<VNode[]> = ref([]);
	let title_change = ref(true);
	
	let title_collect = function(nodes : VNode[]){
		tab_list.value = [] as VNode[];
		nodes.map((item)=>{
			// console.log('item',item);
			if(item.props.title){
				tab_list.value.push(item);
			}
		})
		if(props.tab_active === '') {
			props.tab_active = tab_list.value[0].props.name;
		}
	};

	let tab_active = computed({
		get(){
			return props.tab_active;
		},
		set(val){
			console.log('active computed', val);
			emit("update:tab_active", val);
		}
	});

	let close_item = function(index: number, name: string){
		console.log('close', index);

		if(tab_active.value === name){
			if(index === tab_list.value.length -1){
				tab_active.value = tab_list.value[0].props.name;
			}else {
				tab_active.value = tab_list.value[index+1].props.name;
			}
		}
		
		tab_list.value.splice(index, 1);
		

		emit('close', name);
	};

	let active_item = function(index: number, name: string){
		console.log('active', index, name);
		// emit('update:tab_active', name);
		emit('active', name);
		tab_active.value = name;
		console.log(tab_active.value, props.tab_active, name);
	};

	watch(title_change, function(){
		console.log('hello world');
		title_collect((slot.default && slot.default()) as VNode[]);
	});

	provide('title_change', title_change);
	provide('tab_active', tab_active);
</script>

<style lang="scss">
	.iu-tab-head {
		// height: 2em;
		background-color: #eee;

		div {
			display: inline-block;
			padding: 0.5em;

			&.iu-tab-title-this {
				border: 1px solid #ccc;
				border-radius: 3px 3px 0 0;
				background-color: white;
			}
			// border: 1px solid black;
			

			span.iu-tab-title {
				display: inline-block;
				cursor: pointer;
				color: black;
				
				&:hover {
					color: #999;
				}
			}

			// span.iu-tab-title-this {
				
			// }

			i.iu-tab-close {
				display: inline-block;
				margin: 0 0 0 0.5em;

				&:hover {
					background-color: red;
					color: white;
				}
			}
		}
	}
	.iu-tab-content {
		border: 1px solid black;
	}
</style>