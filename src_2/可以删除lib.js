
Vue.component('zj1', {
    template: '<h1>自定义组件1</h1>',
})
Vue.component('zj2', {
    template: '<h1>书记2</h1>',
})

Vue.component('tb1', {
    template: '<el-table>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
',
})

