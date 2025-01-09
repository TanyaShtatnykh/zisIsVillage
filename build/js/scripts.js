
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
$(function () {
  // $('.aboutHouse__gallery').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   infinite: true,
  //   fade: true,
  //   asNavFor: '.aboutHouse__gallery--mini'
  // });
  // $('.aboutHouse__gallery--mini').slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   asNavFor: '.aboutHouse__gallery',
  //   dots: false,
  //   arrows: true,
  //   prevArrow: $('.aboutHouse__nav--prev'),
  //   nextArrow: $('.aboutHouse__nav--next'),
  //   infinite: true,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 4,
  //         centerMode: false,
  //       }
  //     },
  //     {
  //       breakpoint: 360,
  //       settings: {
  //         slidesToShow: 3,
  //         centerMode: false,
  //       }
  //     }
  //   ]
  // });
});




$(document).ready(function () {
  const aboutSlider = new Swiper('.font__slider', {
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
      el: '.font__pagination',
      type: 'bullets',
    },
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

  $(function () {
    $('.header__burger-btn').on('click', function () {
      $(this).toggleClass('header__burger-btn--open');
      $('.header__menu').toggleClass('header__menu--open');
    })
  });

  $(document).on('click', function (e) {
    var menu = $('.header__menu-list');
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      menuLink.parent('.header__menu-item--drop').removeClass('header__menu-item--open');
    }
  });  
});

$(function () {
  $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
  var amountScrolled = 500;

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('a.back-to-top').fadeIn('slow');
      $('a.back-to-top').addClass('back-to-top--visible')
    } else {
      $('a.back-to-top').removeClass('back-to-top--visible');
      $('a.back-to-top').fadeOut('slow');
    }
  });
  $('a.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 0);
    return false;
  });
})



$(function() {
  $('.questions__item').on('click', function() {
    if (!$(this).hasClass('questions__item--open')) {
      $('.questions__item').removeClass('questions__item--open');
    }
    $(this).toggleClass('questions__item--open');
  });
  $(document).on('click', function (e) {
    var question = $('.questions__item');
    if (!question.is(e.target) && question.has(e.target).length === 0) {
      question.removeClass('questions__item--open');
    }
  });
});
$(function() {
  $('.reserve__stage').on('click', function () {
    if (!$(this).hasClass('reserve__stage--active')) {
      $('.reserve__stage').removeClass('reserve__stage--active');
      $('.reserve__text').removeClass('reserve__text--active');
    }
    $(this).toggleClass('reserve__stage--active');
    $(this).next('.reserve__text').toggleClass('reserve__text--active');
  })
})
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
$( function() {
  $('.transport__tabs').tabs();
});
