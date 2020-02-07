import Slide from './slide2.js';

const slide = new Slide('.slide', '.slide-wrapper');

console.log(slide);

slide.init();

slide.changeSlide(3);
slide. activeNextSlide();
slide. activeNextSlide();