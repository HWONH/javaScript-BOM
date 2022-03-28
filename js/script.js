// window.open("주소 url", "윈도우 팝업창의 타이틀", "새로운 창의 가로, 세로, 좌상단으로부터 얼마나 떨어져 있는지에 대한 정보")
// window.open("https://www.naver.com", "윈도우 타이틀", "width=300,height=400,top=100,left=100");
function winOpen(){
    window.open("index_popup.html", "윈도우 팝업창", "width=300, height=400, top=100, left=200");
}

// setInterval : 함수문(function) + 실행문 + 대기시간
// 일정시간을 주기로 반복을 실행(슬라이드 이미지)
// f(x)=x+1; 대기모드(메모리)

/* 
var $num=0;
var $interval=setInterval(function(){
    $num++; // 초마다 증감연산
    if($num>3){ // $num = 4가 되었을 때
        clearInterval($interval); // setInterval에 대한 반복을 중단시 사용
        document.write($num+", "); // 8초 후 4, 출력
    }
}, 2000);
 */

// screen 객체
var $s_width=screen.width; // screen.width 현재 브라우저의 가로폭이 아닌 스크린의 가로폭(디스플레이 설정값)
document.write("현재 스크린의 가로 폭 : "+$s_width, "<br>");
var $s_height=screen.height;
document.write("현재 스크린의 세로 높이 : "+$s_height, "<br>");
var $s_availWidth=screen.availWidth; // 스크린을 사용할 수 있는 가용 가로값
document.write("현재 스크린의 가용 가로값 : "+$s_availWidth, "<br>");
var $s_availHeight=screen.availHeight; // 스크린을 사용할 수 있는 가용 세로값(현재 스크린의 세로 높이-작업표시줄 세로 높이)
document.write("현재 스크린의 가용 세로값 : "+$s_availHeight, "<br>");

// location 객체
var $href=location.href;
console.log($href);
var $hash=location.hash;
console.log($hash);
var $ch_hash=$hash.replace("#","");
console.log($ch_hash);

function refresh(){
    location.reload(); // 새로고침 발생
}


// 객체
var $cat={
    name : "야옹이",            // 속성
    age : 5,                    // 속성
    greeting : function(){      // 메서드
        alert("안녕");
    }
}

console.log($cat.name);         // 속성에 대한 값을 반환
// console.log($cat.greeting());   // 메서드에 대한 실행문을 반환
