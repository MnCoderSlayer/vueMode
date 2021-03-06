import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import routes from './router/router.js'
import store from './vueStore/index.js'
import 'element-ui/lib/theme-default/index.css'

import axios from 'axios'
import config from './api/config'
const localStore = require('store'); //解决IE9 的loacalstore问题
const jquery = require('jquery');     
const axiosInit = axios.create(config);


Vue.use(VueRouter)
Vue.use(ElementUI)


Vue.prototype.$ajax = axiosInit;
Vue.prototype.$jquery = jquery;
Vue.prototype.$localStore = localStore;


const router = new VueRouter({
    routes: routes,

})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

