
$(document).ready(function () {
  const aboutSlider = new Swiper('.about__slider', {
    enabled: true, 
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    delay: 2000,
    speed: 750,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
    },
    pagination: {
      el: '.about__pagination',
      type: 'bullets',
    },
  });
});