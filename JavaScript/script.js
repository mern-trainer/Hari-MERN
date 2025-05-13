// String -> Collection of characters

const text = "Hello World"; // position or index -> 0, 1, 2, 3, ...

// String Methods

console.log(text.length);
console.log(text[6]);
console.log(text.charAt(20));
console.log(text.indexOf("W")); // index or -1
console.log(text.includes("World")); // true or false
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(0, 2));
console.log(text.slice(-2));
console.log(text.trim());

console.log(text.split("W"));


// array -> collection of elements

const arr = [1, 2, 3, 4, 5];

// array methods

console.log(arr.length);
console.log(arr[3]);
console.log(arr.at(3));
console.log(arr.indexOf(3));
console.log(arr.includes(3));
console.log(arr.slice(0, 2));

console.log(arr.join(" - "));
// arr[2] = 10;
arr.push(6); // add element at last
arr.unshift(0); // add element at first

arr.shift() // remove first element
arr.pop() // remove last element

arr.splice(2, 0, 10) // remove element at any position

console.log(arr);

