import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
// import App from './components/aaa2' // './components/tbs'
// import aaa2 from './studyDemo/test'
import App from './App'
import publicFun from './publicFunc'
import router from './router'

Vue.use(publicFun)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(ViewUI)

Vue.prototype.$axios = axios
new Vue({
    el: '#app',
    router,
    render: h => h(App),
})