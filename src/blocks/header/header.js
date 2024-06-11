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