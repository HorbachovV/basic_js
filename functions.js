'use strict'

// =========================================================
// Callback
// =========================================================

function fn(callback) {
    console.log('fn')

    callback()
}

const sayHello = () => {
    console.log('Hello')
}

fn(sayHello) //fn Hello

// =========================================================
// Repeat
// =========================================================

function repeat(count, callback) {
    for (let i = 0; i < count; i++) {
        callback()
    }
}

function sayHello() {
    console.log('Hello')
}

function sayBye() {
    console.log('Bye')
}

repeat(5, sayHello) // Hello Hello Hello Hello Hello
repeat(3, sayBye) // Bye Bye Bye

// =========================================================
// Filter
// =========================================================

const numbers = [1, 2, 3, 4, 5, 6];

function filter(arr, callback) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i])
        }
    }

    return result
}

const person = [
    {
        name: 'Bobby',
        age: 15
    },
    {
        name: 'Peter',
        age: 20
    },
    {
        name: 'Lisa',
        age: 25
    }
]

console.log(filter(person, ({ age }) => age > 15)) //[ { name: 'Peter', age: 20 }, { name: 'Lisa', age: 25 } ]
console.log(filter(numbers, x => x < 4)) //[ 1, 2, 3 ]
console.log(filter(numbers, x => x > 4)) //[ 5, 6 ]

// =========================================================
// Замикання
// =========================================================
function counter(name) {
    let x = 0;

    function increment() {
        console.log(`${name}: ${x++}`);
    }

    return increment;
}

counter1 = counter('counter 1');
counter2 = counter('counter 2');

counter1(); //counter 1: 0
counter2(); //counter 2: 0
counter2(); //counter 2: 1
counter2(); //counter 2: 2


// =========================================================
// this
// =========================================================

const object1 = {
    name: 'Bobby',
    age: 15,
    sayHello() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

object1.sayHello() //Hello, my name is Bobby


// =========================================================
// call, apply
// =========================================================

function sayName() {
    console.log(this.name)
}

const object2 = {
    name: 'Bobby',
    age: 15,
    sayHello() {
        console.log(this)
    }
}
const object3 = {
    name: 'Bobby',
    age: 15
};

const object4 = {
    name: 'Peter',
    age: 20
};

sayName.call(object2); //Bobby
sayName.apply(object4); //Peter
sayName.call(object2, 1, 2, 3, 4); //Bobby
sayName.apply(object4, [1, 2, 3, 4]); //Peter


// =========================================================
// bind
// =========================================================

function sayName() {
    console.log(this);
    console.log(`Hello, my name is ${this.name}`);
}

const object5 = {
    name: 'Bobby',
    age: 15
};

setTimeout(sayName.bind(object5), 2000);


function sayName() {
    console.log(this);
}

const object6 = {
    name: 'Bobby',
    age: 15
};

function myBind(callback, scope) {
    return function() {
        callback.call(scope);
    }
}

const myHello = myBind(sayName, object6);
myHello();
// { name: 'Bobby', age: 15 }
// { name: 'Bobby', age: 15 }

// =========================================================
// this 
// =========================================================

const arrow = (a, b) => {
    // console.log(this)
    return a + b;
}

console.log(arrow(1, 1))
console.log(arrow(2, 2))

const obj = {
    name: 'Bobby',

    fn() {
        const innerArrowFn = () => {
            console.log(this);
        }

        return innerArrowFn;
    }
}
const hello = obj.fn();
hello();
// 2
// 4
// { name: 'Bobby', fn: [Function: fn] }