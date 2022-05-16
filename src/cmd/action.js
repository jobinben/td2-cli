const path = require('path');
const { ejsCompile, writeFile, mkdirSync } = require('../utils/file');
const { firstWords2B } = require('../utils/transform');

const handleEjsToFile = async (name, dest, template, filename) => {
    // 1.获取模块引擎的路径
    const templatePath = path.resolve(__dirname, template);
    const result = await ejsCompile(templatePath, { name, lowerName: firstWords2B(name) });

    // 2.写入文件中
    // 判断文件不存在,那么就创建文件
    mkdirSync(dest);
    const targetPath = path.resolve(dest, filename);
    writeFile(targetPath, result);
}

const addApi = async (name, dest) => {
    handleEjsToFile(name, dest, '../template/api.ts.ejs', `${firstWords2B(name)}.ts`)
}

const addEntity = async (name, dest) => {
    handleEjsToFile(name, dest, '../template/entity.ts.ejs', `${name}.ts`)
}

const addComponent = async (name, dest, options) => {
    handleEjsToFile(name, dest, '../template/component.vue.ejs', `${options.mode ? options.mode : 'Main' }.vue`);
}



const addFolder = async (name, dest) => {
    const targetPath = path.resolve(dest);
    mkdirSync(dest);
    console.log('targetPatch: ', targetPath);

}


module.exports = {
    handleEjsToFile,
    addComponent,
    addApi,
    addEntity,
    addFolder,
}