"use strict";
import products from "./data/product.js";

// const listWithId = document.querySelector("#menu");
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// listWithClass.style.textTransform = "uppercase";
// listWithClass.style.fontSize = "24px";
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelector(".class");
// console.log(`текст в середині ".class" ${menuItemsByTagName.textContent}`);
// console.log(menuItemsByTagName.classList.contains("class-2"));

// const menuItemsByClass = document.querySelectorAll("li");
// console.log(menuItemsByClass);
// // console.log(menuItemsByClass.classList.contains(".class"));

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// !Властивість textContent
// const textEl = document.querySelector(".article-text");
// console.log(textEl.textContent);

// const titleEl = document.querySelector(".article-title");
// console.log(titleEl.textContent);
// titleEl.textContent = "Новий заголовок";
// console.log(titleEl.textContent);

// !Властивість classList
// У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

// elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
// elem.classList.add(cls) - додає клас cls до списку класів елемента.
// elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
// elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
// elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.

// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

// !Властивість style
// const link = document.querySelector(".link");
// link.style.color = "#356";

// !Властивості атрибутів
// const image = document.querySelector("img");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("width")); // "Rocks and waterfall"

// image.setAttribute("alt", "Amazing nature");
// image.setAttribute("width", "500");

// console.log(image.getAttribute("alt")); // Amazing nature

// !data-атрибути
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// !Створення та видалення елементів
// const heading = document.createElement("h1");
// console.log(heading);
// heading.textContent = "Новий заголовок!";
// console.log(heading);

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// document.body.append(heading);
// document.body.prepend(heading);

// const elClassEditor = document.querySelector(".editor");
// console.log(elClassEditor);
// elClassEditor.remove();

// !Властивість innerHTML
// !Читання

// const article = document.querySelector(".article2");
// console.log(article.innerHTML);

// const title = document.querySelector(".article2 .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article2 .text");
// console.log(text.innerHTML);
// text.innerHTML =
//   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <span>Praesentium</span> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.";
// console.log(text.innerHTML);

// const link = document.querySelector(".article2 .link");
// console.log(link.innerHTML);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list"); // це наш <ul>

// const marckup = technologies
//   .map((technologies, ind) => `<li>${technologies} - ${ind}</li>`)
//   .join("");

// console.log(marckup);

// list.innerHTML = marckup;

// const link = document.querySelector("a");
// if (link.href) link.href = "#";

// const transactionHistory = [
//   {
//     id: "758d5283-358e-4fbb-b222-a17fd04e8916",
//     amount: "179.07",
//     date: "2012-02-01T22:00:00.000Z",
//     business: "Bogan - Dubuque",
//     name: "Auto Loan Account 7313",
//     type: "deposit",
//     account: "19808943",
//   },
//   {
//     id: "f0463ec4-7104-4adb-a41c-b1c7549055f8",
//     amount: "930.87",
//     date: "2012-02-01T22:00:00.000Z",
//     business: "Legros, Weimann and Treutel",
//     name: "Auto Loan Account 0721",
//     type: "invoice",
//     account: "38277848",
//   },
//   {
//     id: "c3a9e8d1-9b60-4d59-a5c7-fba02a3f1b4f",
//     amount: "500.50",
//     date: "2013-03-15T12:00:00.000Z",
//     business: "Kling, Pfeffer and Cruickshank",
//     name: "Savings Account 6594",
//     type: "withdrawal",
//     account: "56897412",
//   },
//   {
//     id: "d1f6b2d7-2c73-4e2a-8e67-9dcb6fe7bc7a",
//     amount: "120.25",
//     date: "2014-05-10T18:30:00.000Z",
//     business: "Hahn, Bergstrom and Hintz",
//     name: "Checking Account 4932",
//     type: "payment",
//     account: "75360928",
//   },
// ];

// const tableEl = document.querySelector(".js-transaction-table");
// console.log(tableEl);

// transactionHistory.forEach((el) => {
//   const row = document.createElement("tr");

//   row.innerHTML = `
//   <td>${el.id}</td>
//   <td>${el.amount}</td>
//   <td>${el.date}</td>
//   <td>${el.business}</td>
//   <td>${el.name}</td>
//   <td>${el.type}</td>
//   <td>${el.account}</td>
//   `;

//   tableEl.append(row);
// });

// const actions = document.querySelectorAll(".actions .btn");
// console.log(actions);

// actions.forEach((el) => {
//   el.setAttribute("data-hello", "hi");
//   console.log(el.dataset.action);
// });

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// console.log(clearLogBtn);

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// const titleEl = document.createElement("h1");
// titleEl.classList.add("hero-title");
// titleEl.textContent = "Це головний заголовок!";
// console.log(titleEl);

// document.body.appendChild(titleEl);

// const navItemEl = document.createElement("li");
// navItemEl.classList.add("mumu__item");

// const navLinkEl = document.createElement("a");
// navLinkEl.classList.add("mumu__link");
// navLinkEl.textContent = "Особистий кабінет";
// navLinkEl.href = "/cub";

// navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);
// const navListEl = document.querySelector(".mumu__list");
// // navListEl.appendChild(navItemEl);

// const navEl = document.querySelector("ul");
// console.log(navEl);
// navListEl.insertBefore(navItemEl, navEl.firstElementChild);
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const colorPickerContainerEL = document.querySelector(".mumu");

// // Функція яка створює масив елементів з назвою та кодом кольору
// const makeColorPickerOptions = (option) => {
//   return option.map((option) => {
//     const buttonEL = document.createElement("button");
//     buttonEL.type = "button";
//     buttonEL.classList.add("color-picker__option");
//     buttonEL.textContent = option.label; // Текст кнопки
//     buttonEL.style.backgroundColor = option.color; // Фон кнопки
//     // console.log(option);
//     return buttonEL;
//   });
// };

// const options = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEL.append(...options);
// options.forEach((button) => console.log(button)); // Виведе кожну кнопку окремо

// const product = {
//   name: "Трансформатор",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia dolorem nesciunt repellat suscipit labore exercitationem, odit id rem quasi. Vero placeat nemo fuga esse? Et fugiat dicta vero deleniti!",
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// !Імпорт файлу з бази данних

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement("article");
//   productEl.classList.add("product");

//   const nameEl = document.createElement("h2");
//   nameEl.classList.add("product__name");
//   nameEl.textContent = name;

//   const descrEl = document.createElement("p");
//   descrEl.classList.add("product__descr");
//   descrEl.textContent = description;

//   const priceEl = document.createElement("p");
//   priceEl.classList.add("product__price");
//   priceEl.textContent = `Ціна: ${price}`;

//   productEl.append(nameEl, descrEl, priceEl);
//   return productEl;
// };

// const elements = products.map(makeProductCard);
// const productContainerEl = document.querySelector(".js-products");

// console.log(elements);
// productContainerEl.append(...elements);
