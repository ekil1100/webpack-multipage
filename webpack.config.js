/*global __dirname*/
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
    entry: {
        'index': path.join(__dirname, 'pages/content.js')
    },
    output: {
        path: path.join(__dirname, 'static'), //打包后的文件存放的地方
        filename: '[name].js' //打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            filename: path.join(__dirname, 'static/index.html'),
            template: 'pages/content.js',
            inject: true,
            // chunks: [path.join(__dirname, 'static/commons')],
            hash: true, // 为静态资源生成hash值
            xhtml: true
        }),
        new ExtractTextPlugin({ filename: '[name].css'})
    ]
};
