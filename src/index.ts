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
b.toUpperCase(); // here this will not give any error because any is like typescript off but in the case of unknown we will get error
b = 12; //have any data type which is not good
b = true;

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
class Device {
  constructor(
    public name: string,
    public price: number, //this is callled classes and objects parameters and properties (declare direct in constructor)
    public category: string,
    year: number = 2025 //default value
  ) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
let d1 = new Device("lg", 1200, "digital");

// one more way of making a constructor
class Bird {
  constructor(
    public name: string,
    public canSpeak: boolean,
    public canFly: boolean
  ) {}
}

let b1 = new Bird("Kiwi", true, false);
console.log(b1);

class Phone {
  constructor(
    public phoneNumber: number,
    public brand: string,
    public price: number = 12000
  ) {}
}

let p1 = new Phone(123, "Samsung");

// Access Modifiers
class School {
  constructor(
    private name: string,
    public age: number,
    public numberOfKids: number,
    protected fee?: number
  ) {}
}

let s1 = new School("Vandana", 21, 2000);
//s1.name = "Christ"; // cannot access coz its private
// it will change the value but TS will give an error

//classes and objects optional properties
class College extends School {
  constructor(name: string, age: number, numberOfKids: number, fee?: number) {
    super(name, age, numberOfKids, fee); // this will basically call the constructor of parent class
  }
  getValue(): void {
    //console.log(this.name); // gives error as the name is private
    console.log(this.age);
    console.log(this.numberOfKids);
    console.log(this.fee);
  }
}

let c1 = new College("Sharda", 12, 2000, 2000000);
c1.getValue();

//readonly

class User {
  constructor(public readonly profile: string) {}
  changeName() {
    // this.profile = "hello"; // Error as it is readonly
  }
}

const u1 = new User("Sanskar");
u1.changeName();

// getters and setters -> we already know about them

// static keyword -> we already know this too

// abstract classes

abstract class Hero {
  constructor(
    protected heroName: string,
    protected superPower: string,
    protected selfMade: boolean
  ) {}

  isSelfMade(): boolean {
    if (this.selfMade) return true;
    return false;
  }
}
// YOu cannot instansiate instance of an abstract class
// abstract class is made to be implemeted or extended from the
// other class

class IronMan extends Hero {
  constructor(
    heroName: string,
    superPower: string,
    selfMade: boolean,
    public isMarvel: boolean
  ) {
    super(heroName, superPower, selfMade);
    this.isMarvel = isMarvel;
  }
}

let tony = new IronMan("tony", "fly shoot", true, true);
console.log(tony);

// functions in ts
function someFtn(name: string, age: number, cb: (value: string) => void) {
  cb("Hello world");
}

someFtn("sanskar", 25, function (value) {
  console.log(value);
});

// function optional and default parameters

function person(
  name: string,
  age: number,
  language: string = "English",
  gender?: string
) {
  console.log("name : " + name + " age : " + age + " language : " + language);
}

person("Toota", 24, "hindi");
// = > We cannot use ? and initialize a parameter at the same time

// Rest parameters in functions
function restFunction(...args: (string | number)[]) {
  console.log(args);
}

restFunction("Hello", " World", 12, 15);

// function overloading

//function signatures
function bark(animal: string): void;
function bark(animal: string, times: number): number;

function bark(animal: string, times?: number) {
  if (times) {
    return times;
  } else {
    console.log(animal);
  }
}

// Generics
function genie<T>(a: T) {
  console.log(a);
}

genie<string>("Hello");
genie<number>(10);

genie("Hello");
genie(10);

// Generic interfaces

interface GenieInterface<T> {
  name: string;
  age: number;
  key: T;
}

function otherGenie(obj: GenieInterface<string>) {}

//generics Classes

class BottleMaker<T> {
  constructor(public key: T) {}
}

let b2 = new BottleMaker(123);
let b3 = new BottleMaker("Hello");
let b4 = new BottleMaker<number>(32);

// => note

function someFunction<T>(a: T, b: T): T {
  return a;

  // Note => if you are giving return type as a generic that is T
  // You have to return T type vaiable only you cannot return string or number or anything
  // even if T is string or number respectively

  // so we can not do something like this
  // return "hello"

  // but we can use type conversion and do something like this
  return "hey" as T;
  // or
  return <T>"hello";
}

someFunction<string>("hello", "world");
someFunction<number>(1, 2);

// Type assertion and type casting

// type assertion
let c: any;
c as string;
<number>c;

// type casting
let n = Number("12");
let v = String(12);
console.log(n);
console.log(v);

//type guards or type narrowing and ts utility types

function study(args: string | number): string | number {
  if (typeof args === "number") {
    return args.toFixed();
  } else if (typeof args === "string") {
    return args.toUpperCase();
  } else {
    throw new Error("Not a string or a number");
  }
}

console.log(study(12));
console.log(study("Hello"));
// console.log(study(true)); // will give error

//using types and instanceof

class Car {
  buyACar() {
    console.log("You bought a car");
  }
}

class Bike {
  buyABike() {
    console.log("You bought a bike");
  }
}

function whatToBuy(budget: number, vehicle: Car | Bike) {
  if (budget > 400000) {
    if (vehicle instanceof Car) {
      vehicle.buyACar();
    }
  } else {
    if (vehicle instanceof Bike) {
      vehicle.buyABike();
    }
  }
}

whatToBuy(800000, new Car());

//partial, required, readonly
