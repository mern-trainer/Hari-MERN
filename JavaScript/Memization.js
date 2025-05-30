// memoization -> optimization technique

// const obj = {}

// const sum = (a, b) => {
//     const key = `${a}-${b}`
//     if (obj[key]) {
//         console.log("from cache")
//         return obj[key];
//     }
//     console.log(key)
//     console.log("Calculating...")
//     const s = a + b
//     obj[key] = s;
//     console.log(obj)
//     return s
// }

// console.log(sum(10, 20))
// console.log(sum(10, 20))
// console.log(sum(102, 0))
// console.log(sum(10, 20))
// console.log(sum(10, 20))
// console.log(sum(10, 90))
// console.log(sum(10, 90))

// const cache = {}

// const api_calling = async (id) => {
//     if (cache[id]) {
//         console.log("from cache")
//         return cache[id]
//     }
//     console.log("fetching from api")
//     const response = await fetch(`https://dummyjson.com/products/${id}`)
//     const data = await response.json()
//     cache[id] = data
//     return data
// }

// const getProducts = async () => {
//     let products = await api_calling(1)
//     console.log(products)
//     products = await api_calling(1)
//     console.log(products)

//     console.log("Completed")
// }

// // getProducts()

// // closure -> closure is a function which has access to its parent scope.

// const outerFunc = () => {
//     let counter = 0;
//     const innerFunc = () => {
//         counter++;
//         return counter;
//     }
//     return innerFunc;
// }

// const fn = outerFunc();

// console.log(fn())
// console.log(fn())

// // recursion -> recursion is a function which calls itself.

// let i = 0;

// const counter = () => {
//     if (i == 3) {
//         return "Hi";
//     }
//     i++;
//     return counter();
// }

// console.log(counter())

// // counter() -> return "Hi" -> i = 1
// // counter() -> return "Hi" -> i = 2
// // counter() -> return "Hi" -> i = 3
// // counter() -> return "Hi"

// const sumOfNNumbers = (n) => {
//     if (n == 0) {
//         return 0;
//     }
//     return n + sumOfNNumbers(n - 1);
// }

// console.log(sumOfNNumbers(10))

// // sumOfNNumbers(4) -> return sumOfNNumbers(3) + 4
// // sumOfNNumbers(3) -> return sumOfNNumbers(2) + 3
// // sumOfNNumbers(2) -> return sumOfNNumbers(1) + 2
// // sumOfNNumbers(1) -> return sumOfNNumbers(0) + 1
// // sumOfNNumbers(0) -> return 0

// // stack -> LIFO

// // 0, 1, 1, 2, 3, 5, 8, 13,

// // 1. Factorial
// // 2. Fibonacci

// Map, Set

// Array -> Collection of elements -> may contain duplicates
// Set -> Collection of elements -> no duplicates
// Map -> Collection of key value pairs -> no duplicates

// class Person{
//     constructor() {
       
//     }
    
//     display() {
        
//     }
// }

// const p = new Person()

// p.display()

const obj = new Set()

obj.add(10)
obj.add(20)
obj.add(30)
obj.add(40)
// obj.add(50)
// obj.add(60)
// obj.add(10)
// obj.add(10)
// obj.add(100)

console.log(obj.size)

console.log(obj.has(30))

console.log(obj.delete(10))
obj.clear()
console.log(obj)

// convert set to array

const arr = Array.from(obj)

console.log(arr)

// convert array to set

const set = new Set(arr)

console.log(set)

// Remove duplicates from array

const array = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 48, 9, 10, 1];

const set1 = new Set(array)

const res = Array.from(set1)

console.log(res)

// filter

const r = array.filter((element, index) => index == array.indexOf(element))

console.log(r)
// [1, 2, 3, 4, 48, 9, 10]

// Map

const map = new Map()

// key -> value

map.set("name", "John")
map.set("age", 30)
map.set("city", "New York")

console.log(map.get("name"))
console.log(map.get("age"))
console.log(map.get("city"))

console.log(map.has("name"))

map.delete("age")
// map.clear()
console.log(map)


// Hoisting -> We can access a variable before declaring it.

// 2 phases -> js working

// 1. Memory allocation -> variables and functions
// 2. Execution -> code execution

console.log(a);

let a;

// var a;
