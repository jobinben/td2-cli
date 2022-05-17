# td2-cli

一个简易版脚手架：减少ctrl+c ctr+v的操作。可以直接生成api以及entity和对应的模块目录结构


## 安装

```shell
npm install -g td2-cli
```

查看是否安装成功
```shell
td2-cli --version
```

## 使用

1. 创建一个模块
   
```shell
td2-cli add LoginAccount
```

2. 主入口为其他命名，或者是`List.vue`, 默认为`Main.vue`
```shell
td2-cli add LoginAccount -m List
```

3. 查看版本
```shell
td2-cli -v
```

4. 查看其余指令 
```shell
td2-cli -h
```
