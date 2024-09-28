<template>
    <div class="count">
        <h2>当前求和为{{ countStore.Countsum }},十倍为{{ countStore.bigSum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="countStore.countAdd(n)">add</button>
        <button @click="countStore.countSub(n)">sub</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Count',
}  
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCountStore } from '@/store/Count';
const countStore = useCountStore()
function addSum(n: number) {
    countStore.Countsum += n
}

function subSum(n: number) {
    countStore.Countsum -= n
}
// import useSum from '../../hooks/useSum'
// let { sum, addSum, subSum } = useSum()
let n = ref(1)
</script>

<style scoped>
.count {
    width: 400px;
    height: 300px;
    background-color: skyblue;
    border: 1px black solid;
    border-radius: 8px;
}
</style>