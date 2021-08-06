// wed's css "자연스럽게 로테이트 되는 텍스트 애니메이션 스크립트"
// 메인 말풍선 위에 글씨효과
var words = document.getElementsByClassName('m_title');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
    // split 단어하나하나에 숫자를 매긴다(원래는 공백을 인식>자세한 이유는 다른 값이 들어있을 가능성이 높음)
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    //숫자를 매긴 하나하나를 span으로 묶는다
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);



//.sec1의 타이핑 효과(runa 15_3 참고)
function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis = thhis.find(".text-js");
    
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
        for(var i = 0; i < amntOfChars; i++){
            (function(i,char){
                setTimeout(function() {        
                    newString += char;
                    thhis.text(newString);
                },i*typingSpeed);
            })(i+1,text[i]);
        }
}
setInterval(function(){
    autoType(".type-js", 150);
},4000);
// setInterval=반복재생, 스크롤할때마다 먹어서 이걸로 대체



// 포폴사진 움직이기
// $(document).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll > 1500) {
//     $(".img1").vegas({
//       slides: [
//         { src: './index/imges/art1_img1_2.png' }
//       ],
//       animation: 'kenburnsDownRight'
//     });
//     $(".img2").vegas({
//       slides: [
//         { src: './index/imges/art1_img2_2.png' }
//       ],
//       animation: 'kenburnsDownLeft'
//     });
//   }
// });




//편집디자인 사진 보여주기
$(".flex_right").vegas({
  slides: [
      { src: './index/imges/flex_right9.jpg' },
      { src: './index/imges/flex_right5.jpg' },
      { src: './index/imges/flex_right4.jpg' },
      { src: './index/imges/flex_right2.jpg' }
  ],
  overlay: '/js/vegas/dist/overlays/09.png',
  animation: 'kenburnsRight',

});