// 1.本质区别 
// for循环是js提出时就有的循环方法
// forEach是ES5提出的，本质是迭代器

// 2. for、forEach的中断
// forEach是迭代器无法通过 break return continue 来中断行为
// forEach但是可以通过try...catch退出
// for循环是可以的

// 3.forEach中无法控制index的值
// 它只会无脑的自增直至大于数组的length跳出循环
// 所以无法删除自身进行index重置
let arr4 = [1, 2, 3, 4, 5]
arr4.forEach((item, index) => {
        console.log(item, index);
        console.log('删除前', arr4);
        arr4.splice(index, 1);
        console.log('删除后', arr4);
        console.log('-----');

    })
    // 4.for 循环和forEach性能区别
    // for > forEach > map
    // forEach 里面有额外的函数调用栈和上下文
    // map最慢的原因是因为map会返回一个新的数组，
    // 数组的创建和赋值都会导致分配内存空间，因此会带来性能的开销