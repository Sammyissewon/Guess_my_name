'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳🥳 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//랜덤번호 생성
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//잔여횟수
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // UI의 입력필드의 값이 '숫자열'이기 때문에, Number()로 감싸줌
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // #1. 빈 값일 때.
  if (!guess) {
    displayMessage('😐 No number!');

    // #2. 정답 일 때.
  } else if (guess === secretNumber) {
    displayMessage('🥳🥳 Correct Number!');

    //랜덤번호 표시: 정답을 맞췄을 때만 랜덤번호가 표시됨.
    document.querySelector('.number').textContent = secretNumber;

    //style 넣는 방법:
    //style.속성명 = '속성값'. 반.드.시 ' '안에 넣어야 함!!
    //속성명은 반.드.시 camelCase로 넣을 것. - 쓰지마.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //정답이면, 최고점 기록하기
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // #3. 입력값이 높을 때 + 낮을 때 => 시크릿 넘버가 아닐 때
    // 반복되는 if 구절을 삼항연산자를 통해, 하나로 통합.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too low!');
      score--; //잔여횟수 차감
      document.querySelector('.score').textContent = score; //잔여횟수 표시
    } else {
      displayMessage('🤯 You lost...'); // 0 됐을 때 메시지
      document.querySelector('.score').textContent = 0; // 잔여횟수 '0'
    }
  }

  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈Too High!';
  //       score--; //잔여횟수 차감
  //       document.querySelector('.score').textContent = score; //잔여횟수 표시
  //     } else {
  //       document.querySelector('.message').textContent = '🤯 You lost...'; // 0 됐을 때 메시지
  //       document.querySelector('.score').textContent = 0; // 잔여횟수 '0'
  //     }

  //     // #4. 입력값이 낮을 때.
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   } else {
  //     document.querySelector('.message').textContent = '🤯 You lost...';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // });

  //again 버튼

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('number').style.width = '15rem';
  });
});
