# Description

该目录下的代码都是参考《数据结构与算法JavaScript描述》一书来实现的

## 数组的一些常用实例方法

- push

```js
// push方法在数组末尾添加一个元素
const nums = [1, 2, 3]
nums.push(4)
console.log(nums) // [ 1, 2, 3, 4 ]
```

- unshift

```js
// unshift 在数组开头添加一个元素
const nums = [2, 3, 4]
nums.unshift(1)
console.log(nums) // [ 1, 2, 3, 4 ]
```

- pop

```js
// pop方法删除出数组末尾的元素, 并返回被删除的元素
const nums = [1, 2, 3]
nums.pop()
console.log(nums) // [ 1, 2 ]
```

- shift

```js
// shift方法删除数组中第一个元素，并返回被删除元素的值
const nums = [6,1,2,3,4,5]
const first = nums.shift()
console.log(first) // 6
console.log(nums) // [ 1, 2, 3, 4, 5 ]
```

- splice

```js
// splice可以从数组中间添加或删除元素
// 参数：
// 1. 起始索引， 也就是你希望添加/删除元素开始的位置
// 2. 删除元素的个数， 添加时写0
// 3. 希望添加的元素， 删除时不用传递

// 插入元素
const nums = [1,2,3,7,8,9]
const newElements = [4,5,6]
nums.splice(3, 0, newElements)
console.log(nums) // [ 1, 2, 3, [ 4, 5, 6 ], 7, 8, 9 ]

// 删除元素

const nums2 = [1,2,3,100,200,300,4,5]
const spliced = nums2.splice(3,3)
console.log(spliced) // [ 100, 200, 300 ]
console.log(nums2) // [ 1, 2, 3, 4, 5 ]
```

- some
- every
- find
- findIndex
- forEach
- map
- filter
- reduce
- fill
- flat
- flatMap
