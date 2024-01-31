import  Inputmask from '../vendor/inputmask.js';

// imput Mask
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+380 99 999-99-99');
im.mask(selector);
