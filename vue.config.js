module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://win7.qy/', // 对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    pages: {
        index: {
            entry: 'src_2/main.js',
            // entry: 'src-1 第一次在VUE中使用Axios/main.js',
            // entry: 'src-2 axios获取数组数据并渲染/main.js',
            // entry: 'src-3 分别用ge和post方法获取Token/main.js',
            // 当有多行是，VUE以最后一行entry为准。
            // template: 'public/home.html',
        },
    },
    publicPath: './',
    lintOnSave: false, // 关闭eslint检查
}