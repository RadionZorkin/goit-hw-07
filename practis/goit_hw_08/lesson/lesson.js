"use strict";

const refs = {
  containerEl: document.querySelector(".js-container"),
};

refs.containerEl.addEventListener("click", onClick);

function onClick(evt) {
  console.log(evt.target);
  console.log(evt.target.);
}
