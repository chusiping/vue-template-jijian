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
}