// promise, async await

// promise -> A way to handle asynchronous operations in JavaScript.
// async await -> A way to write asynchronous code in a more synchronous way.

// const promise = new Promise((resolve, reject) => {

// })
// console.log(promise)

// promise 3 states -> fulfilled, rejected, pending

const promiseFunc = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Resolved after 5 seconds")
    }, 5000); // ms
})

// promiseFunc().then((result) => {
//     console.log("Result " + result)
// }).catch((error) => {
//     console.log("Error " + error)
// })

// -------------------------------------------------------------------------------

// async function sample() {
    
// }

const handleAsync = async () => {
    try {
        const response = await promiseFunc()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

handleAsync()

// -------------------------------------------------------------------------------------

// Application

// API Calling

// API -> Application Programming interface

const handleDataFetch = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const res = await response.json()
        console.log(res[6].title)
    } catch (error) {
        console.log(error)
    }
}

handleDataFetch()