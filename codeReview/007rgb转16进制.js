// 
// 实现颜色转换 rgb->十六进制
// rgb(255,255,255) -> #FFFFFF
// 1. rgb格式提取r,g,b数值
// 2. r,g,b 转换为十六进制
function getValue(rgb) {
    // 1.正则  ?: 是取消分组
    const reg1 = /^(?:rgb|RGB)\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
    const match = rgb.match(reg1);
    return [match[1] * 1, match[2] * 1, match[3] * 1]
}
console.log(getValue('rgb(255,255,255)'));

function getValue2(rgb) {
    // 1.正则  ?: 是取消分组
    const reg1 = /\d+/g
    const match = rgb.match(reg1);
    return [match[0] * 1, match[1] * 1, match[2] * 1]
}

console.log(getValue2('rgb(55,25,155)'));

// rgb 转换为 十六进制
// 1. (Number(r)>=16? '':'0')+ Number(r).toString(16);
// 2. ('0'+Number(16).toString(16)).slice(-2);
// 3. Number(14).toString(16).padStart(2,'0');

function rgb2Hex(rgb) {
    const arr = getValue2(rgb);
    return arr.reduce((prev, curr) => {
        prev += Number(curr).toString(16).padStart(2, '0');
        return prev
    }, '#')
}
console.log(rgb2Hex('rgb(255,255,255)'))