# To Do List 적용하기

- To Do List 항목에서 완료한 항목에 줄 긋기로 완료 상태 표시

```html
<html>
  <head>
    <title>투두리스트</title>
    <style>
   	  .done{
        text-decoration: line-through;
      }
    </style>
  </head>
  <body>
    <div id="content">
      <h1>What to do</h1>
      <ul id="list">
        <li class="item">로그인 구현</li>
        <li class="item">회원 인증 구현</li>
        <li class="item">블로그 작성하기</li>
        <li class="item">강아지랑 산책하기</li>
      </ul>
    </div>
  </body>
</html>
```

## 1. 리스트의 변경 사항이 없는 경우

```js
const list = document.querySelector('#list');

for(let item of list.children) {
  item.addEventListener('click', function(e) {
    e.target.classList.toggle('done'); // 완료한 항목에 'done' 클래스 추가
  });
}

```

## 2. 리스트의 변경 사항이 있는 경우
- 이벤트 핸들러를 새로 등록해야하는 문제점이 발생
```js
const list = document.querySelector('#list');

for(let item of list.children) {
  item.addEventListener('click', function(e) {
    e.target.classList.toggle('done'); // 완료한 항목에 'done' 클래스 추가
  });
}

// 새로운 리스트 생성
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '친구랑 카페가기';

// 새로 생성한 li 요소를 기존 리스트의 자식 요소로 추가
list.append(li);
```

- 이벤트 위임을 통한 해결: 부모 요소에 이벤트 핸들러를 등록하면 모든 자식 요소들에서 이벤트 핸들러가 작동
- 이벤트 위임을 할 경우 조건문을 통해서 자식 요소에서 작동하도록 처리

```js
const list = document.querySelector('#list');

// 부모 요소에 이벤트 핸들러 위임

list.addEventListener('click', function(e) {
  if(e.target.classList.contains('item')) {
  	e.target.classList.toggle('done');
  }
});

// 새로운 리스트 생성
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '친구랑 카페가기';

// 새로 생성한 li 요소를 기존 리스트의 자식 요소로 추가
list.append(li);
```
