<!-- 获取板块列表数据，赋值到dropdownlist上 -->
<template>
<div>
    <!-- @change="dialogVisible = true" -->
    <el-select v-model="value" placeholder="请选择" @change="dialogVisible = true" >
        <el-option v-for="item in bk板块列表" :key="item.opt" :label="item.opt" :value="item.opt">
        </el-option>
    </el-select>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>
<script>

export default {
    data() {
        return {
            dialogVisible: false,
            bk板块列表: [],
            value: '',
        }
    },
    mounted() {
        this.getDate()
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done()
            })
            .catch(_ => {})
        },
        // 获取板块名称列表
        getDate() {
            this.$axios.get('http://win7.qy/vhost/custom/api_stock.php?fcname=get_bk2').then(res => {
                this.bk板块列表 = res.data
                console.log(res.data)
            })
        },
    },
}
</script>
