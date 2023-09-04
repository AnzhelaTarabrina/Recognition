import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const $imagesSliders = document.querySelectorAll('.images-slider');
$imagesSliders.forEach($imagesSlider => {
  const $slider = $imagesSlider.querySelector('.images-slider__main');
  new Swiper($slider, {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.images-slider__next',
      prevEl: '.images-slider__prev',
      clickable: true
    },
  });
})