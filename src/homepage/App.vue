<template>
  <lay-layout class="example">
    <lay-header>
		<Header></Header>
	</lay-header>
    <lay-body>
		<Body></Body>
	</lay-body>
    <lay-footer>footer</lay-footer>
  </lay-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from './header.vue';
import Body from './body.vue';

// import {} from '@layui/layui-vue';
</script>

<style>
.example .layui-footer,
.example .layui-header {
  line-height: 60px;
  /* text-align: center; */
  background: #393d49;
  color: white;
}
.example .layui-side {
  display: flex;
  background: #393d49;
  align-items: center;
  justify-content: center;
  color: white;
}
.example .layui-body {
  display: flex;
  background: #393d49;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>