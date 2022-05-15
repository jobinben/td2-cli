const path = require('path');
const { ejsCompile, writeFile, mkdirSync } = require('../utils/file');

const handleEjsToFile = async (name, dest, template, filename) => {
    // 1.获取模块引擎的路径
    const templatePath = path.resolve(__dirname, template);
    const result = await ejsCompile(templatePath, { name, lowerName: name.toLowerCase() });

    // 2.写入文件中
    // 判断文件不存在,那么就创建文件
    mkdirSync(dest);
    const targetPath = path.resolve(dest, filename);
    writeFile(targetPath, result);
}

const addComponent = async (name, dest) => {
    handleEjsToFile(name, dest, '../template/component.vue.ejs', `${name}.vue`);
}


module.exports = {
    handleEjsToFile,
    addComponent,
}