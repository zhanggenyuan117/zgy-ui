/*
 * @Author: zhang_gen_yuan
 * @Date: 2021-05-03 17:09:17
 * @LastEditTime: 2021-05-03 17:09:25
 * @Descripttion: 
 */

module.exports = {
    pages: {
      index: {
        // 修改入口
        entry: 'examples/main.js',
        template: 'public/index.html',
        filename: 'index.html'
      }
    },
    chainWebpack: config => {
        config.module
          .rule('js')
          .include
            .add('/packages')
            .end()
          .use('babel')
            .loader('babel-loader')
            .tap(options => {
              return options
          })
     }
}