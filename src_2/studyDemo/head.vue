<template>
<div>
     <input type="text" placeholder="输入" @keydown.enter="add">
     <el-button type="primary" @click="SonClick">emit测试按钮</el-button>
</div>
 
</template>

<script>
export default {
    methods:{
        add(e){
            this.addson(e.target.value)
        },
        SonClick(){
            let sonStr = "这是孩子的玩具"
            console.log('▶','子组件点击')
            this.$emit('click',sonStr)
        },
    },
    props:['addson']
}
</script>

<style>

</style>