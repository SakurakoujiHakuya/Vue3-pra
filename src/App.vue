<template>
    <div class="banner">
        <h1>banner</h1>
    </div>
    <div class="nav">
        <RouterLink to="/" active-class="xiao">首页</RouterLink>
        <RouterLink to="/ar" active-class="xiao">作者</RouterLink>
        <RouterLink to="/about" active-class="xiao">关于</RouterLink>
    </div>
    <div class="mainCotent">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts">
export default {
    name: 'App',
}  
</script>

<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<style scoped>
/* 样式 */
.app {
    background-color: aqua;
    height: 400px;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0 0 6px black;
    transition: box-shadow 0.3s;
    /* 添加过渡效果 */
}

.app:hover {
    box-shadow: 0 0 6px yellow;
    /* 悬停时的阴影效果 */
}

.banner {
    height: 100px;
    background-color: gray;
    padding: 0 20px;
    text-align: center;
    line-height: 100px;
    margin-bottom: 20px;
}

a {
    text-decoration: none;
}

.nav {
    display: flex;
    justify-content: space-between;
    /* 主轴均匀分布 */
    padding: 0 200px;
    /* 添加内边距 */
}

.nav .xiao {
    display: block;
    /* 设为块级元素以便响应式设计 */
    padding: 10px 15px;
    /* 适当的内边距 */
    background-color: yellow;
    border-radius: 8px;
    text-align: center;
    /* 文字居中 */
}

.nav a {
    display: block;
    /* 设为块级元素以便响应式设计 */
    padding: 10px 15px;
    /* 适当的内边距 */
    background-color: aqua;
    border-radius: 8px;
    text-align: center;
    /* 文字居中 */
}



.mainCotent {
    width: 400px;
    height: 400px;
    border: 1px solid black;
    margin: 20px auto;
    /* 水平居中 */
}
</style>