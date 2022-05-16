const program = require('commander');

const {
  addComponent,
  addApi,
  addEntity,
  addFolder,
} = require('./action');

// 创建指令
const createCommands = () => {

  program
    .command('add <name>')
    .option('-m --mode <mode>', 'model List.vue')
    .description('add vue3 pages, example: td-cli add UserList')
    .action((name, options) => {
      addApi(name, program.dest || 'vue/api');
      addEntity(name, program.dest || 'vue/entity');
      addFolder(name, program.dest || `vue/pages/${name}/popwin/`);
      addFolder(name, program.dest || `vue/pages/${name}/components/`);
      addFolder(name, program.dest || `vue/pages/${name}/grid/`);
      addComponent(name, program.dest || `vue/pages/${name}/`, options);
    });

}

module.exports = { createCommands };
