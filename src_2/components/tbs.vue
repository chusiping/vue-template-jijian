<template>
<div>
    <div style="float:left;padding: 5px;" v-for="item in items" :key="item.opt">
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
            let url = 'http://win7.qy/vhost/custom/api_stock.php?fcname=get_bk2'
            this.$axios.get(url).then(res => {
                this.items = res.data
            })
            // 增加异常报警 console.log(this.$props.bk)
        },
    },
}
</script>
