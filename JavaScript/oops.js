// OOPS -> Object Oriented Programming System

// CLASS -> Template / blueprint of an object
// OBJECT -> Instance of a class

// constructor function -> A special function which is used to create an object.
// methods -> functions which are defined inside a class.
// properties -> variables which are defined inside a class.
// this keyword -> refers to the current object.

// class Person{
//     #name;
//     constructor(name) {
//         this.#name = name;
//     }
//     displayName() {
//         return this.#name;
//     }
// }

// // new is used for memory allocation

// const instance = new Person("John")
// const instance2 = new Person("Jane")

// instance.name = "John Doe"

// // instance is an object of Person class
// console.log(instance.displayName())
// console.log(instance2.displayName())

// 4 pillers of OOPs

// 1. Encapsulation -> Binding of data into a single unit. -> access modifiers -> public, private
// 2. Abstraction -> Hiding of implementation details.
// 3. Inheritance -> Reusability of code. extend properties and methods of a class.
// 4. Polymorphism -> Many forms. -> overloading, overriding

// overloading -> same function name with different parameters
// overriding -> same function name with same parameters

class Vehicle{
    constructor(name, year, color) {
        this.name = name;
        this.year = year;
        this.color = color;
    }
    display() {
        return `${this.name} ${this.year} ${this.color}`
    }
}

class Car extends Vehicle{
    constructor(name, year, color, type) {
        super(name, year, color)
        this.type = type;
    }

    display() {
        return `${this.name} ${this.year} ${this.color} ${this.type}`
    }
}

const v = new Car("BMW", 2020, "Black", "SUV")

console.log(v.display())


// Todo List -> CRUD -> CREATE, READ, UPDATE, DELETE, SINGLE VIEW OF A TODO

