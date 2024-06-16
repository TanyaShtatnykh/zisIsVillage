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