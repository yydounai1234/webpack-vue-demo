const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CONFIG = require('../config')
const { NODE_ENV } = process.env
module.exports = {
  mode:NODE_ENV,
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // 使用vue-loader需要引入
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${CONFIG.HTML_TEMPLATE_PATH}/index.html`
    }),
  ],
  resolve: {
    // 省略后缀
    extensions: [
        '.js', '.vue', '.json'
    ],
    // 需要在客户端编译模板，运行时 + 编译器
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    }
  }
};