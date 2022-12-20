<template>
    <div>
        <ve-table
        :rowStyleOption="rowStyleOption"
        :editOption="editOption"
        :checkbox-option="checkboxOption"
        :expand-option="expandOption"
        row-key-field-name="ID"
        :fixed-header=true
        :max-height="500"
        style="width:80%"
        :columns="columns"
        :table-data="tableData" />
        <div class="table-pagination">
                <ve-pagination
                    :total="totalCount"
                    :page-index="pageIndex"
                    :page-size="pageSize"
                    @on-page-number-change="pageNumberChange"
                    @on-page-size-change="pageSizeChange"
                />
            </div>
        </div>
    </template>
<script>
let DB_DATA = []
export default {
    data() {
        return {
            editOption: {
                beforeCellValueChange: ({ row, column, changeValue }) => {
                    console.log('网格修改前存值：')
                    console.log('行::', row)
                    console.log('列::', column)
                    console.log('被改的值::', changeValue)
                    console.log('---')
                    if (column.field === 'number' && !/^\d+$/.test(changeValue)) {
                        alert('please enter a number')
                        return false
                    }
                },
                afterCellValueChange: ({ row, column, changeValue }) => {
                    console.log('已修改值：')
                    console.log('行::', row)
                    console.log('列::', column)
                    console.log('最终的值::', changeValue)
                    console.log('---')
                },
            },
            rowStyleOption: {
                clickHighlight: false,
                hoverHighlight: false,
            },
            pageIndex: 1,
            pageSize: 5,
            expandOption: {
                expandable: ({ row, column, rowIndex }) => {
                    if (row.ID === 9001) {
                        return false
                    }
                },
                // render 函数
                render: ({ row, column, rowIndex }, h) => (
                    <p>row.address： <span style="color:#1890ff;">{row.address}</span></p>
                ),
            },
            checkboxOption: {
                // 点击每行的checkbox
                selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {
                    console.log(row, isSelected, selectedRowKeys)
                },
                // 点击全部的checkbox
                selectedAllChange: ({ isSelected, selectedRowKeys }) => {
                    console.log('全选点击状态：' + isSelected)
                    console.log('选中的行号：' + selectedRowKeys)
                },
            },
            columns: [
                { field: '', key: 'y', type: 'expand', title: '', width: 50, align: 'center' },
                { field: '', key: 'z', type: 'checkbox', title: '', width: 50, align: 'center' },
                { field: 'ID', key: 'w', type: 'ID', title: 'ID', align: 'center' },
                { edit: true, field: 'name', key: 'a', title: 'Name', align: 'center', width: '40%' },
                { edit: true, field: 'date', key: 'b', title: 'Date', align: 'left' },
                { edit: true, field: 'hobby', key: 'c', title: 'Hobby', align: 'right' },
                { edit: true, field: 'address', key: 'd', title: 'Address', width: '40%' },
                {
                    field: '',
                    key: 'e',
                    title: 'Action',
                    width: '',
                    center: 'left',
                    renderBodyCell: ({ row, column, rowIndex }, h) => (
                        <span>
                            <button class="button-demo" on-click={() => this.editRow(row)}>
                                        修改
                            </button>
                                    &nbsp;
                            <button class="button-demo" on-click={() => this.deleteRow(row)}>
                                        删除
                            </button>
                        </span>
                    ),
                },
            ],
        }
    },
    computed: {
        // table data
        tableData() {
            const { pageIndex, pageSize } = this
            return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)
        },
        // total count
        totalCount() {
            return DB_DATA.length
        },
    },
    mounted() {
        this.loadingInstance = this.$veLoading({
            target: document.querySelector('#loading-container'),
            // 等同于
            // target:"#loading-container"
            name: 'wave',
        })
        // this.show() //loading-container 显示
    },
    methods: {
        editRow(row) {
            console.log('点击了编辑按键 行是：' + JSON.stringify(row))
        },
        deleteRow(row) {
            console.log('删除的行是：' + JSON.stringify(row))
        },
        show() {
            this.loadingInstance.show()
        },
        close() {
            this.loadingInstance.close()
        },
        // page number change
        pageNumberChange(pageIndex) {
            this.pageIndex = pageIndex
        },

        // page size change
        pageSizeChange(pageSize) {
            this.pageIndex = 1
            this.pageSize = pageSize
        },

        // Simulation table data
        initDatabase() {
            DB_DATA = []
            for (let i = 0; i < 1000; i++) {
                DB_DATA.push({
                    ID: 1000 + i,
                    name: 'John' + i,
                    date: '1900-05-20',
                    hobby: 'coding and coding repeat' + i,
                    address: 'No.1 Century Avenue, Shanghai' + i,
                })
            }
        },
    },
    created() {
        this.initDatabase()
    },
}
</script>

<!-- 参考： https://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/row-checkbox -->