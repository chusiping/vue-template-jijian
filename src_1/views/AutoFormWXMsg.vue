<!-- eslint-disable camelcase -->
<template>
  <div style="width: 800px;margin-top: 10px;margin-left: auto;margin-right: auto; text-align: center;">
        <fm-generate-form
            :data="jsonData"
            :remote="remoteFuncs"
            :value="editData"
            :remote-option="dynamicData"
            ref="generateForm"
        >
        </fm-generate-form>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            jsonData: { list: [{ type: 'grid', icon: 'icon-RectangleCopy', columns: [{ type: 'col', options: { span: 24, offset: 0, push: 0, pull: 0, xs: 24, sm: 24, md: 24, lg: 24, xl: 24, customClass: '' }, list: [{ type: 'input', icon: 'icon-input', options: { width: '', defaultValue: '', required: false, requiredMessage: '', dataType: '', dataTypeCheck: false, dataTypeMessage: '', pattern: '', patternCheck: false, patternMessage: '', validatorCheck: false, validator: '', placeholder: '', customClass: '', disabled: false, labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, showPassword: false, clearable: false, remoteFunc: 'func_mrbtctpi', remoteOption: 'option_mrbtctpi', tableColumn: false }, events: { onChange: '', onFocus: '', onBlur: '' }, name: '部门', novalid: {}, key: 'mrbtctpi', model: 'toparty', rules: [] }], key: 'i33ebgbg', rules: [] }, { type: 'col', options: { span: 24, offset: 0, push: 0, pull: 0, xs: 24, sm: 24, md: 24, lg: 24, xl: 24, customClass: '' }, list: [{ type: 'input', icon: 'icon-input', options: { width: '', defaultValue: '', required: false, requiredMessage: '', dataType: '', dataTypeCheck: false, dataTypeMessage: '', pattern: '', patternCheck: false, patternMessage: '', validatorCheck: false, validator: '', placeholder: '', customClass: '', disabled: false, labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, showPassword: false, clearable: false, remoteFunc: 'func_8x6m6bbe', remoteOption: 'option_8x6m6bbe', tableColumn: false }, events: { onChange: '', onFocus: '', onBlur: '' }, name: '人员', novalid: {}, key: '8x6m6bbe', model: 'touser', rules: [] }], key: 'ggchtjo6', rules: [] }], options: { gutter: 0, justify: 'start', align: 'top', customClass: '', hidden: false, flex: true, responsive: true, remoteFunc: 'func_l7hrd7fm', remoteOption: 'option_l7hrd7fm', tableColumn: false }, name: '栅格布局', key: 'l7hrd7fm', model: 'grid_l7hrd7fm', rules: [] }, { type: 'grid', icon: 'icon-RectangleCopy', columns: [{ type: 'col', options: { span: 24, offset: 0, push: 0, pull: 0, xs: 24, sm: 24, md: 24, lg: 24, xl: 24, customClass: '' }, list: [{ type: 'input', icon: 'icon-input', options: { width: '', defaultValue: 'text', required: false, requiredMessage: '', dataType: '', dataTypeCheck: false, dataTypeMessage: '', pattern: '', patternCheck: false, patternMessage: '', validatorCheck: false, validator: '', placeholder: '', customClass: '', disabled: false, labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, showPassword: false, clearable: false, remoteFunc: 'func_8ht5akk4', remoteOption: 'option_8ht5akk4', tableColumn: false }, events: { onChange: '', onFocus: '', onBlur: '' }, name: '消息格式', novalid: {}, key: '8ht5akk4', model: 'msgtype', rules: [] }], key: '4wnhrj65' }, { type: 'col', options: { span: 24, offset: 0, push: 0, pull: 0, xs: 24, sm: 24, md: 24, lg: 24, xl: 24, customClass: '' }, list: [{ type: 'input', icon: 'icon-input', options: { width: '', defaultValue: '1000003', required: false, requiredMessage: '', dataType: '', dataTypeCheck: false, dataTypeMessage: '', pattern: '', patternCheck: false, patternMessage: '', validatorCheck: false, validator: '', placeholder: '', customClass: '', disabled: false, labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, showPassword: false, clearable: false, remoteFunc: 'func_qwzgoh5n', remoteOption: 'option_qwzgoh5n', tableColumn: false }, events: { onChange: '', onFocus: '', onBlur: '' }, name: '业务类型', novalid: {}, key: 'qwzgoh5n', model: 'agentid', rules: [] }], key: '5vcjk1se' }], options: { gutter: 0, justify: 'start', align: 'top', customClass: '', hidden: false, flex: true, responsive: true, remoteFunc: 'func_m40q2h0d', remoteOption: 'option_m40q2h0d', tableColumn: false }, name: '栅格布局', key: 'm40q2h0d', model: 'grid_m40q2h0d', rules: [] }, { type: 'grid', icon: 'icon-RectangleCopy', columns: [{ type: 'col', options: { span: 24, offset: 0, push: 0, pull: 0, xs: 24, sm: 24, md: 24, lg: 24, xl: 24, customClass: '' }, list: [{ type: 'textarea', icon: 'icon-diy-com-textarea', options: { width: '', defaultValue: '<a href="http://work.weixin.qq.com">邮件中心视频实况</a> 请点解链接查看 ', required: false, requiredMessage: '', disabled: false, pattern: '', patternMessage: '', validatorCheck: false, validator: '', placeholder: '', customClass: '', labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, clearable: false, remoteFunc: 'func_71bttwep', remoteOption: 'option_71bttwep', tableColumn: false }, events: { onChange: '', onFocus: '', onBlur: '' }, name: '内容', novalid: {}, key: '71bttwep', model: 'msgContent', rules: [] }], key: '4xzho5uq' }], options: { gutter: 0, justify: 'start', align: 'top', customClass: '', hidden: false, flex: true, responsive: true, remoteFunc: 'func_xauqb9o5', remoteOption: 'option_xauqb9o5', tableColumn: false }, name: '栅格布局', key: 'xauqb9o5', model: 'grid_xauqb9o5', rules: [] }, { type: 'input', icon: 'icon-input', options: { width: '', defaultValue: '', required: false, requiredMessage: '', dataType: '', dataTypeCheck: false, dataTypeMessage: '', pattern: '', patternCheck: false, patternMessage: '', validatorCheck: false, validator: '', placeholder: '', customClass: '', disabled: false, labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, showPassword: false, clearable: false, remoteFunc: 'func_ufuul8v6', remoteOption: 'option_ufuul8v6', tableColumn: false }, events: { onChange: '', onFocus: '', onBlur: '' }, name: '调用标识', key: 'ufuul8v6', model: 'UID', rules: [] }], config: { labelWidth: 120, labelPosition: 'right', size: 'default', customClass: '', ui: 'element', layout: 'horizontal', labelCol: 3, width: '100%', hideLabel: false, hideErrorMessage: false, eventScript: [{ key: 'mounted', name: 'mounted', func: '' }, { key: 'g88osh09', name: 'onClick_g88osh09', func: 'this.getData().then(data => {\n  this.$alert(data, \'Form data\')\n})' }], dataSource: [{ key: 'upload', name: 'Get Upload Token', url: 'https://tools-server.making.link/api/uptoken', method: 'GET', auto: true, responseFunc: 'return res.uptoken;' }, { key: 'getoptions', name: 'Get Options', url: 'https://tools-server.making.link/api/new/options', method: 'GET', auto: true, responseFunc: 'return res.data;' }], platform: 'pad' } },
            editData: {},
            remoteFuncs: {

            },
            dynamicData: {

            },
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.generateForm.getData().then(data => {
                // 在redis.qy上node wx_sendmsg.js 启动这个服务
                console.log('data:' + JSON.stringify(data))
                let url = 'http://121.4.43.207:3001/send_wx?type=send&UID=' + data.UID
                let ContentType = { headers: { 'Content-Type': 'multipart/json' } }
                axios.post(url, data, ContentType)
                .then((res) => {
                    this.$message({ message: res.data, type: 'success' })
                    // this.$message({ message: /*JSON.stringify(res.data) */  '操作成功！', type: 'success' });
                })
            }).catch(e => {
                // Data verification failed
            })
        },
    },
}
</script>

<style>

</style>