//  Array is a collection of similar data, separated by commas and enclosed in square brackets. 
// It can hold multiple values under a single name, and you can access the values by referring to an index number.

const cars = ["Volvo", "Benz", "Maybach"," ", "Lamborghini",
  { name: "Bugatti",
    year: 2026,
    color: "Black"
  }, "Cybertruck"
]
console.log(cars[4].name)
console.log(cars[4].year)
console.log(cars[4].color)

const country = "Nigeria";
console.log(country.includes("ige"))
console.log("A".charCodeAt(0))

console.log('z'.charCodeAt(0))

// const money = "100"
console.log(money.padEnd(6,'.00'))
console.log(fullName.includes("medDav"))
console.log(fullName.trimStart())
console.log(fullName.trimEnd())
console.log(fullName.trim())

console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())

const fullName = ' Ahmed Davids  ';
// console.log(fullName.slice(2,7))
// console.log(fullName.slice(5))
// console.log(fullName.split(""))
// console.log(fullName.split(" "))
// console.log(fullName.startsWith(" "))
// console.log(fullName.endsWith(" "))

// Functions are blocks of code designed to perform a particular task. A function is executed when "something" invokes it (calls it).
// Types of Functions
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Anonymous Function
// 5. IIFE (Immediately Invoked Function Expression)
// Function Declaration (Supports Hoisting)

function myFunction (a){
  const result = a.padEnd(7, '0');
  return `${result}`
}
console.log(myFunction('1'));

const money = myFunction('1');
console.log(money)

// Function Expression
const addition = function (a, b) {
  return a + b
}
console.log(addition(78, 909))

// Arrow Function
const simplify = (num, num1, num2) => {
  return num * num1 + num2
}
console.log(simplify(34, 65, 23))

// const cars = ["Volvo", "Benz", "Maybach"," ", "Lamborghini",
//   { name: "Bugatti",
//     year: 2026,
//     color: "Black"
//   }, "Cybertruck"
// ]

// // Anonymous Function
// // () => {}
// console.log(cars.find(e => e == "Lamborghini"))