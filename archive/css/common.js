// JavaScript Document


/* pre loader */
$(function () {
    var h = $(window).height(); //ブラウザウィンドウの高さを取得
    $('#loaded_content').css('display', 'none'); //初期状態ではメインコンテンツを非表示
    $('#loader-bg ,#loader').height(h).css('display', 'block'); //ウィンドウの高さに合わせでローディング画面を表示
});

$(window).on('load', function () {
    $('#loader-bg').delay(900).fadeOut(800); //$('#loader-bg').fadeOut(800);でも可
    $('#loader').delay(600).fadeOut(300); //$('#loader').fadeOut(300);でも可
    $('#loaded_content').css('display', 'block'); // ページ読み込みが終わったらメインコンテンツを表示する
});

//1秒たったら強制的にロード画面を非表示(ページ下部ロード)
$(function () {
    setTimeout('stopload()', 1000);
});

function stopload() {
    $('#loaded_content').css('display', 'block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
}

/* //pre loader */


/*nav_button*/
$(document).ready(function () {

    $('.cross-button').on('click', function () {

        $('.animated-icon').toggleClass('open');
    });

});

/* scroll */
/*$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});*/