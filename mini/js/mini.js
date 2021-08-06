//메뉴 스크롤 이동
jQuery(document).ready(function ($) {
    $(".m1").click(function (event) {
      event.preventDefault();
      $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
    });
    $(".m2").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 800);
    });
});
//console에 $(window).scrollTop();누르고 엔터치면 그 화면 높이 알 수 있음




// 미니라인업 스와이퍼
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".mySwiper2 .swiper-button-next",
        prevEl: ".mySwiper2 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper
    }
    
});


// 미니라인업 글 스와이퍼
// var swiper3 = new Swiper(".mySwiper3", {
//     allowTouchMove:false,
//     navigation: {
//         nextEl: ".mySwiper2 .swiper-button-next",
//         prevEl: ".mySwiper2 .swiper-button-prev",
//     },
//     thumbs: {
//         swiper: swiper,
//     }
// });


//미니라인업 버튼 누르면 내용 나오기
// $(document).ready(function(){
//     $(".sl7").click(function() {
//         $(".sl13").addClass("on").siblings().removeClass("on");
//         $(this).addClass("on").siblings().removeClass("on")
//     });
//     $(".sl8").click(function() {
//         $(".sl14").addClass("on").siblings().removeClass("on");
//         $(this).addClass("on").siblings().removeClass("on")
//     });
// });




//-----------------------------모바일메뉴(runa 25번)
$(document).ready(function () {
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    // 모바일메뉴 open/close
    $(".lang button").click(function () {
        $(".lang ul").toggleClass("open");
        // nav에 open클래스 추가/삭제
    });
    $(".subGub_list").off("mouseover");
});

//햄버거 버튼 x로 번갈아가며
$('.hamburger_button').click(function (ev) {
    ev.preventDefault();
    $(this).toggleClass('active');

    //햄버거 누르면 메뉴 나오기
    const menu = $('.gub');
    menu.toggleClass("active");
    // $('.gub').slideDown(900);
});
  