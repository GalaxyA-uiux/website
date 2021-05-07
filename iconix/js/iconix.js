//메뉴 나오기
if ($(window).width() > 640) {
  $(".subGub.s1").hover(function () {
    $(this).next().slideToggle();
  });
  // $(".subGub.s1").click(function () {
  //   $(this).addClass('on').next().slideDown(300);
  //   $(".subGub.s1").not(this).removeClass('on').next().slideUp(300);
  //   return false;
  // });
  // $(".material-icons").click(function () {
  //   $(".material-icons").toggle();
  //   $(".gnb > ul").toggleClass('on');
  // });
}



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
$(function(){
  $(".b2").click(function(){
    var url = $("#sel").attr('value');
    window.open('https://www.youtube.com/channel/UCPUeGC_AL-OnDQORKhRm6iA');
  }); //뽀로로 유튜브
  $(".b4").click(function(){
    var url = $("#sel").attr('value');
    window.open('https://www.youtube.com/channel/UCxUZwdsqshu2iLQwdEE6e7Q');
  });  //타요 유튜브
});



//국제화 메인글씨. 대문자만 색상지정
/*$('.sec1 .sec1_bg .inner h2').html(function() {
  return $(this).text().replace(/\b([a-z])/gi, '<h2 class="caps">$1</h2>')
});
*/




// 뽀로로 숫자 자동 넘김
// var numAnimation = document.querySelectorAll('.num_animation');
// console.log(numAnimation);
// function changeNum(idx) {
//   var num = 0;
//   var targetNum = numAnimation[idx].getAttribute('data-rate');
//   var timer = setInterval(function(){
//     ++num;
//     numAnimation[idx].innerText = num;
//     if(num == targetNum){
//       clearInterval(timer);
//     }
//   }, 20);
// }
// for(var i = 0; i<numAnimation.length;i++) {
//   changeNum(i);
// }



//뽀로로 숫자 자동 넘김. 26번
$(document).scroll(function() {
  var scroll = $(window).scrollTop();
    if (scroll > 1339){
      countUp()
    }
    else if (scroll < 1338){
      $('.num_animation').text('0');
    }  //1338전으로 가면 숫자가 0이 된다

    // else if (scroll > 1420){
    //   $('.num_animation').text('0');
    // }
});
//console에 $(window).scrollTop();누르고 엔터치면 그 화면 높이 알 수 있음


//뽀로로 숫자 자동 넘김.(카운팅 스크립트 변수선언)
function countUp() { 
  $('.num_animation').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
        countNum: countTo
        //시작 숫자와 종료숫자를 비교한다
      },
      {
        duration: 800,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
      },
        complete: function() {
          $this.text(this.countNum);
      }

    });
  });
};





//each로 줄여보기.뉴스 버튼
$(document).ready(function(){
  $(".news_button .button1").click(function() {
      $(".news .news_1 .news_2.n1").addClass("on").siblings().removeClass("on");
      $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button2").click(function() {
      $(".news .news_1 .news_2.n2").addClass("on").siblings().removeClass("on");
      $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button3").click(function() {
    $(".news .news_1 .news_2.n3").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button4").click(function() {
    $(".news .news_1 .news_2.n4").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button5").click(function() {
    $(".news .news_1 .news_2.n5").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button6").click(function() {
    $(".news .news_1 .news_2.n6").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button7").click(function() {
    $(".news .news_1 .news_2.n7").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button8").click(function() {
    $(".news .news_1 .news_2.n8").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
});




//뉴스 라이선스 번갈아가는 버튼
$(document).ready(function () {
  $(".inner.art1 .intro .int_2").click(function () {
    $(".inner.art1 .licens").addClass("on");
    $(".inner.art1 .news").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".inner.art1 .intro .int_1").click(function () {
    $(".inner.art1 .news").addClass("on");
    $(".inner.art1 .licens").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
});




// // emailJS 유저 ID
// (function(){ emailjs.init("<aeh1724 ID>"); })();

// // form id, #contact-form 안에 있는 것들 전송 
// window.onload = function () {
//   document.getElementById('.licens_name').addEventListener('submit', function (event) {
//     event.preventDefault(); this.contact_number.value = Math.random() * 100000 | 0;
//     // 서비스 id, 이메일 템플릿
//     emailjs.sendForm('contact_service', 'contact_template', this);
//   });
// }
// // 출처: https://mahyuna.tistory.com/14 [maro]




// //라이선스 경고창
// window.onload = function () {
//   var licens_name = document.login;
//   licens_name.onsubmit = function() {
//     if(!licens_name.useId.value) {
//       alert('성함을 입력해주세요!');
//       licens_name.useId.focus();
//       return false;
//     }
//     if(!licens_name.useCompany.value) {
//       alert('이메일을 입력해주세요!');
//       licens_name.useCompany.focus();
//       return false;
//     }
//   }
// }
// //var 값은 클래스를 넣을 수 없음 div를 form태그로 바꿔서 입력
// //다음에 <유효성검사> 배우고 넣고 싶으면 그때 넣어보기




// footer 애니메이션
var youtube = new Swiper('.swiper-container.youtube1', {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

