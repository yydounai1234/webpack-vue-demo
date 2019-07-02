const merge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webpack.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CONFIG = require('../config')
module.exports = merge(baseWebpackConfig, {
    output: {
        path: CONFIG.OUTPUT_PATH,
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
		// 清除打包文件内容
		new CleanWebpackPlugin(),
		// 打包大小分析
		new BundleAnalyzerPlugin()
    ],
    optimization: {
        // 单独提取webpack runtime-长效缓存
        runtimeChunk: {
          name: 'manifest'
        },
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all'
            }
          }
        }
      }
})		