import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Ar from '../pages/Ar.vue'
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";
// import 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/ar',
            component: Ar
        },
        {
            path: '/about',
            component: About,
            children: [
                {
                    name: 'Detail',
                    path: 'detail/:title/:content',
                    component: Detail,
                    props: true
                }
            ]
        },
        {
            path: '/',
            redirect: 'Home'
        }
    ]
})

export default router