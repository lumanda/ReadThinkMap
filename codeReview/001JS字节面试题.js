// 闭包编程题 字节
// var foo = function(...args) {}  // 完善函数体
// var f1 = foo(1, 2, 3);
// f1.getValue();
// var f2 = foo(1)(2, 3);
// f2.getValue();
// var f3 = foo(1)(2)(3);
// f3.getValue();

// 方法1：在foo上新增变量
// var foo = function(...rest) {
//     if (!Array.isArray(foo.arr)) {
//         foo.arr = []
//     }
//     foo.arr.push(...rest);
//     return foo;
// }
// Function.prototype.getValue = function() {
//     return foo.arr.reduce((sum, item) => {
//         return sum + item;
//     }, 0)
// }

// 方法二：闭包

var foo = function(...rest) {
    var fn = function(...args) {
        rest = [...rest, ...args]
        console.log(rest);
        return foo(...rest);
    }
    fn.getValue = function() {
        return rest.reduce((sum, item) => {
            return sum + item;
        }, 0)
    }
    return fn;
}

// var f1 = foo(1, 2, 3);
// console.log(f1.getValue())
// var f2 = foo(1)(2, 3);
// console.log(f2.getValue());
var f3 = foo(1)(2)(3)(4);
console.log(f3.getValue());