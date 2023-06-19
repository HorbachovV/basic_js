'use strict'

// =========================================================
// constructor
// =========================================================

const car = {
    currentSpeed: 52,
    maxSpeed: 220,
    color: 'red',
    incrementSpeed() {
        currentSpeed + 1;
    }
};

function Human(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log('Hello')
    }
};

Human.prototype.sayHello = function() {
    console.log(`Hello my name is ${this.name}`)
}

const bobby = new Human('Bobby', 15);
console.log(bobby);
bobby.sayHello()

const peter = new Human('Peter', 25);
console.log(peter);
// Human { name: 'Bobby', age: 15, sayHello: [Function (anonymous)] }
// Hello
// Human { name: 'Peter', age: 25, sayHello: [Function (anonymous)] }

// =========================================================
// prototype
// =========================================================

function MyHuman(name, age) {
    this.name = name;
    this.age = age;
};

MyHuman.prototype.sayHello = function() {
    console.log(`Hello my name is ${this.name}`)
}

MyHuman.prototype.getAge = function() {
    console.log(`My age is ${this.age}`)
}

const julia = new MyHuman('Julia', 29);
console.log(julia); //MyHuman { name: 'Julia', age: 29 }
julia.sayHello(); //Hello my name is Julia
julia.getAge(); //My age is 29


function Human(name, age) {
    this.name = name;
    this.age = age;
};

Human.prototype.sayHello = function() {
    console.log(`Hello my name is ${this.name}`)
}

function Doctor(name, age) {
    Human.call(this, name, age);
}

Doctor.prototype = Object(Human.prototype)
Doctor.prototype.constructor = Doctor
Doctor.prototype.heal = function() {
    console.log("I'm healing");
}


const drHouse = new Doctor('Gregory House', 55);
console.log(drHouse); //Doctor { name: 'Gregory House', age: 55 }
drHouse.heal(); //I'm healing
drHouse.sayHello(); //Hello my name is Gregory House

// =========================================================
// Class
// =========================================================

class Human {
    constructor(name, age, job) {
        this.age = age;
        this.name = name;
        this.job = job;
    }
    saySomething() {
        console.log(`Hello my name is ${this.name} i'm ${this.age} old, and my job is ${this.job}`)
    }
}

class Driver extends Human {
    constructor(name, age, job, saySomething) {
        super(name, age, job, saySomething)
    }
}

const driver = new Driver('Bob', 50, 'Driver');
console.log(driver); //Driver { age: 50, name: 'Bob', job: 'Driver' }
driver.saySomething(); //Hello my name is Bob i'm 50 old, and my job is Driver


class Tester extends Human {
    constructor(name, age, job, saySomething) {
        super(name, age, job, saySomething)
    }
}

const tester = new Tester('Jack', 25, 'Tester');
console.log(tester); //Tester { age: 25, name: 'Jack', job: 'Tester' }
tester.saySomething(); //Hello my name is Jack i'm 25 old, and my job is Tester