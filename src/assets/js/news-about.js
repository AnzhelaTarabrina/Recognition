import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

new Swiper('.news-about__slider, .news-slider', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.news-about__slider-next',
    prevEl: '.news-about__slider-prev',
    clickable: true
  },
});