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