$(function () {

  // ドロワー
  $('.header__button').on('click', function () {
    $('html, body').css('position', 'fixed');
    $('.header').addClass("close");
    $('.drawer').fadeIn();
    return false;
  });
  $('.drawer__button').on('click', function () {
    $('.drawer').fadeOut();
    $('html, body').css('position', 'static');
    $('.header').removeClass("close");
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

  // モーダル
  // $('.header__button, .drawer__button').on('click', function () {
  //   $('.modal').fadeIn();
  //   return false;
  // });
  // $('.modal__icon, .modal__wrapper').on('click', function () {
  //   $('.modal').fadeOut();
  //   return false;
  // });

  //★タブクリックでコンテンツ差し替え//
  // ①タブをクリックしたら発動
  $('.info__tab').click(function () {

    // ②クリックされたタブの順番を変数に格納
    var index = $('.info__tab').index(this);

    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.info__tab').removeClass('active');

    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');

    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.info__container').removeClass('show').eq(index).addClass('show');
  });


});

