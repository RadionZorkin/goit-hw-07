"use strict";

// Основна логіка для завдання 1
function task1Function() {
  // Знаходимо елемент ul з id "categories"
  const categoriesEl = document.querySelector("#categories");
  // Отримуємо всі елементи li з класом "item"
  const categoriesName = categoriesEl.querySelectorAll(".item");
  // Виводимо кількість категорій
  console.log(`кількість категорій: ${categoriesName.length}`);
  // Перебираємо кожен елемент li.item
  categoriesName.forEach((element) => {
    // Знаходимо заголовок h2 всередині кожного li.item
    const categoryTitle = element.querySelector("h2").textContent;
    // Знаходимо кількість всіх вкладених елементі li у кожній категорії
    const categoryEltment = element.querySelectorAll("li").length;
    // Виводимо результат для кожної категорії
    console.log(`Заголовок категорії: ${categoryTitle}`);
    console.log(`Кількість елементів: ${categoryEltment}`);
  });
}

// Виклик функції
task1Function();
