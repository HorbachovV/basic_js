// Type Aliases
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
	year: CarYear;
	type: CarType;
	model: CarModel;
};

// Type Aliases can be used to create a new name for a type. This can be useful for creating more readable code, or for creating a new type that is based on an existing type.
const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
	year: carYear,
	type: carType,
	model: carModel,
};

type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";

// Interfaces can be used to define the shape of an object. They can be used to define the properties and methods that an object should have. Interfaces can also be used to define the shape of a class.
interface Rectangle {
	height: number;
	width: number;
}

const rectangle: Rectangle = {
	height: 20,
	width: 10,
};

// Interfaces can be extended to create new interfaces. This can be useful for creating more specific types, or for creating a new type that is based on an existing type.
// interface Animal { name: string; } interface Animal { age: number; } const dog: Animal = { name: "Fido", age: 5 };

/*
Type vs Interface: Key Differences
Extending: Both can be extended, but interfaces support declaration merging.
Unions/Intersections: Only type aliases support union and intersection types.
Implements: Classes can implement either.
Recommendation: Use interface for objects, type for everything else.
Best Practices:

Use interface for defining object shapes and public APIs.
Use type for unions, intersections, and primitives.
Favor composition over inheritance for types.
Document your types and interfaces for clarity.
Common Pitfalls:

Using type when you need declaration merging (use interface).
Overcomplicating types-keep them simple and focused.
Forgetting to update types/interfaces as code evolves.
*/
