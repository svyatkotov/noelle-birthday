"use strict"

//hat behavior
let hat = document.querySelector('.congratulation-hat');
let img = document.querySelector('.congratulation-img');

img.onmouseover = function () {
    hat.classList.toggle('disabled');
};
  
img.onmouseout = function () {
    hat.classList.toggle('disabled');
};

//scroll behavior
let scroll = document.querySelector('body');
console.log(scroll);