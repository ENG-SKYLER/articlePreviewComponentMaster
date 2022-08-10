const share = document.querySelector(".container__social__info__icon");
const state = document.querySelector(".container__social__state");
const shareBtn = document.querySelector(".container__social__info__icon img");

share.onclick = function (e) {
  state.classList.toggle("col");
};
