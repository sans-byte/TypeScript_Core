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

// void
function sayHello(): void {
  console.log("hello world");
}

function sayTrue(): boolean {
  return true;
}

// null
let i: null = null;
// i = 12; // this will give error as the type is null

let j = null;
j = 12; //this wont give error because we did not explicitly define the type to null to TS takes data type as any

//undefined
let m = undefined;

// never
// something which will never return anything or will never run
// like codes written after return statement
// A function returning 'never' cannot have a reachable end point

function sayHi(): never {
  while (true) {}
}

// Type inference -> Basically when you do not give a type and TS by itself infer or get a type for that vairable
let z = "hello";
// Type annotation -> when you explicitly give a type
let y: number = 23;

// interface and types
interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; // using question mark makes it optional
}

// extending Interfaces

interface Admin extends User {
  admin: boolean;
}

// Merging interfaces

interface Animal {
  name: "string";
}
// Basically the interfaces of the same names are merged in one so if we access Animal we will see both name and age (this does not happens in types)
interface Animal {
  age: number;
}

// Type Alasis
type value = string | null | number;

let r: value = "sanskar";

// Union and intersecition types
type type1 = string | number | boolean; // type1 will contain string number and boolean
type type2 = type1 & string; // so type2 will contain only string

let k: type2;

// Classes and Objects
