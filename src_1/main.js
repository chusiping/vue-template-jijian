import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
import ViewUI from 'view-design'
import App from './AppTest'
import store from './store'
import router from './router/index'
import 'view-design/dist/styles/iview.css'


Vue.use(ElementUI)
Vue.use(FormMaking)

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.prototype.$axios = axios
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})