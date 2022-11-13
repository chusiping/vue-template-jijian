<template>
<div>
    <el-button type="primary" @click="test">父亲show测试</el-button>
    <myhead :addson="add"></myhead>
    <list :arr="arr" />
</div>
</template>

<script>
import myhead from './head'
import List from './List.vue'
export default {
    data() {
        return {
            arr: ['aa', 'bb', 'cc']
        }
    },
    components: {
        List,
        myhead
    },
    methods: {
        add(item) {
            console.log('@收到',item)
            this.arr.unshift(item)
        },
        test(sonStr_){
            console.log('▶','父亲show测试'+sonStr_)
        }
    }

}
</script>

<style>

</style>
