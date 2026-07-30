// Casting in TypeScript allows you to tell the compiler to treat a variable as a different type. This can be useful when you have a variable of type `unknown` or `any`, and you want to specify its type for further operations.

let x: unknown = "hello";
console.log((x as string).length);

let z: unknown = "hello";
console.log((<string>z).length);

// let x = 'hello';
// console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined

// let x: unknown = 4;
// console.log((x as string).length); // prints undefined since numbers don't have a length
