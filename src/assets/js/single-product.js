import Swiper, { Pagination, Navigation, Thumbs } from 'swiper';

Swiper.use([Pagination, Navigation, Thumbs]);

const navSlider = new Swiper('.single-product__nav-slider', {
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 10,
});

new Swiper('.single-product__big-slider', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  thumbs: {
    swiper: navSlider,
  },
  mousewheel: {
    sensitivity: 1.4,
  },
  navigation: {
    prevEl: '.single-product__slider-prev',
    nextEl: '.single-product__slider-next',
    clickable: true,
  },
});