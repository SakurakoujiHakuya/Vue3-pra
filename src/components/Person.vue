<template>
    <!-- html结构 -->
    <div class="person">
    </div>
</template>

<script lang="ts">
// js or ts  
export default {
    name: 'Person',
    data() {
        return {
            name: '张三',
            tel: '115',
            age: 56
        }
    },
    methods: { // 修改这里  
        changeage() {
            this.age += 1
        },
        showTel() {
            alert(this.tel)
        }
    }
}  
</script>

<style>
/* 样式 */
.person {
    background-color: red;
}
</style>