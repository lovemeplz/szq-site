const path = require('path')
// const {applyMock} = require("./build/mock")
module.exports = {
  publicPath: process.env.VUE_APP_BASEURL || '/',
  // outputDir: process.env.NODE_ENV === 'production' ? 'admin/' : 'dist/',
  configureWebpack:function(){
    // console.log(config.module.rules[2])
    return {
      resolve: {
        // extensions: ['.js', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      }
    }
  }
}
