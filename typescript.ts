// boolean
let isCool: boolean = true;

// number
let age: number = 54;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old. I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard: object = {
	a: 'John'
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size {
	small = 1,
	Medium = 2,
	Large = 3
}
let sizeName: string = Size[2];
let sizeNumber: number = Size.small;

// Any - !!!!!!!! BE CAREFUL
let whatever: any = 'aghhhhhhhhh noooooooo!!!!!';
whatever = basket;

// void
let sing = (): void => {
	console.log('la la la la la');
};

// never
let error = (): never => {
	throw Error('ooooop');
};

// interface
interface RobotArmy {
	count: number;
	type: string;
	magic?: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
	console.log('FIGHT!!!');
};

let fightRobotArmy2 = (robots: {
	count: number;
	type: string;
	magic: string;
}) => {
	console.log('FIGHT!!!');
};

// Type Assertion
interface CatArmy {
	count: number;
	type: string;
	magic: string;
}

let dog = {} as CatArmy;
dog.count;

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
	console.log('FIGHT!!!!');
};

let fightRobotArmy4 = (robots: {
	count: number;
	type: string;
	magic: string;
}): number => {
	console.log('FIGHT!!!!');
	return 1;
};

// Classes
class Animal {
	private sing: string = 'allallalalalal';
	constructor(sound: string) {
		this.sing = sound;
	}
	greet(): string {
		return `Hello ${this.sing}`;
	}
}

// Union
let confused: string | number | boolean = true;
