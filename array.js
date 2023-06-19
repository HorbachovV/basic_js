'use strict'

//========================================================================
// forEach
//========================================================================

const arr1 = [1, 2, 3];

arr1.forEach((item) => {
    console.log(item) //1 2 3
})

//========================================================================
// map
//========================================================================

const arr2 = ['Bobby', 'Peter', 'Chris'];

const newArr2 = arr2.map(item => {
    return item + ' Hello'

})

console.log(newArr2) // [ 'Bobby Hello', 'Peter Hello', 'Chris Hello' ]

const arr3 = [
    {name: 'Bobby', age: 15},
    {name: 'Peter', age: 25},
    {name: 'Chris', age: 35}
]

const names = arr3.map(({ name }) => name);
console.log(names) // [ 'Bobby', 'Peter', 'Chris' ]

//========================================================================
// filter
//========================================================================

const arr4 = [
    {name: 'Bobby', age: 15},
    {name: 'Peter', age: 25},
    {name: 'Chris', age: 35}
]

const newArr4 = arr4.filter(item => item.age > 20)
console.log(newArr4) // [ { name: 'Peter', age: 25 }, { name: 'Chris', age: 35 } ]

//========================================================================
// find
//========================================================================

const arr5 = [
    {name: 'Bobby', age: 15},
    {name: 'Peter', age: 25},
    {name: 'Chris', age: 35}
]

const bobby = arr5.find(item => item.name === 'Bobby')
console.log(bobby) //{ name: 'Bobby', age: 15 }

//========================================================================
// every
//========================================================================

const arr6 = [1, 2, 3, 4, 5, 6]

const allEven = arr6.every(item => item % 2 === 0)
console.log(allEven) // false

//========================================================================
// some
//========================================================================

const arr7 = [1, 2, 3, 4, 5, 6]

const someEven = arr7.some(item => item % 2 === 0);
console.log(someEven) //true

//========================================================================
// reduce
//========================================================================

const arr8 = [1, 2, 3, 4, 5, 6];

const sum = arr8.reduce((acc, item) => {
    return acc + item
}, 0)
console.log(sum) //21

const min = arr8.reduce((acc, item) => {
    if (item < acc) {
        return item
    }
    return acc
})
console.log(min) //1

const max = arr8.reduce((acc, item) => {
    if (item > acc) {
        return item
    }
    return acc
})
console.log(max) //6

//========================================================================
// sort
//========================================================================

const arr9 = [9, 11,2, 34, 5, 1, 22, 3]

arr9.sort((a, b) => a - b)
console.log(arr9) //[1,  2,  3,  5, 9, 11, 22, 34]

const arr10 = [
    {name: 'Peter', age: 25},
    {name: 'Bobby', age: 15},
    {name: 'Chris', age: 35}
]

arr10.sort(({age: a}, {age: b}) => {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
})
console.log(arr10) //[{ name: 'Bobby', age: 15 },{ name: 'Peter', age: 25 },{ name: 'Chris', age: 35 }]

//========================================================================
// chaining
//========================================================================

const arr11 = [
    {name: 'Peter', age: 25},
    {name: 'Bobby', age: 15},
    {name: 'Chris', age: 35}
];

const newArr11 = arr11
.filter(({ age }) => age > 18)
.map(({ age }) => age)
.reverse().reduce((a, b) => a + b)

console.log(newArr11) //60

// =========================================================
// spread
// =========================================================

const arr12 = [1, 2, 3, 4, 5];
console.log(arr12) //[ 1, 2, 3, 4, 5 ]

console.log(Math.max(1, 12, 9, 35)) //35
console.log(Math.max(...arr12)) //5


const arr13 = [1, 2, 3],
      arr14 = [4, 5, 6];

const arr15 = [...arr13, ...arr14];
console.log(arr15) //[ 1, 2, 3, 4, 5, 6 ]


// =========================================================
// rest
// =========================================================

const fn = (a, b, ...rest) => {
    console.log(rest)
    return a + b;
}

console.log(fn(5, 10, 555, 45, 33)) 
// [ 555, 45, 33 ]
// 15

// =========================================================
// array methods
// =========================================================

const addremove = ['apple', 'orange', 'strawberry'];
console.log(addremove.slice(1, 3)); //[ 'orange', 'strawberry' ]
addremove.push('banana'); 
console.log(addremove); //[ 'apple', 'orange', 'strawberry', 'banana' ]
addremove.pop();
console.log(addremove); //[ 'apple', 'orange', 'strawberry' ]
addremove.shift();
console.log(addremove); //[ 'orange', 'strawberry' ]
addremove.unshift('tomato'); 
console.log(addremove); //['tomato', 'orange', 'strawberry' ]
addremove.slice(1, 2);
console.log(addremove); //[ 'tomato', 'orange', 'strawberry' ]