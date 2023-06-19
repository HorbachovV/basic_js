'use strict'

// =========================================================
// if else
// =========================================================

let aa = 10;
let bb = 20;
let cc = 30;
let dd = 40;

if (aa < bb && cc < dd) {
    console.log(`${aa} smaller than ${bb} and ${cc} smaller than ${dd}`) //10 smaller than 20 and 30 smaller than 40
} else {
    console.log('Oops');
}

if (aa > bb || cc < dd) {
    console.log(`${aa} smaller than ${bb} and ${cc} smaller than ${dd}`) //10 smaller than 20 and 30 smaller than 40
} else {
    console.log('Oops');
}

if (aa > bb && cc < dd) {
    console.log(`${aa} smaller than ${bb} and ${cc} smaller than ${dd}`)
} else {
    console.log('Oops'); //Oops
}

if (aa > bb || cc < dd) {
    console.log(`${aa} smaller than ${bb} and ${cc} smaller than ${dd}`)
} else {
    console.log('Oops'); //10 smaller than 20 and 30 smaller than 40
}

let age = 90;

  if(age >= 14 && age <= 90 ) {
      console.log('Ok')
  } else {
      console.log('No')
  }

  if(!(age >= 14 && age <= 90)) {
    console.log('No')
  } else {
    console.log('Ok')
  }

if (age < 14 || age > 90) {
    console.log('No')
  } else {
    console.log('Ok')
  }

( null || 2 || undefined ); // 2
( alert(1) || 2 || alert(3) ); // 1, 2
( 1 && null && 2 ); // null
( alert(1) && alert(2) ) // 1, undefined
( null || 2 && 3 || 4 ) // 3

const number1 = 100;

if (number1 > 100) {
    console.log('Bigger');
} else if (number1 < 100) {
    console.log('Smaller');
} else {
    console.log('Equal') //Equal
}

let some = 'Plan';

if (some.length > 5 && typeof some === 'string' ) {
    console.log('It is a big string');
} else if (some.length < 5 || typeof some === 'string') {
    console.log('It is a string'); //It is a string
} else {
    console.log('Error');
}

// =========================================================
// switch
// =========================================================

const country = 'Lviv'

switch(country) {
    case 'Ukraine':
    case 'Lviv':
    case 'Sudova Vyshnya':
        console.log('I live here'); //I live here
        break;
    case 'Poland':
        console.log('I also live here');
    case 'Italy': 
        console.log('I want visit');
        break;
    default: 
        console.log('I stay home');   
};

const number2 = 101;
switch(number2) {
    case 100: {
        console.log('Equal');
    }
    break;
    case 99: {
        console.log('Smaller');
    }
    break;
    case 101: {
        console.log('Bigger') //Bigger
    }
    break;
    default: {
        console.log('Oops')
    }
}

// =========================================================
// Conditional operator ‘?’
// =========================================================

let a, b;
a = 2;
b = 3;

result = a + b < 4 ? "Small": "Big"
console.log(result) //Big

let yourAge = 33
let accessAllowed = (yourAge > 18) ? true : false;
console.log(accessAllowed) //true