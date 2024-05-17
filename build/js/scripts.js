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



$(function () {
  var menuLink = $('.header__menu-link');

  $(menuLink).on('click', function () {
    if (!$(this).hasClass('header__menu-link--drop')) {
      $('.header__menu-item--drop').removeClass('header__menu-item--open');
      $('.header__menu-link').removeClass('header__menu-link--open');
    }
    $(this).parent('.header__menu-item--drop').toggleClass('header__menu-item--open');
  });
});

