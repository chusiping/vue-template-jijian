<template>
  <div>
    <fm-generate-form
        :data="jsonData"
        :remote="remoteFuncs"
        :value="editData"
        :remote-option="dynamicData"
        ref="generateForm"
    >
    </fm-generate-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // eslint-disable-next-line max-len
            jsonData: { list: [{ type: 'input', icon: 'icon-input', options: { width: '', defaultValue: '', required: false, requiredMessage: '', dataType: '', dataTypeCheck: false, dataTypeMessage: '', pattern: '', patternCheck: false, patternMessage: '', validatorCheck: false, validator: '', placeholder: '', customClass: '', disabled: false, labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, showPassword: false, clearable: false, maxlength: '', showWordLimit: false, remoteFunc: 'func_8mzqtpds', remoteOption: 'option_8mzqtpds', tableColumn: false, subform: false }, events: { onChange: '', onFocus: '', onBlur: '' }, name: '单行文本', key: '8mzqtpds', model: 'input_8mzqtpds', rules: [] }, { type: 'number', icon: 'icon-number', options: { width: '', required: false, requiredMessage: '', validatorCheck: false, validator: '', defaultValue: 0, min: 0, max: 9, step: 1, disabled: false, controls: true, controlsPosition: '', customClass: '', labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, precision: 0, remoteFunc: 'func_zvuhr6pd', remoteOption: 'option_zvuhr6pd', tableColumn: false, subform: false }, events: { onChange: '', onFocus: '', onBlur: '' }, name: '计数器', key: 'zvuhr6pd', model: 'number_zvuhr6pd', rules: [] }, { type: 'rate', icon: 'icon-pingfen1', options: { defaultValue: 0, max: 5, disabled: false, allowHalf: false, required: false, requiredMessage: '', validatorCheck: false, validator: '', customClass: '', labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, showScore: false, width: '', remoteFunc: 'func_8vh40o0i', remoteOption: 'option_8vh40o0i', tableColumn: false, subform: false }, events: { onChange: '' }, name: '评分', key: '8vh40o0i', model: 'rate_8vh40o0i', rules: [] }, { type: 'input', icon: 'icon-input', options: { width: '', defaultValue: '', required: false, requiredMessage: '', dataType: '', dataTypeCheck: false, dataTypeMessage: '', pattern: '', patternCheck: false, patternMessage: '', validatorCheck: false, validator: '', placeholder: '', customClass: '', disabled: false, labelWidth: 100, isLabelWidth: false, hidden: false, dataBind: true, showPassword: false, clearable: false, maxlength: '', showWordLimit: false, remoteFunc: 'func_q8pcefou', remoteOption: 'option_q8pcefou', tableColumn: false, subform: false }, events: { onChange: '', onFocus: '', onBlur: '' }, name: '单行文本', key: 'q8pcefou', model: 'input_q8pcefou', rules: [] }, { type: 'button', icon: 'icon-button', options: { customClass: '', disabled: false, labelWidth: 100, isLabelWidth: false, hideLabel: true, hidden: false, dataBind: false, buttonSize: 'small', buttonType: 'success', buttonPlain: false, buttonRound: false, buttonCircle: false, buttonName: 'Button', width: '', remoteFunc: 'func_jtj8r81j', remoteOption: 'option_jtj8r81j', tableColumn: false, subform: false }, events: { onClick: '' }, name: '按钮', key: 'jtj8r81j', model: 'button_jtj8r81j', rules: [] }], config: { labelWidth: 100, labelPosition: 'right', size: 'default', customClass: '', ui: 'element', layout: 'horizontal', width: '100%', hideLabel: false, hideErrorMessage: false, eventScript: [{ key: 'mounted', name: 'mounted', func: '' }, { key: 'refresh', name: 'refresh', func: '' }], dataSource: [{ key: 'upload', name: 'Get Upload Token', url: 'https://tools-server.making.link/api/uptoken', method: 'GET', auto: true, responseFunc: 'return res.uptoken;' }, { key: 'getoptions', name: 'Get Options', url: 'https://tools-server.making.link/api/new/options', method: 'GET', auto: true, responseFunc: 'return res.data;' }] } },
            editData: {},
            remoteFuncs: {

            },
            dynamicData: {

            },
        }
    },
}
</script>