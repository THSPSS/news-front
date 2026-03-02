'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (!elem) {
    return;
  }

  if (Array.isArray(elem)) {
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] && typeof elem[i].addEventListener === 'function') {
        elem[i].addEventListener(type, callback);
      }
    }
  } else {
    if (typeof elem.addEventListener === 'function') {
      elem.addEventListener(type, callback);
    }
  }
}



/**
 * navbar toggle
 */

const navOpenButton = document.querySelector(".nav-open-btn");
const navCloseButton = document.querySelector(".nav-close-btn");


navOpenButton.addEventListener('click', () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});

navCloseButton.addEventListener('click', () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
})
