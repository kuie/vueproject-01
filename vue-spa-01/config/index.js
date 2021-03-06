// see http://vuejs-templates.github.io/webpack for documentation.
let path = require('path');

module.exports = {
  /**
   * 打包设置：
   * 设置打包规则
   * 源码map
   * 生产环境代码压缩
   * 压缩文件扩展名数组
   * */
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  /**
   * 开发设置：
   * 运行端口
   * 自动打开浏览器
   * 代理服务器设置
   * */
  dev: {
    env: require('./dev.env'),
    port: 80,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:8886',
        changeOrigin: true,
        pathRewrite: {
          '^api': '/'
        }
      },
      '/ws': {
        target: 'ws://127.0.0.1:8886',
        changeOrigin: false,
        pathRewrite: {
          '^ws': '/'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
};
