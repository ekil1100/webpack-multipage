
const footer = require('./footer.ejs');
const header = require('./header.ejs');
const layout = require('./layout.ejs');

const info = {
    pageTitle: ''
};

const moduleExports = {
    /* 处理各个页面传入而又需要在公共区域用到的参数 */
    init({pageTitle}) {
        info.pageTitle = pageTitle; // 比如说页面名称，会在<title>或面包屑里用到
        return this;
    },

    /* 整合各公共组件和页面实际内容，最后生成完整的HTML文档 */
    run(content) {
        // const headerRenderData = Object.assign({}, info); // 页头组件需要加载css/js等，因此需要比较多的变量
        const renderData = {
            header: header(info),
            footer: footer(),
            content
        };
        return layout(renderData);
    }
};

module.exports = moduleExports;
