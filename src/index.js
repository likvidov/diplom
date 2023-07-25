import modal from "./modules/modal";
import slider from "./modules/slider";

modal();
document.documentElement.clientWidth > 575 ? slider('benefits', '.benefits__item', 0, 3) : slider('benefits', '.benefits__item', 0, 1)