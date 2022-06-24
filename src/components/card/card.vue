<template>
	<div class="iu-card">
		<div class="iu-card-title">
			<slot name="title"></slot>
		</div>
		<div class="iu-card-body">
			<slot name="body"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
	.iu-card {
		box-shadow: 0px 0px 4px #00000045;
	}

	.iu-card-title {
		padding: 0 16px;

		height: 45px;
		line-height: 45px;
		font-size: 16px;

		border-bottom: 1px solid #aaa;
	}

	.iu-card-body {
		padding: 16px;

		font-size: 14px;
	}
</style>