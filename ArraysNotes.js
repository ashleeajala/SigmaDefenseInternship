// const numbers = [3,4];

// // Add elments to the end of arrays
// numbers.push(5,6);
// console.log(numbers);

// // Add elments to the beginning of arrays
// numbers.unshift(1,2);
// console.log(numbers);

// // Add elements to the middle
// numbers.splice(2, 0, 'a','b')
// console.log(numbers);

// Finding Primitives
// const numbers = [1,2,3,1,4];
// console.log(numbers.indexOf(1)); // returns index of element if found else returns -1
// console.log(numbers.lastIndexOf(1))
// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1)); // returns true is element is in array else false

// Finding References
// const courses = [
//     {id: 1, name: 'a'}, 
//     {id: 2, name: 'b'}
// ];

// const course = courses.find(function(course) {
//     return course.name === 'ab'; // Find() returns the first 
//     // element that matches this criteria
// } );

// const course1 = courses.findIndex(function(course) {
//     return course.name === 'a'; // Find() returns the index of the first 
//     // element that matches this criteria
// } );

// // Arrow Functions
// const course2 = courses.find(course => course.name === 'a');
// console.log(course1);

let letters = ['a','b', 'c', 'd'];

// Removing elements from end
// const lastElement = letters.pop()
// console.log(lastElement);
// console.log(letters);

// // Removing elements from beginning
// const firstElement = letters.shift();
// console.log(firstElement);
// console.log(letters);

// Removing elements from middle
// letters.splice(2,2); // first argument is starting index to remove from,
// // second is how many elements to remove
// console.log(letters);

// Emptying an array

let another = letters;
// Solution 1 - only works if you do NOT have another reference to the array
// letters = []; 

// Solution 2 - doesn't matter if you have other references to array
// letters.length = 0;

// Solution 3
// letters.splice(0, letters.length);

// Solution 4 - inefficient runtime 
// while (numbers.length > 0)
//     numbers.pop();
// console.log(letters);
// console.log(another);

// Combining and Slicing Arrays
const first = [1,2,3];
const second = [4,5,6];
// const combined = first.concat(second);
// console.log(combined)
// const slice = combined.slice(2,4) // takes start and end indexes
// console.log(slice);

// const combined = [...first,'a', ...second];
// console.log(combined);

first.forEach(function(number) {
    console.log(number);
});