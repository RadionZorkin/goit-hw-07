"use strict";
// !Модуль 4. Заняття 8. Перебираючі методи масиву
// Колекція об'єктів для всіх прикладів з автомобілями
// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 14,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// !Example 1 - Метод map
// const getModels = (cars) => cars.map((el) => el.model);

// console.table(getModels(cars));

// Використання всіх трьох аргументів в колбек-функції
// const getModels = (cars) =>
//   (bingo = cars.map((el, index, array) => {
//     console.log(`Елемент: ${el.model}, Індекс: ${index}`);
//     return el.model.toUpperCase(); // Наприклад, повертаємо модель у верхньому регістрі
//   }));

// console.table(getModels(cars));
// console.log(bingo);

// !Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
// значенням властивості price залежно від переданої знижки.
// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => {
//     return {
//       ...car,
//       price: car.price - car.price * discount,
//     };
//   });
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// !Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
// значення параметра threshold.
// const threshold = 23000;
// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => car.price < threshold);
// };

// console.log(filterByPrice(cars, threshold));

// !Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість
// onSale яких true.

// const getCarsWithDiscount = (carList) =>
//   carList.filter((car) => car.onSale === true);

// console.table(getCarsWithDiscount(cars));

// !Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
// зі значенням параметра type.

// const getCarsWithType = (carList, carType) =>
//   carList.filter((carList) => carList.type === carType);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

// !Example 6 - Метод find
// const getCarByModel = (carList, carModel) =>
//   carList.find((carList) => carList.model === carModel);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "Tacoma"));

// !Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований
// за зростанням значення якості amount.

// const sortByAscendingAmount = (carList) =>
//   [...carList].sort((carrent, next) => {
//     if (carrent.amount < next.amount) return -1;
//     if (carrent.amount > next.amount) return 1;
//     return 0;
//   });

// console.table(sortByAscendingAmount(cars));

// // Сортування по першій літері model
// const sortByModel = (carList) =>
//   [...carList].sort((next, carrent) =>
//     next.model[0] >= carrent.model[0] ? 1 : -1
//   );

// console.table(sortByModel(cars));

// !Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів
// відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = (carList) => {
//   const sortedCarList = [...carList].sort(
//     (current, next) => next.price - current.price
//   );
//   return sortedCarList;
// };
// console.table(sortByDescendingPrice(cars));

// !Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за
// назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра order.

// const sortByModel = (carList, order) => {
//   return [...carList].sort((current, next) =>
//     order === "asc"
//       ? current.model.localeCompare(next.model)
//       : next.model.localeCompare(current.model)
//   );
// };

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

// !Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів
// (значення властивостей amount).

// const getTotalAmount = (carList) =>
//   carList.reduce((total, car) => total + car.amount, 0);

// console.log(getTotalAmount(cars));

// !Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але
// тільки тих, які зараз на розпродажі.

// const getModelsOnSale = (carList) =>
//   carList.filter((car) => car.onSale === true);

// console.table(getModelsOnSale(cars));

// !Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.

// const getModelsOnSale = (carList) =>
//   carList
//     .filter((car) => car.onSale === true)
//     .sort((carent, next) => carent.price - next.price);

// console.table(getModelsOnSale(cars));
