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

document.addEventListener('DOMContentLoaded', function () {

  const els = document.querySelectorAll('#animate-title');
  const cb = function (entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const ta = new TextAnimation(entry.target);
              ta.animate();
              observer.unobserve(entry.target);
          } else {
          }
      });
  };
  const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
  };
  const io = new IntersectionObserver(cb, options);
  els.forEach(el => io.observe(el));
});

// -----------------
// テキストフェードイン
// -----------------
$(window).scroll(function (){
  $('.fadein').each(function(){
      let elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
          }
      });
  });


// ハンバーガーメニュー
$(function(){
  $(".btn-gnavi").on("click", function(){
      // ハンバーガーメニューの位置を設定
      var rightVal = 0;
      if($(this).hasClass("open")) {
          // 位置を移動させメニューを開いた状態にする
          rightVal = -300;
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).removeClass("open");
      } else {
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).addClass("open");
      }
      $("#global-navi").stop().animate({
          right: rightVal
      }, 200);
  });
});