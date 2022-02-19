// 可参考 001字节闭包面试题

const sumFn = (...args) => {
    return args.reduce((sum, item) => {
        return sum + item;
    })
}

const sortFn = (...args) => {
    return args.sort((a, b) => a - b)
};

var currying = function(func) {
    var args = []
    return function result(...rest) {
        if (rest.length == 0) {
            return func(...args);
        } else {
            args.push(...rest);
            return result
        }
    }
}

currying(sumFn)(1)(2)(3)(); //  6
currying(sumFn)(1, 2)(3, 4)(5)(); //  15
currying(sumFn)(1)(2, 3, 4, 5)(6)(); //  21
currying(sortFn)(1)(4, 3)(7, 5)(); //  6



// 函数柯里化
// 柯里化通常也称部分求值，其含义是给函数分步传递参数
// 每次传递参数进行处理，并返回一个更具体的函数接收剩下的参数，
// 中间可以嵌套多层这样的接受部分参数函数，直至返回最后结果

function add(x) {
    return function(y) {
        return x + y
    }
}
console.log(add(1)(2));