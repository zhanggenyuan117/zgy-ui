/*
 * @Author: zhang_gen_yuan
 * @Date: 2021-05-03 17:06:44
 * @LastEditTime: 2021-05-03 18:19:31
 * @Descripttion: 
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import zgyUI from './../packages';
Vue.use(zgyUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
