'use strict';

// #1
// 랜덤번호 생성
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// 잔여횟수
let score = 20;
// 시작 최고점
let highscore = 0;

// 안내메시지 함수
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// 'Check' 버튼 클릭 이벤트
document.querySelector('.check').addEventListener('click', function () {
  // UI의 입력필드의 값이 '숫자열'이기 때문에, Number()로 감싸줌
  // HTML에서 이미 input type: "number"로 설정
  // 입력값 변수
  const guess = Number(document.querySelector('.guess').value);

  // 입력값 조건문
  // 조건1. 빈 값일 때(value가 없을 때).
  if (!guess) {
    displayMessage('😐 No number!');

    // 조건2. 정답 맞혔을 때.
  } else if (guess === secretNumber) {
    displayMessage('🥳🥳 Correct Number!'); // 안내메시지 바꾸고
    document.querySelector('.number').textContent = secretNumber; //랜덤번호 표시: 정답을 맞췄을 때만 랜덤번호가 표시됨.
    //style 넣는 방법:
    //style.속성명 = '속성값'. 반.드.시 ' '안에 넣어야 함!!
    //속성명은 반.드.시 camelCase로 넣을 것. - 쓰지마.
    document.querySelector('body').style.backgroundColor = '#60b347'; // 배경 초록색으로 바꾸고
    document.querySelector('.number').style.width = '30rem'; // 랜덤번호 글자크기 바꾸고

    // 조건2-1. 정답 맞혔는데, 최고점이면 기록하기
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 조건3. 입력값이 높을 때/ 낮을 때 => 시크릿 넘버가 아닐 때
    // 반복되는 if 구절을 삼항연산자를 통해, 하나로 통합.
  } else if (guess !== secretNumber) {
    // 3-1 잔여횟수가 1보다 클 때 -> 아직 게임 가능
    if (score > 1) {
      // 3-1-2 입력값이 정답보다 높거나 낮을 때
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too low!');
      score--; //잔여횟수 차감
      document.querySelector('.score').textContent = score; //잔여횟수 표시
      // 3-2 잔여횟수가 1보다 낮을 때 -> 게임 횟수 끝
    } else {
      displayMessage('🤯 You lost...'); // 0 됐을 때 메시지
      document.querySelector('.score').textContent = 0; // 잔여횟수 '0'
    }
  }

  //again 버튼 함수
  document.querySelector('.again').addEventListener('click', function () {
    score = 20; // 잔여횟수 리셋
    secretNumber = Math.trunc(Math.random() * 50) + 1; // 새로운 랜덤번호 생성
    displayMessage('Start guessing...'); // 안내메시지 초기값 리셋
    document.querySelector('.score').textContent = score; // 디스플레이되는 잔여횟수 리셋
    document.querySelector('.number').textContent = '?'; // 디스플레이되는 랜덤숫자 '?'로 리셋
    document.querySelector('.guess').value = ''; // 디스플레이되는 입력값 창 비우기
    document.querySelector('body').style.backgroundColor = '#222'; // 배경색 검게 리셋
    document.querySelector('number').style.width = '15rem'; // 디스플레이되는 '?' 스타일 리셋
  });
});
