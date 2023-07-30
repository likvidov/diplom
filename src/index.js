import calc from "./modules/calc";
import comments from "./modules/comments";
import modal from "./modules/modal";
import sendForm from "./modules/sendForm";
import slider from "./modules/slider";
import timer from "./modules/timer";
import validator from "./modules/validator";

const clientWidth = document.documentElement.clientWidth;
const balkonyPage = document.body.classList.contains('balkony');
const orderForms = document.querySelectorAll('form');
const someElem = balkonyPage ? [
  {
    type: 'input',
    id: 'calc-total'
  }
] : '';
const smoothScroll = document.querySelector('.smooth-scroll');

modal();
clientWidth > 575 ? slider('benefits', '.benefits__item', 0, 3) : slider('benefits', '.benefits__item', 0, 1);
clientWidth > 575 ? slider('services', '.col-md-12', 0, 2) : slider('services', '.col-md-12', 0, 2);
timer('31 jule 2023');
validator();
orderForms.forEach(form => {
  sendForm({
    form, 
    someElem: someElem
  })
})
if (balkonyPage) calc();
comments();

window.addEventListener('scroll', () => {
  window.scrollY > 660 ? smoothScroll.classList.remove('hide') : smoothScroll.classList.add('hide');
})

smoothScroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
});
