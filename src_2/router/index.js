import Vue from 'vue'
import Router from 'vue-router'
import aaa2 from '../components/aaa2.vue'
import bksele from '../components/bksele.vue'
import tbs from '../components/tbs.vue'
import home from '../components/home.vue'
import not404 from '../components/not404.vue'
import App from '../App.vue'
import login from '../components/login.vue'
import Demo_easyTable_table from '../components/Demo_easyTable_table.vue'
import formMakingForVue from '../components/formMakingForVue.vue'
// 使用路由
Vue.use(Router)
// const ISLOGIN = true // 登录状态模拟
// router.beforeEach((to, from, next) => { // 全局全局前置守卫
//     // to : 将要进入的目标路由对象
//     // from : 即将离开的目标路由对象
//     // 执行跳转的下一步钩子
//     console.log(to)
//     console.log(from)
//     if (to.name != 'login') { // 如果不是登录页面
//         if (ISLOGIN)next() // 已登录就执行跳转
//         else next({ name: 'login' }) // 否则跳转到登录页面
//     } else { // 如果是登录页面
//         // eslint-disable-next-line no-lonely-if
//         if (ISLOGIN)next({ name: '/' }) // 已登录就跳转到首页
//         else next() // 否则正常进入登录页面
//     }
// })

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    path: 'aaa2',
                    component: aaa2,
                },
                {
                    path: 'login',
                    component: login,
                },
                {
                    path: 'easyTable',
                    component: Demo_easyTable_table,
                },
                {
                    path: 'formaking',
                    component: formMakingForVue,
                },
            ],
        },
    ],
    // mode: 'history', // 去掉浏览器中的#
})

export default router

// export default new Router({
//     mode: 'history', // 去掉浏览器中的#
// })
