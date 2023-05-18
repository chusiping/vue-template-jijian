<!-- 获取板块列表数据，赋值到dropdownlist上 -->
<!--
    需求 ：  1 新增，单个新增，批量新增，正则检查批量数据格式
            排序
            2 查询跳转，旧的方法
            3 删除 hover时显示删除按钮 ， 完毕提
-->
<template>
<div>
    <!-- @change="dialogVisible = true" -->
    <el-select v-model="dropList" placeholder="请选择" ref="selebk">
        <el-option v-for="item in bk板块列表" :key="item.opt" :label="item.opt" :value="item.opt">
        </el-option>
    </el-select>
    <el-button type="primary" @click="getCodes">编辑</el-button>
    <el-button type="primary" @click="sycBK">同步东方自选过来</el-button>
    <el-dialog title="编辑内容" :visible.sync="dialogVisible" width="60%" :before-close="handle2Close">
        <el-tag :key="tag" class="tagmagin"  v-show="!manyMode"  v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
        <el-input v-show="!manyMode" class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
        </el-input>
        <el-button  v-show="!manyMode" v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        <el-input v-show="manyMode"
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea1">
        </el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="modeN">输入模式</el-button>
            <el-button @click="qingkong">清空</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="commitData">提 交</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            dynamicTags: ['标签一', '标签二', '标签三'],
            inputVisible: false,
            inputValue: '',
            bk板块列表: [],
            dropList: '',
            textarea1: 'aaa33',
            manyMode: false,
        }
    },
    mounted() {
        this.getDate()
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
        },
        showInput() {
            this.inputVisible = true
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus()
            })
        },

        handleInputConfirm() {
            let inputValue = this.inputValue
            if (inputValue) {
                this.dynamicTags.push(inputValue)
            }
            this.inputVisible = false
            this.inputValue = ''
        },
        handle2Close(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done()
            })
            .catch(_ => {})
        },
        // 每次点击编辑触发 板块下股票代码
        getCodes() {
            if (this.dropList == '') return
            this.dialogVisible = true
            // console.log('▶', this.dropList)
            let url = this.host() + '?fcname=get_bk2&code=' + this.dropList
            this.$axios.get(url).then(res => {
                let rt = res.data[0].content
                this.textarea1 = rt
                let codes = rt.split(',')
                codes.sort()
                this.dynamicTags = []
                for (let i = 0; i < codes.length; i++) {
                    this.dynamicTags.push(codes[i])
                }
            })
        },
        // 从同方财富同步自选股列表
        sycBK() {
            // let url = 'http://121.4.43.207:3000/myStockExist'
            let url =  globle_Para.api_getZxg;
            console.log(url);
            this.$axios.get(url).then(res => res.data).then(res => {
                console.log('sycBK >>' + res)
                let ck = /^\d{6}(,\d{6})*$/.test(res)
                if (ck == false) {
                    this.$message('数组格式错误！')
                    return
                }
                this.$confirm('确认同步？')
                .then(_ => {
                    let url2 = this.host() + '?fcname=set_bkzxg&code=' + res + '&bkname=自选'
                    console.log(url2)
                    this.$axios.get(url2).then(res => {
                        if (res.data == 'ok') {
                            this.$message({
                                message: '添加成功！',
                                type: 'success',
                            })
                        }
                    })
                })
                .catch(_ => {})
            })
        },
        // 板块名称列表
        getDate() {
            this.$axios.get(this.host() + '?fcname=get_bk2').then(res => {
                this.bk板块列表 = res.data
                // console.log(res.data)
                this.textarea1 = res.data[0].content
                // =>实现块状排列，可点击删除https://element.eleme.cn/#/zh-CN/component/tag
            })
        },
        // 更新各个板块里的数据列表
        commitData() {
            let rtcodes = this.dynamicTags.join(',') //= > 校验子串是否合规
            if (this.manyMode == true) { rtcodes = this.textarea1 }
            let ck = /^\d{6}(,\d{6})*$/.test(rtcodes)
            if (ck == false) {
                this.$message('数组格式错误！')
                return
            }
            // this.$message(rtcodes)
            this.dialogVisible = false
            // console.log('▶', rtcodes) // => 修改后向接口提交，然后刷新子控件
            let bkname = this.dropList.replace('bkzxg_', '')
            let url = this.host() + '?fcname=set_bkzxg&code=' + rtcodes + '&bkname=' + bkname
            console.log(rtcodes)
            this.$axios.get(url).then(res => {
                if (res.data == 'ok') {
                    this.$message({
                        message: '添加成功！',
                        type: 'success',
                    })
                }
            })
        },
        qingkong() {
            this.dynamicTags = []
            this.textarea1 = ''
        },
        // 输入模式
        modeN() {
            this.inputVisible = !this.inputVisible
            this.manyMode = !this.manyMode
        },
    },
}
</script>

<style>
.el-tag+.el-tag {
    margin-left: 10px;
}

.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}

.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
.tagmagin{
    margin: 5px;
}
.el-textarea__inner{
    height: 120px;
}

</style>
