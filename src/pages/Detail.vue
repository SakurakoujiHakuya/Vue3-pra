<template>
    <ul>
        <li>表面：{{ title }}</li>
        <!-- <li>细节</li> -->
        <li>实际：{{ content }}</li>
    </ul>
</template>

<script lang="ts" setup>
// import { useRoute } from 'vue-router';
// const route = useRoute()
// console.log('@', route)
defineProps(['title', 'content'])
</script>