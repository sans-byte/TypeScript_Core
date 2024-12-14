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
b = 12; //have any data type which is not good
b = true;
b.toUpperCase(); // here this will not give any error because any is like typescript off but in the case of unknown we will get error
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
// something which will never return anything
