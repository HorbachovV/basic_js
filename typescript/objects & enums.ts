const car: { type: string; model: string; year: number } = {
	type: "Toyota",
	model: "Corolla",
	year: 2009,
};

car.type = "Ford"; // no error
// car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// Optional properties can be defined by adding a ? after the property name.

// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// car.mileage = 2000;
const cars: { type: string; mileage?: number } = {
	// no error
	type: "Toyota",
};
cars.mileage = 2000;

// Index signatures can be used to define the types of properties that are not known ahead of time. For example, if you want to create an object that maps names to ages, you can use an index signature like this:
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// Enums are a way of giving more friendly names to sets of numeric values. By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, if you wanted to start the numbering at 1 instead of 0, you could do it like this:

// enum CardinalDirections {
// 	North,
// 	East,
// 	South,
// 	West,
// }
// let currentDirection = CardinalDirections.North;
// // logs 0
// console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

// enum CardinalDirections {
//   North = 1,
//   East,
//   South,
//   West
// }
// // logs 1
// console.log(CardinalDirections.North);
// // logs 4
// console.log(CardinalDirections.West);


enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);