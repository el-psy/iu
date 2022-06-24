<template>
	<div :class="classes" :style="style">
		<slot name="default"></slot>
	</div>
</template>

<script setup lang="ts">
	import { inject, ref, computed } from 'vue';

	export interface iu_col_props {
		xs?:string, // < 576
		xs_offset?:string,
		sm?:string, // 768-576
		sm_offset?:string,
		md?:string, // 1200-768
		md_offset?:string,
		lg?:string, // >1200
		lg_offset?:string,
	};

	let gutter:number = inject('gutter');
	// let colums:number = inject('colums');

	let props = withDefaults(defineProps<iu_col_props>(), {
		xs:'1',
		// sm:1,
		// md:1,
		// lg:1
	});

	let classes = computed(()=>{
		return [
			'iu-col',
			props.xs? `iu-col-xs-${props.xs}`: '',
			props.xs_offset? `iu-col-xs-offset-${props.xs_offset}` : '',
			props.sm? `iu-col-sm-${props.sm}`: '',
			props.sm_offset? `iu-col-sm-offset-${props.sm_offset}` : '',
			props.md? `iu-col-md-${props.md}`: '',
			props.md_offset? `iu-col-md-offset-${props.md_offset}` : '',
			props.lg? `iu-col-lg-${props.lg}`: '',
			props.lg_offset? `iu-col-lg-offset-${props.lg_offset}` : '',
		]
	});

	// let width = {
	// 	xs: props.xs/colums*100,
	// 	sm: props.sm/colums*100,
	// 	md: props.md/colums*100,
	// 	lg: props.lg/colums*100,
	// }
	let style = ref(`padding: ${gutter/2}px; box-sizing:border-box;`);

	// style+=`@media screen and (max-width: 576px){ .iu-col{width: ${width.xs}%;} };` ;
	// style+=`@media screen and (max-width: 768px and min-width: 576px){ .iu-col{width: ${width.sm}%;} }; `;
	// style+=`@media screen and (max-width: 1200px and min-width: 768px){ .iu-col{width: ${width.md}%;} }; `;
	// style+=`@media screen and (min-width: 1200px){ .iu-col{width: ${width.lg}%;} }; `;

	// console.log(props.lg_offset, classes);
</script>

<style lang="scss">
	@media screen and (max-width: 576px) {
		@for $i from 1 through 12 {
			.iu-col-xs-#{$i} {
				flex-basis: 100% * calc($i / 12);
			}
			.iu-col-xs-offset-#{$i} {
				margin-left: 100% * calc($i / 12);
			}
		}
	}
	@media screen and (min-width: 576px) {
		@for $i from 1 through 12 {
			.iu-col-sm-#{$i} {
				flex-basis: 100% * calc($i / 12);
			}
			.iu-col-sm-offset-#{$i} {
				margin-left: 100% * calc($i / 12);
			}
		}
	}
	@media screen and (min-width: 768px) {
		@for $i from 1 through 12 {
			.iu-col-md-#{$i} {
				flex-basis: 100% * calc($i / 12);
			}
			.iu-col-md-offset-#{$i} {
				margin-left: 100% * calc($i / 12);
			}
		}
	}
	@media screen and (min-width: 1200px) {
		@for $i from 1 through 12 {
			.iu-col-lg-#{$i} {
				flex-basis: 100% * calc($i / 12);
			}
			.iu-col-lg-offset-#{$i} {
				margin-left: 100% * calc($i / 12);
			}
		}
	}
</style>