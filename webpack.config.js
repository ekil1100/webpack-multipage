/*global __dirname*/

module.exports = {
    devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
    entry: __dirname + '/app/main.js', //已多次提及的唯一入口文件
    output: {
        path: __dirname + '/public', //打包后的文件存放的地方
        filename: 'bundle.js' //打包后输出文件的文件名
    },
    module: { //在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel', //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css?modules' //添加对样式表的处理
            }
        ]
    },

    postcss: [
        require('autoprefixer') //调用autoprefixer插件
    ],

    devServer: {
        contentBase: './public', //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
};
