//Variables & Data Types.
// 1. let, const, var
// 2. string, numbers, boolean, null, undefined, object, array

// var --> Old, Function-scoped, avoid modern JS because of bugs.
// let -->  Blocked-scoped, can change values,
// const --> Blocked-scoped, values cannot be reassigned.

//Data types:
// 1. Primitive: string, number, boolean, nul
// 
// l, undefined bigint, symbol.
// 2. Non-Primitive : objec, array, function.

// Why this matters in Node.js?

//Node.js handles: 
// 1. Json data
// 2. API request bodies.
// 3. Database operation.
// 4 Config files.
// ALL rquires correct data types.

//2 Operators.
// Arithmetics : +, -, *, /, %
// Comparison: ==, ===, != , !==, < >, <=, >=
// == vs ===
// == Compares only values --> "10" == 10 --> true
// === comapres value + type(strict) --- > "10" === 10 --> false

//Logical Operators --> &&, || ,  !

//Assignment : +=, -=, *=

// let status = age >= 18 ? "Adult" : "Minor" /// Ternary Operator

//Loops.
//for..of Loop, for..in Loop

//for..of Loop
//Used for Arrays,Strings, Maps, Sets, Iterables.
///  Give me the VALUES on by one.
/*
for(let values of iterable){
console.log(values)
}
*/

// const fruites = ["apples", "banana", "mango"]

// for(let f of fruites){
//     console.log(f)
// }

// for(let char of "Hammad"){
//     console.log(char)
// }

//for..in Loop
// Uses for objects.
//Giveme the KEYS one by one.
/*
for(let key in object){
console.log(key)
}
*/

// const user = 
// {
//     name : "Raza",
//     age : 25, 
//     city: "Mumbai"
// }

// for(let key in user){
//     console.log(key, ":", user[key])
// }

//Why Not use for..in on arrays.


//Functions.
/*
1. Middlewars --> functions
2. Routes --> functions
3. Callbacks --> functions
4. Async handllers --> functions.
*/

// function great(){} --> Normal Function

//function expresion:
//const great = function(){}

//Arrow Function
//const great = () => {}

//--------- Arrays -----------

/*
Backend data is ALWAYS arrays:
	•	MongoDB returns arrays
	•	JSON responses contain arrays
	•	You loop through arrays to calculate totals, filter, etc.

Methods:
push, pop, shift, unshift.


Functional programming ideas:
	•	map → transform each item
	•	filter → remove unwanted items
	•	reduce → calculate totals
	•	find, some, every → search logic

*/
                   //0        //1      //2
const fruites = ["apples", "banana", "mango"]
//Arrays are index based.
// [], 
// using constructor --> const nums = new Array(1, 2, 3);

//Array Properties
//Lendth --> num.length //No. if items.


//Accessing Arrary elements.
//console.log(num[0])
//console.log(num[1])

//Change a value at a index.
//num[1] = 10;

//Basic Array Mehtods.
//PUSH
const arr = [1, 2];
arr.push(3);
console.log(arr) // [1, 2, 3] --> Add item at end.

//POP

arr.pop() //[1, 2] --> Rmove the last item

console.log(arr) 

// unshift() --> add item at beginning.

arr.unshift(0)

console.log(arr) // [0, 1, 2]

//shift() --> Remove the fist item.


arr.shift()

console.log(arr)

/*
Important Note: Arrays Are Mutable
Even if you declare array with const, you can still change the contents.

Looping Through Arrays
for (let item of arr) {
  console.log(item);
}
forEach() (alternative)
arr.forEach(item) => {
    console.log(item)
    }

HIGH-LEVEL ARRAY METHODS (VERY IMPORTANT FOR NODE.JS)
These are used in APIs, databases, and backend operations daily.


1. map()
Used to transform every item and return a new array.

ex: 
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);

console.log(doubled); // [2,4,6]


 filter()
 Used to remove unwanted items.
ex :
const nums = [10, 20, 30, 40];
const result = num.filter(n => n > 20);

console.log(result) //[30, 40]

reduce()
Used to calculate something (total, sum, average).
const nums = [1,2,3,4];
const total = nums.reduce((acc, curr) => acc + curr, 0);

console.log(total); // 10

find()
Returns first matched item.
const users = [
  {name: "Raza", age: 25},
  {name: "Khan", age: 26}
];

const user = users.find(u => u.age === 26)

console.log(user); // {name: "Khan", age:26}


some()
Checks if at least one item matches.
nums.some(n => n > 30);



 every()
 Checks if all items match.
 nums.every(n => n > 0);
*/