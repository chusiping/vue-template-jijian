<template>
<div>
    <el-table :header-cell-style="handerMethod" :data="baojia" :show-header="true" :row-style="{height:'20px',border:'3px solid '}" :cell-style="{padding:'0px'}" style="font-size: 11px;font-color:black;">
        <el-table-column align="center" :label="newBkName">
            <el-table-column prop="[1]"></el-table-column>
            <el-table-column prop="[2]"></el-table-column>
            <el-table-column prop="[4]"></el-table-column>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from 'qs'

export default {
    data() {
        return {
            baojia: [],
            bkname: null,
        }
    },
    computed: {
        newBkName() {
            // `this` 指向 vm 实例
            return this.$props.bk.replace('bkzxg_', '')
        },
    },
    mounted() {
        this.getUserData()
    },
    methods: {
        handerMethod({ rowIndex }) {
            if (rowIndex === 1) {
                // 这里为了是将第二列的隐藏表头，就形成了合并表头的效果
                return { display: 'none' }
            }
        },
        getUserData() {
            this.bkname = this.$props.bk == undefined ? 'bkzxg_ETF' : this.$props.bk
            // console.log('@this.bkname=', this.bkname)
            let url = 'http://win7.qy/vhost/custom/api_stock.php?fcname=get_bk2&code=' + this.bkname
            this.$axios.get(url).then(res => {
                let canshu = this.code2Sina(res.data[0])
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
.el-table__body-wrapper::-webkit-scrollbar {
    /*width: 0;宽度为0隐藏 滚动条去除 */
    width: 0px;
    display: none;
}

.el-table thead.is-group th.el-table__cell {
    background: #F5F7FA;

    /* border: 2px solid; */
    padding: 0px;
    color: #000;
}

.el-table .cell {
    padding-left: 2px !important;
    padding-right: 2px !important;
}

.el-table .el-table__body tr:hover td {
    color: red;
}

.el-table .el-table__body td {
    color: #000;
}
</style>
