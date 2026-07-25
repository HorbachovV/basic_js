const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// The readonly keyword can prevent arrays from being changed.
// const names: readonly string[] = ["Dylan"];
// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:

// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, "Coding God was here"];

// define our tuple
// let ourTuple: [number, boolean, string];
// // initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
	5,
	true,
	"The Real Coding God",
];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// define our tuple with named elements
// const graph: [x: number, y: number] = [55.2, 41.3];

// destructure the tuple into variables
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
