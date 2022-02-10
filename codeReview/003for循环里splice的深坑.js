const arr = [1, 2, 3, 3, 5]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 3) {
        let num = arr.splice(i, 1);
        console.log('删除了', num);
    } else {
        console.log(arr[i], '没有删除');
    }
}
console.log('--------------')
    // splice 删除会跳过
    // 如果是 forEach 删除，就不要用splice了，因为i无法控制
    // for循环通过i-- 解决
const result = [1, 2, 3, 3, 5]
for (let i = 0; i < result.length; i++) {
    if (result[i] == 3) {
        let num = result.splice(i, 1);
        i--;
        console.log('删除了', num);
    } else {
        console.log(result[i], '没有删除');
    }
}