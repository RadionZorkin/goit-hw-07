// Строгий режим
"use strict";
// let userName = 39;

// userName = "Jeka";
// console.log(`результат=${userName}`);

// let userAge = 256;

// function someFunction() {
//   let userAge = 5;
//   console.log("Age:" + userAge);
// }
// someFunction();
// console.log("Age:" + userAge);

// const someNumber = "nen" * 10;

// console.log(`Тип данних = "${typeof someNumber}"`);
// console.log(`Введене значення = "${someNumber}"`);

// const myName = "Радіон";
// const myAge = 30;
// const myInfo = `Ім'я = ${myName}, вік = ${myAge}`;
// console.log(Boolean(myInfo));

// let userAge;
// let newUserAge = "11";
// console.log(`Вік: ${userAge} років`);

// function changeOfAge() {
//   userAge = Number(newUserAge);
// }
// changeOfAge(90);
// console.log(`Вік: ${userAge} років`);
// console.log(typeof userAge);

// let numOne = -Infinity;
// let numTwo = 20;
// console.log(Boolean(numOne * numTwo));

// // Довжина рядка
// let someRow = "Така собі довжина рядка";
// console.log(someRow.length);
// console.log(someRow.toUpperCase());
// console.log(someRow.toLowerCase());
// console.log(someRow.includes("собі"));
// console.log(someRow.slice(3, 9));
// console.log(someRow.replace("собі", "дуже велика"));
// console.log(someRow.includes("довж"));

// let someNumbers = -345.95;
// console.log(Math.round(someNumbers));
// // someNumbers = Math.round(someNumbers);
// console.log(Math.abs(someNumbers));
// console.log(Math.random());
// console.log(Math.abs(parseInt(someNumbers)));

// // Оператори порівняння
// let res = 10 == 10;
// console.log(`Тип: ${typeof res}`);
// console.log(res);
// let a = 5;
// let b = "5";
// let total = +a === +b;
// console.log(total);

// // Оператор порівняння "або"
// // true коли хоч 1 оператор true
// // поверне останнє значення яке дає false
// let result = "" || 0;
// console.log(result);
// console.log(Boolean(result));

// // Оператор порівняння "та"
// // true тільки якщо всі оператори повернуть true
// // поверне перше значення яке дає false
// let result2 = "" && 0;
// console.log(result2);
// console.log(Boolean(result2));

// // умовне вітвлення
// if (5 < 3) {
//   console.log("це правда");
// } else {
//   console.log("це твердження хибне");
// }

// // Ітерація по масиву
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i++) {
//   if (i == 1) {
//     clients[i] = "Kucha";
//   }
//   console.log(clients[i]);
// }

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// // Оператор break
// const clients = ["Mango", "Ajax", "Poly"];
// const clientNameToFinde = "Ajaxs";
// let message;

// for (const client of clients) {
//   if (client === clientNameToFinde) {
//     message = "Шукане слово є в масиві";
//     break;
//   }
//   message = "Шуканого слова немає в масиві";
// }
// console.log(message);

// // Оператор continue
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 6;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] <= threshold) continue;
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }

// // Присвоєння за посиланням
// const a = ["Ksusha", "Amina"];
// const b = a;

// console.log(`Константа b: ${b}`);
// a.push("Radik");
// console.log(`Константа b: ${b}`);

// // Перебор масиву за допомогою циклу
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`Елемент з індексом "${i}" = ${numbers[i]}`);
// }

// // Метод перебору масиву forEach (те саме що і за допомогою циклу for)
// const numbers = [1, 3, 14, "Amina", 18, "Rdik", 4, 7, 29, 6, 34];

// numbers.forEach((element, index) => {
//   console.log(`Елемент з індексом "${index}" = ${element}`);
//   // Виводить першу літеру елементу масиву з типом string
//   if (typeof element === "string") {
//     console.log(`Перша літера у рядку: ${element[0]}`);
//   }
// });

// // Метод перебору масиву forEach (те саме що і за допомогою циклу for)
// const numbers = [1, 3, 14, "Amina", 18, "Radik", 4, 7, 29, 6, 34];

// numbers.forEach((element, index) => {
//   // Виводить всі літери елементу масиву з типом string
//   if (typeof element === "string") {
//     for (let i = 0; i < element.length; i++) {
//       console.log(element[i]);
//     }
//   }
// });

// // Додаємо елемент в масив за допомогою push
// const usersNames = ["Ksusha", "Amina"];
// console.log(usersNames);
// usersNames.push("Radik");
// console.log(usersNames);

// // Пошук елемента в масиві за допомогою inckudes
// const usersNames = ["Ksusha", "Amina", "Radik"];
// console.log(usersNames);
// console.log(usersNames.includes("Radik"));

// // Перевірка чи є елемент в масиві та додавання його якщо немає
// const usersNames = ["Ksusha", "Amina", "Radik"];
// if (!usersNames.includes(10)) {
//   usersNames.push(10);
// }
// console.log(usersNames);

// // Виведення масиву у рядок - forEach
// let users = "";
// const usersNames = ["Ksusha", "Amina", "Radik"];
// usersNames.forEach((element, index) => {
//   users += element;
//   if (index !== usersNames.length - 1) {
//     users += ", ";
//   }
// });
// console.log(users);

// // Виведення масиву у рядок - join (додає роздільник ",")
// // за замовченням, але в дужках можна визначити будь-який
// const usersNames = ["Ksusha", "Amina", "Radik"];

// let usersNamesStr = usersNames.join(", ");
// console.log(usersNamesStr);

// ФУНКЦІЇ
// function showMessage(message = "Текст за замовченням!") {
//   console.log(message);
// }
// for (let i = 0; i < 5; i++) {
//   showMessage();
//   showMessage("1, 2, 3");
// }

// const numOne = 4;
// const numTwo = 10;

// // Функція що сумує 2 числа
// function calcSum(a = 0, b = 0) {
//   const result = a + b;
//   showMessage(result);
// }

// // функція що виводить текст
// function showMessage(someText = "Текст за замовченням") {
//   console.log(someText);
// }

// calcSum(5, 30);

// // Функція що сумує 2 числа та ретурнить результат
// function calcSum(a = 0, b = 0) {
//   return a + b;
// }

// // функція що виводить текст
// function showMessage(someText = "Текст за замовченням") {
//   console.log(someText);
// }

// showMessage(calcSum(55, 30));

// // Стрілочна функція
// // звичайна функція
// function some(text) {
//   console.log(text);
// }

// // стрілочна функція в один рядок
// let some = (text) => console.log(text);

// some(50);

// // стрілочна функція де > одного радка
// let some = (text) => {
//   console.log(text);
//   console.log(text + 1);
// };

// some(50);

// // Ширина в'юпорта
// const windowWidth = window.innerWidth;
// console.log(windowWidth);

// // Дані про браузер
// console.log(navigator.userAgent);

// // перевірка який використовується браузер
// navigator.userAgent.toLowerCase();
// if (navigator.userAgent.toLowerCase().includes("chrome")) {
//   console.log(`Браузер Chrome`);
// }

//

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.dir(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// const keys = Object.keys(dog);
// for (const key of keys) {
//   console.log("for of:", key);
// }

// for (const key in dog) {
//   console.log("for in:", key);
// }
// let a = 4;
// console.dir(a);
// console.log(a);

// const a = {
//   name: "afagg",
//   age: 35,
// };
// localStorage.setItem("local", JSON.stringify(a));

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = Math.abs(apples - grapes);
// console.log(diff);

// // Example 2 - Комбіновані оператори
// let students = 100;
// students += 50;
// console.log(students);

// // Example 3 - Пріоритет операторів
// const result = 108 + 223 - 2 * 5;
// console.log(result);

// // Example 4 - Клас Math
// const value = 27.1;
// console.dir(Math.floor(value));
// console.dir(Math.ceil(value));
// console.dir(Math.round(value));

// // Example 5 - Шаблонні рядки
// // Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.
// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// // Example 6 - Методи рядків та чейнінг
// let weight = "88,3";
// let height = "1.75";
// const formattedWeight = weight.replaceAll(",", ".");
// const formattedHeight = height.replaceAll(",", ".");
// const bmi = parseFloat((formattedWeight / (height * height)).toFixed(1));
// console.dir(bmi); // 28.8
// console.dir(typeof bmi); // 28.8

// // Example 7 - Оператори порівняння та приведення типів
// console.log("5 > 4"); //true
// console.log(5 > 4); //true

// console.log('10 >= "7"'); //false
// console.log(10 >= "7"); //false

// console.log('"2" > "12"'); //true
// console.log("2" > "12"); //true

// console.log('"2" < "12"'); //false
// console.log("2" < "12"); //false

// console.log('"4" == 4'); //true
// console.log("4" == 4); //true

// console.log('"6" === 6'); //false
// console.log("6" === 6); //false

// console.log('"false" === false'); //false
// console.log("false" === false); //false

// console.log("1 == true"); //true
// console.log(1 == true); //true

// console.log("1 === true"); // false
// console.log(1 === true); // false

// console.log('"0" == false'); //false
// console.log("0" == false); //false

// console.log('"0" === false'); //false
// console.log("0" === false); //false

// console.log('"Papaya" < "papaya"'); //true
// console.log("Papaya" < "papaya"); //true

// console.log('"Papaya" === "papaya"'); //false
// console.log("Papaya" === "papaya"); //false

// console.log("undefined == null"); //false
// console.log(undefined == null); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(null)); //false

// console.log("undefined === null"); //false
// console.log(undefined === null); //false

// // Example 8 - Логічні оператори
// console.log(true && 3); //3

// console.log(false && 3); //false

// console.log(true && 4 && "kiwi"); //'kiwi'

// console.log(true && 0 && "kiwi"); //0

// console.log(true || 3); //3 - вірно true, тому що || повертає перший true

// console.log(true || 3 || 4); //4 - вірно true, тому що || повертає перший true

// console.log(true || false || 7); //7 - вірно true, тому що || повертає перший true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0); //false

// console.log(null || (2 && 3) || 4); //4 - вірно 3 тому що && повертає останній true

// // Example 9 - Значення за замовчуванням та оператор нульового злиття
// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(null == undefined);
// console.log(typeof null);
// console.log(typeof undefined);

// Example 10 - Оператор % та методи рядків
// const totalMinutes = 450;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// console.dir(navigator);

// console.log(location.href);
// location.href += "#popup";

// // Alert
// alert("Повідомлення");

// // confirm
// let question = confirm("То як?");

// if (question) {
//   console.log("Купи баян!");
// } else {
//   console.log("Купи козу!");
// }

// =============DOM=================
// // Document Object Model (DOM)
// // Об'єктна модель документу
// const htmlDocument = document.documentElement;
// console.log(htmlDocument);

// // звернення до об'єкту head
// const htmlDocument = document.head;
// console.log(htmlDocument);

// // звернення до об'єкту body
// const htmlDocument = document.body;
// console.log(htmlDocument);

// // звернення до першого елемента в середині body
// const firstBodyElement = document.body.firstElementChild;
// console.log(firstBodyElement);

// // звернення до першого елемента в середині body
// const lastBodyElement = document.body.lastElementChild;
// console.log(lastBodyElement);

// // Усі дочірні елементи
// const bodyElement = document.body;
// console.log(bodyElement);

// const childNodes = bodyElement.children;
// console.log(childNodes);

// for (const element of childNodes) {
//   console.log(element);
// }

// // Навігація до батьківських та сусідніх елементів
// // попередній елемент на одному рівні
// const bodyElement = document.body;
// const previousSibling = bodyElement.previousElementSibling;
// console.log(previousSibling);

// // наступний елемент на одному рівні
// const headElement = document.head;
// const nextSibling = headElement.nextElementSibling;
// console.log(nextSibling);

// !!! Найчастіше використовується
// // Пошук довільного елементу

// // Отримання одного першого знайденого елемента
// const liElement = document.querySelector("Li");
// console.log(liElement);

// // Отримання всіх знайдених елементів
// const liElements = document.querySelectorAll("Li");
// console.log(liElements);

// if (liElements.length)
//   liElements.forEach((element) => {
//     console.log(element);
//   });

// // Селектор класів
// const liListItem = document.querySelectorAll(".list__item.active");
// if (liListItem.length) {
//   liListItem.forEach((item) => {
//     console.log(item);
//   });
// }

// // Отримання батьківського об'єкту
// const someElement = document.querySelector(".list__item");
// const parentElement = someElement.parentElement;
// console.log(parentElement);

// // closest
// // Перевірка наявності батьківського елемента
// const someElement = document.querySelector(".list__item");
// const itsClosest = someElement.closest(".list");
// console.log(itsClosest);

// // Зміна документа
// const listItems = document.querySelectorAll(".list__item");
// // innerHTML - дає змогу отримати те що в середині
// // об'єкту включно з тегами
// // Також дозволяєперезаписувати контент в середині об'єкту
// listItems.forEach((item) => {
//   item.innerHTML = "<span>Привіт!</span>";
// });

// // отримання рядку через .innerHTML
// const bodyElement = document.body;
// const htmlBody = bodyElement.innerHTML;
// console.log(htmlBody);

// // textContent - дозволяє записувати текст в середині об'єкту
// // але тільки текст
// listItems.forEach((item) => {
//   item.textContent = "<span>Привіт!</span>";
// });

// // створення об'єкта

// let newOdject = document.createElement("div");
// console.log(newOdject);
// newOdject.innerHTML = `<span>Hi!</span>`;

// const wrapper = document.querySelector(".wrapper");
// // вставка створеного об'єкту:
// // перед
// wrapper.before(newOdject);
// // після
// wrapper.after(newOdject);
// // в середину на початок
// wrapper.prepend(newOdject);
// // в середину на кінець
// wrapper.append(newOdject);

// !створення об'єкта ЯК ТРЕБА

// за допомогою властивості
// insertAdjacentHTML/Text/Element
// "beforebegin" - вставити безпосередньо перед wrapper;
// "afterbegine" - вставити на початок wrapper
// "beforeend" - встановить в кінець wrapper
// "afterend" - встановить безпосередньо після wrapper

// const page = document.querySelector(".page");
// page.insertAdjacentHTML(
//   "afterbegine",
//   `
//   <div class="block">
//     <div class="block__item">123</div>
//   </div>
// `
// );

// // за допомогою властивості
// // insertAdjacentText
// const page = document.querySelector(".page");
// let text = `
//   <div class="block">
//     <div class="block__item">123</div>
//   </div>
// `;
// page.insertAdjacentText("beforebegin", text);

// // перенесення за допомогою властивості
// // insertAdjacentElement
// const page = document.querySelector(".page");
// let newObject = document.querySelector(".list");

// page.insertAdjacentElement("beforebegin", newObject);

// // Клонування об'єкта
// // cloneNode() - клонує сам об'єкт
// // cloneNode(true) - клонує вміст об'єкту
// const wrapper = document.querySelector(".wrapper");
// const cloneWrapper = wrapper.cloneNode(true);
// console.log(cloneWrapper);

// // Видалення об'єкта
// const list = document.querySelector(".active");
// list.remove();

// !Стилі та класи
// // className - перезапис класу
// const list = document.querySelector(".list");
// list.className = "some-class";

// const list = document.querySelector(".list");
// // classList - метод роботи з класами
// // ? НЕ ВИКОРИСТОВУЄМО КРАПКУ ДЛЯ ІМЕНІ КЛАСУ
// // list.classList.add("list_item--red"); // - додаємо клас
// // list.classList.remove("active"); // - видаляємо клас
// // list.classList.toggle("active"); // - якщо нема то додам, якщо є то заберу
// list.classList.contains("active"); // - перевіряє чи містить клас

// if (list.classList.contains("active")) {
//   console.log("Клас active Є!");
// }

// Управління стилями
// // style
// const list = document.querySelector(".list");
// let newPadding = 15 + 10;
// // додати властивість
// list.style.paddingTop = `${newPadding}px`;

// // Перезапис стилів на вказані (перезапише всі раніше задані стилі)
// list.style.cssText = `
//   padding-top: ${newPadding}px;
//   width: 100px;
//   `;

// Оримання стилю (його значення)
// // getComputedStyle

// const list = document.querySelector(".list");
// const listStyle = getComputedStyle(list);
// console.log(listStyle);
// const listFontSize = parseFloat(listStyle.fontSize);
// console.log(listFontSize);
// if (listFontSize > 14) {
//   list.style.fontSize = "30px";
// }

// !Робота з атребутами
// const list = document.querySelector(".list");
// // Перевіряємо наявність атрибута
// list.hasAttributes("name");
// // Отримуємо значення атрибута
// list.getAttributeNames("name");
// // Встановлюємо значення атрибута
// list.setAttribute("name", "value");
// // Видаляємо атрибут
// list.removeAttribute("name");

// DATA атрибути
// завжди повертає рядок
// унарний оператор "+" переведе значення в число

// ?dataset - звернення до всіх дата атрибутів
// // якщо атрибут виглядає так data-speed-atrebut тоді
// // звертаємося через кемелКейс speedAtrebut
// let speed = parseFloat(list.dataset.speed);
// console.log(speed);
// console.log(typeof speed);

// // перевірка чи є такий атрибут
// // для цього використовуємо hasAttribute в решті випадків dataset
// if (list.hasAttribute("data-once")) {
//   console.log("Є!");
// }

// !Коорисні властивості
// const list = document.querySelector(".list");

// Отримання імені тегу (поверне значення ім'я тегу
// якому присвоєно даний клас)
// console.log(list.tagName);

// // Атрибут hidden
// list.hidden = true;

// РОЗМІРИ ТА КООРДИНАТИ

// // Розміри вікна браузера (з полосами прокрутки)
// // об'єкт window

// const windowWidth = window.innerWidth;
// const windowHeight = window.innerHeight;
// console.log(windowWidth);
// console.log(windowHeight);

// // Розміри вікна браузера (без полоси прокрутки)
// // об'єкт body

// const mainElement = document.body;
// const windowClientWidth = mainElement.clientWidth;
// const windowClientHeight = mainElement.clientHeight;
// console.log(windowClientWidth);
// console.log(windowClientHeight);

// // Кількість прокручених пікселів
// // об'єкт window

// const windowScrollTop = window.scrollY;
// const windowScrollLeft = window.scrollX;
// console.log(windowScrollTop);
// console.log(windowScrollLeft);

// // window.scrollBy(left, top);
// // прокрутка відносно поточного положення

// console.log(window.scrollY);
// window.scrollBy(0, 50);
// console.log(window.scrollY);

// // скрол на задану відстань
// window.scrollTo({
//   top: 300,
//   left: 0,
//   behavior: "smooth", // не працює з Safari
// });
// console.log(window.scrollY);

// elem.scrollIntoView()
// прокрутка до об'єкта
/*
const list = document.querySelector(".list");
function scrollToBlock(element) {
  const block = element.dataset.scroll;
  element.scrollIntoView({
    block: block,
    inline: "nearest",
    behavior: "smooth",
  });
}
scrollToBlock(list);
*/

// Позиція об'єкта
// offsetLeft та offsetTop
// offsetParent - батькывський об'єкт
// (позиція CSS - властивості absolute, relative, fixed, sticky)
/*
const list = document.querySelector(".list");
const listLeftPos = list.offsetLeft;
const listTopPos = list.offsetTop;
console.log(listLeftPos);
console.log(listTopPos);
*/

// кщординати відносно вікна браузера (в'юпорта)
// getBoundingClientRect
/*
const list = document.querySelector(".list");
console.log(list.getBoundingClientRect().top);
console.log(list.getBoundingClientRect().left);
*/

// розміри об'єкта (без зовнішніх відступів)
// offsetWidth, offsetHeight
/*
const list = document.querySelector(".list");
console.log(list.offsetWidth);
console.log(list.offsetHeight);
*/

// // Отримання об'єкта по координатам
// // document.elementFromPoint(x, y);
// const elem = document.elementFromPoint(50, 0);
// console.log(elem);

// !Завдання GoIT
// Модуль 1. Заняття 2. Розгалуження. Цикли
// // Example 1 - Введення користувача та розгалуження
// const question = prompt("Яка офіційна назва JavaScript?");
// if (question == "ECMAScript") {
//   console.log("Правильно!");
// } else {
//   console.log("Не знаєте? ECMAScript!");
// }

// // Example 2 - Відображення часу (if...else)
// const hours = 14;
// const minutes = 4;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }
// console.log(timestring);

// // Example 3 - Розгалуження
// const someNum = prompt("Введіть число");
// let result;
// if (someNum > 0) {
//   result = "Це позитивне число";
// } else if (someNum < 0) {
//   result = "Це від'ємне число";
// } else {
//   result = "Це нуль";
// }
// console.log(result);

// // Example 4 - Вкладені розгалуження
// const a = 120;
// const b = 10;
// let result;

// if (a > 100 && b > 100) {
//   if (a > b) {
//     result = a;
//   } else if (a < b) {
//     result = b;
//   }
// } else {
//   result = b + 512;
// }
// console.log(result);

// // Example 5 - Форматування посилання (endsWith)
// let link = "https://my-site.com/about";
// // Пиши код нижче за цей рядок
// if (!link.endsWith("/")) {
//   link += "/";
// }
// // Пиши код вище за цей рядок
// console.log(link);

// // Example 6 - Форматування посилання (includes та логічне «І»)
// let link = "https://somesite.com/about";
// // Пиши код нижче за цей рядок
// if (!link.endsWith("/")) {
//   if (link.includes("my-site")) {
//     link += "/";
//   }
// }
// // Пиши код вище за цей рядок
// console.log(link);

// // Example 7 - Форматування посилання (тернарний оператор)
// let link = "https://somesite.com/about";
// // Пиши код нижче за цей рядок
// if (link.includes("my-site") && !link.endsWith("/")) {
//   link += "/";
// }
// // Пиши код вище за цей рядок
// console.log(link);

// // Example 8 - if...else та логічні оператори
// const hours = 17;
// let result;
// if (hours > 0) {
//   if (hours < 17) {
//     result = "Pending";
//   } else if (17 <= hours && hours <= 24) {
//     result = "Expires";
//   } else if (hours > 24) {
//     result = "Overdue";
//   }
// } else {
//   result = "Значення менше за 0";
// }
// console.log(result);

// // Example 9 - Дедлайн здачі проекту (if...else)
// const daysUntilDeadline = 5;
// if (daysUntilDeadline == 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline == 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline == 2) {
//   console.log("Післязавтра");
// } else if (daysUntilDeadline >= 3) {
//   console.log("Дата у майбутньому");
// }

// // Example 10 - Дедлайн здачі проекту (switch)
// const daysUntilDeadline = 6;

// // if (daysUntilDeadline === 0) {
// //   console.log("Сьогодні");
// // } else if (daysUntilDeadline === 1) {
// //   console.log("Завтра");
// // } else if (daysUntilDeadline === 2) {
// //   console.log("Післязавтра");
// // } else {
// //   console.log("Дата у майбутньому");
// // }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;

//   default:
//     console.log("Дата у майбутньому");
//     break;
// }

// // Example 11 - Цикл for
// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

// // Example 12 - Введення користувача та розгалуження
// const userName = prompt("Введи своє ім'я");
// if (userName === null || userName === "") {
//   console.log("Дію скасовано!");
// } else {
//   if (userName === "Адмін") {
//     let userPass = prompt("Який пароль?");
//     if (userPass === "Я адмін") {
//       console.log("Здрастуйте!");
//     } else {
//       console.log("Невірний пароль");
//     }
//   } else {
//     console.log("Я вас не знаю");
//   }
// }

// !Модуль 2. Заняття 3. Масиви
// // Example 1 - Базові операції з масивом
// const genres = ["Jazz", "Blues"];
// console.log(genres);

// genres[genres.length] = "Рок-н-рол";
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres);
// console.log(genres.unshift("Country", "Reggae"));
// console.log(genres);

// // Example 2 - Масиви та рядки
// const values = "8 11";
// const valuesArr = values.split(" ");
// console.log(valuesArr);
// const areaRectangle = valuesArr[0] * valuesArr[1];
// console.log(areaRectangle);

// // Example 3 - Перебір масиву
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }

// // Example 4 - Масиви та цикли
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";
// const namesArr = names.split(",");
// const phonesArr = phones.split(",");
// for (let i = 0; i < namesArr.length; i++) {
//   console.log(`${namesArr[i]} : ${phonesArr[i]}`);
// }

// // Example 4 - Масиви та цикли
// const string = "Welcome to the future";
// const stringArr = string.split(" ");
// console.log(stringArr);
// for (let i = 1; i < stringArr.length - 1; i++) {
//   console.log(stringArr[i]);
// }

// // Example 6 - Масиви та рядки
// const string = "Welcome to the future";
// // let reversedString = "";

// // for (let i = string.length - 1; i >= 0; i--) {
// //   reversedString += string[i];
// // }

// // console.log(reversedString);

// // або через методи

// const reversedString = string.split("").reverse().join("");
// console.log(reversedString);

// // Example 7 - Сортування масиву із циклом
// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
// console.log(langs);
// for (let i = 0; i < langs.length - 1; i++) {
//   for (let j = i + 1; j < langs.length; j++) {
//     if (langs[i][0] < langs[j][0]) {
//       let temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//       console.log(langs);
//     }
//   }
// }

// // Example 8 - Пошук елемента
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (min > numbers[i]) {
//     min = numbers[i];
//   }
// }
// console.log(min); // 1

// !Модуль 2. Заняття 4. Функції
// // Example 1 - Індекс маси тіла
// function calcBMI(weight, height) {
//   const correctWeight = parseFloat(weight.replace(",", "."));
//   const correctHeight = parseFloat(height.replace(",", "."));
//   console.log(correctWeight);
//   console.log(correctHeight);

//   let indexMass = correctWeight / (correctHeight * correctHeight);
//   return indexMass.toFixed(1);
// }
// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

// // Example 2 - Найменше з чисел
// function min(a, b) {
//   let result = a > b ? b : a;
//   return result;
// }
// console.log(min(2, 2)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// // Example 3 - Площа прямокутника

// function getRectArea(dimensions) {
//   const dimensionsArr = dimensions.split(" ");
//   console.log(dimensionsArr);
//   return dimensionsArr[0] * dimensionsArr[1];
// }

// console.log(getRectArea("8 11"));

// // Example 4 - Логування елементів
// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${[i + 1]}: ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// // Example 5 - Логування контактів
// function printContactsInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   console.log(namesArr, phonesArr);
//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]} : ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// // Example 6 - Пошук найбільшого елемента
// function findLargestNumber(numbers) {
//   let result = null;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > result) {
//       result = numbers[i];
//     }
//   }
//   return result;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// // Example 7 - Середнє значення
// function calAverage() {
//   const numArr = Array.from(arguments);
//   console.log(numArr);
//   let numSum = 0;
//   for (let i = 0; i < numArr.length; i++) {
//     numSum += numArr[i];
//   }
//   const result = numSum / numArr.length;
//   return result;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// // Example 8 - Форматування часу
// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const minut = minutes % 60;

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minut).padStart(2, 0);
//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// // Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(cours) {
//   if (courses.includes(cours)) {
//     return "Ви вже маєте такий курс";
//   } else {
//     courses.push(cours);
//   }
// }

// function removeCourse(cours) {
//   if (courses.includes(cours)) {
//     const indexCours = courses.indexOf(cours);
//     return courses.splice(indexCours, 1);
//   } else {
//     return "Курс із таким ім'ям не знайдено";
//   }
// }

// // addCourse("Express");
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'Ви вже маєте такий курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс із таким ім'ям не знайдено'

// // updateCourse("Express", "NestJS");
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// !Модуль 3. Заняття 1. Об'єкти
// // Example 1 - Основи об'єктів

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// for (let key in user) {
//   console.log(`${key}:${user[key]}`);
// }

// // Example 2 - метод Object.values()

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let value of Object.values(salaries)) {
//   sum += value;
// }

// console.log(sum);

// // Example 3 - Масив об'єктів
// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// const stoneName = "Щебінь";

// function calcTotalPrice(stones, stoneName) {
//   for (let stone of stones) {
//     let sum = 0;
//     if (stone.name === stoneName) {
//       const index = stones.indexOf(stone);
//       sum += stone.price * stone.quantity;
//       console.log(stone);
//       console.log(stoneName);
//       console.log(sum);
//       console.log(index);
//     }
//   }
// }

// calcTotalPrice(stones, stoneName);

// // Example 4 - Комплексні завдання

// //  * Типів транзакцій всього два.
// //  * Можна покласти чи зняти гроші з рахунку.

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return { id: this.transactions.length, amount: amount, type: type };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Недостатньо коштів");
//     } else {
//       this.balance -= amount;
//       this.transactions.push(
//         this.createTransaction(amount, Transaction.WITHDRAW)
//       );
//     }
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     return this.transactions.find((item) => item.id === id);
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     return this.transactions.reduce((total, transaction) => {
//       if (transaction.type === type) {
//         return (total += transaction.amount);
//       } else {
//         return total;
//       }
//     }, 0);
//   },
// };
// console.log(account.getBalance());
// // console.log(account.createTransaction(1000, "deposit"));
// account.deposit(1000);
// account.deposit(3000);
// console.log(account.getBalance());
// account.withdraw(350);
// account.withdraw(350);
// account.withdraw(350);
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(2));
// console.log(`deposit: ${account.getTransactionTotal("deposit")}`);
// console.log(`withdraw: ${account.getTransactionTotal("withdraw")}`);
// -------------------------*/

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find((option) => option.label === "blue")); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// ! Спреди ...
// const temps = [14, -4, 25, 8, 11];

// const newArrTemps = [...temps];
// console.log(temps);
// console.log(newArrTemps);
// temps[2] = 200;
// newArrTemps[1] = 200;
// console.log(temps);
// console.log(newArrTemps);

// const allTemps = [temps, newArrTemps];
// console.log(allTemps);

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };
// const third = { ...first, ...second, propF: 40 };
// console.log(first);
// console.log(second);
// console.log(third);

// function multiply(a, b, ...arg) {
//   console.log(a);
//   console.log(b);
//   console.log(arg);
// }
// multiply(1, 2, 3, 4, 5);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const {
//   title: topTitle,
//   author,
//   genres,
//   isPublic,
//   pating,
//   coverImage = "http://google.com",
// } = book;

// console.log(topTitle);
// console.log(coverImage);
// console.log(genres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;
// console.log(name);
// console.log(followers);

// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Манго")); // Ласкаво просимо Манго.

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}`);
//   callback(name);
// }
// // registerGuest("Mango", function greet(name) {
// //   console.log(`Ласкаво просимо ${name}`);
// // });
// registerGuest("Poly", function notify(name) {
//   console.log(`Шановний ${name}, Ваш номер буде готовий за годину!`);
// });

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

// function processCall(recipient) {
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Вибачте абонент ${recipient} поза мережею!`);
//   } else {
//     console.log(`Зачекайте, з'єднуємо Вас з ${recipient}`);
//   }
// }
// processCall("Poli");

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// const numbers = [5, 10, 15, 20, 25];
// const num = [4, 6, 6, 8, 2, 6, 443, 34, 9];

// num.forEach((number) => {
//   console.log(`число ${number}`);
// });

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * value;
//   }
// };

// const arr = [3, 4, 7, 3, 5, 43, 2, 3];
// console.log(arr);
// dirtyMultiply(arr, 10);
// console.log(arr);

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18];
// console.log(arr);
// const doubledNumbers = pureMultiply(arr, 10);
// console.log(doubledNumbers);
// console.log(arr);

// // Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // // Було
// // console.log(calcBMI("88,3", "1.75"));
// // console.log(calcBMI("68,3", "1.65"));
// // console.log(calcBMI("118,3", "1.95"));

// // Очікується
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
//   console.log(nameList);
//   console.log(phoneList);
// }

// // Було
// // printContactsInfo(
// //   "Jacob,William,Solomon,Artemis",
// //   "89001234567,89001112233,890055566377,890055566300"
// // );

// // Очікується
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// function getBotReport({ companyName, bots: { repair, defence } }) {
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// // Було
// // console.log(getBotReport("Cyberdyne Systems", 155, 60));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 155,
//       defence: 60,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// const user = {
//   name: "Alan",
//   age: 39,
//   address: {
//     city: "Wonderland",
//     zip: "12345",
//   },
// };

// console.log(user.name);
// console.log(user.address.city);
// console.log(user.age);
// console.log(user.address.zip);

// const { name } = user;
// console.log(name);
// const {
//   age,
//   address: { city, zip },
// } = user;

// console.log(city);

// // Рішення
// function createContact(partialContact) {
//   return {
//     ...partialContact,
//     list: partialContact.list || "default",
//     id: generateId(),
//     createdAt: Date.now(),
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

// console.log("Створено: " + Date.now());

// function each(array, callback) {
//   const newArr = [];

//   for (let a of array) {
//     const value = callback(a);
//     newArr.push(value);
//     console.log("Я в лог в рамках функції: " + newArr);
//   }
//   return newArr;
// }
// console.log(
//   "Я кінцевий лог: " +
//     each([2, 4, 6, 3, 2, 6, 4, 6], function (value) {
//       return value * 2;
//     })
// );

// function add(a, b, c) {
//   return a + b + c;
// }

// const addArr = (a, b, c) => a + b + c;
// console.log(add(2, 2, 2), addArr(3, 3, 3));

// function fnA() {
//   return {
//     a: 5,
//   };
// }

// const fnA = () => {
//   return {
//     a: 5,
//   };
// };
// console.log(fnA());

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// // calc(3, 3, function (x, y) {
// //   return x + y;
// // });

// calc(3, 4, (x, y) => x + y);

// const numbers = [3, 45, 35, 2, 7, 35];
// let total = 0;

// numbers.forEach((a) => (total += a));

// console.log(total);
// function logItems(items) {
//   console.log(items);

//   items.forEach((v, i) => console.log(`${i + 1} - ${v}`));
// }

// logItems(["Mariy", "Artem", "Kiril"]);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: false,
//   rating: 8.38,
// };

// // Деструктуризація
// const { title, author, genres, isPublic, rating, coverImages } = book;

// const accessType = isPublic ? "публічний" : "закритий";
// const message = `Книга ${title} автора ${author} з рейтенгом ${rating} має ${accessType} доступ`;

// console.log(message);
// console.log(genres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes: userLikes = 0 },
// } = user;

// console.log(userLikes);

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
//   console.log(nameList);
// }
// // // Було
// // printContactsInfo(
// //   "Jacob,William,Solomon,Artemis",
// //   "89001234567,89001112233,890055566377,890055566300"
// // );

// // Очікується
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// // console.log(getBotReport("Cyberdyne Systems", 150, 50));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// const auto = {
//   name: "tesla",
//   year: 2024,

//   color: "red",
//   dimension: {
//     size: {
//       width: "1,9m",
//       length: "5,2m",
//     },
//   },
// };

// const {
//   name,
//   dimension: {
//     size: { length, width },
//   },
// } = auto;
// console.log(name, width, length);

// Рішення
function getStockReport({ companyName, stock }) {
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: "Cyberdyne Systems",
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: "Belacci",
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"
