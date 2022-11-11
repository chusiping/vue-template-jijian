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

<script src="https://form.making.link/public/lib/form-making/dist/FormMaking.umd.js"></script>
<script>

export default {
    data() {
        return {
            jsonData: { list: [{ type: 'tabs', icon: 'icon-tabs', tabs: [{ label: 'Tab 1', name: 'tab_1', list: [] }, { label: '标签1页2', name: 'tab_lmgfvbtm', list: [] }], options: { type: '', tabPosition: 'top', customClass: '', hidden: false, remoteFunc: 'func_k1lph92d', remoteOption: 'option_k1lph92d', tableColumn: false, subform: false }, name: '标签2页', key: 'k1lph92d', model: 'tabs_k1lph92d', rules: [] }], config: { labelWidth: 100, labelPosition: 'left', size: 'default', customClass: '', ui: 'element', layout: 'horizontal', labelCol: 3, width: '99%', hideLabel: false, hideErrorMessage: false, eventScript: [{ key: 'mounted', name: 'mounted', func: '' }], dataSource: [{ key: 'upload', name: 'Get Upload Token', url: 'https://tools-server.making.link/api/uptoken', method: 'GET', auto: true, responseFunc: 'return res.uptoken;' }, { key: 'getoptions', name: 'Get Options', url: 'https://tools-server.making.link/api/new/options', method: 'GET', auto: true, responseFunc: 'return res.data;' }] } },
            editData: {},
            remoteFuncs: {

            },
            dynamicData: {

            },
        }
    },
    methods: {

    },
}
</script>

<style>

</style>