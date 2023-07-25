import modal from "./modules/modal";
import slider from "./modules/slider";

let clientWidth = document.documentElement.clientWidth;

modal();
clientWidth > 575 ? slider('benefits', '.benefits__item', 0, 3) : slider('benefits', '.benefits__item', 0, 1);
clientWidth > 575 ? slider('services', '.col-md-12', 0, 2) : slider('services', '.service-block', 0, 2);