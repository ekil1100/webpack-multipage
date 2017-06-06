const content = require('./content.ejs');
const layout = require('./layout.js');

var pageTitle = '橙瓜-首页';


module.exports = layout.init({ pageTitle }).run(content());
