<template>
<div class="masonry">
    <div class="item" v-for="item in items" :key="item.opt">
        <tb1 :bk="item.opt"></tb1>
    </div>
</div>
</template>

<script>
import tb1 from './tb1'

// 导入子组件，缩写格式 AppHeader: AppHeader
export default {
    data() {
        return {
            items: [

            ],
        }
    },
    components: { tb1 },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            let url = this.host() + '?fcname=get_bk2'
            this.$axios.get(url).then(res => {
                this.items = res.data
            })
            // 增加异常报警 console.log(this.$props.bk)
        },
    },
}
</script>
<style>
.masonry {
    column-count: 5;
    column-gap: 0;
    margin-top: 5px;
    flex-wrap: wrap;
}
.item {
    width: 280px;
    break-inside: avoid;
    box-sizing: border-box;
    padding: 2px;
    border: solid 0px rgb(180, 177, 179);
    margin: 1px;
}
</style>
