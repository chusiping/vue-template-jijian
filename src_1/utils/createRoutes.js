import { Routes权限路由 } from '@/router/indexTest'

// 将菜单信息转成对应的路由信息 动态添加
export default function createRoutes(data) {
    const result = []
    const children = []

    // 1 加入默认的主页框架路由
    result.push({
        path: '/',
        component: () => import('../components/IndexTest.vue'), // 主页框架
        children,
    })
    // 2 遍历数组添加到路由
    data.forEach(item => {
        generateRoutes(children, item)
    })

    // 3 最后添加404页面 否则会在登陆成功后跳到404页面
    result.push(
        { path: '*', redirect: '/404' },
    )
    // 4 返回数组
    return result
}

function generateRoutes(children, item) {
    if (item.name) {
        if (Routes权限路由[item.name]) children.push(Routes权限路由[item.name])
    } else if (item.children) {
        item.children.forEach(e => {
            generateRoutes(children, e)
        })
    }
}