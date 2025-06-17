// // First JavaScript Code
// console.log('Hello World');
// let intials = "ATA";
// console.log(intials);

// // Naming variable rules:
// // Cannot be a resrved keyword
// // Should be meaningful
// // Cannot start with a number (ex: 1name is NOT allowed)
// // Cannot contain a space or hyphen (-)
// // Camel notation used
// // Are case-sensitive

// let firstName = 'Asheoluwa', lastName = 'Ajala';
// console.log(firstName,lastName)
// interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate)

// // Value of variable can change but value of costant CANNOT

// // Primitive/Value Types: String, Number, Boolean, undefined, null

// let nickname = 'Ashlee'; // String literal
// let age = 20; // Number Literal
// let adult = true; // Boolean Literal
// let selectemove = undefined; // Undefined variable
// let selectedColor= null; // null used to clear the value of the variable
// console.log(nickname, age, adult)
// // Static vs Dynamic Programming Languages 

// // Static: type of the variable is set and cannot be changed in the future
//     // ex: string name = 'John"

// // Dynamic: type of the variable can change at runtime
//     // ex: let name = 'John'
// // C++ is a static, Javascript & Pytho are dynamic

// // Reference Types: objects, arrays, functions

// // Object: when dealing with multiple related variables, we can put these 
// // variables in a object-- makes code cleaner

// let person = {
//     name: 'Ashlee',
//     age: 20
// };
// // Dot Notation
// person.name = 'Asheoluwa'

// // Bracket Notation
// let selection = 'name';
// person[selection] = 'Mary' //passes the string of the target property
// console.log(person.name)

// // Array: data structure used to represent a list of items
// // Every item in the array does NOT have to be the same type

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// selectedColors[3] = 3;
// console.log(selectedColors.length)

// // Functions: set of statements that performs a tasks or calculates and
// // returns a value

// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Ashlee', 'Ajala');
// greet('Bob', 'Smith')

// function square(number) {
//     return number * number;
// }

// // let num = square(2);
// console.log(square(2));

// // Operators
// // Arithmetic

// let x = 10;
// let y = 3;
// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)
// console.log(x ** y) // x^y

// // Pre (++x) vs Post Increment (x++)
// // Pre (--x) vs Post Decrement (x--)
// // Pre: variable is incremented/decremented first, then it is used
// // Post: variable is used THEN incremented/decremented


// let z = 15
// console.log(x + z)

// let a = 10;
// a++;
// a = a + 1;
// a += 1;

// let b = 1;
// console.log(a === 13)

// // == (Loose Equality - Same value): checks for equality after performing type coercion;
// // it attempts to convert values to the same type before comparing them
// // Ex: "5" == 5 evaluates to true because the string is converted to a number
// // before comparison

// // === (Strict Equality - Same type and value): checks for equality without performing type coercion;
// // requires both the value and the type of the operands to be the same for equality
// // to be true

// // If a customer has more than 100 points, they are a '

// // Ternary/Conditioal Operator
// let points = 110;
// let type = points > 100 ?  'gold' : 'silver';
// console.log(type)

// // Logical AND (&&)
// // Returns TRUE if both operands are TRUE
// console.log(false && true);
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log('Eligible', eligibleForLoan);

// // Logical OR (||)
// // Returns TRUE if one of the operands is TRUE

// // NOT (!)
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused)

// // Falsy Values in JS
// // undefined
// // null
// // 0
// // false
// // ''
// // NaN (not a number)

// // Anything that is not Falsy is Truthy

// // As soon as we find an operand that is truthy, that operand is returned
// // This is called short-circuiting 

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor)


// // Bitwise Operators 
// // 1 = 00000001
// // 2 = 00000010 // Compares numbers vertically digit by digit
// // R = 00000011 (Result is 3)
// // R = 00000000


// // Read, Write, Excecute
// // 00000100 (4 in decimal)
// // 00000110 (2 in decimal)
// // 00000111 (1 in decimal)

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;
// let myPermission = 0;
// myPermission = readPermission | readPermission | writePermission
// let message = (myPermission & readPermission) ? 'yes' : 'no'
// console.log(message)
// console.log(myPermission)
// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

// let d = (2 + 3) * 4;
// console.log(d)

let a = 'red';
let b = 'blue';
let x = b; // red
b = a
a = x

console.log(a);
console.log(b);

let hour = 0;
if (hour >= 6 && hour < 12) 
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon')

else
    console.log('Good evening');

let role = 'guest';
switch (role) {
    case 'guest': 
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;
    
    default:
        console.log('Unknown User');
}

if (role === 'guest' || role === 'moderator')
    console.log(role,'User')
else
    console.log('Unknown user')

for (let i = 5; i > 0; i--) {
    if (i % 2 !== 0) console.log(i);
}

let i = 9;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// Do-while Loop
let j = 9;
do {
    if (j % 2 !== 0) console.log(j)
    j++
} while (j <= 5);

// For-in Loop 

const person = {
    name: 'Ashlee',
    age: 20
};

for (let key in person)
    console.log(person[key]);

const colors = ['red', 'green', 'blue'];
for (let index in colors) // index takes the index number in the array
    console.log(index, colors[index])

// For-of Loop
for (let color of colors) // color takes the element in the array
    console.log(color)

let k = 0;
while (k <= 10) {
    console.log(k);
    k++
}