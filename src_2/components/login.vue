<template>
<div>
    <el-button type="primary" @click="getIN">登录</el-button>
</div>
</template>


<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        getIN() {
            this.$router.push({
                path: '/',
                query: { data: null },
            })
        },
    },
}
</script>
<!-- 参考 https://www.cnblogs.com/lightice/p/13410200.html -->