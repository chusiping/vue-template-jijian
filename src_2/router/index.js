import Vue from 'vue'
import Router from 'vue-router'
import aaa2 from '../components/aaa2'
import bksele from '../components/bksele'
import tbs from '../components/tbs'
import home from '../components/home'
import not404 from '../components/not404'
import App from '../App'

// 使用路由
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'rt_home',
            component: home,
            children: [
                {
                    path: 'a1',
                    name: 'rt_bksele',
                    component: bksele,
                },
                {
                    path: 'a2',
                    name: 'rt_tbs',
                    component: tbs,
                },
            ],
        },
        {
            path: '/aaa2',
            name: 'aaa2',
            component: aaa2,
        },
        {
            path: '/:catchAll(.*)',
            component: not404,
        },

    ],
    mode: 'history', // 去掉浏览器中的#
})
