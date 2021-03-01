$(function () {

  // ドロワー
  $('.header__button').on('click', function () {
    $('html, body').css('position', 'fixed');
    $('.header').addClass("dn");
    $('.drawer').fadeIn();
    return false;
  });
  $('.drawer__button').on('click', function () {
    $('.drawer').fadeOut();
    $('html, body').css('position', 'static');
    $('.header').removeClass("dn");
    return false;
  });

// アコーディオン
  $('.q-js').on('click', function () {
    if ($(this).next('.a-js').hasClass('open')) {
      // 全ての項目をclose
      $('.a-js').removeClass('open');
      $('.a-js').slideUp(300);
      $(this).addClass('close');
    } else {
      // 全ての項目をclose
      $('.a-js').removeClass('open');
      $('.a-js').slideUp(300);
      $('.q-js').addClass('close');
      // その項目だけをopen
      $(this).next('.a-js').addClass('open');
      $(this).next('.a-js').slideDown(300);
      $(this).removeClass('close');
    }
  });


  // swiper
  // let swipeOption = {
  //   loop: true,
  //   effect: 'fade',
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  //   speed: 2000,
  // }
  // new Swiper('.swiper-container', swipeOption);




});

