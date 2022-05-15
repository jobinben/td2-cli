const { program } = require('commander'); // include commander in git clone of commander repo

const {createCommands} = require('./src/cmd/create');

program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza')
    .option('-v --version', 'output current version');

program.version(require('./package.json').version); // 读取的版本为package.json的version
createCommands(); // 创建其他指令
program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);