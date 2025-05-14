// // String -> Collection of characters

// const text = "Hello World"; // position or index -> 0, 1, 2, 3, ...

// // String Methods

// console.log(text.length);
// console.log(text[6]);
// console.log(text.charAt(20));
// console.log(text.indexOf("W")); // index or -1
// console.log(text.includes("World")); // true or false
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.slice(0, 2));
// console.log(text.slice(-2));
// console.log(text.trim());

// console.log(text.split("W"));


// // array -> collection of elements

// const arr = [1, 2, 3, 4, 5];

// // array methods

// console.log(arr.length);
// console.log(arr[3]);
// console.log(arr.at(3));
// console.log(arr.indexOf(3));
// console.log(arr.includes(3));
// console.log(arr.slice(0, 2));

// console.log(arr.join(" - "));
// // arr[2] = 10;
// arr.push(6); // add element at last
// arr.unshift(0); // add element at first

// arr.shift() // remove first element
// arr.pop() // remove last element

// arr.splice(2, 0, 10) // remove element at any position

// console.log(arr);

// DOM -> Document Object Model ->

// object
const array = [1, 2, 3];

const arr = { "0": 1, "1": 2, "2": 3 };

console.log(arr["1"]);

const user = { name: "John", age: 20, place: "Kozhikode" };
user.age = 25;
console.log(user);

// DOM -> Programming interface for web documents.
// create, update, access, style change -> Dynamic

console.log(document.title);

// methods

// getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll

const element1 = document.getElementById("demo")

console.log(element1.innerHTML);

element1.innerHTML = "<b>Hello World</b>";

element1.style.color = "red";
element1.style.fontSize = "30px";

// --------------------------------------------------------

const element2 = document.getElementsByClassName("d1")

console.log(element2);

element2[0].innerHTML = "<b>Hello World 2</b>";
element2[1].innerHTML = "Changed"

element2[1].style.background = "black";
element2[1].style.color = "white";

//----------------------------------------------------------------

const element3 = document.getElementsByTagName("p")

console.log(element3);

// same properties and methods of getElementsByClassName

// ------------------------------------------------------------------

const element4 = document.querySelector("p")  // return single element

console.log(element4);

// same properties and methods of getElementById

// ------------------------------------------------------------------

const element5 = document.querySelectorAll("p")  // return all elements

// same properties and methods of getElementsByTagName or getElementsByClassName