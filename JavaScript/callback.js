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

const display = (value) => console.log(value);

const sum = (a, b, cb) => {
    // console.log(cb)
    const s = a + b;
    cb(s);
}

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

const handleLoop = (element, index, array) => {
    console.log(element, index, array)
}

const loop = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr)
    }
}

loop([10,20,30,40,50], handleLoop)

// -----------------------------------------------------------------------------------

// Array Map -> A method that is used to iterate over an array. Manipulate the array. Update the array.

const array = [10,21,30,45,50,60,77,80,90,109];

const handleMap = (element) => {
    if(element % 2 == 0){
        return element * 5;
    }
    return element;
}

const res = array.map(handleMap)

console.log(res)