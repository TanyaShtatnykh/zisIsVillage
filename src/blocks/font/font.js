$(document).ready(function () {
  $('.font__slider').owlCarousel({
    loop: true,
    margin: 6,
    nav: false,
    dots: true,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      576: {
        items: 2,
        margin: 6,
      },
      768: {
        items: 2,
        margin: 6,
      },
      1000: {
        items: 3,
        margin: 6,
      },
      1200: {
        items: 4,
        margin: 6,
      }
    }
  });
});