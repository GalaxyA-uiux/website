// 모바일일때 스와이퍼 구현 (루나 10번 카카오)
// 641기준으로 모바일과 pc나눔 기본형
// 1.스크립트 기본형
// var iw = window.innerWidth;
// if (iw < 641) {
//     var swiper1 = new Swiper('.swiper-container.swipe1', {
//         scrollbar: {
//             el: '.swiper-scrollbar',
//             hide: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// }



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


//메뉴 스크롤 이동
jQuery(document).ready(function ($) {
  $(".subGub.sg1").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
  $(".ck1").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    $(".inner.art1 .intro .int_1").addClass("on").siblings().removeClass("on");
    $(".inner.art1 .news").addClass("on");
    $(".inner.art1 .licens").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".ck2").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    $(".inner.art1 .intro .int_2").addClass("on").siblings().removeClass("on");
    $(".inner.art1 .licens").addClass("on");
    $(".inner.art1 .news").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
});




// 메인 애니메이션(동영상)
var main = new Swiper('.swiper-container.main', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 30000,
    disableOnInteraction: false,
  },
});



//main_button 
$(function () {
  $(".b2").click(function () {
    var url = $("#sel").attr('value');
    window.open('https://www.youtube.com/channel/UCPUeGC_AL-OnDQORKhRm6iA');
  }); //뽀로로 유튜브
  $(".b4").click(function () {
    var url = $("#sel").attr('value');
    window.open('https://www.youtube.com/channel/UCxUZwdsqshu2iLQwdEE6e7Q');
  });  //타요 유튜브
});



//뽀로로 숫자 자동 넘김. 26번
$(document).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 1339) {
    countUp()
  }
  else if (scroll < 1338) {
    $('.num_animation').text('0');
  }
});
//console에 $(window).scrollTop();누르고 엔터치면 그 화면 높이 알 수 있음




//뽀로로 숫자 자동 넘김.(카운팅 스크립트 변수선언)
function countUp() {
  $('.num_animation').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
      //시작 숫자와 종료숫자를 비교한다
    },
      {
        duration: 800,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
  });
};


//each로 줄여보기.뉴스 버튼
$(document).ready(function () {
  $(".news_button .button1").click(function () {
    $(".news .news_1 .news_2.n1").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button2").click(function () {
    $(".news .news_1 .news_2.n2").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button3").click(function () {
    $(".news .news_1 .news_2.n3").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button4").click(function () {
    $(".news .news_1 .news_2.n4").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button5").click(function () {
    $(".news .news_1 .news_2.n5").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button6").click(function () {
    $(".news .news_1 .news_2.n6").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button7").click(function () {
    $(".news .news_1 .news_2.n7").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button8").click(function () {
    $(".news .news_1 .news_2.n8").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
});



//뉴스 라이선스 번갈아가는 버튼
$(document).ready(function () {
  $(".int_2").click(function () {
    $(".licens").addClass("on");
    $(".news").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".int_1").click(function () {
    $(".news").addClass("on");
    $(".licens").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
});



//모바일일때 고치기(스크립트 기본형) runa 10번 카카오
//1.스크립트 기본형
var iw = window.innerWidth;
if (iw < 641) {
  countUp()
  // 휴대폰 스크롤시 계속 아따가따해서 해제!그럼 첫페이지부터 카운트되서 끝
  // $(document).scroll(function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll > 599) {
  //     countUp()
  //   }
  //   else if (scroll < 598) {
  //     $('.num_animation').text('0');
  //   }
  // });
}


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


// footer 애니메이션
var youtube = new Swiper('.swiper-container.youtube1', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 1800,
        disableOnInteraction: false,
      },
      loop: true,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
