# HTML 요소에 접근하기
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>내 맘대로 프로그래밍 언어 순위</title>
</head>
<body>
  <h2 id="title">내 맘대로 프로그래밍 언어 순위!</h2>
  <ol id="list">
    <li id="javaScript" class="language">JavaScript</li>
    <li id="python" class="language">Python</li>
    <li id="java" class="language">Java</li>
    <li id="c" class="language">C</li>
    <li id="ruby" class="language">Ruby</li>
  </ol>
  <script src="index.js"></script>
</body>
</html>
```

## document.getElementsByTagName
- HTML 태그 이름으로 태그 선택 => tag에 해당하는 태그 모음(HMTL Collection)

```js
const element = document.getElementsByTagName('li');
console.log(element); 
// li태그 요소 전체가 HTML Collection의 유사배열 형태로 출력
```

## document.getElementById
- HTML id 속성으로 태그 선택 => id에 해당하는 태그 하나
- 존재하지 않는 id 값을 입력할 경우 : null 반환
```js
const js = document.getElementById('javaScript');
console.log(js);
// id 값으로 javaScript를 가진 태그 하나를 출력
```

## document.getElementsByClassName
- HTML class 속성으로 태그 선택 => class에 해당하는 태그 모음(HTML Collection)
```js
const list = document.getElementsByClassName('language');
console.log(list);
// class 값으로 language를 가진 모든 태그를 출력
```
## document.querySelectorAll
- css 선택자로 태그 선택 (태그, id, class) => css 선택자에 해당하는 태그 모음(NodeList)
- id인 경우 `'#id'`
- class인 경우 `'.class'`
```js
const queryList = document.querySelectorAll('.language');
console.log(queryList);
// language라는 class를 가진 모든 태그 출력
```

## document.querySelector
- css 선택자로 태그 선택 => css 선택자에 해당하는 태그 중 가장 **첫번째**  태그 하나
- 존재하지 않는 요소 or 선택자 입력할 경우: null 반환

```js
const li = document.querySelector('li');
const class_js = document.querySelector('.language');

console.log(li); // li 태그 중 첫 번째 요소 JS 출력
console.log(class_js); // language 클래스를 갖는 태그 중 첫 번째 요소 JS 출력
```

### 유사 배열
- 배열과 유사한 객체
	- 숫자 형태의 인덱싱 가능
    - length 속성이 있음
    - 배열의 기본 메소드 사용 가능
    - Array.isArray(유사배열)의 리턴값은 false
