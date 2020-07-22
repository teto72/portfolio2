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