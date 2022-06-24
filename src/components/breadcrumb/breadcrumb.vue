<template>
	<ol class="iu-breadcrumb">
		<li v-for="(item, index) in crumb" key="item">
			<a v-if="item.link" :href="item.link">{{ item.title }}</a>
			<a v-else @click.prevent>{{ item.title }}</a>
			<span v-if="index < crumb.length - 1" class="iu-separator">{{ separator }}</span>
		</li>
	</ol>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	export interface iu_breadcrumb_props {
		crumb: {
			title:string,
			link:string
		}[],
		separator: string
	};

	let props = withDefaults(defineProps<iu_breadcrumb_props>(), {
		crumb: ()=> [],
		separator: '>'
	});


</script>

<style lang="scss">
	@import "../../docs/css/variable.scss";

	.iu-breadcrumb {
		li {
			font-size: 14px;
			display: inline-block;
			
			.iu-separator {
				display: inline-block;
				padding: 0 10px;
			}

			a {
				color: black;

				&:hover {
					color: $iu-pure-plain;
				}
			}
		}
	}
</style>