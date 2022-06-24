<template>
	<div class="test">
		<slot name="default">test</slot>
		<p>
			<slot name="show">test</slot>
		</p>
	</div>
</template>

<script setup lang="ts">
	// console.log('test component');
</script>

<style lang="scss">
	div.test {
		font-size: 30px;
	}
</style>