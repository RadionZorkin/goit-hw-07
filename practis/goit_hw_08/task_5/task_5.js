"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// знаходимо потрібні елементи
const buttonEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

// чіпляємо слухач на button "click"
buttonEl.addEventListener("click", () => {
  // кол-бек функція яка виконується при настанні події

  // отримуємо та зберігаємо рандомний колір
  const newColor = getRandomHexColor();

  // додаємо коліз бекграунду буді через строчні стилі
  document.body.style.backgroundColor = newColor;

  // прописуємо номер кольору у спані через ТекстКонтент
  spanColorEl.textContent = newColor;
});
