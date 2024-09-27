<template>
    <div class="container">
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- <a href="#">{{ news.title }}</a> -->
                <!-- <RouterLink :to='`/about/detail?title=${news.title}&content=${news.content}`'>{{ news.title }} -->
                <!-- <RouterLink :to="`/about/detail/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
                <RouterLink :to="{
                    name: 'Detail',
                    params: {
                        title: news.title,
                        content: news.content
                    }
                }">{{ news.title }}</RouterLink>
            </li>
        </ul>
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const newsList = reactive([
    { id: '001', title: '我爱你中国', content: '叮咚及' },
    { id: '002', title: '战狼', content: '美国队长' },
    { id: '003', title: '华为', content: '苹果' },
    { id: '004', title: '怪零', content: '顶针' },
    { id: '005', title: '兔子', content: '哆啦a梦' },
])
</script>

<style scoped>
/* a {
    list-style: none;
} */

.container {
    display: flex;
    /* 使用 flexbox 布局 */
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    /* 去掉列表标记 */
    /* 让列表紧贴左侧 */
    flex: 1;
    /* 使列表占据剩余空间 */
}

.content {
    height: 400px;
    width: 250px;
    border-left: 1px black solid;
    /* 让 content 紧贴右侧，无需 margin */
}
</style>