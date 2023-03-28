import Vue from 'vue'
import 'vue-easytable/libs/theme-default/index.css'
// import 'vue-easytable/libs/theme-dark/index.css' // easytable 黑皮肤
import { VeTable, VePagination, VeIcon, VeLoading, VeLocale } from 'vue-easytable'
// import VueEasytable from 'vue-easytable'
import axios from 'axios'
import FormMaking from 'form-making'
import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import aaa2 from './components/aaa2' // aaa2实时报价
// import autoForm from './components/formMakingForVue.vue'

import Demo_easyTable_table from './components/Demo_easyTable_table.vue'
import App from './App'
import publicFun from './publicFunc'
import router from './router'


Vue.use(VeTable)
Vue.use(VePagination)
Vue.use(VeIcon)
Vue.use(VeLoading)

Vue.prototype.$veLoading = VeLoading
Vue.prototype.$veLocale = VeLocale


Vue.use(publicFun)
Vue.use(ElementUI)
Vue.use(FormMaking)
Vue.config.productionTip = false
Vue.use(ViewUI)


Vue.prototype.$axios = axios
new Vue({
    el: '#app',
    router,
    render: h => h(aaa2), // 通过接切(aaa2)来显示默认的页面
})