// Рішення
// Example 5 - Операція spread
// function createContact(partialContact) {
//   return {
//     list: "default",
//     ...partialContact,
//     id: generateId(),
//     creatAt: Date.now(),
//   };
// }
// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }
// const obj = {
//   name: "Poly",
//   email: "poly@hotmail.com",
//   age: 50,
// };
// const newObj = {
//   ...obj,
//   age: 39,
// };
// console.log(newObj);

// !Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт
//  із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }
// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );
