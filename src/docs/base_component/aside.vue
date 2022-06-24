<template>
	<aside class="iu_aside">
		<ul class="content">
			<li class="floder" v-for="floder in content" :key="floder.name">
				<h1>{{ floder.name }}</h1>
				<hr>
				<ul class="floder">
					<li class="file" v-for="file in floder.file" :key="file.file_name">
						<a @click.prevent="route_click(file.path)">{{ file.file_name }}</a>
					</li>
				</ul>
			</li>
		</ul>
	</aside>
</template>

<script setup lang="ts">
	import { inject, ref } from 'vue';
	import {useRouter, useRoute} from 'vue-router';

	const router = useRouter();
	const route = useRoute();
	const md_route: any = inject('md_route');

	let content = ref([] as any[]);
	console.log('aside',md_route);
	md_route.forEach((i: any)=>{
		let floder = ''; let file_name = '';let others = [] as any[];
		if(i.path !== '/'){
			[floder, file_name, ...others] = i.path.slice(1).split('/');
			let store_point = false;
			for(let index in content.value){
				let floder_store = content.value[index];
				if(floder_store['name'] === floder){
					floder_store.file.push(Object.assign(i, {file_name:file_name}));
					store_point = true;
				}
			}
			if(!store_point){
				content.value.push({
					name:floder,
					file:[Object.assign(i, {file_name:file_name})]
				})
			}
		}
		
	})
	console.log(content.value);

	// methods
		let route_click = async function(path:string){
			router.push(path);
		}
	//
</script>

<style lang="scss">
	$iu_aside_title_color:#eee;
	$iu_aside_item_color:#aaa;
	$iu_aside_bgc_color: #393d49;
	$iu_aside_font_size: 14px;

	aside.iu_aside {
		width: 200px;
		box-sizing: border-box;
		padding: 5px;
		background-color: $iu_aside_bgc_color;

		color: $iu_aside_item_color;
		font-size: $iu_aside_font_size;
		a {
			display: block;
			width: 100%;
			height: 100%;
			
			color: $iu_aside_item_color;
			font-size: $iu_aside_font_size;
			
			&:hover {
				color: aqua;
				cursor: pointer;
			}
		}
		h1 {
			display: block;
			padding: 5px 0;
			color: $iu_aside_title_color;
			font-size: $iu_aside_font_size;
		}
		li.file {
			display: block;
			padding: 5px;
		}
		hr {
			height: 1px;
			box-sizing: border-box;
			margin: 0;
		}
	}
</style>