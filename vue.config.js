const path = require('path')

module.exports = {
  // outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '后台管理系统'
      return args
    })
  },
  configureWebpack: (config) => {
    // 为生产环境修改配置...
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production'
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // },
  css: {
    extract:
      process.env.NODE_ENV === 'production'
        ? {
            ignoreOrder: true
          }
        : false
  }
}
