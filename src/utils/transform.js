
// 把第一个字母转换为小写
const firstWords2B = (str) => {
    return str.split('')[0].toLowerCase().concat(str.slice(1));
}

module.exports = {
    firstWords2B,
}