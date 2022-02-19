// 1. map 是可以以任何值为键


// 2. map是可迭代的，可以直接进行迭代
const map4 = new Map();
map4.set('key1', 'value1')
map4.set('key2', 'value2')
map4.set('20', 'value20')
for (const entry of map4) {
    console.log(entry);
}
console.log('==========================================')
    // 2. 而obj 是不能直接迭代的，需要Object.entries
const obj4 = {};
obj4['key1'] = 'value1';
obj4['key2'] = 'value2';
obj4['20'] = 'value20';
for (const entry of Object.entries(obj4)) {
    console.log(entry);
}
console.log('==========================================')
    //3. map 是有顺序的，而且取得的长度更加方便
const map5 = new Map();
map5.set('key1', 'value1')
map5.set('key2', 'value2')
map5.set('20', 'value20')
console.log(map5)
console.log(map5.size)

console.log('==========================================')
    //3. obj是没有顺序的,而且获取长度不方便
const obj5 = {};
obj5['key1'] = 'value1';
obj5['key2'] = 'value2';
obj5['20'] = 'value20';
console.log(obj5)
console.log(Object.keys(obj5).length)