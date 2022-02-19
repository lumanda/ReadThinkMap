// 字节编程题
// 1. 题目的输出结果是什么？ // 1秒后，立即输出1,4,9
// 2. 如果想要每秒输出一个结果，可以怎么改造？
// 注意：不能修改square

const list = [1, 2, 3];
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

// function test() {
//     // forEach 里的匿名函数 不会互相影响,会同步执行
//     list.forEach(async x => {
//         const res = await square(x);
//         console.log(res);
//     })
// }
// test();

// 方法1： for循环 for 同一个代码块，同时使用await
// async function test2() {
//     for (let i = 0; i < list.length; i++) {
//         const res = await square(list[i]);
//         console.log(res)
//     }
// }
// test2()

// 方法2： 使用 for of

// async function test3() {
//     for (let item of list) {
//         const res = await square(item);
//         console.log(res)
//     }
// }
// test3();

// 方法3：使用promise Axios
let promise = Promise.resolve();

function test(i) {
    if (i == list.length) return;
    promise = promise.then(async() => {
        const res = await square(list[i]);
        console.log(res);
    })
    test(i + 1);
}
test(0);