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