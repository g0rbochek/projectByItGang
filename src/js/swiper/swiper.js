import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';
// import '../../node_modules/swiper/swiper-bundle.css';

import { createMarkup } from './swiper-markup';
import { getFetch } from './swiper-api';

const way = document.querySelector('.js-swiper');
// console.log(way);
// const mySwiper = document.querySelector('.mySwiper');
// console.log(mySwiper);
// console.log(getFetch());

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 16,
  allowSlideNext: true,
  // allowSlideNext: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // autoplay: {
  // delay: 5000,
  // },
});
console.log(swiper);

async function get() {
  const result = await getFetch();
  // createMarkup(result);
  way.insertAdjacentHTML('beforeend', createMarkup(result));
}

get();
