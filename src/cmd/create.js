const program = require('commander');

const {
  addComponent,
} = require('./action');

  // 创建指令
const createCommands = () => {

  program
    .command('add <name>')
    .description('add vue component, example: td-cli add List [-d src/components]')
    .action(name => addComponent(name, program.dest || 'page/components'))

}

module.exports = {createCommands};
