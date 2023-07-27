import calc from "./modules/calc";
import modal from "./modules/modal";
import sendForm from "./modules/sendForm";
import slider from "./modules/slider";
import timer from "./modules/timer";
import validator from "./modules/validator";

const clientWidth = document.documentElement.clientWidth;
const windowY = window.screenY;
const someElem = document.body.classList.contains('balkony') ? [
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
sendForm({
  formId: 'order1',
  someElem: someElem
});
sendForm({
  formId: 'order2',
  someElem: someElem
});
calc();

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
