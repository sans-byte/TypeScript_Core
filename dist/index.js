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
