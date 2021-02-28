$(function () {

// モーダル
  $('.header__button, .drawer__button').on('click', function () {
    $('.modal').fadeIn();
    return false;
});
  $('.modal__icon, .modal__wrapper').on('click', function () {
    $('.modal').fadeOut();
    return false;
});

    // ドロワー
    $('.header__spButton').on('click', function () {
      $('.drawer').fadeIn();
      return false;
    });
    $('.drawer__icon').on('click', function () {
      $('.drawer').fadeOut();
      return false;
    });


});