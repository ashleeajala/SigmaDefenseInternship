// Objects group related variables and functions

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw')
    }
};
circle.color = 'yellow'
// delete circle.draw;
console.log(circle);
circle.draw(); // Method

// Factory Function
// Camel Notation: oneTwoThreeFour

function createCircle(radius) {
    return {
        radius,
        draw() {
        console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// Constructor Function
// Pascal Notation: OneTwoThreeFour

function Circle(radius) {
    this.radius = radius; // "this" is a reference to the object that is excuting the piece of code
    this.draw = function() {
        console.log('draw');
    }
}

const circle3 = new Circle(1);
// when we use "new" operator, 3 things happen:
// 1. new operator creates empty object ex: const x = {}
// 2. sets this to point to the new empty object
// 3. the new operator will return this new object from this function
// ex: return this;

const another = new Circle(1);

// Functions are objects

// Value Types (aka Primitives): number, string, boolean, symbol, undefined, null
// Reference Types (aka Objects): object, function, array
// Primitives are copied by their value
// Objects are copied by their reference

let a = 10;
let b = a;
a = 20;

let x = {value: 10};
let y = x;
x.value = 20;

// When we use an object, that object is stored somewhere in memory.
// The address of that memory location is stored inside that memory variable
// Both x and y are pointing to the same memory address
// Primitives are copied by their value
// Objects are copied by their reference

let number = {value:10};
function increase(num) {
    num.value++
}
increase(number);
console.log(number)

const dog = {
    breed: "Doberman",
    age: 3,
    bark() {
        console.log('woof');
    }
};

for (let key in dog) {
    console.log(dog[key]);
}


for (let key of Object.keys(dog)) {
    console.log(key);
} 

for (let entry of Object.entries(dog)) {
    console.log(entry);
} 

if ('color' in dog) console.log('yes');

const anotherdog1 = {};
for (let key in dog) 
    anotherdog1[key] = dog[key];

const anotherdog2 = Object.assign({color: 'brown'}, dog); // takes the
// properties and methods of the source object and copies thenm into 
// the new/target object and returns the new object
// the target object does not have to be empty

const anotherdog3 = {...dog}; // "..." is the spread operator that takes all
// the properties and methods of another object and puts them in the {}
// simplest way to clone an object
console.log(anotherdog3);

let flower = {};
console.log(flower);

// Javascript has a garbage collector, you don't have to worry about
// memory allocation and deallocation

// String primitive
const message = 'This is my first message';

// String object
const message2 = new String('hi');

// Object literal {}
// Boolean literal true, false
// String '', ""
// Template literal ``

const greeting = `This is my
'new' message`;

const recipient = 'Amy'
const letter = 
`Hi ${recipient}, 

Thank you for joining my mailing list.

Regards,
Ashlee`;

console.log(letter)

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2025,5,16,4, 56);

// now.setFullYear(2026);