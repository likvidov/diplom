import modal from "./modules/modal";
import sendForm from "./modules/sendForm";
import slider from "./modules/slider";
import timer from "./modules/timer";
import validator from "./modules/validator";

let clientWidth = document.documentElement.clientWidth;
let someElem = document.body.classList.contains('balkony') ? [
  {
    type: 'input',
    id: 'calc-total'
  }
] : ''

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