<template>
    <div>
        <!-- 参考 https://cloud.tencent.com/developer/article/1765666 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <template v-for="item in NavigateItem">
                <el-submenu v-if="item.items.length" :index="item.key" :key="item.key">
                    <template slot="title">
                        {{ item.title }}
                    </template>
                    <el-menu-item v-for="(items, key) in item.items" :key="key" :index="items.key">
                        {{ items.title }}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="item.key" :key="item.key">
                    {{ item.title }}
                </el-menu-item>
            </template>
        </el-menu>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: true,
            NavigateItem: [
                {
                    title: '首页',
                    key: '1',
                    path: '',
                    items: [],
                },
                {
                    title: '找人才',
                    key: '2',
                    path: '',
                    items: [
                        {
                            title: 'aaa2',
                            key: '2-1',
                            path: 'aaa2',
                        },
                        {
                            title: '选项2',
                            key: '2-2',
                            path: '',
                        },
                    ],
                },
                {
                    title: '找资金',
                    key: '3',
                    path: '',
                    items: [
                        {
                            title: '选项1',
                            key: '3-1',
                            path: '',
                        },
                        {
                            title: '选项2',
                            key: '3-2',
                            path: '',
                        },
                    ],
                },
                {
                    title: '提身价',
                    key: '4',
                    path: '',
                    items: [
                        {
                            title: '选项1',
                            key: '4-1',
                            path: '',
                        },
                        {
                            title: '选项2',
                            key: '4-2',
                            path: '',
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
    },
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
