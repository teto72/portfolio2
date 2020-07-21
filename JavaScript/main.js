// -------------------
// スムーススクロール
// -------------------
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 400, "swing");//スクロール速度
    return false;
  });
});

// ------------------
// ページ遷移時のフェードイン時間
// ------------------
$('body').hide();
$(window).on('load', function () {
  $('body').fadeIn(2000); // fadeInにかける時間
});