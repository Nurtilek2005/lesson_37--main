$('.nav__link').on('click', function (e) {
  e.preventDefault();
  $(this).addClass('active').removeClass('active');
  let option = $(this).attr('data-rel');
  $('.item').fadeOut(300);
  $(`.item.${option}`).delay(200).fadeIn(300)
})