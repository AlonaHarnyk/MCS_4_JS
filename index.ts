// GENERICS

// function logValue(data: number[] | string[]): void {
// console.log(data)
// }

// logValue([1])
// logValue(['1'])
// logValue([{a:1}])

// function logValue<T>(data: T): void {
//   console.log(data);
// }

// logValue<number>(1);
// logValue<string>("1");

// const arr: Array <string> = ['a', 'b', 'c']

// logValue<number[]>([1]);
// logValue(arr)

// type User = {
//     name: string
// }

// const user: User = {
//     name: 'John'
// }

// const arr1: Array<User> = [user]

// logValue(arr1)

// function logValue<T, U, X>(a: T, b: U, c: X): void {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// logValue<number[],  (number |string)[], boolean[]>([1, 2, 3], [1, '1'], [true, false])

// INTERFACE

// type User = {
//   name: string;
//   age: number;
// };

// interface User1 {
//   name: string;
//   age: number;
// }

// interface User1 {
//   email?: string;
// }

// const user1: User1 = {
//   name: "Ann",
//   age: 40,
//   email: 'beiurvhgnu@f34.com'
// };

// OPERATORS

// typeof

// let value: string | number = 'Hello!'

// console.log(typeof value) // string;

// value = 10

// console.log(typeof value) // number;

// in

// const user = {
//     name: 'John'
// }

// console.log('name' in user) // true;
// console.log('age' in user) // false;

// instanceof

// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Student {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// const user2 = new User("Olha")

// console.log(user2 instanceof User) // true
// console.log(user2 instanceof Student) // false

// const user2 = new Student("Olha")

// console.log(user2 instanceof User) // false
// console.log(user2 instanceof Student) // true

// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Student extends User {
//     name: string;
//     constructor(name: string) {
//         super(name)
//         // this.name = name;
//     }
// }

// const user2 = new User("Olha")

// console.log(user2 instanceof User) // true
// console.log(user2 instanceof Student) // false

// const user2 = new Student("Olha")

// console.log(user2 instanceof User) // true
// console.log(user2 instanceof Student) // true

// // is

// interface Bird {
//     fly(): void;
// }

// interface Fish {
//     swim(): void;
// }

// const bird: Bird = {
//     fly() {
//         console.log(111)
//     }
// }

// function isBird(animal: Bird | Fish): animal is Bird {
//     return 'fly' in animal
// }

// as

// let someValue: any = 'Hello!'
// let someValue: unknown = 'Hello!'
// // console.log(someValue.length) // 6
// console.log((someValue as string).length) // 6

// CLASSES

// class User {
//   private email: string;
//   protected city: string;

//   constructor(
//     public name: string,
//     public readonly age: number,
//     email: string,
//     city: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.city = city;
//   }
// }

// class Student extends User {
//   constructor(name: string, age: number, email: string, city: string) {
//     super(name, age, email, city);
//   }

// //   getEmail() {
// //     console.log(this.email) // email недоступний
// //   }

//   getCity() {
//     console.log(this.city)
//   }
// }

// const instance = new User("Ann", 28, "beriugvh@ukr.net", "Lviv");

// interface UserInterface {
//   name: string;
//   age: number;
//   getUsersInfo(): void;
// }

// class User1 implements UserInterface {
//   constructor(public name: string, public age: number) {}

//   getUsersInfo(): void {
//     console.log(this.name, this.age);
//   }
// }

// const instance1 = new User1("Olha", 18)

// abstract class User2 implements UserInterface {
//   constructor(public name: string, public age: number) {}

//   getUsersInfo(): void {
//     console.log(this.name, this.age);
//   }
// }

// // const instance2 = new User2("Olha", 18) // error

// class Student1 extends User2 {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// const instance2 = new Student1("Olha", 18)

// Task 1

// const numbers = [1, 2, 3];
// const letters = ["a", "b", "c"];

// function reverseArray<T>(arr: T[]): T[] {
//   return arr.reverse();
// }

// reverseArray<number>(numbers);
// reverseArray<string>(letters);

// Task 2

// interface Person {
//   name: string;
// }

// interface Address {
//   city: string;
// }

// const person: Person = {
//   name: "Alona",
// };

// const city: Address = {
//   city: "Kyiv",
// };

// function mergeObjects<A, B>(obj1: A, obj2: B): A & B {
//   return { ...obj1, ...obj2 };
// }

// console.log(mergeObjects<Person, Address>(person, city))

// function mergeObjects<A, B>(obj1: A, obj2: B): A & B {
//   return Object.assign({}, obj1, obj2);
// }

// console.log(mergeObjects<Person, Address>(person, city));

// function mergeObjects<A extends object, B extends object>(
//   obj1: A,
//   obj2: B
// ): A & B {
//   return Object.assign(obj1, obj2);
// }

// console.log(mergeObjects<Person, Address>(person, city));
