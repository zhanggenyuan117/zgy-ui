/*
 * @Author: zhang_gen_yuan
 * @Date: 2021-05-03 18:14:44
 * @LastEditTime: 2021-05-03 18:15:19
 * @Descripttion: 
 */
// 引入组件
import zgyForm from './src/index.vue';

// 提供 install 安装方法，供按需引入
zgyForm.install = function (Vue) {
    // 注册组件
    Vue.component(zgyForm.name, zgyForm)
}
// 暴露组件
export default zgyForm