"use strict";
// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window / undefined

// const user = {
//   username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(customer.getFullName);

// function CreateItem(title, price) {
//   this.title = title;
//   this.price = price;
//   // console.log(this);
// }
// const item1 = new CreateItem("phone", 700);
// const item2 = new CreateItem("phone", 1000);
// const item3 = new CreateItem("phone", 9000);
// console.log(item1, item2, item3);
// const obj = {
//   GetThis1: function () {
//     console.log(this);
//   },
//   GetThis2: () => {
//     console.log(this);
//   },
// };
// obj.GetThis1();
// obj.GetThis2();

// const obj = {
//   lastName: "Ivanov",
//   firstName: ["Ivan", "Maksim"],
//   LogFullNames1: function () {
//     this.firstName.forEach(function (name) {
//       console.log(`${this.lastName} ${name}`);
//     }, this);
//   },
// };

// obj.LogFullNames1();

// const item = {
//   title: "phone",
//   logTitle: function () {
//     setTimeout(function () {
//       console.log(`Product ${item.title}`);
//     });
//   },
// };
// item.logTitle();

// function foo() {
// //   console.log("foo -> this", this);
// // }
// // foo();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("show -> tag", this);
//   },
// };

// user.showTag();

// function showTag() {
//   console.log(`showtag -> this`, this);
// }

// const mango = {
//   teg: "mango",
// };

// mango.showUserTag = showTag;
// mango.showUserTag();

// const jacob = {
//   tag: "jacob",
//   showTag() {
//     console.log("show -> jacob", this);
//     console.log("show -> jacob.tag", this.tag);
//   },
// };

// function invokeAction(action) {
//   console.log(action);
//   action();
// }

// invokeAction(jacob.showTag);

// function showThis() {
//   console.log("This is showThis", this);
// }

// showThis();

// const user = {
//   name: "Mango",
// };

// user.showСontext = showThis;

// user.showСontext();

// ! This у callback функціях
// const customer = {
//   firstName: "Radion",
//   lastName: "Zorkin",
//   showFullName() {
//     return console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// customer.showFullName();

// function showMessage(callback) {
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }
// showMessage(customer.showFullName());

// !Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує
// та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з
// властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     return this.stones.reduce((totalPrice, stone) => {
//       if (stoneName === stone.name) {
//         totalPrice += stone.quantity * stone.price;
//       }
//       return totalPrice;
//     }, 0);
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// !Example 2 - Телефонна книга
// // Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return newContact;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// !Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

const calculator = {
  read(a, b) {
    this.valueA = a;
    this.valueB = b;
  },
  add() {
    return this.valueA + this.valueB;
  },
  mult() {
    return this.valueA * this.valueB;
  },
};

calculator.read(2, 3);
console.log(calculator.add());
console.log(calculator.mult());
