'use strict'

// =========================================================
// Create objects
// =========================================================

const human = {
    name: 'Bobby',
    age: 15
};

const human2 = human;
human2.age = 20
console.log(human2) //{ name: 'Bobby', age: 20 }

// =========================================================
// Access to objects
// =========================================================

const human3 = {
    name: 'Bobby',
    age: 15
};

console.log(human3.age); //15
console.log(human3['name']) //Bobby

const obj = {a: 1};
human3[obj] = 5;
console.log(human3); //{ name: 'Bobby', age: 15, '[object Object]': 5 }

// =========================================================
// Short properties
// =========================================================

const getHuman = (name, age) => {
    return {
        name,
        age
    }
}

console.log(getHuman('Bobby', 15)) //{ name: 'Bobby', age: 15 }

// =========================================================
// Objects methods
// =========================================================

const human4 = {
    name: 'Bobby',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}`)
    },
    sayBye() {
        console.log('Bye');
    },
    inner: {
        someKey: 555
    }
}
human4.sayBye(); //Bye
human4.sayHello(); //Hello my name is Bobby
console.log(human4.inner.someKey) //555

// =========================================================
// for in
// =========================================================

const human5 = {
    name: 'Bobby',
    age: 15
}

for (let key in human5) {
    console.log(key); //name, age
    console.log(human5[key]) //Bobby, 15
}

// =========================================================
// Object.keys()
// =========================================================

const human6 = {
    name: 'Bobby',
    age: 15
}

console.log(Object.keys(human6)); //[ 'name', 'age' ]
Object.keys(human6).forEach(key => console.log(key, human6[key])) //name Bobby, age 15

const getAge = (obj, key) => {
    let result;
    Object.keys(obj).forEach(item => {
        if (item === key) {
            result = obj[key]
        }
    })

    return result;
}
console.log(getAge(human6, 'age')); //15

// =========================================================
// Object.values()
// =========================================================

const human7 = {
    name: 'Bobby',
    age: 15
}

console.log(Object.values(human7)) //[ 'Bobby', 15 ]

// =========================================================
// Object.entries()
// =========================================================

const human8 = {
    name: 'Bobby',
    age: 15
}

console.log(Object.entries(human8)) //[ [ 'name', 'Bobby' ], [ 'age', 15 ] ]

// =========================================================
// spread
// =========================================================

const object1 = {
    name: 'Bobby',
    sex: 'Male'
}

const object2 = {
    age: 15
}

const object3 = {
    ...object1, 
    ...object2
};
console.log(object3) //{ name: 'Bobby', sex: 'Male', age: 15 }

// =========================================================
// Destructuring
// =========================================================

const sayHello = (obj) => {
    const {name , age} = obj
    console.log(`My name ${name} and my age ${age}`)
}

const human9 = {
    name: 'Bobby',
    age: 15
}

sayHello(human9) //My name Bobby and my age 15