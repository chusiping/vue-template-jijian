/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.install = function (Vue, options) {
    // [{"opt":"bkzxg_ETF","content":"515030,512760"}] 转为 cn_515030-ETF-,cn_512760-ETF-
    Vue.prototype.code2Sina = function (obj) {
        let codes = obj.content.split(',')
        let sum = ''
        for (let index = 0; index < codes.length; index++) {
            let f1 = 'cn_' + codes[index] + '-' + obj.opt.replace('bkzxg_', '') + '-'
            if (index > 0) { f1 = ',' + f1 }
            sum += f1
        }
        return sum
    }
    Vue.prototype.test = function () {
        alert('执行成功2')
    }
    Vue.prototype.isEmpty = function (ObjVal) {
        if ((ObjVal == null || typeof (ObjVal) == 'undefined') || (typeof (ObjVal) == 'string' && ObjVal == '' && ObjVal != 'undefined')) {
            return true
        }
        return false
    }

    Vue.prototype.accurateDecimal = function (number, format, zeroFill) {
        if (!this.isEmpty(number)) {
            // 正则匹配:正整数，负整数，正浮点数，负浮点数
            if (!/^\d+(\.\d+)?$|^-\d+(\.\d+)?$/.test(number)) { return number }
            let n = 1
            for (let i = 0; i < format; i++) {
                n *= 10
            }

            // 四舍五入
            number = Math.round(number * n) / n
            let str = number.toString()

            // 是否补零
            if (zeroFill) {
                let index
                if (str.indexOf('.') == -1) {
                    index = format
                    str += '.'
                } else {
                    index = format - ((str.length - 1) - str.indexOf('.'))
                }

                for (let i = 0; i < index; i++) {
                    str += '0'
                }
            }
            return str
        }
        return number
    }
    Vue.prototype.ascend = function (x, y) {
        return y[3] - x[3]
    }
    Vue.prototype.sortArr = function (result) {
        let checkLine = '', cbk = ''
        let int = -1, int2 = 0
        let ar = []
        for (let i = 0; i < result.length; i++) {
            let cbk = result[i][5]
            if (checkLine != cbk) // 每次产生新的组的时候，配置参数
            {
                int++
                ar[int] = []
                checkLine = cbk
                int2 = 0
            }
            ar[int][int2] = result[i]
            int2++
        }
        for (let i = 0; i < ar.length; i++) {
            if (i != 1) { ar[i].sort(this.ascend) } // 如果不属于固定股，就进行排序
        }
        let rt = []; let xx = 0
        for (let i = 0; i < ar.length; i++) {
            for (let ii = 0; ii < ar[i].length; ii++) {
                rt[xx] = ar[i][ii]
                xx++
            }
        }
        return rt
    }
    Vue.prototype.host = function () {
        return 'http://typecho.qy:8001/vhost/custom/api_stock_docker.php'
        // return 'http://win7.qy/vhost/custom/api_stock.php'
    }
}