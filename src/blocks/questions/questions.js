$(function() {
  $('.questions__item').on('click', function() {
    if (!$(this).hasClass('questions__item--open')) {
      $('.questions__item').removeClass('questions__item--open');
    }
    $(this).toggleClass('questions__item--open');
  })
})