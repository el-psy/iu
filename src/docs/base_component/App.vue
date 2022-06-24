<template>
  <lay-layout class="example">
    <lay-header>
		<Header></Header>
	</lay-header>
    <div class="body">
		  <Aside></Aside>
		  <router-view></router-view>
    </div>
  </lay-layout>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import Header from './header.vue';
	import Aside from './aside.vue';
	// import MD from '../md_component/md_test/test.md';

</script>

<style>
	.example .layui-footer,
	.example .layui-header {
		line-height: 60px;
		/* text-align: center; */
		background: #87ca9a;
		color: white;
	}
	div.body {
		display: flex;
		flex-direction: row;
	}
	.example .layui-body {
		display: flex;
		background: #5FB878;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.show {
		color: red;
	}
</style>