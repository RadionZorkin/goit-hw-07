"use strict";

// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо потрібні елементи
const controlsEl = document.querySelector("#controls");
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
controlsEl.addEventListener("click", (event) => {
  const eventEl = event.target;
  console.log(eventEl);
  console.log("Бачу клік!");
});

// Функція створення div елементів
function createBoxes(amount) {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    console.log(box);

    boxes.push(box);
    size += 10;
  }

  // Очищуємо попередні квадрати
  destroyBoxes();

  // Додаємо нові за одну операцію
  boxesEl.append(...boxes);
}

// Функція очищення div#boxes
function destroyBoxes() {
  boxesEl.innerHTML = "";
}
// Додаємо слухачі подій
createBtnEl.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  // console.log(amount);
  if ((1 <= amount) & (amount <= 100)) {
    createBoxes(amount);
  } else {
    inputEl.placeholder = "Введи від 1 до 100...!!!";
  }
});

destroyBtnEl.addEventListener("click", destroyBoxes);

// Валідація введеного значення
// Очищаємо input
