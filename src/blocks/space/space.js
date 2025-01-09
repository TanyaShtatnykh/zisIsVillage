$(document).ready(function () {
  const houseSlider = new Swiper('.space__slider', {
    enabled: true, 
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    speed: 750,
    autoHeight: true,
    navigation: {
      nextEl: '.space__nav--next',
      prevEl: '.space__nav--prev',
    },
  });
  $('[data-fancybox="gallery"]').fancybox({
    loop: true,
    hideScrollbar: false,
    animationEffect: fade,
  })
});