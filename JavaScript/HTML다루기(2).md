# Event
- 브라우저에서 발생하는 일련의 사건들
	ex) 버튼 클릭, 마우스 스크롤, 키보드 입력 등
- 브라우저는 이벤트를 감지하여 사용자에게 알려줌으로써 상호작용
- 이벤트 발생 시에 원하는 동작을 하도록 이벤트 함수를 구현

# Event type
- 이벤트의 종류를 나타냄
  ## 자주 사용되는 event 메서드
  - **event.preventDefault()**: 이벤트를 취소할 수 있는 경우 해당 이벤트를 취소 
  *ex) input 태그에 커서가 유지되도록 유지할 때 사용*
  ## 자주 사용되는 event type
  - onkeydown: 키보드를 누르고 있을 때
  - onkeyup:키보드를 누른 후 떼었을 때
  - onclick: 요소를 마우스 클릭했을 때
 [참조:MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
 
# JS에서 이벤트 함수 다루기
js에서 이벤트를 처리하는 방법은 두 가지가 있다. 
첫째는 이벤트 리스너 방식, 두번째는 이벤트 핸들러 방식이 있다.

## 이벤트 리스너
- 하나 이상의 이벤트 핸들러를 바인딩 가능
- 캡처링과 버블링 지원
  - 캡처링: 이벤트가 하위 요소로 전파되는 단계
  - 버블링: 이벤트가 상위 요소로 전파되는 단계
  [참조: 모던자바스크립트 튜토리얼](https://ko.javascript.info/bubbling-and-capturing)
```html js
<html>
  <head>
  	이벤트 리스너를 알아봅시다
  </head>
  <body>
    <button id="btn">클릭</button>
    <script>
      const btn = document.querySelector('#btn');
      
      function onClick() {
        console.log('이벤트가 실행됩니다😏');
      }
      
      btn.addEventListener('click', onClick);
      btn.addEventListener('click', function () {
        console.log('이벤트가 하나 더 실행됩니다😅');
      });
    </script>
  </body>
</html>
```

## 이벤트 핸들러
- 자바스크립트 코드에서 프로퍼티로 등록하여 사용하는 방식
- 하나의 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만 바인딩

```html
<html>
  <head>
  	이벤트 핸들러를 알아봅시다
  </head>
  <body>
    <button id="btn">클릭</button>
    <script>
      const btn = document.querySelector('#btn');
	  btn.onclick = function() {
        console.log('첫번째 함수는 실행되지 않습니다😱');
      };
      btn.onclick = function() {
        console.log('두번째 함수가 실행됩니다👏')
      }
    </script>
  </body>
</html>
```
