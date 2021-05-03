/*
 * @Author: zhang_gen_yuan
 * @Date: 2021-05-03 17:15:27
 * @LastEditTime: 2021-05-03 18:22:43
 * @Descripttion: 
 */
// 引入组件
import zgyForm from './zgy-form/src';
// 存放组件的数组
const components = [
    zgyForm
]

// 定义 install 方法，接收 Vue 作为参数。
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历 components 数组，来进行全局注册
    components.map(component => {
        Vue.component(component.name, component)
    })
}

export default {
    install,
    zgyForm
}