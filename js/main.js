$(function () {

  // ドロワー
  $('.header__button.menu').on('click', function () {
    $('html, body').css('position', 'fixed');
    $('.drawer').fadeIn();
    return false;
  });
  $('.drawer__button.close').on('click', function () {
    $('html, body').css('position', 'static');
    $('.drawer').fadeOut();
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
  $('.header__button, .drawer__button').on('click', function () {
    $('.modal').fadeIn();
    return false;
  });
  $('.modal__icon, .modal__wrapper').on('click', function () {
    $('.modal').fadeOut();
    return false;
  });

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

  // //ヘッダーのスクロールイベント//
  // $(window).scroll(function () {
  //   // 特定の要素を超えた
  //   if ($('.bottom').scrollBottom()) {
  //     // header__logoのsrc変える
  //     $('.header__logo').attr('src', 'img/onsen/sub-header-logo.png')
  //     // headerのbg変える
  //     $('.header').css('background-color', '#ffffff')
  //     // header__linkの色変える
  //     $('.header__link').css('color', '#000000')
  //     $('.header').css('display', 'none')
  //   } else {
  //     // header__logoのsrc変える
  //     $('.header__logo').attr('src', 'img/top/top-header-logo.png')
  //     // headerのbg変える
  //     $('.header').css('background-color', 'transparent')
  //     // header__linkの色変える
  //     $('.header__link').css('color', '#ffffff')
  //   }
  // });

  // スクロールヒント
  window.addEventListener('DOMContentLoaded', function(){
    new ScrollHint('.js-scrollable', {
  i18n: {
    scrollable: 'スクロールできます'
    },
  });
  });

});

