const { program } = require('commander'); // include commander in git clone of commander repo

const {createCommands} = require('./src/cmd/create');

program
    .option('-d --dest <dest>', 'a destination folder, example: -d src/pages  bad: /src/pages');

program.version(require('./package.json').version); // 读取的版本为package.json的version
createCommands(); // 创建其他指令
program.parse(process.argv);
