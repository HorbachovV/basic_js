'use strict'

// =========================================================
// for
// =========================================================
for (let i = 1; i <= 10; i++) {
    console.log(i) //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
};

// =========================================================
// while
// =========================================================

let num = 1
while(num <= 5) {
    console.log(num); //1, 2, 3, 4, 5
    num++;
};

// =========================================================
// do while
// =========================================================

let i = 1
do {
    console.log(i); //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    i++;
} while (i <= 15);

// =========================================================
// for in 
// =========================================================

// for (key in object) {
//     // executes the body for each key among object properties
// }
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
for (let key in user) {
// keys
console.log( key );  // name, age, isAdmin
// values for the keys
console.log( user[key] ); // John, 30, true
}

// =========================================================
// for of  
// =========================================================

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
    console.log( fruit ); //Apple, Orange, Plum
}