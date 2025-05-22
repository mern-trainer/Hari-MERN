// Callback Function -> A function that is passed as an argument to another function.

// synchronous, asynchronous

// synchronous -> one by one
// asynchronous -> multiple at a time

// function sum(a, b){
//     return a + b;
// }

// Arrow Function -> A function that is written in a compact form.

// const sum = (a, b) => a + b;

// const res = sum(10,20);

// console.log(res)

// const display = (value) => console.log(value);

// const sum = (a, b, cb) => {
//     // console.log(cb)
//     const s = a + b;
//     cb(s);
// }

// sum(10,50, display);

// array method -> map

// const handleLoop = (value) => {
//     console.log(value);
// }

// const sumOfNNumbers = (limit, callback) => {
//     let sum = 0;
//     for(let i = 1; i <= limit; i++){
//         sum += i; // -=, *=, /=
//         callback(sum)
//     }
// }

// sumOfNNumbers(10, handleLoop);

// -------------------------------------------------------------------------------------

// const handleLoop = (element, index, array) => {
//     console.log(element, index, array)
// }

// const loop = (arr, callback) => {
//     for(let i = 0; i < arr.length; i++){
//         callback(arr[i], i, arr)
//     }
// }

// loop([10,20,30,40,50], handleLoop)

// -----------------------------------------------------------------------------------

// Array Map -> A method that is used to iterate over an array. Manipulate the array. Update the array.

// const array = [10,21,30,45,50,60,77,80,90,109];

// const handleMap = (element) => {
//     if(element % 2 == 0){
//         return element * 5;
//     }
//     return element;
// }

// const res = array.map(handleMap)

// console.log(res)

// ---------------------------------------------------------------------------------------

// destructure, spread operator, rest operator

// const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const first = array[0];
// const second = array[1];
// const third = array[2];
// const fourth = array[3];
// const fifth = array[4];

// const [first, second, third, fourth, fifth] = array

// console.log(first, second, third, fourth, fifth);

// const obj = {
//     name: "John",
//     age: 20,
//     city: "New York",
//     country: "USA"
// }

// const name = obj.name
// const age = obj.age
// const city = obj.city
// const country = obj.country

// const { name, age, city, country } = obj;

// console.log(name, age, city, country)

// spread operator

const array = [10, 20, 30, 40, 50]

// const copyArray = array 
const copyArray = [...array]

copyArray.push(60)

console.log(copyArray, array)

const obj = {
    name: "John",
    age: 20,
    city: "New York",
    country: "USA"
}

// const copyObj = obj 
const copyObj = {...obj}

copyObj.college = "GPC"

console.log(copyObj, obj)

// rest operator

const [f, s, ...remainingData] = array

console.log(f, s, remainingData)

const { name, age, ...remainingObj } = obj

console.log(name, age, remainingObj)

const a = "World"

const b = "Hello"

// const text = b + " " + a; 
const text = `SAMPLE TEXT ${b} ${a}`

console.log(text)

// --------------------------------------------------------------------------------------

// map -> array manipulation -> update
// filter -> to filter data

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const filteredArray = arr.filter(element => element % 2 == 0)

console.log(filteredArray)

// --------------------------------------------------------------------------------------

// reduce -> return single value

const value = arr.reduce((prevTotal, element) => {
    return prevTotal + element
}, 0)

console.log(value)

// ------------------------------------------------------------------------------------

const strings = ["Amal", "Alex", "Bibin", "John"]

const data = strings.filter(name => name.startsWith("A"))

console.log(data)

// ------------------------------------------------------------------------------------

const users = [{ name: "Amal", age: 30 }, { name: "John", age: 50 }]

const res = users.filter(user => user.age > 40)

console.log(res)