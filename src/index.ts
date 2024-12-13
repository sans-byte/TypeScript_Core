// Primitive data types -> number, string, boolean
// refrence -> Arrays, tuples, Enums

// Arrays
let arr = [1, 2, 3, 4, "sanskar"]; //TS automatically infering type to number | string

let arr1: number[] = [1, 2, 3]; // we specified that we only need numbers

// tuples
let tuple: [string, number] = ["sanskar", 12]; // basically you are defining each and every type before hand and you cannot get out of it

//Enums
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

// Any type
let a: number = 12; // we have defined type explicitly

let b: any = "string"; // any types basically lets a varaible to
b = 12; //have any data type which is not good
b = true;

b.toUpperCase(); // here this will not give any error because any is like typescript off but in the case of unknown we will get error

//unknown
let x: unknown;
x = "string";
x = 12;

//x.toUpperCase(); // this will give error
//so in the case of unknown we will have to check for the type first

if (typeof x == "string") {
  x.toUpperCase();
}
