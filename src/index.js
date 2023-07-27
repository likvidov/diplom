import modal from "./modules/modal";
import sendForm from "./modules/sendForm";
import slider from "./modules/slider";
import timer from "./modules/timer";

let clientWidth = document.documentElement.clientWidth;

modal();
clientWidth > 575 ? slider('benefits', '.benefits__item', 0, 3) : slider('benefits', '.benefits__item', 0, 1);
clientWidth > 575 ? slider('services', '.col-md-12', 0, 2) : slider('services', '.col-md-12', 0, 2);
timer('31 jule 2023');
sendForm({
  formId: 'order1',
  someElem:
  {
    type: 'block',
    id: 'total'
  }
});
sendForm({
  formId: 'order2',
  someElem: {
    type: 'block',
    id: 'total'
  }
});