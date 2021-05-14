$(function () {
  $('.multimedia__gallery-box').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
  $('select, .checkbox').styler();
  //presmerovani pomoci selectu
  $('.select__redirect').change(function () {
    location.href = $(this).val();
  });
  $('.media-menu').on('click', function () {
    $('.header__menu').slideToggle();
  });
});
