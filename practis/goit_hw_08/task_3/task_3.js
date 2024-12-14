"use strict";

// Основна логіка для завдання
const outputName = document.querySelector("#name-output");
const updateName = (event) => {
  outputName.textContent = event.target.value.trim() || "Anonymous";
  console.log(event.target.value.trim());
};
const nameInputEl = document.querySelector("#name-input");

// Виклик функції
nameInputEl.addEventListener("input", updateName);
