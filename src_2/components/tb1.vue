<template>
    <div>
        <table class="tb">
            <tr>
                <td colspan="5">{{newBkName}}</td>
            </tr>
            <tr v-for="(tr,index) in baojia" :key="index">
                <td>
                    <span v-if="setcolor2(tr[3])">
                        <a :href="newgpkName(tr[0],newBkName)" target="_blank"><span style="color:red">{{tr[1]}}</span></a>
                    </span>
                    <span v-else>
                        <a :href="newgpkName(tr[0],newBkName)" target="_blank">{{tr[1]}}</a>
                    </span>
                </td>
                    <td>
                    <el-popover placement="right" trigger="hover">
                        <el-button size="mini" @click="lookup(tr[1])" type="info" icon="el-icon-message"></el-button>
                        <el-button size="mini" @click="delcode(tr[0],bkname)" type="danger" icon="el-icon-delete"></el-button>
                        <el-button size="mini" @click="viewHistory" type="danger" icon="el-icon-share"></el-button>
                        <el-button slot="reference" size="mini" type="info" icon="el-icon-d-arrow-right"></el-button>
                    </el-popover>
                </td>
                <td>{{setclomValue(2,tr[2])}}</td>
                <td style="width: 4em;">
                    <el-progress :color="setcolor(tr[3]) " :text-inside="true" :stroke-width="10" :percentage="setclomValue(4,tr)"></el-progress>
                </td>
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
        viewHistory() {
            // 查看过往记录
            console.log('▶过往',)
        },
        lookup(cname) {
            // 弹出新的网页搜索
            let mycars = []
            mycars[0] = 'https://www.google.com/search?ei=pM7HXL-yHovfz7sPsaa-SA&q=' + cname + '+site:eastmoney.com&oq=' + cname + '+site:eastmoney.com&as_qdr=w'
            mycars[1] = 'http://www.iwencai.com/stockpick/search?tid=stockpick&qs=sl_box_main_ths&w=' + cname
            for (let index = 0; index < mycars.length; index++) {
                const url = mycars[index]
                window.open(url, '_blank', '')
            }
        },
        delcode(code, bkname) {
            this.$confirm('确认关闭？')
            .then(_ => {
                // 删除code
                let url = 'http://win7.qy/vhost/custom/api_stock.php?fcname=delcode&code=' + code + '&bkname=' + bkname
                console.log('▶', url)
                this.$axios.get(url).then(res => {
                    if (res.data == 'ok') {
                        this.$message({
                            message: '删除成功！',
                            type: 'success',
                        })
                    }
                    console.log('▶', res.data)
                })
            })
            .catch(_ => {})
        },
        // 涨跌分颜色
        setcolor(price) {
            if (price > 0) return '#5f94cb'
            return '#51b791'
        },
        // 涨幅大于3红色显示
        setcolor2(price) {
            if (price > 3) {
                return true
            }
            return false
        },
        newgpkName(code, bkname) {
            let ncode = code.substring(0, 1) == 6 ? 'sh' + code : 'sz' + code
            let rt = 'http://finance.sina.com.cn/realstock/company/' + ncode + '/nc.shtml'
            if (bkname == 'ETF') {
                rt = 'https://finance.sina.com.cn/fund/quotes/' + code + '/bc.shtml'
            }
            return rt
        },
        handerMethod({ rowIndex }) {
            if (rowIndex === 1) {
                // 这里为了是将第二列的隐藏表头，就形成了合并表头的效果
                return { display: 'none' }
            }
        },
        // 获取每个板块的实时价格
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
    body {
        line-height: 1.2;
    }
    .el-popover {
        background-color: #b3b3d1;
        margin-left: 5px !important;
        min-width:auto !important;
        line-height: 1;
        padding:9px;
    }
    .el-button--info {
        border-color: #909399;
    }

    .el-button--mini {
        padding: 0px;
    }

    .el-button {
        /* display: flex !important; */
    }

    .tb {
        color: #000;
        width: 20em;
        border: 1px solid hsla(0, 10%, 85%, 0.864);
        border-collapse: collapse;
        margin-left: 5px;
    }

    td {
        border: 1px solid hsla(0, 10%, 85%, 0.864);
        padding: 3px;
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

    .el-progress-bar__inner {
        border-radius: 0px !important;
    }

    .el-progress-bar__outer {
        border-radius: 0px;
    }

    /* .el-progress-bar .el-progress-bar__inner .el-progress-bar__outer {
        border-radius: 0px !important;
    } */
    </style>
