const oldObj = {
    name: '张三',
    age: 20,
    colors: ['green', 'orange', 'blue'],
    firend: {
        name: '小夏'
    },
    handle: function() {
        console.log(111);
    }
}

function deepClone(obj = {}) {
    // 首先判断是否是对象
    if (typeof obj !== 'object') {
        return obj;
    }
    // 初始化赋值的判断
    let result;
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            result[item] = deepClone(obj[item]);
        }
    }
    return result;
}

const newObj = deepClone(oldObj);
newObj.name = '李四';
newObj.firend.name = '小明';
newObj.colors.push('red');
newObj.handle = function() {
    console.log(2);
}
oldObj.handle();
newObj.handle();
console.log(oldObj);
console.log(newObj);