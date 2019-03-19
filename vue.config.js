const path = require('path')
// const {applyMock} = require("./build/mock")
const pkg = require('./package.json')
module.exports = {
  baseUrl: process.env.VUE_APP_BASEURL || '/',
  // outputDir: process.env.NODE_ENV === 'production' ? 'admin/' : 'dist/',
  chainWebpack: chain => {
    if(pkg && pkg.version){
        chain.plugin('define')
            .tap(([options])=>{
              options['process.env']['VUE_APP_NAME'] = `"${pkg.name}"`
              options['process.env']['VUE_APP_VERSION'] = `"${pkg.version}"`
              return[options]
            })
    }
    chain
      .module
      .rule('svg')
      .include
        .add(path.resolve(__dirname, './src/icons'))
    chain.module
      .rule('svg')
      .uses
        .delete('file-loader')
    chain
      .module
      .rule('svg')
        .test(/\.(svg)(\?.*)?$/)
        .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
                  symbolId: 'icon-[name]'
          })

          chain.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options =>{
                options.limit = 1
                return options
              })
              // .options({
              //   limit: inlineLimit,
              //   name: `img/[name].[hash:8].[ext]`
              // })

  },
  configureWebpack:function(config){
    // console.log(config.module.rules[2])
    return {
      resolve: {
        // extensions: ['.js', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      }
    }
  },
  // devServer 选项单独配置
  devServer: {
    https:false,
    proxy: {
      '/v1': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        onProxyReq: function(proxyReq){
          proxyReq.removeHeader('origin')
        }
      }
    },
    before: app =>{
      // applyMock(app)
    }
  }
}
