/*global __dirname*/
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
    entry: {
        'index': __dirname + '/pages/content.js',
    },
    output: {
        path: __dirname + '/static', //打包后的文件存放的地方
        filename: '[name].js' //打包后输出文件的文件名
    },
    module: {
        loaders: [
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            }
        ]
    },
    plugins : [new HtmlWebpackPlugin({
        title: 'page1',
        filename: __dirname + '/index.html',
        template: 'pages/content.js'
    })]
};
