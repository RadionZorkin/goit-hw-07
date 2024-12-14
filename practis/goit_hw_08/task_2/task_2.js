"use strict";

import images from "./data/images.js";
// Основна логіка для завдання
function task2Function() {
  const innerGalleryEl = images.map((image) => {
    const itemEl = document.createElement("li");
    const imageEl = document.createElement("img");
    imageEl.setAttribute("src", image.url);
    imageEl.setAttribute("alt", image.alt);
    itemEl.append(imageEl);
    return itemEl;
  });
  console.log(innerGalleryEl);
  const galleryEl = document.querySelector(".gallery");
  galleryEl.append(...innerGalleryEl);
}

// Виклик функції
task2Function();
