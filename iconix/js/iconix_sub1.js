//메뉴 나오기(641후부터는 마우스오버가 작동한다)
var iw = window.innerWidth;
if (iw > 641) {
  var swiper1 = new Swiper('.swiper-container.swipe1', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $(document).ready(function () {
    $('.subGub_list').hide();
    $('.sub.s1').mouseover(function () {
      $('.subGub_list').slideDown();
    });
    $('.sub.s1').mouseleave(function () {
      $('.subGub_list').slideUp();
    });
  });
}



// 창작,국내,해외 버튼
$(document).ready(function () {
  $(".b1").click(function () {
    $(".creation").addClass("on");
    $(".internal").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
    $(".abroad").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".b2").click(function () {
    $(".internal").addClass("on");
    $(".creation").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
    $(".abroad").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".b3").click(function () {
    $(".abroad").addClass("on");
    $(".creation").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
    $(".internal").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
});




// 창작애니메이션 swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


// 국내사업대행 swiper
var swiper = new Swiper(".mySwiper4", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper3", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});