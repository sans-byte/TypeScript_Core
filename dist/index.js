"use strict";
// Primitive data types -> number, string, boolean
// refrence -> Arrays, tuples, Enums
// Arrays
let arr = [1, 2, 3, 4, "sanskar"]; //TS automatically infering type to number | string
let arr1 = [1, 2, 3]; // we specified that we only need numbers
// tuples
let tuple = ["sanskar", 12]; // basically you are defining each and every type before hand and you cannot get out of it
//Enums
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
// Any type
let a = 12; // we have defined type explicitly
let b = "string"; // any types basically lets a varaible to
b.toUpperCase(); // here this will not give any error because any is like typescript off but in the case of unknown we will get error
b = 12; //have any data type which is not good
b = true;
//unknown
let x;
x = "string";
x = 12;
//x.toUpperCase(); // this will give error
//so in the case of unknown we will have to check for the type first
if (typeof x == "string") {
    x.toUpperCase();
}
// void
function sayHello() {
    console.log("hello world");
}
function sayTrue() {
    return true;
}
// null
let i = null;
// i = 12; // this will give error as the type is null
let j = null;
j = 12; //this wont give error because we did not explicitly define the type to null to TS takes data type as any
//undefined
let m = undefined;
// never
// something which will never return anything or will never run
// like codes written after return statement
// A function returning 'never' cannot have a reachable end point
function sayHi() {
    while (true) { }
}
// Type inference -> Basically when you do not give a type and TS by itself infer or get a type for that vairable
let z = "hello";
// Type annotation -> when you explicitly give a type
let y = 23;
let r = "sanskar";
let k;
// Classes and Objects
class Device {
    constructor(name, price, category, year = 2025 //default value
    ) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
let d1 = new Device("lg", 1200, "digital");
// one more way of making a constructor
class Bird {
    constructor(name, canSpeak, canFly) {
        this.name = name;
        this.canSpeak = canSpeak;
        this.canFly = canFly;
    }
}
let b1 = new Bird("Kiwi", true, false);
console.log(b1);
class Phone {
    constructor(phoneNumber, brand, price = 12000) {
        this.phoneNumber = phoneNumber;
        this.brand = brand;
        this.price = price;
    }
}
let p1 = new Phone(123, "Samsung");
// Access Modifiers
class School {
    constructor(name, age, numberOfKids, fee) {
        this.name = name;
        this.age = age;
        this.numberOfKids = numberOfKids;
        this.fee = fee;
    }
}
let s1 = new School("Vandana", 21, 2000);
//s1.name = "Christ"; // cannot access coz its private
// it will change the value but TS will give an error
class College extends School {
    constructor(name, age, numberOfKids, fee) {
        super(name, age, numberOfKids, fee); // this will basically call the constructor of parent class
    }
    getValue() {
        //console.log(this.name); // gives error as the name is private
        console.log(this.age);
        console.log(this.numberOfKids);
        console.log(this.fee);
    }
}
let c1 = new College("Sharda", 12, 2000, 2000000);
c1.getValue();
