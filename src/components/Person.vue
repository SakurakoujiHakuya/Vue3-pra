<template>
    <h1>hello123</h1>
    <h2>{{ a }}</h2>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// 正确用法，定义 props  
const props = defineProps<{
    a: string; // 假设 a 是字符串类型  
}>();

// 可选：将 a 变为局部变量，方便使用  
const a = props.a;  
</script>

<style>
/* 样式 */
.person {
    background-color: red;
}
</style>