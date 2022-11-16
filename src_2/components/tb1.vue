<template>
<div>
    <table class="tb">
        <tr><td colspan="4">{{newBkName}}</td></tr>
        <tr v-for="(tr,index) in baojia" :key="index">
            <td>
                <a :href="newgpkName(tr[0])" target="_blank">{{tr[1]}}</a>
            </td>
            <td>{{setclomValue(2,tr[2])}}</td>
            <td style="width: 4em;">  <el-progress :color="customColor" :text-inside="true" :stroke-width="8" :percentage="setclomValue(4,tr)"></el-progress></td>
            <td>{{setclomValue(3,tr[3])}}</td>
        </tr>
    </table>
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
            persent: 20,
            customColor: '#f50e63',
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
        setInterval(() => {
            this.getUserData()
        }, 5000)
    },
    methods: {
        newgpkName(code) {
            let ncode = code.substring(0, 1) == 6 ? 'sh' + code : 'sz' + code
            let rt = 'http://finance.sina.com.cn/realstock/company/' + ncode + '/nc.shtml'
            return rt
        },
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
                // this.baojia = res.data
                this.baojia = this.sortArr(res.data)
                // console.log(res.data)
            })
        },
        setclomValue(lieNO, item) {
            let rt = ''
            switch (lieNO) {
                case 2:
                    rt = this.accurateDecimal(item, 2, true)
                    break
                case 3:
                    // let jiajian = item > 0 ? '+' : '-'
                    rt = item + '%'
                    break
                case 4:
                    if (item[3] > 0) {
                        rt = item[3] * 10
                    } else {
                        rt = -(item[3] * 10)
                    }
                    if (item[0].substring(0, 1) == '3') rt /= 2
                    if (rt > 100) {
                        console.log('▶▶▶100', rt)
                        rt = 100
                    }

                    break
                default:
                    break
            }
            return rt
        },

    },
    props: ['bk'],
}
</script>

<style>
.tb {
    color:#000;
    width: 18em;
    border: 1px solid hsla(0, 10%, 85%, 0.864);
    border-collapse: collapse;
    margin-left: 5px;
}

td{
    border: 1px solid hsla(0, 10%, 85%, 0.864);
    padding:3px;
}
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
