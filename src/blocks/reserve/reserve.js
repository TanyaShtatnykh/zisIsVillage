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