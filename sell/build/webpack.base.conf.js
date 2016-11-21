var path = require('path')
var config = require('../config')
var utils = require('./utils')
// 定义项目的根目录
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: { // wp 入口编译的js文件
    app: './src/main.js'
  },
  output: { // 输出配制
    // 输出路径
    path: config.build.assetsRoot,
    // 请求的静态资源绝对路径
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    // 输出的文件名称 name对应上面 entry的key值：app
    filename: '[name].js'
  },
  resolve: {
    // 自动补全后缀
    extensions: ['', '.js', '.vue'],
    // 当在前台require 模块找到时，就可以一样在node_modules 中找到这个模块
    fallback: [path.join(__dirname, '../node_modules')],
    // 别名
    alias: {
      'src': path.resolve(__dirname, '../src'),
      // 'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    // 同上
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        // 只对projectRoot下的文件检测
        include: projectRoot,
        // 忽略node_modules下的文件
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          // 小于10kb 生成beseb4字符串
          limit: 10000,
          // 超过10kb 就会根据utils.assetsPath单独生成一个带7位hash值的img文件
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    // eslint检查到错误时会提示错误信息，并带有官网链接
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    // vue 文件Css loader
    loaders: utils.cssLoaders()
  }
}
