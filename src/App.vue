<template>  
    <!-- html结构 -->  
    <div class="app">  
        <h2>当前值为:&nbsp;&nbsp;&nbsp;{{ sum }}</h2>

        <button @click="changeSum">按我加一</button>
        <Person/>
    </div>  
</template>  

<script lang="ts">  
export default {  
    name: 'App',  
}  
</script>  

<script lang="ts" setup>  
import { ref, watch } from 'vue';  
import Person from './components/Person.vue';
let sum=ref(0)

function changeSum(){
    sum.value+=1
}
watch(sum,(nv,ov)=>{
    console.log(nv,ov)
})
</script>  

<style scoped>  
/* 样式 */  
.app {  
    background-color: aqua;  
    height: 400px;  
    border-radius: 20px;  
    padding: 10px 20px;  
    box-shadow: 0 0 6px black;  
    transition: box-shadow 0.3s; /* 添加过渡效果 */  
}  

/* 使用 :hover 伪类选择器 */  
.app:hover {  
    box-shadow: 0 0 6px yellow; /* 悬停时的阴影效果 */  
}  

input {  
    height: 20px;  
}  
</style>