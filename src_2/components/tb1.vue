<template>
<div style="font-size:22px;width:220px;">
    <el-table :data="baojia">
        <el-table-column align="center" :label="bk">
            <el-table-column prop="[1]"></el-table-column>
            <el-table-column prop="[2]"></el-table-column>
            <el-table-column prop="[4]"></el-table-column>
        </el-table-column>
    </el-table>
</div>

</template>

<script>
import { fet } from '@/api'
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from 'qs'

export default {
    data() {
        return {
            baojia: [],
            bkname: null,
        }
    },
    mounted() {
        this.getUserData()
    },
    methods: {
        getUserData() {
            this.bkname = this.$props.bk == undefined ? 'bkzxg_ETF' : this.$props.bk
            // console.log('@this.bkname=', this.bkname)
            let url = 'http://win7.qy/vhost/custom/api_stock.php?fcname=get_bk2&code=' + this.bkname
            this.$axios.get(url).then(res => {
                let canshu = this.code2Sina(res.data[0])
                console.log('@', canshu)
                let 测试数据 = { P_code: 'cn_515030-ETF-,cn_512760-ETF-,cn_512880-ETF-,cn_512800-ETF-,cn_512400-ETF-,cn_512660-ETF-,cn_512720-ETF-,cn_512690-ETF-,cn_515000-ETF-,cn_515210-ETF-,cn_510800-ETF-,cn_515710-ETF-,cn_515650-ETF-,cn_510150-ETF-,cn_516550-ETF-,cn_516760-ETF-' }
                let postData_bak = { P_code: canshu }
                this.getPrice(postData_bak)
            })
            // 增加异常报警 console.log(this.$props.bk)
        },
        getPrice(obj) {
            const para = {
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify(obj),
                url: 'http://win7.qy/vhost/custom/api_stock.php?fcname=exec_getSinaPrice',
            }
            this.$axios(para).then(res => {
                this.baojia = res.data
                // console.log(res.data)
            })
        },

    },
    props: ['bk'],
}
</script>
<style>
.el-table th>.cell{
    white-space: pre-line;
    white-space: pre-wrap;
}
</style>
