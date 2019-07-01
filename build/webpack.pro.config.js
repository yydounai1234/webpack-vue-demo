const merge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webpack.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const CONFIG = require('../config')
module.exports = merge(baseWebpackConfig, {
    output: {
        path: CONFIG.OUTPUT_PATH,
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    plugins: [
		// 定义全局变量
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
		}),
		// 清除打包文件内容
		new CleanWebpackPlugin(),
		// 打包大小分析
		new BundleAnalyzerPlugin()
	]
})