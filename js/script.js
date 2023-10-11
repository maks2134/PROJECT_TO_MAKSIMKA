"use strict";
let buttonOpen = document.querySelector(".travel__btn");
let ModalWindow = document.querySelector("form");
let In = ModalWindow.querySelector(".in__label-text");
let Older = ModalWindow.querySelector(".older__label-numbers");
let Kids = ModalWindow.querySelector(".kids__label-numbers");
let storage = localStorage.getItem("In");

ModalWindow.classList.add("info__modal-hide");
// If JS off

let MapHide = document.querySelector(".travel__map");
MapHide.classList.add("travel__map-hide");
// If Map loaded then turn off background
// kidMinus.addEventListener("click", function(evt) {
// 	if (kid.value > 0) {
// 		kid.value--;
// 	}
// 	else if (kid.value < 0) {
// 		kid.value = 0;
// 	}
// })
// kidPlus.addEventListener("click", function(evt) {
// 	kid.value++;
// })
// oldMinus.addEventListener("click", function(evt) {
// 	if (old.value > 0) {
// 		old.value--;
// 	}
// 	else if (old.value < 0) {
// 		old.value = 0;
// 	}
// })
// oldPlus.addEventListener("click", function(evt) {
// 	old.value++;
// })
function plusCount(obj) {
    let currentAttr = obj.getAttribute('href'),
        input = document.querySelector(currentAttr);
    input.value++;
}
function minusCount(obj) {
    let currentAttr = obj.getAttribute('href'),
        input = document.querySelector(currentAttr);

    if (input.value > 0) input.value--;
}
// Buttons

buttonOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    ModalWindow.classList.toggle("info__modal");
    In.focus();
    if (storage) {
        In.value = storage;
        Out.focus();
    }
    else {
        In.focus();
    }
});
// Open Modal Window
ModalWindow.addEventListener("submit", function(evt) {
    if ((!In.value) || (!Out.value)) {
        evt.preventDefault();
        ModalWindow.classList.remove("info__modal-error");
        ModalWindow.offsetWidth = ModalWindow.offsetWidth;
        ModalWindow.classList.add("info__modal-error");
    }
    else {
        localStorage.setItem("In", In.value);
    }
})
// Checking empty fields
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (ModalWindow.classList.contains("info__modal")) {
        ModalWindow.classList.remove("info__modal");
      }
    }
});
// Close Modal Window with ESC
