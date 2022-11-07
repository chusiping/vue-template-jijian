import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 1 固定路由,写死就好
const Routes固定路由 = [
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/AutoFormOilCard',
        name: 'AutoFormOilCard',
        meta: { title: '加油登记' },
        component: () => import('../views/AutoFormOilCard.vue'),
    },
    {
        path: '/AutoFormWXMsg',
        name: 'AutoFormWXMsg',
        meta: { title: '微信测试' },
        component: () => import('../views/AutoFormWXMsg.vue'),
    },
    {
        path: '/other', // 点击侧边栏跳到一个单独的路由页面，需要定义，层级和其他顶级路由一样
        name: 'other',
        meta: { title: '单独的路由' },
        component: () => import('../views/Other.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

// 2 动态路由,本地所有的页面 需要配合后台返回的数据生成页面
export const Routes权限路由 = {
    AutoForm_wxMsg: {
        path: '/AutoFormWXMsg',
        name: 'AutoFormWXMsg',
        meta: { title: '主页' },
        component: () => import('../views/AutoFormWXMsg.vue'),
    },
    t1: {
        path: 't1',
        name: 't1',
        meta: { title: '表格' },
        component: () => import('../views/T1.vue'),
    },
    password: {
        path: 'password',
        name: 'password',
        meta: { title: '修改密码' },
        component: () => import('../views/Password.vue'),
    },
    msg: {
        path: 'msg',
        name: 'msg',
        meta: { title: '通知消息' },
        component: () => import('../views/Msg.vue'),
    },
    userinfo: {
        path: 'userinfo',
        name: 'userinfo',
        meta: { title: '用户信息' },
        component: () => import('../views/UserInfo.vue'),
    },
}

const Router初始路由 = () => new Router({
    mode: 'history',
    routes: Routes固定路由,
})
const router = Router初始路由()

export function resetRouter() {
    const newRouter = Router初始路由()
    router.matcher = newRouter.matcher
}

export default router