// There are three main visibility modifiers in TypeScript.

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person {
	private name: string;

	public constructor(name: string) {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}

const person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

class Man {
	// name is a private member variable
	public constructor(private name: string) {}

	public getName(): string {
		return this.name;
	}
}

const man = new Man("John");
console.log(man.getName());

class Guy {
	private readonly name: string;

	public constructor(name: string) {
		// name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}

const guy = new Guy("Bob");
console.log(guy.getName());


interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

interface Shape {
  getArea: () => number;
}

class Cube implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Cube {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}

// class Rectangle implements Shape {
//   // using protected for these members allows access from classes that extend from this class, such as Square
//   public constructor(protected readonly width: number, protected readonly height: number) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }

//   public toString(): string {
//     return `Rectangle[width=${this.width}, height=${this.height}]`;
//   }
// }

// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }

//   // this toString replaces the toString from Rectangle
//   public override toString(): string {
//     return `Square[width=${this.width}]`;
//   }
// }

// abstract class Polygon {
//   public abstract getArea(): number;

//   public toString(): string {
//     return `Polygon[area=${this.getArea()}]`;
//   }
// }

// class Rectangle extends Polygon {
//   public constructor(protected readonly width: number, protected readonly height: number) {
//     super();
//   }

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }