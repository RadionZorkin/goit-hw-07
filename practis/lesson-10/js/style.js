"use strict";

// const animal = {
//   leg: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("leg"));

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(animal);
// console.log(dogKeys);

// class User {
//   firstName;
//   #lastName;
//   constructor({ firstName, lastName }) {
//     this.firstName = firstName;
//     this.#lastName = lastName;
//   }

//   getFirstName() {
//     return this.firstName;
//   }
//   changeLastName() {
//     this.#lastName = newLastName;
//   }
// }

// const mango = new User({
//   firstName: "Amina",
//   lastName: "Zorkina",
// });
// console.log(mango); // {}

// const poly = new User({
//   firstName: "Kiril",
//   lastName: "Budanov",
// });
// console.log(poly); // {}
// console.log(mango.getFirstName());
// poly.changeLastName("Klychko");
// console.log(mango.lastName);

// class user {
//   constructor(userName, age, city) {
//     console.log(`Created!`, userName);
//     this.name = userName;
//     this.age = age;
//     this.city = city;
//   }
//   sayHello() {
//     console.log(`Hello from user!`);
//   }
//   login() {
//     console.log(`User logged in!`);
//   }
// }

// const user1 = new user("Alex", 23, "Lviv");
// const user2 = new user("Marco", 30, "Odessa");
// const user3 = new user("Kamila", 27, "Kyiv");

// console.log(user1);
// console.log(user2);
// console.log(user3);

// class Rectangle {
//   #a;
//   #b;
//   constructor(a, b) {
//     this.#a = a;
//     this.#b = b;
//   }
//   getPerimeter() {
//     return (this.#a + this.#b) * 2;
//   }
//   getArea() {
//     return this.#a * this.#b;
//   }
// }

// const r1 = new Rectangle(12, 20);
// const r2 = new Rectangle(20, 80);

// console.log(r1);
// // console.log(r2);
// // r1.#a = 4000;
// console.log(r1);
// console.log(r1.getArea());
// d;

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер
//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const user = new User({ name: "Amina", email: "amina@example.com" });
// console.log(user.#email);

// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   // Геттер
//   get name() {
//     return this._name.toUpperCase();
//   }

//   // // Сеттер
//   // set name(newName) {
//   //   this._name = newName; // Оновлює _name
//   // }
// }
// const user = new User("Amina");
// console.log(user.name);

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     (this.#email = email), (this.#role = role);
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// const kortni = new User({
//   email: "kortni@mail.com",
//   role: User.Roles.EDITOR,
// });

// console.log(mango.email);
// console.log(User.Roles);

// console.log(kortni.role);
// kortni.role = User.Roles.ADMIN;
// console.log(kortni.role);

// !Example 1 - Блогер

// class Blogger {
//   email;
//   age;
//   numberOfPosts;
//   topics;

//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(150);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

// !Example 2 - Сховище

// class Storage {
//   items;

//   constructor([...items]) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     if (this.items.includes(item)) {
//       this.items = this.items.filter((i) => i !== item);
//     }
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// !Example 3 - User

// class User {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

// ! НОТАТКИ
// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(items = []) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const index = this.items.findIndex((note) => note.text === text);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     } else {
//       console.error("Такої замітки немає!");
//     }
//   }

//   updatePriority(text, newPriority) {
//     const note = this.items.find((note) => note.text === text);
//     if (note) {
//       note.Priority = newPriority;
//     }
//   }
// }

// const { LOW, NORMAL, HIGH } = Notes.Priority;

// const myNotes = new Notes([]);

// console.log(myNotes.items);
// myNotes.addNote({ text: "Моя перша замітка", Priority: LOW });
// console.log(myNotes.items);
// // myNotes.removeNote("Моя перша замітка");
// // console.log(myNotes.items);
// myNotes.addNote({ text: "Моя друга замітка", Priority: NORMAL });
// console.log(myNotes.items);
// myNotes.updatePriority("Моя друга замітка", HIGH);
// console.log(myNotes.items);

// ! ПЕРЕМИКАЧ

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = document.querySelector(".list");
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lastListItem = document.querySelector(".list").lastElementChild;
// console.log(lastListItem);

// const listItems = list.children;
// console.log(listItems);
