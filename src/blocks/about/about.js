$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 6,
    nav: false,
    dots: true,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  });
});