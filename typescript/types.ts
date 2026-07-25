// Explicit Type Annotations
// Explicit typing means you tell TypeScript exactly what type a variable should be:

let isActive: boolean = true;
let hasPermission = false; // TypeScript infers 'boolean' type

let decimal: number = 6;
let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
let float: number = 3.14; // Floating point

let color: string = "blue";
let fullName: string = "John Doe";
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

const hugeNumber = BigInt(9007199254740991);

const uniqueKey: symbol = Symbol("description");
const obj = {
	[uniqueKey]: "This is a unique property",
};
console.log(obj[uniqueKey]); // "This is a unique property"

// Type Inference
// TypeScript can automatically determine (infer) the type of a variable based on its initial value:

// TypeScript infers 'string'
let username = "alice";
// username = 42; // Error: Type 'number' is not assignable to type 'string'

// TypeScript infers 'number'
let score = 100;
// score = "high";  // Error: Type 'string' is not assignable to type 'number'

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
	return a + b;
}

// TypeScript infers the shape of the object
const user = {
	name: "Alice",
	age: 30,
	isAdmin: true,
};

// TypeScript knows these properties exist
console.log(user.name); // OK
// console.log(user.email); // Error: Property 'email' does not exist


// When to use any:
// When migrating JavaScript code to TypeScript
// When working with dynamic content where the type is unknown
// When you need to opt out of type checking for a specific case

// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{ "name": "Alice", "age": 30 }');

// 2. Variables declared without initialization
let something; // Type is 'any'
something = "hello";
something = 42; // No error

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type


// When to use unknown:
// When working with data from external sources (APIs, user input, etc.)
// When you want to ensure type safety while still allowing flexibility
// When migrating from JavaScript to TypeScript in a type-safe way

function processValue(value: unknown) {
	if (typeof value === "string") {
		// value is now treated as string
		console.log(value.toUpperCase());
	} else if (Array.isArray(value)) {
		// value is now treated as any[]
		console.log(value.length);
	}
}


// When to use never:
// For functions that will never return a value
// In type guards that should never match
// For exhaustive type checking in switch statements
// In generic types to indicate certain cases are impossible

function throwError(message: string): never {
	throw new Error(message);
}

// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
