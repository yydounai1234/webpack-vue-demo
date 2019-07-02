const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CONFIG = require('../config')
const { NODE_ENV } = process.env
module.exports = {
  // development 启用 NamedChunksPlugin 和 NamedModulesPlugin
  // production 启用 FlagDependencyUsagePlugin FlagIncludedChunksPlugin ModuleConcatenationPlugin NoEmitOnErrorsPlugin OccurrenceOrderPlugin SideEffectsFlagPlugin  UglifyJsPlugin
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
          {
            loader: 'css-loader',
            options: {
              // 开启 CSS Modules
              modules: true
            }
          }
        ]
      },
      // 小于1000kb则内联
      {
        test: /\.(woff2?|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'fonts/[name].[hash].[ext]'
        }
      },
      // 小于1000kb则内联
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'img/[name].[hash].[ext]'
        }
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
    // 定义全局变量
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
		})
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