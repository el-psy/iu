<template>
	<div class="iu-md-container">
		<!-- <slot name="default"></slot> -->
		<div class="iu-show iu-show-container">
			<slot name="default">
				
			</slot>
		</div>
		<div class="iu-show iu-show-descript" v-show="$slots.show">
			<slot name="show">

			</slot>
		</div>
		<div class="iu-show iu-code-container">
			<slot name="code">
				
			</slot>
		</div>
		
	</div>

</template>

<script setup lang="ts">
	import {ref, useSlots} from 'vue';
	let show = ref(0);
	let slot = useSlots();
	// console.log('show_component');\
	(async function(){
		console.log('slot', await slot);
	})();
	// console.log('slot', slot);
</script>

<style lang="scss">
	div.iu-md-container div.iu-show.iu-show-container {
		background-color: #fff;
	}
	div.iu-show.iu-code-container {
		height: auto;
	}
	/* div.iu_show.iu-code-container {
		background-color: #f5f5f5;
	} */
</style>