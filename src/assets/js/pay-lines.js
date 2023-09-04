import Swiper, { Pagination } from 'swiper';

const $payLines = document.querySelector('.pay-lines');
if ($payLines) {
  new Swiper('.pay-lines__slider', {
    modules: [ Pagination ],
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      680: {
        slidesPerView: 1,
        enabled: false
      },
    },
    pagination: {
      el: '.pay-lines__slider-pagination',
      clickable: true
    },
  })
}