$(document).ready(function () {
  $('.about__slider').owlCarousel({
    loop: true,
    
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

$(function () {
  var menuLink = $('.header__menu-link');

  $(menuLink).on('click', function () {
    if (!$(this).hasClass('header__menu-link--drop')) {
      $('.header__menu-item--drop').removeClass('header__menu-item--open');
      $('.header__menu-link').removeClass('header__menu-link--open');
      $('.header__burger-btn').removeClass('header__burger-btn--open');
      $('.header__menu').removeClass('header__menu--open');
    }
    $(this).parent('.header__menu-item--drop').toggleClass('header__menu-item--open');

  });

  $(document).on('click', function (e) {
    var menu = $('.header__menu-list');
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      menuLink.parent('.header__menu-item--drop').removeClass('header__menu-item--open')
    }
  });

  $(function () {
    $('.header__burger-btn').on('click', function () {
      $(this).toggleClass('header__burger-btn--open');
      $('.header__menu').toggleClass('header__menu--open');
    })
  });
});
$(function() {
  $('.questions__item').on('click', function() {
    if (!$(this).hasClass('questions__item--open')) {
      $('.questions__item').removeClass('questions__item--open');
    }
    $(this).toggleClass('questions__item--open');
  })
})
$(document).ready(function () {
  $('.space__slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navText: ['<svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292889 7.2929C-0.0976334 7.68342 -0.0976333 8.31659 0.292889 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07106 15.0711C8.46159 14.6805 8.46159 14.0474 8.07106 13.6569L2.41421 8.00001L8.07106 2.34315C8.46159 1.95263 8.46159 1.31946 8.07106 0.928937C7.68054 0.538412 7.04737 0.538413 6.65685 0.928937L0.292889 7.2929ZM61 7L0.999996 7.00001L0.999996 9.00001L61 9L61 7Z" fill="#172925"/></svg>', '<svg width="121" height="16" viewBox="0 0 121 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M120.707 8.70711C121.098 8.31658 121.098 7.68342 120.707 7.29289L114.343 0.928932C113.953 0.538408 113.319 0.538408 112.929 0.928932C112.538 1.31946 112.538 1.95262 112.929 2.34315L118.586 8L112.929 13.6569C112.538 14.0474 112.538 14.6805 112.929 15.0711C113.319 15.4616 113.953 15.4616 114.343 15.0711L120.707 8.70711ZM0 9H120V7H0V9Z" fill="#172925"/></svg>'],
    dots: false,
    autoplay: false,
  });
});
$( function() {
  $('.transport__tabs').tabs();
});
