function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // міняємо місцями
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]


function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // повертає індекс знайденого елемента
    }
  }
  return -1; // якщо не знайшло
}

console.log(linearSearch([10, 20, 30, 40], 30)); // 2

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // 3


let numbers = [10, 5, 20, 1];

// За замовчуванням .sort() працює як сортування по рядках
// Тому треба писати кастомну функцію:
let sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers); // [1, 5, 10, 20]

let words = ["banana", "apple", "cherry"];

let sortedWords = words.sort(); // алфавітно
console.log(sortedWords); // ["apple", "banana", "cherry"]

let users = [
  { name: "Anna", age: 25 },
  { name: "John", age: 30 },
  { name: "Mike", age: 20 }
];

// Сортування по віку
let sortedByAge = users.sort((a, b) => a.age - b.age);

console.log(sortedByAge);// [{name: "Mike", age: 20}, {name: "Anna", age: 25}, {name: "John", age: 30}]
