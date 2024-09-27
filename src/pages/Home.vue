<template>
    <div class="home">
        <span>这里是home</span>
        <span>人数：{{ sum }}</span>
        <button @click="addSum">点我你家多活一人</button>
    </div>
</template>

<script lang="ts" setup>
import useSum from '../../hooks/useSum'
const { sum, addSum } = useSum(1)

// const { sum, addSum } = useSum()
</script>
<style scoped>
.home {
    background-color: blue;
    width: 400px;
    height: 400px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.home span {
    font-size: 20px;
    font-family: '楷体';
    /* 不需要设置 margin-bottom，这里可以根据需要调整 */
}

button {
    width: 150px;
    margin: 10px auto;
    user-select: none;
    /* 添加 margin-top 来调整间距，并且保持水平居中 */
}
</style>