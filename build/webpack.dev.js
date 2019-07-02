const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config')
const webpack = require('webpack')
const CONFIG = require('../config')
module.exports = merge(baseWebpackConfig, {
    // 行数能够正确映射-最佳品质的 source map
    devtool: 'eval-source-map',
    // dev服务器
    devServer: {
        host: '0.0.0.0',
        port: 80,
        hot: true,
        historyApiFallback: true,
        disableHostCheck: true,
        // 代理-本地调试
        proxy:{
            '/api': {
                target: '',
                pathRewrite: {
                  '^/api': ''
                },
                changeOrigin: true
              },
        }
    },
    plugins:[
    ]
})