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

// getProducts()

// closure -> closure is a function which has access to its parent scope.

const outerFunc = () => {
    let counter = 0;
    const innerFunc = () => {
        counter++;
        return counter;
    }
    return innerFunc;
}

const fn = outerFunc();

console.log(fn())
console.log(fn())

// recursion -> recursion is a function which calls itself.

let i = 0;

const counter = () => {
    if (i == 3) {
        return "Hi";
    }
    i++;
    return counter();
}

console.log(counter())

// counter() -> return "Hi" -> i = 1
// counter() -> return "Hi" -> i = 2
// counter() -> return "Hi" -> i = 3
// counter() -> return "Hi"

const sumOfNNumbers = (n) => {
    if (n == 0) {
        return 0;
    }
    return n + sumOfNNumbers(n - 1);
}

console.log(sumOfNNumbers(10))

// sumOfNNumbers(4) -> return sumOfNNumbers(3) + 4
// sumOfNNumbers(3) -> return sumOfNNumbers(2) + 3
// sumOfNNumbers(2) -> return sumOfNNumbers(1) + 2
// sumOfNNumbers(1) -> return sumOfNNumbers(0) + 1
// sumOfNNumbers(0) -> return 0

// stack -> LIFO

// 0, 1, 1, 2, 3, 5, 8, 13,

// 1. Factorial
// 2. Fibonacci

