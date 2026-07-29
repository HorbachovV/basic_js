// the `: number` here specifies that this function returns a number
function getTime(): number {
	return new Date().getTime();
}

// the `: void` here specifies that this function does not return anything
function printHello(): void {
	console.log("Hello!");
}

function multiply(a: number, b: number) {
	return a * b;
}

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
	return a + b + (c || 0);
}

// default parameters
function pow(value: number, exponent: number = 10) {
	return value ** exponent;
}

//named parameters
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
	return dividend / divisor;
}

//rest parameters
function addrest(a: number, b: number, ...rest: number[]) {
	return a + b + rest.reduce((p, c) => p + c, 0);
}

type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

//Union types
function printStatusCode(code: string | number) {
	console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

// function printStatusCodeError(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
// }
