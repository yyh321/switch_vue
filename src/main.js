import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import 'weui'
import weui from 'weui.js';
import Axios from 'axios'
import {Cell,NavBar,Panel,Row,Col,SwitchCell,Popup} from 'vant'
import lottie from 'vue-lottie'
Vue.component('lottie',lottie);
import $ from 'jquery';
import homiCss from './assets/css/homi.css'
import util from './assets/js/util.js'
import {Hekr, Matrix} from '@hekr/sdk-h5'

import vConsole from 'vconsole'
var vconsole = new vConsole();

import { Picker } from 'mint-ui';

Vue.component(Picker.name, Picker);


Vue.config.productionTip = false
Vue.prototype.$weui = weui;

Vue.prototype.$utils = util;
// Vue.use(weui);
Vue.use(Router).use(Cell).use(Panel).use(NavBar).use(Row).use(Col).use(SwitchCell).use(Popup)
Axios.defaults.headers.post["Content-type"]="application/json";
Vue.prototype.$axios=Axios;

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// import { Picker } from 'mint-ui';
//
// Vue.component(Picker.name, Picker);

// 调试时才会运行，生成环境不会有
if (process.env.NODE_ENV !== 'production') {
    // const { devTid, ctrlKey,subDevTid,accessToken } = require('../keys1.json')  // 这里也可以传入参数重写URL地址  
    // const { devTid, ctrlKey,accessToken } = require('../keys.json')  // 这里也可以传入参数重写URL地址  
    // console.log(...keys);
    window.Matrix = new Matrix({
        // query: {
        //     devTid,
        //     ctrlKey,
        //     subDevTid
        // },
        // accessToken, // 传入devTid，token等信息    
        URL: { // 重写默认URL地址，没有传的就是用默认值    
            ws: 'wss://hub.aihomi.com:186', // websocket地址      
            uaa: 'https://uaa-openapi.aihomi.com', // uaa地址      
            user: 'https://webapi-openapi.aihomi.com', // user地址      
            console: 'https://console-openapi.aihomi.com' // console地址  
        }
    })
}

Vue.prototype.$Hekr = window.$Hekr = new Hekr({
    query: {
        auto: false
    }
})

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', redirect: 'index'},
        {path:'/index',component: resolve=>require(['@/components/Index'],resolve), meta: {index: 0, title: ""}},
        {path: "/confirm", component: resolve=>require(['@/components/confirm'],resolve), meta: {index: 5, title: "开关校准"}},
        {path: "/selectkey", component: resolve=>require(['@/components/selectkey'],resolve), meta: {index: 6, title: "开关校准"}},
        {path: "/calibrate", component: resolve=>require(['@/components/calibreate'],resolve), meta: {index: 6, title: "开关校准"}},
        {path: "/test", component: resolve=>require(['@/components/test'],resolve), meta: {index: 6, title: "开关校准"}},
        {path: "/overtime", component: resolve=>require(['@/components/overtime'],resolve), meta: {index: 6, title: "开关校准"}},
        {path: "/timingPage", component: resolve=>require(['@/components/timingPage'],resolve)}
    ]
})


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
