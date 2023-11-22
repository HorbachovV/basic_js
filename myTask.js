//reverse string
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('роман')); 

//character count
let text = "aaaavvvvzzweerrrt";
function countCharacters(string) {
  let charCount = {};
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  
  return charCount;
}

let characterCount = countCharacters(text);

console.log(characterCount);


//subscriber function
const subscribers = [
  {name: 'Vova', age: 33},
  {name: 'Ivan', age: 31},
  {name: 'Petro', age: 40},
  {name: 'Iryna', age: 23},
]

function helloSubscribers(array) {

  if(array.length >= 4) {
    console.log('Hello dear subscribers')
  } else {
    console.log('No')
  }
}

helloSubscribers(subscribers)


//square array number
function squareArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i]
  }
  return arr
}

const numbers = [1, 2, 3, 4, 5, 6]

console.log(squareArr(numbers))


//add adjective
const friends = [
  {
    name: 'Joe',
    gender: 'Male'
  },
  {
    name: 'Fibi',
    gender: 'Female'
  },
  {
    name: 'Ros',
    gender: 'Male'
  },
  {
    name: 'Monica',
    gender: 'Female'
  },
  {
    name: 'Rachel',
    gender: 'Female'
  },
  {
    name: 'Chandler',
    gender: 'Male'
  },
]

function addAdjective(arr) {
  for (let i = 0; i < friends.length; i++) {
    const person = arr[i]

    if (person.gender === 'Male') {
      person.name += ' is handsome'
    } else {
      person.name += ' is beatiful'
    }
  }

  return arr
}

console.log(addAddjective(friends))

const version1 = '10.000.03';
const version2 = '10.000.02A';


function isNewVersion (vers1, vers2) {
    const split1 = vers1.split('.');
    const split2 = vers2.split('.');

    for (let i = 0; i < Math.max(split1.length, split2.length); i++) {
        const num1 = parseInt(split1[i]) || 0;
        const num2 = parseInt(split2[i]) || 0;

        if (num1 > num2) {
            return true;
        } 
        else if (num1 < num2) {
            return false
        }
    }
    return false;
}

if (isNewVersion(version1, version2)) {
    console.log(`${version2} is newest version`);
} else {
    console.log(`${version1} is newest version`);
}