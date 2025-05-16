// // // String -> Collection of characters

// // const text = "Hello World"; // position or index -> 0, 1, 2, 3, ...

// // // String Methods

// // console.log(text.length);
// // console.log(text[6]);
// // console.log(text.charAt(20));
// // console.log(text.indexOf("W")); // index or -1
// // console.log(text.includes("World")); // true or false
// // console.log(text.toUpperCase());
// // console.log(text.toLowerCase());
// // console.log(text.slice(0, 2));
// // console.log(text.slice(-2));
// // console.log(text.trim());

// // console.log(text.split("W"));


// // // array -> collection of elements

// // const arr = [1, 2, 3, 4, 5];

// // // array methods

// // console.log(arr.length);
// // console.log(arr[3]);
// // console.log(arr.at(3));
// // console.log(arr.indexOf(3));
// // console.log(arr.includes(3));
// // console.log(arr.slice(0, 2));

// // console.log(arr.join(" - "));
// // // arr[2] = 10;
// // arr.push(6); // add element at last
// // arr.unshift(0); // add element at first

// // arr.shift() // remove first element
// // arr.pop() // remove last element

// // arr.splice(2, 0, 10) // remove element at any position

// // console.log(arr);

// // DOM -> Document Object Model ->

// // object
// const array = [1, 2, 3];

// const arr = { "0": 1, "1": 2, "2": 3 };

// console.log(arr["1"]);

// const user = { name: "John", age: 20, place: "Kozhikode" };
// user.age = 25;
// console.log(user);

// // DOM -> Programming interface for web documents.
// // create, update, access, style change -> Dynamic

// console.log(document.title);

// // methods

// // getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll

// const element1 = document.getElementById("demo")

// console.log(element1.innerHTML);

// element1.innerHTML = "<b>Hello World</b>";

// element1.style.color = "red";
// element1.style.fontSize = "30px";

// // --------------------------------------------------------

// const element2 = document.getElementsByClassName("d1")

// console.log(element2);

// element2[0].innerHTML = "<b>Hello World 2</b>";
// element2[1].innerHTML = "Changed"

// element2[1].style.background = "black";
// element2[1].style.color = "white";

// //----------------------------------------------------------------

// const element3 = document.getElementsByTagName("p")

// console.log(element3);

// // same properties and methods of getElementsByClassName

// // ------------------------------------------------------------------

// const element4 = document.querySelector("p")  // return single element

// console.log(element4);

// // same properties and methods of getElementById

// // ------------------------------------------------------------------

// const element5 = document.querySelectorAll("p")  // return all elements

// same properties and methods of getElementsByTagName or getElementsByClassName

// form validation
// const error = document.querySelectorAll(".error")

// function clearError() {
//     for (let i = 0; i < error.length; i++){
//         error[i].innerHTML = ""
//     }
// }

// function handleForm() {
//     // const name = document.getElementById("name").value
//     // const username = document.getElementById("username").value
//     // const number = document.getElementById("number").value
//     // const password = document.getElementById("password").value
//     // const confirm_password = document.getElementById("confirmPassword").value
//     const name = document.signup.name.value
//     const username = document.signup.username.value
//     const number = document.signup.number.value
//     const password = document.signup.password.value
//     const confirm_password = document.signup.confirmPassword.value

//     console.log(error);
//     if(name == ""){
//         // alert("Please fill all the fields")
//         error[0].innerHTML = "Name is required"
//         return false
//     }
//     if (name.length < 4 || name.length > 20) {
//         // alert("Name must be between 4 and 20 characters")
//         error[0].innerHTML = "Name must be between 4 and 20 characters"
//         return false
//     }
//     if (username == "") {
//         // alert("Please fill all the fields")
//         error[1].innerHTML = "Username is required"
//         return false
//     }
//     if (username.length < 4 || username.length > 16) {
//         // alert("Username must be between 4 and 16 characters")
//         error[1].innerHTML = "Username must be between 4 and 16 characters"
//         return false
//     }
//     if (number == "") {
//         error[2].innerHTML = "Number is required"
//         return false
//     }
//     if (number.length != 10) {
//         // alert("Number must be 10 digits")
//         error[2].innerHTML = "Number must be 10 digit"
//         return false
//     }
//     if (password == "") {
//         error[3].innerHTML = "Password is required"
//         return false
//     }
//     if (password.length < 8 || password.length > 16) {
//         // alert("Password must be between 8 and 16 characters")
//         error[3].innerHTML = "Password must be between 8 and 16 characters"
//         return false
//     }
//     if (confirm_password == "") {
//         error[4].innerHTML = "Confirm password is required"
//         return false
//     }
//     if (password != confirm_password) {
//         // alert("Password and Confirm Password must be same")
//         error[4].innerHTML = "Password and Confirm Password must be same"
//         return false
//     }
//     return false
// }

// oops -> object oriented programing system

// class -> Template of objects
// object -> Instance of class
// contructor function ->
// properties ->
// methods ->
// this keyword -> current object

// camel case -> firstName
// pascal case -> FirstName
// snake case -> first_name

// const obj = {}

// obj.age = 25

// console.log(obj);

class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    display(value) {
        return value
    }
    displayUser() {

        console.log(this.name, this.age);
    }
}

const obj1 = new Person("Aswin", 20) //  memory allocation

// obj1.displayUser()

// const obj2 = new Person("Amal", 22)

// obj2.displayUser()

// 4 pillers

// 1. Encapsulation -> Binding of data into a single unit.
// 2. Abstraction -> Hiding of implementation details.
// 3. Inheritance -> Inheriting properties and methods from parent class.
// 4. Polymorphism -> Ability to take multiple forms. [method overloading, method overriding]
    // method overloading -> same method name with different parameters.
// method overriding -> same method name with same parameters.
    
// class Vehicle{
//     constructor(name, color, year) {
//         this.name = name
//         this.color = color
//         this.year = year
//     }
//     display() {
//         console.log(this.name, this.color, this.year);
//     }
// }

// class Sample extends Vehicle {

// }

// const veh = new Sample("BMW", "Black", 2020)

// veh.display()

class Vehicle {
    constructor(name, color, year) {
        this.name = name
        this.color = color
        this.year = year
    }
    display(a) {
        console.log(this.name, this.color, this.year, a);
    }
}

class Sample extends Vehicle {
    display(a, b) {
        super.display(a)
        console.log("Hello", a, b);
    }
}

const veh = new Sample("BMW", "Black", 2020)

veh.display(10)